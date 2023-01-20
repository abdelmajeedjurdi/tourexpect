<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\CountryActivitiesResource;
use App\Http\Resources\CountryPackagesResource;
use App\Http\Resources\CountryPassportResource;
use App\Http\Resources\CountryResource;
use App\Http\Resources\CountryTourResource;
use App\Http\Resources\CountryToursResource;
use App\Http\Resources\VisaResource;
use App\Mail\VisaMail;
use App\Models\OptionIcon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Mail;

class GeneralController extends Controller
{
    public function getSession(Request $request)
    {


        $stripe = new \Stripe\StripeClient(
            env('STRIPE_API_KEY')
        );
        $checkout = $stripe->checkout->sessions->create([
            'success_url' => 'http://127.0.0.1:8000/success',
            'cancel_url' => 'http://127.0.0.1:8000/cancel',

            'line_items' => [
                [
                    'price_data' => [
                        'currency' => 'usd',
                        'unit_amount' => $request->amount * 100,
                        'product_data' => [
                            'name' => $request->name
                        ]
                    ],
                    'quantity' => 1
                ]
            ],
            'customer_email' => $request->customer_email,
            'mode' => 'payment'
        ]);
        return $checkout;
    }
    public function applyToVisa(Request $request)
    {
        Mail::to('info@tourexpect.com')->send(new VisaMail($request));

        return response()->json('Your message has been sent. Thank you!', 200);
    }
    public function destinations2()
    {

        $countries = DB::table('countries')->get();

        return CountryResource::collection($countries);
    }
    public function destinations()
    {

        $destinations = DB::table('countries')->get();
        $packages = DB::table('packages')
            ->join('package_destination as pd', 'packages.id', '=', 'pd.package_id')
            ->join('destinations', 'pd.destination_id', '=', 'destinations.id')->join('countries', 'countries.id', 'destinations.country_id')
            ->select(
                'countries.*',
            )->distinct()->get();

        $tours = DB::table('tours')
            ->join('tour_destination as pd', 'tours.id', '=', 'pd.tour_id')
            ->join('destinations', 'pd.destination_id', '=', 'destinations.id')->join('countries', 'countries.id', 'destinations.country_id')
            ->select(
                'countries.*',
            )->distinct()->get();

        $activities = DB::table('activities')
            ->join('activity_destination as pd', 'activities.id', '=', 'pd.activity_id')
            ->join('destinations', 'pd.destination_id', '=', 'destinations.id')
            ->join('countries', 'countries.id', 'destinations.country_id')
            ->select(
                'countries.*',
            )->distinct()->get();

        $visas = DB::table('visas')
            ->join('country_passport_visa as pd', 'visas.id', '=', 'pd.visa_id')
            ->join('countries_passports', 'pd.country_passport_id', '=', 'countries_passports.id')
            ->select(
                'countries_passports.*',
            )->distinct()->get();

        return [
            'packages' => CountryPackagesResource::collection($packages),
            'tours' => CountryToursResource::collection($tours),
            'activities' => CountryActivitiesResource::collection($activities),
            'destinations' => CountryResource::collection($destinations),
            'visas' => CountryPassportResource::collection($visas)
        ];
    }

    public function updateOptionsImages(Request $request)
    {
        if ($request->hasFile('images')) {

            foreach ($request->file('images') as $file) {

                $imageName = time() . '_' . $file->getClientOriginalName();
                $file->move('images/icons', $imageName);
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
