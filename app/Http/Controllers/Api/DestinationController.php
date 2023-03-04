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
            return DestinationResource::collection(Destination::paginate());
        return DestinationResource::collection(Destination::paginate(15));
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
