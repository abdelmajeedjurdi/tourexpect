<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class StripeController extends Controller
{
    public function getSession()
    {

        return 'checkout';
        // $stripe = new \Stripe\StripeClient(
        //     env('STRIPE_API_KEY')
        // );
        // $checkout = $stripe->checkout->sessions->create([
        //     'success_url' => 'http://127.0.0.1:8000/success',
        //     'cancel_url' => 'http://127.0.0.1:8000/cancel',
        //     'line_items' => [
        //         [
        //             'price_data' => [
        //                 'currency' => 'usd',
        //                 'unit_amount' => 500,
        //                 'product_data' => [
        //                     'name' => "Cool stripe checkout"
        //                 ]
        //             ],
        //             'quantity' => 1
        //         ]
        //     ],
        //     'mode' => 'payment'
        // ]);
    }
}
