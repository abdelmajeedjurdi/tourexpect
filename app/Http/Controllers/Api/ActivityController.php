<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\ActivityRequest;
use App\Http\Resources\DestinationActivityResource;
use App\Http\Resources\ActivityResource;
use App\Models\Destination;
use App\Models\Activity;
use App\Models\ActivityFile;
use App\Models\ActivityImage;
use App\Models\ActivityProperty;
use App\Models\Category;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Str;

class ActivityController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return ActivityResource::collection(Activity::paginate(15));
        return "index is working";
    }
    public function getAllActivities()
    {
        return ActivityResource::collection(Activity::paginate(15));
        // return "index is working";
    }
    public function getFilteredActivities(Request $request)
    {
        // return Destination::where('slug', $request->d)->first('id')->id;
        if ($request->d == '*' && $request->c == '*')
            return ActivityResource::collection(Activity::paginate(9));
        if ($request->d == '*' && $request->c != '*') {
            $c_id = Category::where('slug', $request->c)->first('id')->id;
            return ActivityResource::collection(Activity::where('category_id', $c_id)->paginate(9));
        }
        if ($request->c == '*' && $request->d != '*') {
            $d_id = Destination::where('slug', $request->d)->first('id')->id;
            return ActivityResource::collection(Activity::where('destination_id', $d_id)->paginate(9));
        }
        $d_id = Destination::where('slug', $request->d)->first('id')->id;
        $c_id = Category::where('slug', $request->c)->first('id')->id;
        return
            ActivityResource::collection(Activity::where('destination_id', $d_id)->where('category_id', $c_id)->paginate(9));
    }
    public function getDestinationActivities(Request $request)
    {

        // return ActivityResource::collection(Activity::paginate(15));
        if ($request->subdestination == 'null') {
            $all = DB::table('countries')
                ->join('destinations', 'countries.id', '=', 'destinations.country_id')
                ->join('activities', 'destinations.id', '=', 'activities.destination_id')
                ->select(
                    'activities.id',
                    'activities.destination_id',
                    'activities.title_en',
                    'activities.title_ar',
                    'activities.address_ar',
                    'activities.address_en',
                    'activities.description_en',
                    'activities.description_ar',
                    'activities.slug',
                    'activities.thumbnail',
                    'activities.duration_en',
                    'activities.duration_ar',
                    'destinations.name_en as destination_en',
                    'destinations.name_ar as destination_ar'
                )->where('countries.slug', '=', $request->destination)->paginate(12);
        } else {
            $all = DB::table('destinations')
                ->join('activities', 'destinations.id', '=', 'activities.destination_id')
                ->select(
                    'activities.id',
                    'activities.destination_id',
                    'activities.title_en',
                    'activities.title_ar',
                    'activities.address_ar',
                    'activities.address_en',
                    'activities.description_en',
                    'activities.description_ar',
                    'activities.slug',
                    'activities.thumbnail',
                    'activities.duration_en',
                    'activities.duration_ar',
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
    public function store(ActivityRequest $request)
    {
        Log::info($request);
        if ($request->hasFile('image')) {
            $image = $request->image;
            $imageName = $image->getClientOriginalName();
            $imageName = time() . '_' . $imageName;
            $image->move('images/activities', $imageName);
        } else {
            $imageName = 'default.jpg';
        }

        $activity = new Activity();
        $activity->category_id = $request->category_id;
        $activity->destination_id = $request->destination_id;
        $activity->title_en = $request->title_en;
        $activity->title_ar = $request->title_ar;
        $activity->description_en = $request->description_en;
        $activity->description_ar = $request->description_ar;
        $activity->thumbnail = $imageName;
        $activity->slug = Str::slug($activity->title_en, '-');
        $activity->address_en = $request->address_en;
        $activity->address_ar = $request->address_ar;
        $activity->itinerary_en = $request->itinerary_en;
        $activity->itinerary_ar = $request->itinerary_ar;
        $activity->active = $request->active == 'true' ? 1 : 0;
        $activity->duration_en = $request->duration_en;
        $activity->duration_ar = $request->duration_ar;
        $activity->max_number_of_people = $request->max_number_of_people;
        $activity->include_en = $request->include_en;
        $activity->include_ar = $request->include_ar;
        $activity->exclude_en = $request->exclude_en;
        $activity->exclude_ar = $request->exclude_ar;
        $activity->source = $request->source;
        $activity->information_ar = $request->information_ar;
        $activity->information_en = $request->information_en;
        $activity->policy_ar = $request->policy_ar;
        $activity->policy_en = $request->policy_en;
        $activity->highlights_en = $request->highlights_en;
        $activity->highlights_ar = $request->highlights_ar;
        $activity->timing_and_transfer_ar = $request->timing_and_transfer_ar;
        $activity->timing_and_transfer_en = $request->timing_and_transfer_en;
        $activity->notes_en = $request->notes_en;
        $activity->notes_ar = $request->notes_ar;
        $activity->terms_and_conditions_en = $request->terms_and_conditions_en;
        $activity->terms_and_conditions_ar = $request->terms_and_conditions_ar;
        $activity->is_from = $request->is_from == 'true' ? 1 : 0;
        $activity->banner_highlights = $request->banner_highlights;
        $activity->options = $request->options;


        $activity->save();


        if ($request->hasFile('images')) {

            foreach ($request->file('images') as $file) {

                $imageName = time() . '_' . $file->getClientOriginalName();
                $file->move('images/activities', $imageName);

                ActivityImage::create([
                    'activity_id' => $activity->id,
                    'image' => $imageName,
                    // 'created_at' => Carbon::now()
                ]);
            }
        }

        return ['message' => 'Activity Created Successfully'];
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(Activity $activity)
    {
        return new ActivityResource($activity);
    }
    public function getActivityDetails($slug)
    {
        return new ActivityResource(Activity::where('slug', $slug)->first());
    }


    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(ActivityRequest $request, Activity $activity)
    {

        $path = 'images/activities/';
        //code for remove old image
        if ($request->new_image != 'null' && $request->new_image != 'default.jpg') {
            $file_old = $path . $request->activity_img;
            if ($request->activity_img != 'default.jpg' && $request->activity_img != null)
                unlink($file_old);

            //code for add new image
            $image = $request->new_image;
            $imageName = $image->getClientOriginalName();
            $imageName = time() . '_' . $imageName;
            $image->move('images/activities/', $imageName);
        } else {
            $imageName = $request->activity_img;
        }
        $activity->update([
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
            'duration_en' => $request->duration_en,
            'duration_ar' => $request->duration_ar,
            'max_number_of_people' => $request->max_number_of_people,
            'include_en' => $request->include_en,
            'include_ar' => $request->include_ar,
            'exclude_en' => $request->exclude_en,
            'exclude_ar' => $request->exclude_ar,
            'source' => $request->source,
            'information_ar' => $request->information_ar,
            'information_en' => $request->information_en,
            'policy_ar' => $request->policy_ar,
            'policy_en' => $request->policy_en,
            'highlights_en' => $request->highlights_en,
            'highlights_ar' => $request->highlights_ar,
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
        if ($request->hasFile('images')) {

            foreach ($request->file('images') as $file) {

                $imageName = time() . '_' . $file->getClientOriginalName();
                $file->move('images/activities', $imageName);

                ActivityImage::create([
                    'activity_id' => $activity->id,
                    'image' => $imageName,
                    // 'created_at' => Carbon::now()
                ]);
            }
        }

        // if ($request->hasFile('files')) {

        //     foreach ($request->file('files') as $file) {

        //         $OriginalName = $file->getClientOriginalName();
        //         $imageName = time() . '_' . $file->getClientOriginalName();
        //         $file->move(public_path('/files/activities'), $imageName);

        //         ActivityFile::create([
        //             'activity_id' => $activity->id,
        //             'file' => $imageName,
        //             'original_name' => $OriginalName,
        //         ]);
        //     }
        // }

        return ['message' => 'Activity Updated Successfully.'];
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $activity = Activity::find($id);
        Log::info($activity);
        if ($activity->thumbnail !== 'default.jpg' && $activity->thumbnail !== '')
            unlink('images/activities/' . $activity->thumbnail);
        $images = ActivityImage::where('activity_id', $activity->id)->get();
        foreach ($images as $image) {
            unlink('images/activities/' . $image->image);
        }
        ActivityImage::where('activity_id', $activity->id)->delete();
        $activity->delete();
        return;
    }
    public function dublicate($id)
    {
        $request = Activity::where('id', $id)->first();
        $activity = new Activity();
        $activity->category_id = $request->category_id;
        $activity->destination_id = $request->destination_id;
        $activity->title_en = $request->title_en;
        $activity->title_ar = $request->title_ar;
        $activity->description_en = $request->description_en;
        $activity->description_ar = $request->description_ar;
        $activity->thumbnail = 'default.jpg';
        $activity->slug =
            Str::slug($activity->title_en, '-') . '-' . Activity::max('id');
        $activity->address_en = $request->address_en;
        $activity->address_ar = $request->address_ar;
        $activity->highlights_en = $request->highlights_en;
        $activity->highlights_ar = $request->highlights_ar;
        $activity->active = $request->active;
        $activity->duration_en = $request->duration_en;
        $activity->duration_ar = $request->duration_ar;
        $activity->max_number_of_people = $request->max_number_of_people;
        $activity->include_en = $request->include_en;
        $activity->include_ar = $request->include_ar;
        $activity->exclude_en = $request->exclude_en;
        $activity->exclude_ar = $request->exclude_ar;
        $activity->source = $request->source;

        $activity->save();

        return response()->noContent();
    }
    public function deleteImage($id)
    {
        $path = 'images/activities/';

        $image = DB::table('activity_images')->where('id', $id)->first('image');
        unlink($path . $image->image);
        DB::table('activity_images')->delete($id);
        return "done";
    }

    // public function deleteFile($id)
    // {
    //     $path = public_path() . '/files/activities/';

    //     $file = ActivityImage::find($id);
    //     Log::info($file);
    //     unlink($path . $file->file);
    //     $file->delete();
    //     return '';
    // }
}
