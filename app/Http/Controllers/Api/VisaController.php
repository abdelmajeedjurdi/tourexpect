<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\VisaResource;
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
        $visa = new Visa();
        $visa->country_passport_ids = $request->country_passport_ids;
        $visa->title_en = $request->title_en;
        $visa->title_ar = $request->title_ar;
        $visa->paragraph_sections = $request->paragraph_sections;
        $visa->bullet_sections = $request->bullet_sections;
        $visa->options = $request->options;
        $visa->slug = Str::slug($visa->title_en, '-');

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

        $visa->update([
            'slug' => Str::slug($request->title_en, '-'),
            'country_passport_ids' => $request->country_passport_ids,
            'title_en' => $request->title_en,
            'title_ar' => $request->title_ar,
            'paragraph_sections' => $request->paragraph_sections,
            'bullet_sections' => $request->bullet_sections,
            'options' => $request->options,
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
        $visa->delete();
        return;
    }
}