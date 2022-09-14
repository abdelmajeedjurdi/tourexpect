<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\BlogRequest;
use App\Http\Resources\BlogResource;
use App\Models\Blog;
use Illuminate\Http\Request;
use Illuminate\Support\Str;

class BlogController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return BlogResource::collection(Blog::all());
    }
    public function getFilteredBlogs(Request $request)
    {
        if ($request->d == '*' && $request->c == '*')
            return BlogResource::collection(Blog::paginate(2));
        if ($request->d == '*' && $request->c != '*')
            return BlogResource::collection(Blog::where('category_id', $request->c)->paginate(2));
        if ($request->c == '*' && $request->d != '*')
            return BlogResource::collection(Blog::where('destination_id', $request->d)->paginate(2));
        return
            BlogResource::collection(Blog::where('destination_id', $request->d)->where('category_id', $request->c)->paginate(2));
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
    public function store(BlogRequest $request)
    {
        if ($request->hasFile('image')) {
            $image = $request->image;
            $imageName = $image->getClientOriginalName();
            $imageName = time() . '_' . $imageName;
            $image->move(public_path('/images/blogs'), $imageName);
        } else {
            $imageName = 'default.jpg';
        }
        $blog = new Blog();
        $blog->destination_id = $request->destination_id;
        $blog->category_id = $request->category_id;
        $blog->title_en = $request->title_en;
        $blog->title_ar = $request->title_ar;
        $blog->preview_text_en = $request->preview_text_en;
        $blog->preview_text_ar = $request->preview_text_ar;
        $blog->content_en = $request->content_en;
        $blog->content_ar = $request->content_ar;
        $blog->slug = Str::slug($blog->title_en, '-');
        $blog->image = $imageName;
        $blog->save();
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(Blog $blog)
    {
        return new BlogResource($blog);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(BlogRequest $request, Blog $blog)
    {
        $path = public_path() . '/images/blogs/';
        //code for remove old image
        if ($request->new_image != 'null' && $request->new_image != 'default.jpg') {
            $file_old = $path . $request->blog_img;
            if ($request->blog_img != 'default.jpg' && $request->blog_img != null)
                unlink($file_old);

            //code for add new image
            $image = $request->new_image;
            $imageName = $image->getClientOriginalName();
            $imageName = time() . '_' . $imageName;
            $image->move(public_path('/images/blogs/'), $imageName);
        } else {
            $imageName = $request->blog_img;
        }
        $blog->update([
            'category_id' => $request->category_id,
            'destination_id' => $request->destination_id,
            'title_en' => $request->title_en,
            'title_ar' => $request->title_ar,
            'preview_text_en' => $request->preview_text_en,
            'preview_text_ar' => $request->preview_text_ar,
            'content_en' => $request->content_en,
            'content_ar' => $request->content_ar,
            'image' =>  $imageName,
            'slug' => Str::slug($request->title_en, '-')
        ]);

        return ['message' => 'Category Updated Successfully.'];
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Blog $blog)
    {
        if ($blog->image !== 'default.jpg' || $blog->image !== '')
            unlink(public_path() . '/images/blogs/' . $blog->image);
        $blog->delete();

        return response()->noContent();
    }
}
