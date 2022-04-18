<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\ProductResource;
use App\Models\Product;
use App\Models\ProductFile;
use App\Models\ProductImage;
use App\Models\ProductProperty;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Str;

class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return ProductResource::collection(Product::all());
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        Log::info($request);
        if ($request->hasFile('image')) {
            $image = $request->image;
            $imageName = $image->getClientOriginalName();
            $imageName = time() . '_' . $imageName;
            $image->move(public_path('/images/products'), $imageName);
        } else {
            $imageName = 'default.jpg';
        }

        $product = new Product();
        $product->category_id = $request->category_id;
        $product->name_en = $request->name_en;
        $product->name_ar = $request->name_ar;
        $product->description_en = $request->description_en;
        $product->description_ar = $request->description_ar;
        $product->thumbnail = $imageName;
        $product->slug = Str::slug($product->name_en, '-');
        $product->save();

        foreach (json_decode($request['properties'], true) as $item) {
            Log::info($item);
            ProductProperty::create([
                'product_id' => $product->id,
                'title_en' => $item['title_en'],
                'title_ar' => $item['title_ar'],
                'description_en' => $item['description_en'],
                'description_ar' => $item['description_ar']
            ]);
        }

        if ($request->hasFile('images')) {

            foreach ($request->file('images') as $file) {

                $imageName = time() . '_' . $file->getClientOriginalName();
                $file->move(public_path('/images/products'), $imageName);

                ProductImage::create([
                    'product_id' => $product->id,
                    'image' => $imageName,
                    // 'created_at' => Carbon::now()
                ]);
            }
        }

        if ($request->hasFile('files')) {

            foreach ($request->file('files') as $file) {

                $OriginalName = $file->getClientOriginalName();
                $imageName = time() . '_' . $file->getClientOriginalName();
                $file->move(public_path('/files/products'), $imageName);

                ProductFile::create([
                    'product_id' => $product->id,
                    'file' => $imageName,
                    'original_name' => $OriginalName,
                    // 'created_at' => Carbon::now()
                ]);
            }
        }

        return ['message' => 'Product Created Successfully'];
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(Product $product)
    {
        return new ProductResource($product);
    }
    public function getProductDetails($slug)
    {
        return new ProductResource(Product::where('slug', $slug)->first());
    }


    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Product $product)
    {
        Log::info($request);
        $path = public_path() . '/images/products/';
        //code for remove old image
        if ($request->new_image != 'null' && $request->new_image != 'default.jpg') {
            $file_old = $path . $request->product_img;
            if ($request->product_img != 'default.jpg' && $request->product_img != null)
                unlink($file_old);

            //code for add new image
            $image = $request->new_image;
            $imageName = $image->getClientOriginalName();
            $imageName = time() . '_' . $imageName;
            $image->move(public_path('/images/products/'), $imageName);
        } else {
            $imageName = $request->product_img;
        }
        $product->update([
            'category_id' => $request->category_id,
            'name_en' => $request->name_en,
            'name_ar' => $request->name_ar,
            'description_en' => $request->description_en,
            'description_ar' => $request->description_ar,
            'thumbnail' =>  $imageName,
            'slug' => Str::slug($request->name_en, '-')
        ]);
        foreach (json_decode($request['properties'], true) as $item) {
            if (!array_key_exists('id', $item)) {

                ProductProperty::create([
                    'product_id' => $product['id'],
                    'title_en' => $item['title_en'],
                    'title_ar' => $item['title_ar'],
                    'description_en' => $item['description_en'],
                    'description_ar' => $item['description_ar'],
                ]);
            } else {
                ProductProperty::where('id', $item['id'])->update([
                    'title_en' => $item['title_en'],
                    'title_ar' => $item['title_ar'],
                    'description_en' => $item['description_en'],
                    'description_ar' => $item['description_ar'],
                ]);
            }
        }

        if ($request->hasFile('images')) {

            foreach ($request->file('images') as $file) {

                $imageName = time() . '_' . $file->getClientOriginalName();
                $file->move(public_path('/images/products'), $imageName);

                ProductImage::create([
                    'product_id' => $product->id,
                    'image' => $imageName,
                    // 'created_at' => Carbon::now()
                ]);
            }
        }

        if ($request->hasFile('files')) {

            foreach ($request->file('files') as $file) {

                $OriginalName = $file->getClientOriginalName();
                $imageName = time() . '_' . $file->getClientOriginalName();
                $file->move(public_path('/files/products'), $imageName);

                ProductFile::create([
                    'product_id' => $product->id,
                    'file' => $imageName,
                    'original_name' => $OriginalName,
                ]);
            }
        }

        return ['message' => 'Product Updated Successfully.'];
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $product = Product::find($id);
        Log::info($product);
        if ($product->thumbnail !== 'default.jpg' || $product->thumbnail !== '')
            unlink(public_path() . '/images/products/' . $product->thumbnail);
        $images = ProductImage::where('product_id', $product->id)->get();
        $files = ProductFile::where('product_id', $product->id)->get();
        foreach ($images as $image) {
            unlink(public_path() . '/images/products/' . $image->image);
        }
        foreach ($files as $file) {
            unlink(public_path() . '/files/products/' . $file->file);
        }
        ProductImage::where('product_id', $product->id)->delete();
        ProductFile::where('product_id', $product->id)->delete();
        ProductProperty::where('product_id', $product->id)->delete();
        $product->delete();
        return;
    }
    public function deleteImage($id)
    {
        $path = public_path() . '/images/products/';

        $image = ProductImage::find($id);
        unlink($path . $image->image);
        $image->delete();
        return '';
    }
    public function deleteFile($id)
    {
        $path = public_path() . '/files/products/';

        $file = ProductFile::find($id);
        Log::info($file);
        unlink($path . $file->file);
        $file->delete();
        return '';
    }
}
