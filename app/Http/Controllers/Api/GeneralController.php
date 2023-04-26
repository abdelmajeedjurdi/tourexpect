<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\CountryActivitiesResource;
use App\Http\Resources\CountryPackagesResource;
use App\Http\Resources\CountryPassportResource;
use App\Http\Resources\CountryResource;
use App\Http\Resources\CountryTourResource;
use App\Http\Resources\CountryToursResource;
use App\Jobs\OfflinePaymentJob;
use App\Mail\SendFastpayMail;
use App\Mail\VisaMail;
use App\Models\OptionIcon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Mail;

class GeneralController extends Controller
{
    public function postTest(Request $request)
    {
        // Log::info($request);
        // dispatch(new OfflinePaymentJob());
        OfflinePaymentJob::dispatch($request);

        // Mail::to('eido.khudyda@gmail.com')->send(new SendFastpayMail($request));
        return "completed";
    }
    public function getSession(Request $request)
    {
        $stripe = new \Stripe\StripeClient(
            "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"
        );
        $checkout = $stripe->checkout->sessions->create([
            'success_url' => 'https://tourexpect.com/success',
            'cancel_url' => 'https://tourexpect.com/cancel',

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
        try {
            $newRequest = $request->all();
            for ($i = 0; $i < $request['count']; $i++) {

                if ($request->hasFile('passport_doc_' . $i)) {
                    $document = $request['passport_doc_' . $i];
                    $document_extension = $request['passport_doc_' . $i]->getClientOriginalExtension();
                    $imageName =  'passport_' . $i . '.' . $document_extension;
                    $document->move('images/emails', $imageName);

                    $newRequest['passport_doc_' . $i] = $imageName;
                }

                if ($request->hasFile('national_id_' . $i)) {
                    $document = $request['national_id_' . $i];
                    $document_extension = $request['national_id_' . $i]->getClientOriginalExtension();
                    $imageName =  'national_id_' . $i . '.' . $document_extension;
                    $document->move('images/emails', $imageName);

                    $newRequest['national_id_' . $i] = $imageName;
                }

                if ($request->hasFile('client_photo_' . $i)) {
                    $document = $request['client_photo_' . $i];
                    $document_extension = $request['client_photo_' . $i]->getClientOriginalExtension();
                    $imageName =  'client_photo_' . $i . '.' . $document_extension;
                    $document->move('images/emails', $imageName);

                    $newRequest['client_photo_' . $i] = $imageName;
                }
            }

            Log::info($newRequest);
            OfflinePaymentJob::dispatch($newRequest);

            return ['message' => 'Your message has been sent. Thank you!', 'status' => 200];
        } catch (\Exception $e) {
            Log::error($e);
            return response()->json('An error occurred while processing your visa application. Please try again later.', 500);
        }
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

    public function handleIPN(Request $request)
    {
        Log::info($request);
        Mail::to('info@tourexpect.com')->send(new SendFastpayMail($request));
        return response()->json('Your message has been sent. Thank you!', 200);
    }
}
