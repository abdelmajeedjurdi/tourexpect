<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\AccessoryResource;
use App\Models\Accessory;
use App\Models\AccessoryFile;
use App\Models\AccessoryImage;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Str;

class AccessoryController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {

        return AccessoryResource::collection(Accessory::all());
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
            $image->move(public_path('/images/accessories'), $imageName);
        } else {
            $imageName = 'default.jpg';
        }

        $accessory = new Accessory();
        $accessory->category_id = $request->category_id;
        $accessory->name_en = $request->name_en;
        $accessory->name_ar = $request->name_ar;
        $accessory->description_en = $request->description_en;
        $accessory->description_ar = $request->description_ar;
        $accessory->thumbnail = $imageName;
        $accessory->slug = Str::slug($accessory->name_en, '-');
        $accessory->save();



        if ($request->hasFile('images')) {

            foreach ($request->file('images') as $file) {

                $imageName = time() . '_' . $file->getClientOriginalName();
                $file->move(public_path('/images/accessories'), $imageName);

                AccessoryImage::create([
                    'accessory_id' => $accessory->id,
                    'image' => $imageName,
                    // 'created_at' => Carbon::now()
                ]);
            }
        }

        if ($request->hasFile('files')) {

            foreach ($request->file('files') as $file) {

                $OriginalName = $file->getClientOriginalName();
                $imageName = time() . '_' . $file->getClientOriginalName();
                $file->move(public_path('/files/accessories'), $imageName);

                AccessoryFile::create([
                    'accessory_id' => $accessory->id,
                    'file' => $imageName,
                    'original_name' => $OriginalName,
                    // 'created_at' => Carbon::now()
                ]);
            }
        }

        return ['message' => 'Accessory Created Successfully'];
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(Accessory $accessory)
    {
        return new AccessoryResource($accessory);
    }
    public function getAccessoryDetails($slug)
    {
        return new AccessoryResource(Accessory::where('slug', $slug)->first());
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
    public function update(Request $request,  $id)
    {
        $accessory = Accessory::find($id);
        Log::info($request);
        $path = public_path() . '/images/accessories/';
        //code for remove old image
        if ($request->new_image != 'null') {
            $file_old = $path . $request->accessory_img;
            if ($request->accessory_img != 'default.jpg' && $request->accessory_img != null)
                unlink($file_old);

            //code for add new image
            $image = $request->new_image;
            $imageName = $image->getClientOriginalName();
            $imageName = time() . '_' . $imageName;
            $image->move(public_path('/images/accessories/'), $imageName);
        } else {
            $imageName = $request->accessory_img;
        }
        $accessory->update([
            'category_id' => $request->category_id,
            'name_en' => $request->name_en,
            'name_ar' => $request->name_ar,
            'description_en' => $request->description_en,
            'description_ar' => $request->description_ar,
            'thumbnail' =>  $imageName,
            'slug' => Str::slug($request->name_en, '-')
        ]);

        if ($request->hasFile('images')) {

            foreach ($request->file('images') as $file) {

                $imageName = time() . '_' . $file->getClientOriginalName();
                $file->move(public_path('/images/accessories'), $imageName);

                AccessoryImage::create([
                    'accessory_id' => $accessory->id,
                    'image' => $imageName,
                    // 'created_at' => Carbon::now()
                ]);
            }
        }

        if ($request->hasFile('files')) {

            foreach ($request->file('files') as $file) {

                $OriginalName = $file->getClientOriginalName();
                $imageName = time() . '_' . $file->getClientOriginalName();
                $file->move(public_path('/files/accessories'), $imageName);

                AccessoryFile::create([
                    'accessory_id' => $accessory->id,
                    'file' => $imageName,
                    'original_name' => $OriginalName,
                ]);
            }
        }

        return ['message' => 'Accessory Updated Successfully.'];
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $accessory = Accessory::find($id);
        Log::info($accessory);
        if ($accessory->thumbnail !== 'default.jpg' || $accessory->thumbnail !== '')
            unlink(public_path() . '/images/accessories/' . $accessory->thumbnail);
        $images = AccessoryImage::where('accessory_id', $accessory->id)->get();
        $files = AccessoryFile::where('accessory_id', $accessory->id)->get();
        foreach ($images as $image) {
            unlink(public_path() . '/images/accessories/' . $image->image);
        }
        foreach ($files as $file) {
            unlink(public_path() . '/files/accessories/' . $file->file);
        }
        AccessoryImage::where('accessory_id', $accessory->id)->delete();
        AccessoryFile::where('accessory_id', $accessory->id)->delete();
        $accessory->delete();
        return;
    }

    public function deleteImage($id)
    {
        $path = public_path() . '/images/accessories/';
        $image = AccessoryImage::find($id);
        unlink($path . $image->image);
        $image->delete();
        return '';
    }
    public function deleteFile($id)
    {
        $path = public_path() . '/files/accessories/';

        $file = AccessoryFile::find($id);
        unlink($path . $file->file);
        $file->delete();
        return '';
    }
}
