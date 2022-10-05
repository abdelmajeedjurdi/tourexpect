<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\TourRequest;
use App\Http\Resources\DestinationTourResource;
use App\Http\Resources\TourResource;
use App\Models\Destination;
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
        return TourResource::collection(Tour::paginate(15));
        // return "index is working";
    }
    public function getAllTours()
    {
        return TourResource::collection(Tour::paginate(15));
        // return "index is working";
    }
    public function getDestinationTours(Request $request)
    {
        Log::info($request);
        // return TourResource::collection(Tour::paginate(15));
        if ($request->subdestination == 'null') {
            $all = DB::table('countries')
                ->join('destinations', 'countries.id', '=', 'destinations.country_id')
                ->join('tours', 'destinations.id', '=', 'tours.destination_id')
                ->select('tours.id', 'tours.destination_id', 'tours.title_en', 'tours.title_ar', 'tours.address_ar', 'tours.address_en', 'tours.description_en', 'tours.description_ar', 'tours.slug', 'tours.adult_price', 'tours.child_price', 'tours.discount', 'tours.thumbnail', 'tours.discount_type', 'tours.duration_en', 'tours.duration_ar')->where('countries.slug', '=', $request->destination)->paginate(2);
        } else {
            $all = DB::table('destinations')
                ->join('tours', 'destinations.id', '=', 'tours.destination_id')
                ->select('tours.id', 'tours.destination_id', 'tours.title_en', 'tours.title_ar', 'tours.address_ar', 'tours.address_en', 'tours.description_en', 'tours.description_ar', 'tours.slug', 'tours.adult_price', 'tours.child_price', 'tours.discount', 'tours.thumbnail', 'tours.discount_type', 'tours.duration_en', 'tours.duration_ar')->where('destinations.slug', '=', $request->subdestination)->paginate(2);
        }
        return $all;
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
    public function store(TourRequest $request)
    {
        Log::info($request);
        if ($request->hasFile('image')) {
            $image = $request->image;
            $imageName = $image->getClientOriginalName();
            $imageName = time() . '_' . $imageName;
            $image->move('images/tours', $imageName);
        } else {
            $imageName = 'default.jpg';
        }

        $tour = new Tour();
        $tour->category_id = $request->category_id;
        $tour->destination_id = $request->destination_id;
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
                $file->move('images/tours', $imageName);

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
    public function update(TourRequest $request, Tour $tour)
    {
        Log::info($request);
        $path = 'images/tours/';
        //code for remove old image
        if ($request->new_image != 'null' && $request->new_image != 'default.jpg') {
            $file_old = $path . $request->tour_img;
            if ($request->tour_img != 'default.jpg' && $request->tour_img != null)
                unlink($file_old);

            //code for add new image
            $image = $request->new_image;
            $imageName = $image->getClientOriginalName();
            $imageName = time() . '_' . $imageName;
            $image->move('images/tours/', $imageName);
        } else {
            $imageName = $request->tour_img;
        }
        $tour->update([
            'category_id' => $request->category_id,
            'destination_id' => $request->destination_id,
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
                $file->move('images/tours', $imageName);

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
        if ($tour->thumbnail !== 'default.jpg' && $tour->thumbnail !== '')
            unlink('images/tours/' . $tour->thumbnail);
        $images = TourImage::where('tour_id', $tour->id)->get();
        foreach ($images as $image) {
            unlink('images/tours/' . $image->image);
        }
        TourImage::where('tour_id', $tour->id)->delete();
        $tour->delete();
        return;
    }
    public function dublicate($id)
    {
        $request = Tour::where('id', $id)->first();
        $tour = new Tour();
        $tour->category_id = $request->category_id;
        $tour->destination_id = $request->destination_id;
        $tour->title_en = $request->title_en;
        $tour->title_ar = $request->title_ar;
        $tour->description_en = $request->description_en;
        $tour->description_ar = $request->description_ar;
        $tour->thumbnail = 'default.jpg';
        $tour->slug =
            Str::slug($tour->title_en, '-') . '-' . Tour::max('id');
        $tour->address_en = $request->address_en;
        $tour->address_ar = $request->address_ar;
        $tour->itinerary_en = $request->itinerary_en;
        $tour->itinerary_ar = $request->itinerary_ar;
        $tour->active = $request->active;
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

        return response()->noContent();
    }
    public function deleteImage($id)
    {
        $path = 'images/tours/';

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
