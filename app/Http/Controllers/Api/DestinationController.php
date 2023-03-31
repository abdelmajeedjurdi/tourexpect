<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\DestinationRequest;
use App\Http\Resources\CountryResource;
use App\Http\Resources\DestinationResource;
use App\Models\Destination;
use App\Models\Tour;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Str;

class DestinationController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        if ($request->page == -1)
            return DestinationResource::collection(Destination::all());
        return DestinationResource::collection(Destination::paginate(10));
    }
    public function getDestinations(Request $request)
    {
        if ($request) {
            $destinations = DB::table('destinations')
                ->join('countries', 'destinations.country_id', '=', 'countries.id')->where('countries.slug', $request->country)
                ->select('destinations.*', 'countries.name_ar as country_ar', 'countries.name_en as country_en', 'countries.slug as country_slug')
                ->get();

            $tours = DB::table('tours')
                ->join('tour_destination', 'tours.id', '=', 'tour_destination.tour_id')
                ->join('destinations', 'destinations.id', '=', 'tour_destination.destination_id')
                ->join('countries', 'countries.id', '=', 'destinations.country_id')
                ->where('countries.slug', '=', $request->country)
                ->select('tours.*')
                ->distinct()
                ->get();


            $packages = DB::table('packages')
                ->join('package_destination', 'packages.id', '=', 'package_destination.package_id')
                ->join('destinations', 'destinations.id', '=', 'package_destination.destination_id')
                ->join('countries', 'countries.id', '=', 'destinations.country_id')
                ->where('countries.slug', '=', $request->country)
                ->select('packages.*')
                ->distinct()
                ->get();


            return ['destinations' => $destinations, 'tours' => $tours, 'packages' => $packages];
        }

        $destinations = DB::table('destinations')
            ->join('countries', 'destinations.country_id', '=', 'countries.id')
            ->select('destinations.*', 'countries.name_ar as country_ar', 'countries.name_en as country_en', 'countries.slug as country_slug')
            ->orderBy('destinations.country_id')
            ->get()
            ->groupBy('country_slug')
            ->map(function ($destinations, $country_slug) {
                return [
                    'slug' => $country_slug,
                    'name_en' => $destinations->first()->country_en,
                    'name_ar' => $destinations->first()->country_ar,
                    'destinations' => $destinations->map(function ($destination) {
                        return [
                            'id' => $destination->id,
                            'name_en' => $destination->name_en,
                            'name_ar' => $destination->name_ar,
                            'description_en' => $destination->description_en,
                            'description_ar' => $destination->description_ar,
                            'image' => $destination->image,
                            'trending' => $destination->trending,
                            'slug' => $destination->slug,
                            'country_id' => $destination->country_id
                        ];
                    })->toArray()
                ];
            })
            ->values()
            ->toArray();

        return $destinations;
    }


    public function getDestination(Request $request)
    {

        $destination = DB::table('destinations')->where('destinations.slug', '=', $request->destination)->first();

        $tours = DB::table('tours')
            ->join('tour_destination', 'tours.id', '=', 'tour_destination.tour_id')
            ->join('destinations', 'destinations.id', '=', 'tour_destination.destination_id')
            ->where('destinations.slug', '=', $request->destination)
            ->select('tours.*')
            ->distinct()
            ->get();


        $packages = DB::table('packages')
            ->join('package_destination', 'packages.id', '=', 'package_destination.package_id')
            ->join('destinations', 'destinations.id', '=', 'package_destination.destination_id')
            ->where('destinations.slug', '=', $request->destination)
            ->select('packages.*')
            ->distinct()
            ->get();


        return ['destination' => $destination, 'tours' => $tours, 'packages' => $packages];
    }

    public function getCountries()
    {
        $countries = DB::table('countries')->get();
        return $countries;
    }

    public function getDestinationsOnCountry()
    {
        $countries = CountryResource::collection(DB::table('countries')->get());
        return $countries;
    }
    public function trendingDestinations()
    {
        $provinces = Destination::all();
        $countriesWithProvinces = $provinces->where('trending', '=', 1)->groupBy('country_id')
            ->map(function ($province) {
                return $province; //->pluck('name_en')->toArray();
            })
            ->mapWithKeys(function ($province, $key) {
                return [DB::table('countries')->find($key)->slug => $province];
            });

        return $countriesWithProvinces->toArray();
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
    public function store(DestinationRequest $request)
    {

        if ($request->hasFile('image')) {
            $image = $request->image;
            $imageName = $image->getClientOriginalName();
            $imageName = time() . '_' . $imageName;
            $image->move('images/destinations', $imageName);
        } else {
            $imageName = 'default.jpg';
        }

        $destination = new Destination();
        $destination->name_en = $request->name_en;
        $destination->name_ar = $request->name_ar;
        $destination->description_en = $request->description_en;
        $destination->description_ar = $request->description_ar;
        $destination->trending = $request->trending == 'true' ? 1 : 0;;
        $destination->image = $imageName;
        $destination->country_id = $request->country_id;
        $destination->slug = Str::slug($destination->name_en, '-');
        $destination->save();


        return ['message' => 'destination Created Successfully'];
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(Destination $destination)
    {
        return new DestinationResource($destination);
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
    public function update(DestinationRequest $request, Destination $destination)
    {

        $path = 'images/destinations/';
        //code for remove old image
        if ($request->new_image != 'null' && $request->new_image != 'default.jpg') {
            $file_old = $path . $request->destination_img;
            if ($request->destination_img != 'default.jpg' && $request->destination_img != null)
                unlink($file_old);

            //code for add new image
            $image = $request->new_image;
            $imageName = $image->getClientOriginalName();
            $imageName = time() . '_' . $imageName;
            $image->move('images/destinations/', $imageName);
        } else {
            $imageName = $request->destination_img;
        }
        $destination->update([
            'name_en' => $request->name_en,
            'name_ar' => $request->name_ar,
            'description_en' => $request->description_en,
            'description_ar' => $request->description_ar,
            'country_id' => $request->country_id,
            'trending' => $request->trending == 'true' ? 1 : 0,
            'image' =>  $imageName,
            'slug' => Str::slug($request->name_en, '-')
        ]);

        return ['message' => 'Destination Updated Successfully.'];
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Destination $destination)
    {
        DB::table('package_destination')->where('destination_id', '=', $destination->id)->delete();
        if ($destination->image !== 'default.jpg' && $destination->image !== '')
            unlink('images/destinations/' . $destination->image);
        $destination->delete();
        return response()->noContent();
    }
    public function duplicate($id)
    {
        $request = Destination::where('id', $id)->first();
        $item = new Destination;
        $item->country_id = $request->country_id;
        $item->name_en = $request->name_en;
        $item->name_ar = $request->name_ar;
        $item->description_en = $request->description_en;
        $item->description_ar = $request->description_ar;
        $item->image = 'default.jpg';
        $item->slug = Str::slug($item->name_en, '-') . '-' . Destination::max('id');
        $item->save();

        return response()->noContent();
    }
}
