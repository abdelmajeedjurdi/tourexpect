<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\TourResource;
use App\Models\Tour;
use App\Models\TourFile;
use App\Models\TourImage;
use App\Models\TourProperty;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Str;

class TourController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return TourResource::collection(Tour::all());
        // return "index is working";
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
            $image->move(public_path('/images/tours'), $imageName);
        } else {
            $imageName = 'default.jpg';
        }

        $tour = new Tour();
        $tour->category_id = $request->category_id;
        $tour->destination_id = 1;
        $tour->title_en = $request->title_en;
        $tour->title_ar = $request->title_ar;
        $tour->description_en = $request->description_en;
        $tour->description_ar = $request->description_ar;
        $tour->thumbnail = $imageName;
        $tour->slug = Str::slug($tour->title_en, '-');
        $tour->address_en = $request->address_en;
        $tour->address_ar = $request->address_ar;
        $tour->itinerary_en = $request->itinerary_en;
        $tour->itinerary_ar = $request->itinerary_ar;
        $tour->active = $request->active == 'true' ? 1 : 0;
        $tour->adult_price = $request->adult_price;
        $tour->child_price = $request->child_price;
        $tour->discount = $request->discount;
        $tour->discount_type = $request->discount_type;
        $tour->duration_en = $request->duration_en;
        $tour->duration_ar = $request->duration_ar;
        $tour->max_number_of_people = $request->max_number_of_people;
        $tour->include_en = $request->include_en;
        $tour->include_ar = $request->include_ar;
        $tour->exclude_en = $request->exclude_en;
        $tour->exclude_ar = $request->exclude_ar;

        $tour->save();


        if ($request->hasFile('images')) {

            foreach ($request->file('images') as $file) {

                $imageName = time() . '_' . $file->getClientOriginalName();
                $file->move(public_path('/images/tours'), $imageName);

                TourImage::create([
                    'tour_id' => $tour->id,
                    'image' => $imageName,
                    // 'created_at' => Carbon::now()
                ]);
            }
        }

        return ['message' => 'Tour Created Successfully'];
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(Tour $tour)
    {
        return new TourResource($tour);
    }
    public function getTourDetails($slug)
    {
        return new TourResource(Tour::where('slug', $slug)->first());
    }


    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Tour $tour)
    {
        Log::info($request);
        $path = public_path() . '/images/tours/';
        //code for remove old image
        if ($request->new_image != 'null' && $request->new_image != 'default.jpg') {
            $file_old = $path . $request->tour_img;
            if ($request->tour_img != 'default.jpg' && $request->tour_img != null)
                unlink($file_old);

            //code for add new image
            $image = $request->new_image;
            $imageName = $image->getClientOriginalName();
            $imageName = time() . '_' . $imageName;
            $image->move(public_path('/images/tours/'), $imageName);
        } else {
            $imageName = $request->tour_img;
        }
        $tour->update([
            'category_id' => $request->category_id,
            'title_en' => $request->title_en,
            'title_ar' => $request->title_ar,
            'address_ar' => $request->address_ar,
            'address_en' => $request->address_en,
            'description_ar' => $request->description_ar,
            'description_en' => $request->description_en,
            'itinerary_en' => $request->itinerary_en,
            'itinerary_ar' => $request->itinerary_ar,
            'active' => $request->active == 'true' ? 1 : 0,
            'adult_price' => $request->adult_price,
            'child_price' => $request->child_price,
            'discount' => $request->discount,
            'discount_type' => $request->discount_type,
            'duration_en' => $request->duration_en,
            'duration_ar' => $request->duration_ar,
            'max_number_of_people' => $request->max_number_of_people,
            'include_en' => $request->include_en,
            'include_ar' => $request->include_ar,
            'exclude_en' => $request->exclude_en,
            'exclude_ar' => $request->exclude_ar,
            'thumbnail' =>  $imageName,
            'slug' => Str::slug($request->title_en, '-')
        ]);
        if ($request->hasFile('images')) {

            foreach ($request->file('images') as $file) {

                $imageName = time() . '_' . $file->getClientOriginalName();
                $file->move(public_path('/images/tours'), $imageName);

                TourImage::create([
                    'tour_id' => $tour->id,
                    'image' => $imageName,
                    // 'created_at' => Carbon::now()
                ]);
            }
        }

        // if ($request->hasFile('files')) {

        //     foreach ($request->file('files') as $file) {

        //         $OriginalName = $file->getClientOriginalName();
        //         $imageName = time() . '_' . $file->getClientOriginalName();
        //         $file->move(public_path('/files/tours'), $imageName);

        //         TourFile::create([
        //             'tour_id' => $tour->id,
        //             'file' => $imageName,
        //             'original_name' => $OriginalName,
        //         ]);
        //     }
        // }

        return ['message' => 'Tour Updated Successfully.'];
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $tour = Tour::find($id);
        Log::info($tour);
        if ($tour->thumbnail !== 'default.jpg' || $tour->thumbnail !== '')
            unlink(public_path() . '/images/tours/' . $tour->thumbnail);
        $images = TourImage::where('tour_id', $tour->id)->get();
        foreach ($images as $image) {
            unlink(public_path() . '/images/tours/' . $image->image);
        }
        TourImage::where('tour_id', $tour->id)->delete();
        $tour->delete();
        return;
    }
    public function deleteImage($id)
    {
        $path = public_path() . '/images/tours/';

        $image = DB::table('tour_images')->where('id', $id)->first('image');
        unlink($path . $image->image);
        DB::table('tour_images')->delete($id);
        return "done";
    }
    // public function deleteFile($id)
    // {
    //     $path = public_path() . '/files/tours/';

    //     $file = TourImage::find($id);
    //     Log::info($file);
    //     unlink($path . $file->file);
    //     $file->delete();
    //     return '';
    // }
}