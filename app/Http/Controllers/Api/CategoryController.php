<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\CategoryRequest;
use App\Http\Resources\CategoryResource;
use App\Models\Category;
use App\Models\CategoryProperty;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Str;


class CategoryController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return CategoryResource::collection(Category::all());
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
            $image->move(public_path('/images/categories'), $imageName);
        } else {
            $imageName = 'default.jpg';
        }

        $category = new Category;
        $category->name_en = $request->name_en;
        $category->name_ar = $request->name_ar;
        $category->description_en = $request->description_en;
        $category->description_ar = $request->description_ar;
        $category->image = $imageName;
        $category->is_trending = $request->is_trending == 'true' ? 1 : 0;
        $category->is_slide = $request->is_slide == 'true' ? 1 : 0;
        $category->slug = Str::slug($category->name_en, '-');
        $category->save();

        foreach (json_decode($request['properties'], true) as $item) {
            Log::info($item);
            CategoryProperty::create([
                'category_id' => $category->id,
                'title_en' => $item['title_en'],
                'title_ar' => $item['title_ar'],
                'description_en' => $item['description_en'],
                'description_ar' => $item['description_ar']
            ]);
        }

        return ['message' => 'Category Created Successfully'];
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Category  $category
     * @return \Illuminate\Http\Response
     */
    public function show(Category $category)
    {
        return new CategoryResource($category);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Category  $category
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Category $category)
    {

        Log::info($request);
        $path = public_path() . '/images/categories/';
        //code for remove old image
        if ($request->new_image != 'null' && $request->new_image != 'default.jpg') {
            $file_old = $path . $request->category_img;
            if ($request->category_img != 'default.jpg' && $request->category_img != null)
                unlink($file_old);

            //code for add new image
            $image = $request->new_image;
            $imageName = $image->getClientOriginalName();
            $imageName = time() . '_' . $imageName;
            $image->move(public_path('/images/categories/'), $imageName);
        } else {
            $imageName = $request->category_img;
        }
        $category->update([
            'name_en' => $request->name_en,
            'name_ar' => $request->name_ar,
            'description_en' => $request->description_en,
            'description_ar' => $request->description_ar,
            'is_trending' => $request->is_trending == 'true' ? 1 : 0,
            'is_slide' => $request->is_slide == 'true' ? 1 : 0,
            'image' =>  $imageName,
            'slug' => Str::slug($request->name_en, '-')
        ]);
        foreach (json_decode($request['properties'], true) as $item) {
            if (!array_key_exists('id', $item)) {

                CategoryProperty::create([
                    'category_id' => $category['id'],
                    'title_en' => $item['title_en'],
                    'title_ar' => $item['title_ar'],
                    'description_en' => $item['description_en'],
                    'description_ar' => $item['description_ar'],
                ]);
            } else {
                CategoryProperty::where('id', $item['id'])->update([
                    'title_en' => $item['title_en'],
                    'title_ar' => $item['title_ar'],
                    'description_en' => $item['description_en'],
                    'description_ar' => $item['description_ar'],
                ]);
            }
        }

        return ['message' => 'Category Updated Successfully.'];
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Category  $category
     * @return \Illuminate\Http\Response
     */
    public function destroy(Category $category)
    {
        Log::info($category);
        $category->delete();

        return response()->noContent();
    }
    public function deleteProperty($id)
    {
        Log::info($id);
        $categoryProperty = CategoryProperty::find($id);
        $categoryProperty->delete();

        return response()->noContent();
    }
}
