<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\CountriesPassportResource;
use App\Http\Resources\VisaResource;
use App\Models\CountriesPassport;
use App\Models\Visa;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Str;

class VisaController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return VisaResource::collection(Visa::paginate(15));
    }

    public function allVisas(Request $request)
    {
        Log::info($request);
        if ($request->country == '')
            return CountriesPassportResource::collection(CountriesPassport::paginate(15));



        return CountriesPassportResource::collection(CountriesPassport::where('slug', $request->country)->paginate(15));
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
            $image->move('images/visas', $imageName);
        } else {
            $imageName = 'default.jpg';
        }
        $visa = new Visa();
        $visa->country_passport_ids = $request->country_passport_ids;
        $visa->title_en = $request->title_en;
        $visa->title_ar = $request->title_ar;
        $visa->sections = $request->sections;
        $visa->options = $request->options;
        $visa->slug = Str::slug($visa->title_en, '-');
        $visa->image = $imageName;
        $visa->active = $request->active == 'true' ? 1 : 0;

        $visa->save();

        $destinations = json_decode($request->country_passport_ids);
        for ($i = 0; $i < count($destinations); $i++) {
            DB::table('country_passport_visa')->insert([
                'country_passport_id' => $destinations[$i],
                'visa_id' => $visa->id
            ]);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(Visa $visa)
    {
        return new VisaResource($visa);
    }

    public function getVisaDetails($slug)
    {
        return new VisaResource(Visa::where('slug', $slug)->first());
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
    public function update(Request $request, Visa $visa)
    {
        Log::info($request);

        $path = 'images/visas/';
        //code for remove old image
        if ($request->new_image != 'null' && $request->new_image != 'default.jpg') {
            $file_old = $path . $request->visa_img;
            if ($request->visa_img != 'default.jpg' && $request->visa_img != null)
                if (file_exists($file_old))
                    unlink($file_old);

            //code for add new image
            $image = $request->new_image;
            $imageName = $image->getClientOriginalName();
            $imageName = time() . '_' . $imageName;
            $image->move('images/visas/', $imageName);
        } else {
            $imageName = $request->visa_img;
        }
        $visa->update([
            'slug' => Str::slug($request->title_en, '-'),
            'country_passport_ids' => $request->country_passport_ids,
            'title_en' => $request->title_en,
            'title_ar' => $request->title_ar,
            'active' => $request->active == 'true' ? 1 : 0,
            'sections' => $request->sections,
            'options' => $request->options,
            'image' =>  $imageName,
        ]);

        DB::table('country_passport_visa')->where('visa_id', '=', $visa->id)->delete();
        $destinations = json_decode($request->country_passport_ids);
        for ($i = 0; $i < count($destinations); $i++) {
            DB::table('country_passport_visa')->insert([
                'country_passport_id' => $destinations[$i],
                'visa_id' => $visa->id
            ]);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {

        DB::table('country_passport_visa')->where('visa_id', '=', $id)->delete();

        $visa = Visa::find($id);
        if ($visa->image !== 'default.jpg' && $visa->image !== '')
            if (file_exists('images/visas/' . $visa->image))
                unlink('images/visas/' . $visa->image);

        $visa->delete();
        return;
    }
}
