<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\PackageRequest;
use App\Http\Resources\PackageResource;
use App\Models\Category;
use App\Models\Destination;
use App\Models\Package;
use App\Models\PackageImage;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Str;

class PackageController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return PackageResource::collection(Package::paginate(15));
        // return "index is working";
    }
    public function getAllPacks()
    {
        return PackageResource::collection(Package::paginate(15));
        // return "index is working";
    }
    public function getFilteredPacks(Request $request)
    {
        Log::info($request);
        // return Destination::where('slug', $request->d)->first('id')->id;
        if ($request->d == '*' && $request->c == '*')
            return PackageResource::collection(Package::paginate(9));
        if ($request->d == '*' && $request->c != '*') {
            $c_id = Category::where('slug', $request->c)->first('id')->id;
            return PackageResource::collection(Package::where('category_id', $c_id)->paginate(9));
        }
        if ($request->c == '*' && $request->d != '*') {
            $d_id = Destination::where('slug', $request->d)->first('id')->id;
            return PackageResource::collection(Package::where('destination_id', $d_id)->paginate(9));
        }
        $d_id = Destination::where('slug', $request->d)->first('id')->id;
        $c_id = Category::where('slug', $request->c)->first('id')->id;
        return
            PackageResource::collection(Package::where('destination_id', $d_id)->where('category_id', $c_id)->paginate(9));
    }
    public function getDestinationPacks(Request $request)
    {
        if ($request->subdestination == 'null') {
            $all = DB::table('countries')
                ->join('destinations', 'countries.id', '=', 'destinations.country_id')
                ->join('packages', 'destinations.id', '=', 'packages.destination_id')
                ->select(
                    'packages.id',
                    'packages.destination_id',
                    'packages.title_en',
                    'packages.title_ar',
                    'packages.address_ar',
                    'packages.address_en',
                    'packages.description_en',
                    'packages.description_ar',
                    'packages.slug',
                    'packages.adult_price',
                    'packages.child_price',
                    'packages.discount',
                    'packages.thumbnail',
                    'packages.discount_type',
                    'packages.duration_en',
                    'packages.duration_ar',
                    'destinations.name_en as destination_en',
                    'destinations.name_ar as destination_ar'
                )->where('countries.slug', '=', $request->destination)->paginate(12);
        } else {
            $all = DB::table('destinations')
                ->join('packages', 'destinations.id', '=', 'packages.destination_id')
                ->select(
                    'packages.id',
                    'packages.destination_id',
                    'packages.title_en',
                    'packages.title_ar',
                    'packages.address_ar',
                    'packages.address_en',
                    'packages.description_en',
                    'packages.description_ar',
                    'packages.slug',
                    'packages.adult_price',
                    'packages.child_price',
                    'packages.discount',
                    'packages.thumbnail',
                    'packages.discount_type',
                    'packages.duration_en',
                    'packages.duration_ar',
                    'destinations.name_en as destination_en',
                    'destinations.name_ar as destination_ar'
                )->where('destinations.slug', '=', $request->subdestination)->paginate(12);
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
    public function store(PackageRequest $request)
    {
        Log::info($request);
        if ($request->hasFile('image')) {
            $image = $request->image;
            $imageName = $image->getClientOriginalName();
            $imageName = time() . '_' . $imageName;
            $image->move('images/packages', $imageName);
        } else {
            $imageName = 'default.jpg';
        }

        $package = new Package();
        $package->category_id = $request->category_id;
        $package->destination_id = $request->destination_id;
        $package->title_en = $request->title_en;
        $package->title_ar = $request->title_ar;
        $package->description_en = $request->description_en;
        $package->description_ar = $request->description_ar;
        $package->thumbnail = $imageName;
        $package->slug = Str::slug($package->title_en, '-');
        $package->address_en = $request->address_en;
        $package->address_ar = $request->address_ar;
        $package->itinerary_en = $request->itinerary_en;
        $package->itinerary_ar = $request->itinerary_ar;
        $package->active = $request->active == 'true' ? 1 : 0;
        $package->adult_price = $request->adult_price;
        $package->child_price = $request->child_price;
        $package->discount = $request->discount;
        $package->discount_type = $request->discount_type;
        $package->duration_en = $request->duration_en;
        $package->duration_ar = $request->duration_ar;
        $package->max_number_of_people = $request->max_number_of_people;
        $package->include_en = $request->include_en;
        $package->include_ar = $request->include_ar;
        $package->exclude_en = $request->exclude_en;
        $package->exclude_ar = $request->exclude_ar;
        $package->source = $request->source;
        $package->options_ar = $request->options_ar;
        $package->options_en = $request->options_en;
        $package->highlights_ar = $request->highlights_ar;
        $package->highlights_en = $request->highlights_en;
        $package->information_ar = $request->information_ar;
        $package->information_en = $request->information_en;
        $package->policy_ar = $request->policy_ar;
        $package->policy_en = $request->policy_en;
        $package->timing_and_transfer_ar = $request->timing_and_transfer_ar;
        $package->timing_and_transfer_en = $request->timing_and_transfer_en;
        $package->notes_en = $request->notes_en;
        $package->notes_ar = $request->notes_ar;
        $package->terms_and_conditions_en = $request->terms_and_conditions_en;
        $package->terms_and_conditions_ar = $request->terms_and_conditions_ar;
        $package->is_from = $request->is_from == 'true' ? 1 : 0;


        $package->save();


        if ($request->hasFile('images')) {

            foreach ($request->file('images') as $file) {

                $imageName = time() . '_' . $file->getClientOriginalName();
                $file->move('images/packages', $imageName);

                PackageImage::create([
                    'package_id' => $package->id,
                    'image' => $imageName,
                    // 'created_at' => Carbon::now()
                ]);
            }
        }

        return ['message' => 'Package Created Successfully'];
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(Package $package)
    {
        return new PackageResource($package);
    }
    public function getPackageDetails($slug)
    {
        return new PackageResource(Package::where('slug', $slug)->first());
    }


    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(PackageRequest $request, Package $package)
    {
        $path = 'images/packages/';
        //code for remove old image
        if ($request->new_image != 'null' && $request->new_image != 'default.jpg') {
            $file_old = $path . $request->package_img;
            if ($request->package_img != 'default.jpg' && $request->package_img != null)
                unlink($file_old);

            //code for add new image
            $image = $request->new_image;
            $imageName = $image->getClientOriginalName();
            $imageName = time() . '_' . $imageName;
            $image->move('images/packages/', $imageName);
        } else {
            $imageName = $request->package_img;
        }
        $package->update([
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
            'source' => $request->source,
            'options_ar' => $request->options_ar,
            'options_en' => $request->options_en,
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
            'thumbnail' =>  $imageName,
            'slug' => Str::slug($request->title_en, '-')
        ]);
        if ($request->hasFile('images')) {

            foreach ($request->file('images') as $file) {

                $imageName = time() . '_' . $file->getClientOriginalName();
                $file->move('images/packages', $imageName);

                PackageImage::create([
                    'package_id' => $package->id,
                    'image' => $imageName,
                    // 'created_at' => Carbon::now()
                ]);
            }
        }

        // if ($request->hasFile('files')) {

        //     foreach ($request->file('files') as $file) {

        //         $OriginalName = $file->getClientOriginalName();
        //         $imageName = time() . '_' . $file->getClientOriginalName();
        //         $file->move(public_path('/files/packages'), $imageName);

        //         PackageFile::create([
        //             'package_id' => $package->id,
        //             'file' => $imageName,
        //             'original_name' => $OriginalName,
        //         ]);
        //     }
        // }

        return ['message' => 'Package Updated Successfully.'];
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $package = Package::find($id);
        if ($package->thumbnail !== 'default.jpg' && $package->thumbnail !== '')
            unlink('images/packages/' . $package->thumbnail);
        $images = PackageImage::where('package_id', $package->id)->get();
        foreach ($images as $image) {
            unlink('images/packages/' . $image->image);
        }
        PackageImage::where('package_id', $package->id)->delete();
        $package->delete();
        return;
    }
    public function dublicate($id)
    {
        $request = Package::where('id', $id)->first();
        $package = new Package();
        $package->category_id = $request->category_id;
        $package->destination_id = $request->destination_id;
        $package->title_en = $request->title_en;
        $package->title_ar = $request->title_ar;
        $package->description_en = $request->description_en;
        $package->description_ar = $request->description_ar;
        $package->thumbnail = 'default.jpg';
        $package->slug =
            Str::slug($package->title_en, '-') . '-' . Package::max('id');
        $package->address_en = $request->address_en;
        $package->address_ar = $request->address_ar;
        $package->itinerary_en = $request->itinerary_en;
        $package->itinerary_ar = $request->itinerary_ar;
        $package->active = $request->active;
        $package->adult_price = $request->adult_price;
        $package->child_price = $request->child_price;
        $package->discount = $request->discount;
        $package->discount_type = $request->discount_type;
        $package->duration_en = $request->duration_en;
        $package->duration_ar = $request->duration_ar;
        $package->max_number_of_people = $request->max_number_of_people;
        $package->include_en = $request->include_en;
        $package->include_ar = $request->include_ar;
        $package->exclude_en = $request->exclude_en;
        $package->exclude_ar = $request->exclude_ar;

        $package->save();

        return response()->noContent();
    }
    public function deleteImage($id)
    {
        $path = 'images/packages/';

        $image = DB::table('package_images')->where('id', $id)->first('image');
        unlink($path . $image->image);
        DB::table('package_images')->delete($id);
        return "done";
    }

    // public function deleteFile($id)
    // {
    //     $path = public_path() . '/files/packages/';

    //     $file = PackageImage::find($id);
    //     unlink($path . $file->file);
    //     $file->delete();
    //     return '';
    // }
}
