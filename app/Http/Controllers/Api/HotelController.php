<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\HotelRequest;
use App\Http\Resources\HotelResource;
use App\Models\Destination;
use App\Models\Hotel;
use App\Models\HotelImage;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Str;

class HotelController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return HotelResource::collection(Hotel::paginate(15));
        return "index is working";
    }
    public function getAllHotels()
    {
        return HotelResource::collection(Hotel::paginate(15));
        // return "index is working";
    }
    public function getDestinationHotels(Request $request)
    {
        // return HotelResource::collection(Hotel::paginate(15));
        if ($request->subdestination == 'null') {
            $all = DB::table('countries')
                ->join('destinations', 'countries.id', '=', 'destinations.country_id')
                ->join('hotels', 'destinations.id', '=', 'hotels.destination_id')
                ->select('hotels.id', 'hotels.destination_id', 'hotels.title_en', 'hotels.title_ar', 'hotels.address_ar', 'hotels.address_en', 'hotels.description_en', 'hotels.description_ar', 'hotels.slug', 'hotels.price', 'hotels.discount', 'hotels.thumbnail', 'hotels.discount_type', 'hotels.stars')->where('countries.slug', '=', $request->destination)->paginate(12);
        } else {
            $all = DB::table('destinations')
                ->join('hotels', 'destinations.id', '=', 'hotels.destination_id')
                ->select('hotels.id', 'hotels.destination_id', 'hotels.title_en', 'hotels.title_ar', 'hotels.address_ar', 'hotels.address_en', 'hotels.description_en', 'hotels.description_ar', 'hotels.slug', 'hotels.price',  'hotels.discount', 'hotels.thumbnail', 'hotels.discount_type', 'hotels.stars')->where('destinations.slug', '=', $request->subdestination)->paginate(12);
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
    public function store(Request $request)
    {
        if ($request->hasFile('image')) {
            $image = $request->image;
            $imageName = $image->getClientOriginalName();
            $imageName = time() . '_' . $imageName;
            $image->move('images/hotels', $imageName);
        } else {
            $imageName = 'default.jpg';
        }

        $tour = new Hotel();
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
        $tour->active = $request->active == 'true' ? 1 : 0;
        $tour->price = $request->price;
        $tour->discount = $request->discount;
        $tour->discount_type = $request->discount_type;
        $tour->stars = $request->stars;
        $tour->facilities = $request->facilities;
        $tour->source = $request->source;

        $tour->save();


        if ($request->hasFile('images')) {

            foreach ($request->file('images') as $file) {

                $imageName = time() . '_' . $file->getClientOriginalName();
                $file->move('images/hotels', $imageName);

                HotelImage::create([
                    'hotel_id' => $tour->id,
                    'image' => $imageName,
                    // 'created_at' => Carbon::now()
                ]);
            }
        }

        return $tour->id;
    }
    public function storeRoom(Request $request)
    {
        if ($request->hasFile('image')) {
            $image = $request->image;
            $imageName = $image->getClientOriginalName();
            $imageName = time() . '_' . $imageName;
            $image->move('images/rooms', $imageName);
        } else {
            $imageName = 'default.jpg';
        }

        DB::table('rooms')->insert([
            'name_en' => $request->name_en,
            'name_ar' => $request->name_ar,
            'hotel_id' => $request->hotel_id,
            'image' => $imageName
        ]);



        // if ($request->hasFile('images')) {

        //     foreach ($request->file('images') as $file) {

        //         $imageName = time() . '_' . $file->getClientOriginalName();
        //         $file->move('images/hotels', $imageName);

        //         HotelImage::create([
        //             'hotel_id' => $tour->id,
        //             'image' => $imageName,
        //             // 'created_at' => Carbon::now()
        //         ]);
        //     }
        // }

        return 'saved';
    }

    public function getRoom($id)
    {
        $room = DB::table('rooms')->where('id', $id)->first();
        return $room;
    }

    public function updateRoom(Request $request)
    {
        $path = 'images/rooms/';
        //code for remove old image
        if ($request->new_image != 'null' && $request->new_image != 'default.jpg') {
            $file_old = $path . $request->room_img;
            if ($request->room_img != 'default.jpg' && $request->room_img != null)
                unlink($file_old);

            //code for add new image
            $image = $request->new_image;
            $imageName = $image->getClientOriginalName();
            $imageName = time() . '_' . $imageName;
            $image->move('images/rooms/', $imageName);
        } else {
            $imageName = $request->room_img;
        }

        DB::table('rooms')->where('id', $request->id)->update([
            'name_en' => $request->name_en,
            'name_ar' => $request->name_ar,
            'image' => $imageName
        ]);

        return;
    }

    public function deleteRoom($id)
    {
        $room = DB::table('rooms')->where('id', $id)->first();

        if ($room->image !== 'default.jpg' && $room->image !== '')
            if (file_exists('images/rooms/' . $room->image))
                unlink('images/rooms/' . $room->image);

        DB::table('rooms')->where('id', $id)->delete();

        return 'deleted';
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $hotel = Hotel::where('id', $id)->first();
        // return $hotel;
        return new HotelResource($hotel);
    }
    public function getHotelDetails($slug)
    {
        return new HotelResource(Hotel::where('slug', $slug)->first());
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
        $hotel = Hotel::where('id', $id)->first();
        Log::info($request);
        $path = 'images/hotels/';
        //code for remove old image
        if ($request->new_image != 'null' && $request->new_image != 'default.jpg') {
            $file_old = $path . $request->hotel_img;
            if ($request->hotel_img != 'default.jpg' && $request->hotel_img != null)
                unlink($file_old);

            //code for add new image
            $image = $request->new_image;
            $imageName = $image->getClientOriginalName();
            $imageName = time() . '_' . $imageName;
            $image->move('images/hotels/', $imageName);
        } else {
            $imageName = $request->hotel_img;
        }
        $hotel->update([
            'category_id' => $request->category_id,
            'destination_id' => $request->destination_id,
            'title_en' => $request->title_en,
            'title_ar' => $request->title_ar,
            'description_en' => $request->description_en,
            'description_ar' => $request->description_ar,
            'slug' => Str::slug($hotel->title_en, '-'),
            'address_en' => $request->address_en,
            'address_ar' => $request->address_ar,
            'active' => $request->active == 'true' ? 1 : 0,
            'price' => $request->price,
            'discount' => $request->discount,
            'discount_type' => $request->discount_type,
            'stars' => $request->stars,
            'source' => $request->source,
            'facilities' => json_encode($request->facilities),
            'thumbnail' =>  $imageName,
            'slug' => Str::slug($request->title_en, '-')
        ]);
        if ($request->hasFile('images')) {

            foreach ($request->file('images') as $file) {

                $imageName = time() . '_' . $file->getClientOriginalName();
                $file->move('images/hotels', $imageName);

                HotelImage::create([
                    'hotel_id' => $hotel->id,
                    'image' => $imageName,
                    // 'created_at' => Carbon::now()
                ]);
            }
        }

        return ['message' => 'Hotel Updated Successfully.'];
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $tour = Hotel::find($id);
        if ($tour->thumbnail !== 'default.jpg' && $tour->thumbnail !== '')
            unlink('images/rooms/' . $tour->thumbnail);
        $images = HotelImage::where('tour_id', $tour->id)->get();
        foreach ($images as $image) {
            unlink('images/rooms/' . $image->image);
        }
        HotelImage::where('tour_id', $tour->id)->delete();
        $tour->delete();
        return;
    }
    public function dublicate($id)
    {
        $request = Hotel::where('id', $id)->first();
        $tour = new Hotel();
        $tour->category_id = $request->category_id;
        $tour->destination_id = $request->destination_id;
        $tour->title_en = $request->title_en;
        $tour->title_ar = $request->title_ar;
        $tour->description_en = $request->description_en;
        $tour->description_ar = $request->description_ar;
        $tour->thumbnail = 'default.jpg';
        $tour->slug =
            Str::slug($tour->title_en, '-') . '-' . Hotel::max('id');
        $tour->address_en = $request->address_en;
        $tour->address_ar = $request->address_ar;
        $tour->itinerary = $request->itinerary;
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
        Log::info('id:' . $id);
        $path = 'images/hotels/';

        $image = DB::table('hotel_images')->where('id', $id)->first('image');
        unlink($path . $image->image);
        DB::table('hotel_images')->delete($id);
        return "done";
    }

    // public function deleteFile($id)
    // {
    //     $path = public_path() . '/files/rooms/';

    //     $file = HotelImage::find($id);
    //     unlink($path . $file->file);
    //     $file->delete();
    //     return '';
    // }
}
