<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\CountryResource;
use App\Http\Resources\CountryTourResource;
use App\Models\OptionIcon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;

class GeneralController extends Controller
{
    public function destinations()
    {

        $countries = DB::table('countries')->get();

        return CountryResource::collection($countries);
    }

    public function updateOptionsImages(Request $request)
    {
        if ($request->hasFile('images')) {

            foreach ($request->file('images') as $file) {

                $imageName = time() . '_' . $file->getClientOriginalName();
                $file->move('images/icons', $imageName);
                Log::info($imageName);
                OptionIcon::create([
                    'image' => $imageName
                ]);
            }
        }
    }

    public function get()
    {
        // return 'hello';

        return OptionIcon::all();
    }
    public function deleteIcon($id)
    {
        $path = 'images/icons/';

        $image = DB::table('option_icons')->where('id', $id)->first('image');
        unlink($path . $image->image);
        DB::table('option_icons')->delete($id);
        return "done";
    }
}
