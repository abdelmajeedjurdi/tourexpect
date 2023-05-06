<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Str;

class CountryController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return DB::table('countries')->get();
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
        if ($request->hasFile('image')) {
            $image = $request->image;
            $imageName = $image->getClientOriginalName();
            $imageName = time() . '_' . $imageName;
            $image->move('images/countries', $imageName);
        } else {
            $imageName = 'default.jpg';
        }
        DB::table('countries')->insert([
            'name_en' => $request->name_en,
            'name_ar' => $request->name_ar,
            'description_en' => $request->description_en,
            'description_ar' => $request->description_ar,
            'image' => $imageName,
            'slug' => Str::slug($request->name_en, '-')
        ]);
        return;

        return ['message' => 'country Created Successfully'];
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        return DB::table('countries')->where('id', $id)->first();
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
    public function update(Request $request, $id)
    {
        $path = 'images/countries/';
        //code for remove old image
        if ($request->new_image != 'null' && $request->new_image != 'default.jpg') {
            $file_old = $path . $request->country_img;
            if ($request->country_img != 'default.jpg' && $request->country_img != null)
                unlink($file_old);

            //code for add new image
            $image = $request->new_image;
            $imageName = $image->getClientOriginalName();
            $imageName = time() . '_' . $imageName;
            $image->move('images/countries/', $imageName);
        } else {
            $imageName = $request->country_img;
        }

        DB::table('countries')->where('id', $id)->update([
            'name_en' => $request->name_en,
            'name_ar' => $request->name_ar,
            'description_en' => $request->description_en,
            'description_ar' => $request->description_ar,
            'image' => $imageName,
            'slug' => Str::slug($request->name_en, '-')
        ]);

        return ['message' => 'Country updated successfully'];
    }


    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */

    public function destroy($id)
    {
        $country = DB::table('countries')->where('id', $id)->first();

        if ($country) {
            $imagePath = 'images/countries/' . $country->image;

            if ($country->image != 'default.jpg' && file_exists($imagePath)) {
                unlink($imagePath); // Delete the image file
            }

            DB::table('countries')->where('id', $id)->delete();

            return ['message' => 'Destination deleted successfully'];
        }

        return ['message' => 'Destination not found'];
    }

    public function duplicate($id)
    {
        $country = DB::table('countries')->where('id', $id)->first();

        if ($country) {
            $newCountry = [
                'name_en' => $country->name_en . ' (Copy)',
                'name_ar' => $country->name_ar . ' (نسخة)',
                'description_en' => $country->description_en,
                'description_ar' => $country->description_ar,
                'slug' => Str::slug($country->name_en . ' (Copy)', '-'),
                'image' => $country->image
            ];

            if ($country->image != 'default.jpg') {
                $imagePath = 'images/countries/' . $country->image;
                if (file_exists($imagePath)) {
                    $newImagePath = 'images/countries/' . time() . '_' . $country->image;
                    copy($imagePath, $newImagePath); // Duplicate the image file
                    $newCountry['image'] = basename($newImagePath);
                }
            }

            $newCountryId = DB::table('countries')->insertGetId($newCountry);

            return ['message' => 'Country duplicated successfully', 'newCountryId' => $newCountryId];
        }

        return ['message' => 'Country not found'];
    }
}
