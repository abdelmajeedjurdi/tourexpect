<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\TourRequest;
use App\Http\Resources\DestinationTourResource;
use App\Http\Resources\TourResource;
use App\Models\Category;
use App\Models\Destination;
use App\Models\Tour;
use App\Models\TourFile;
use App\Models\TourImage;
use App\Models\TourProperty;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
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
        // return Auth::user()->role;
        return TourResource::collection(Tour::paginate(15));
        // return "index is working";
    }
    public function getAllTours()
    {
        return TourResource::collection(Tour::paginate(15));
        // return "index is working";
    }

    public function getFilteredTours(Request $request)
    {

        $destinations = json_decode($request->d);
        $categories = json_decode($request->c);

        // if both categories and destinations are empty
        if (!count($categories) && !count($destinations)) {
            return TourResource::collection(Tour::where('active', '1')->paginate(9));
        }
        // if destinations is empty and categories is not empty
        if (count($categories) && !count($destinations)) {

            $all = DB::table('tours')
                ->join('tour_category as tc', 'tours.id', '=', 'tc.tour_id')
                ->join('categories', 'tc.category_id', '=', 'categories.id')
                ->where('tours.active', '1')
                ->whereIn('categories.id', $categories)->select(
                    'tours.*',
                )->distinct()->paginate(12);
            return TourResource::collection($all);
        }

        // if categories is empty and destination is not empty
        if (!count($categories) && count($destinations)) {
            Log::info($request);
            $all = DB::table('tours')
                ->join('tour_destination as td', 'tours.id', '=', 'td.tour_id')
                ->join('destinations', 'td.destination_id', '=', 'destinations.id')
                ->where('tours.active', '1')
                ->whereIn('destinations.id', $destinations)->select(
                    'tours.*'
                )->distinct()->paginate(12);
            return TourResource::collection($all);
        }

        // if non of categories and destinations are empty
        $all = DB::table('tours')
            ->join('tour_destination as td', 'tours.id', '=', 'td.tour_id')
            ->join('destinations', 'td.destination_id', '=', 'destinations.id')

            ->join('tour_category as tc', 'tours.id', '=', 'tc.tour_id')
            ->join('categories', 'tc.category_id', '=', 'categories.id')
            ->where('tours.active', '1')

            ->whereIn('destinations.id', $destinations)->whereIn('categories.id', $categories)->select(
                'tours.*',
            )->distinct()->paginate(12);
        return TourResource::collection($all);
    }

    public function getDestinationTours(Request $request)
    {
        // $tours = DB::table('tours')
        //     ->join('tour_destination', 'tour_destination.tour_id', '=', 'tours.id')
        //     ->join('destinations', 'destinations.id', '=', 'tour_destination.destination_id')
        //     ->get();
        // return $tours;

        $destinations = DB::table('destinations')
            ->join('tour_destination', 'destinations.id', '=', 'tour_destination.destination_id')
            ->join('tours', 'tours.id', '=', 'tour_destination.tour_id')
            ->select('destinations.slug as destination_name', 'tours.*')
            ->get();

        $result = [];
        foreach ($destinations as $destination) {
            if (!array_key_exists($destination->destination_name, $result)) {
                $result[$destination->destination_name] = [];
            }
            $result[$destination->destination_name][] = (array) $destination;
        }

        return $result;
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

        if ($request->hasFile('image')) {
            $image = $request->image;
            $imageName = $image->getClientOriginalName();
            $imageName = time() . '_' . $imageName;
            $image->move('images/tours', $imageName);
        } else {
            $imageName = 'default.jpg';
        }

        $tour = new Tour();
        $tour->category_ids = $request->category_ids;
        $tour->destination_ids = $request->destination_ids;
        $tour->title_en = $request->title_en;
        $tour->title_ar = $request->title_ar;
        $tour->description_en = $request->description_en;
        $tour->description_ar = $request->description_ar;
        $tour->thumbnail = $imageName;
        $tour->slug = Str::slug($tour->title_en, '-');
        $tour->address_en = $request->address_en;
        $tour->address_ar = $request->address_ar;
        $tour->itinerary = $request->itinerary;
        $tour->active = $request->active == 'true' ? 1 : 0;
        $tour->duration_en = $request->duration_en;
        $tour->duration_ar = $request->duration_ar;
        $tour->max_number_of_people = $request->max_number_of_people;
        $tour->include_en = $request->include_en;
        $tour->include_ar = $request->include_ar;
        $tour->exclude_en = $request->exclude_en;
        $tour->exclude_ar = $request->exclude_ar;
        $tour->source = $request->source;
        $tour->options = $request->options;
        $tour->highlights_ar = $request->highlights_ar;
        $tour->highlights_en = $request->highlights_en;
        $tour->information_ar = $request->information_ar;
        $tour->information_en = $request->information_en;
        $tour->policy_ar = $request->policy_ar;
        $tour->policy_en = $request->policy_en;
        $tour->timing_and_transfer_ar = $request->timing_and_transfer_ar;
        $tour->timing_and_transfer_en = $request->timing_and_transfer_en;
        $tour->notes_en = $request->notes_en;
        $tour->notes_ar = $request->notes_ar;
        $tour->terms_and_conditions_en = $request->terms_and_conditions_en;
        $tour->terms_and_conditions_ar = $request->terms_and_conditions_ar;
        $tour->is_from = $request->is_from == 'true' ? 1 : 0;
        $tour->banner_highlights = $request->banner_highlights;

        $tour->save();


        $categories = json_decode($request->category_ids);
        for ($i = 0; $i < count($categories); $i++) {
            DB::table('tour_category')->insert([
                'category_id' => $categories[$i],
                'tour_id' => $tour->id
            ]);
        }

        $destinations = json_decode($request->destination_ids);
        for ($i = 0; $i < count($destinations); $i++) {
            DB::table('tour_destination')->insert([
                'destination_id' => $destinations[$i],
                'tour_id' => $tour->id
            ]);
        }

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

        $path = 'images/tours/';
        //code for remove old image
        if ($request->new_image != 'null' && $request->new_image != 'default.jpg') {
            $file_old = $path . $request->tour_img;
            if ($request->tour_img != 'default.jpg' && $request->tour_img != null)
                if (file_exists($file_old))
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
            'category_ids' => $request->category_ids, // == 'null' ? null : $request->category_ids,
            'destination_ids' => $request->destination_ids, // == 'null' ? null : $request->destination_ids,
            'title_en' => $request->title_en,
            'title_ar' => $request->title_ar,
            'address_ar' => $request->address_ar,
            'address_en' => $request->address_en,
            'description_ar' => $request->description_ar,
            'description_en' => $request->description_en,
            'itinerary' => $request->itinerary,
            'active' => $request->active == 'true' ? 1 : 0,
            'duration_en' => $request->duration_en,
            'duration_ar' => $request->duration_ar,
            'max_number_of_people' => $request->max_number_of_people == 'null' ? null : $request->max_number_of_people,
            'include_en' => $request->include_en,
            'include_ar' => $request->include_ar,
            'exclude_en' => $request->exclude_en,
            'exclude_ar' => $request->exclude_ar,
            'source' => $request->source,
            'highlights_ar' => $request->highlights_ar,
            'highlights_en' => $request->highlights_en,
            'information_ar' => $request->information_ar,
            'information_en' => $request->information_en,
            'policy_ar' => $request->policy_ar,
            'policy_en' => $request->policy_en,
            'timing_and_transfer_ar' => $request->timing_and_transfer_ar,
            'timing_and_transfer_en' => $request->timing_and_transfer_en,
            'notes_en' => $request->notes_en,
            'notes_ar' => $request->notes_ar,
            'terms_and_conditions_en' => $request->terms_and_conditions_en,
            'terms_and_conditions_ar' => $request->terms_and_conditions_ar,
            'is_from' => $request->is_from == 'true' ? 1 : 0,
            'banner_highlights' => $request->banner_highlights,
            'options' => $request->options,
            'thumbnail' =>  $imageName,
            'slug' => Str::slug($request->title_en, '-')
        ]);

        DB::table('tour_category')->where('tour_id', '=', $tour->id)->delete();
        $categories = json_decode($request->category_ids);
        for ($i = 0; $i < count($categories); $i++) {
            DB::table('tour_category')->insert([
                'category_id' => $categories[$i],
                'tour_id' => $tour->id
            ]);
        }

        DB::table('tour_destination')->where('tour_id', '=', $tour->id)->delete();
        $destinations = json_decode($request->destination_ids);
        for ($i = 0; $i < count($destinations); $i++) {
            DB::table('tour_destination')->insert([
                'destination_id' => $destinations[$i],
                'tour_id' => $tour->id
            ]);
        }


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
        DB::table('tour_category')->where('tour_id', '=', $id)->delete();
        DB::table('tour_destination')->where('tour_id', '=', $id)->delete();

        $tour = Tour::find($id);
        if ($tour->thumbnail !== 'default.jpg' && $tour->thumbnail !== '')
            if (file_exists('images/tours/' . $tour->thumbnail))
                unlink('images/tours/' . $tour->thumbnail);

        $images = TourImage::where('tour_id', $tour->id)->get();
        foreach ($images as $image) {
            if (file_exists('images/tours/' . $image->image))
                unlink('images/tours/' . $image->image);
        }
        TourImage::where('tour_id', $tour->id)->delete();
        $tour->delete();
        return;
    }
    public function duplicate($id)
    {
        $request = Tour::where('id', $id)->first();
        $tour = new Tour();
        $tour->category_ids = $request->category_ids;
        $tour->destination_ids = $request->destination_ids;
        $tour->title_en = $request->title_en;
        $tour->title_ar = $request->title_ar;
        $tour->description_en = $request->description_en;
        $tour->description_ar = $request->description_ar;
        $tour->thumbnail = 'default.jpg';
        $tour->slug =
            Str::slug($tour->title_en, '-') . '-' . Tour::max('id');
        $tour->address_en = $request->address_en;
        $tour->address_ar = $request->address_ar;
        $tour->itinerary = $request->itinerary;
        $tour->active = $request->active;
        $tour->duration_en = $request->duration_en;
        $tour->duration_ar = $request->duration_ar;
        $tour->max_number_of_people = $request->max_number_of_people;
        $tour->include_en = $request->include_en;
        $tour->include_ar = $request->include_ar;
        $tour->exclude_en = $request->exclude_en;
        $tour->exclude_ar = $request->exclude_ar;

        $tour->save();
        $categories = json_decode($request->category_ids);
        for ($i = 0; $i < count($categories); $i++) {
            DB::table('tour_category')->insert([
                'category_id' => $categories[$i],
                'tour_id' => $tour->id
            ]);
        }

        $destinations = json_decode($request->destination_ids);
        for ($i = 0; $i < count($destinations); $i++) {
            DB::table('tour_destination')->insert([
                'destination_id' => $destinations[$i],
                'tour_id' => $tour->id
            ]);
        }
        return response()->noContent();
    }
    public function deleteImage($id)
    {
        $path = 'images/tours/';

        $image = DB::table('tour_images')->where('id', $id)->first('image');
        if (file_exists($path . $image->image))
            unlink($path . $image->image);
        DB::table('tour_images')->delete($id);
        return "done";
    }

    // public function deleteFile($id)
    // {
    //     $path = public_path() . '/files/tours/';

    //     $file = TourImage::find($id);
    //     unlink($path . $file->file);
    //     $file->delete();
    //     return '';
    // }
}
