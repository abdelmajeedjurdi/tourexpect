<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\CategoryRequest;
use App\Http\Resources\CategoryResource;
use App\Http\Resources\TourResource;
use App\Models\Category;
use App\Models\Tour;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Str;


class CategoryController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        return CategoryResource::collection(Category::paginate(15));
    }
    public function getCategoriesOnSection(Request $request)
    {
        return CategoryResource::collection(Category::where('for_category', $request->type)->get());
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(CategoryRequest $request)
    {

        if ($request->hasFile('image')) {
            $image = $request->image;
            $imageName = $image->getClientOriginalName();
            $imageName = time() . '_' . $imageName;
            $image->move('images/categories', $imageName);
        } else {
            $imageName = 'default.jpg';
        }

        $category = new Category;
        $category->name_en = $request->name_en;
        $category->name_ar = $request->name_ar;
        $category->description_en = $request->description_en;
        $category->description_ar = $request->description_ar;
        $category->for_category = $request->for_category;
        $category->image = $imageName;
        $category->is_trending = $request->is_trending == 'true' ? 1 : 0;
        $category->is_slide = $request->is_slide == 'true' ? 1 : 0;
        $category->slug = Str::slug($category->name_en, '-');
        $category->save();


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
    public function getCategoryDetails($slug)
    {
        $category
            = new CategoryResource(Category::where('slug', $slug)->first());
        $tours = TourResource::collection(Tour::where('category_id', $category->id)->get());
        return ['category' => $category, 'tours' => $tours];
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Category  $category
     * @return \Illuminate\Http\Response
     */
    public function update(CategoryRequest $request, Category $category)
    {

        $path = 'images/categories/';
        //code for remove old image
        if ($request->new_image != 'null' && $request->new_image != 'default.jpg') {
            $file_old = $path . $request->category_img;
            if ($request->category_img != 'default.jpg' && $request->category_img != null)
                unlink($file_old);

            //code for add new image
            $image = $request->new_image;
            $imageName = $image->getClientOriginalName();
            $imageName = time() . '_' . $imageName;
            $image->move('images/categories/', $imageName);
        } else {
            $imageName = $request->category_img;
        }
        $category->update([
            'name_en' => $request->name_en,
            'name_ar' => $request->name_ar,
            'description_en' => $request->description_en,
            'description_ar' => $request->description_ar,
            'for_category' => $request->for_category,
            'is_trending' => $request->is_trending == 'true' ? 1 : 0,
            'is_slide' => $request->is_slide == 'true' ? 1 : 0,
            'image' =>  $imageName,
            'slug' => Str::slug($request->name_en, '-')
        ]);

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

        DB::table('package_category')->where('category_id', '=', $category->id)->delete();
        if ($category->image !== 'default.jpg' && $category->image !== '')
            unlink('images/categories/' . $category->image);
        $category->delete();

        return response()->noContent();
    }
    public function duplicate($id)
    {
        $request = Category::where('id', $id)->first();
        $category = new Category;
        $category->name_en = $request->name_en;
        $category->name_ar = $request->name_ar;
        $category->description_en = $request->description_en;
        $category->description_ar = $request->description_ar;
        $category->for_category = $request->for_category;
        $category->image = 'default.jpg';
        $category->is_trending = $request->is_trending;
        $category->is_slide = $request->is_slide;
        $category->slug = Str::slug($category->name_en, '-') . '-' . Category::max('id');
        $category->save();

        return response()->noContent();
    }
}
