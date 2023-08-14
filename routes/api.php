<?php

use App\Http\Controllers\Api\ActivityController;
use App\Http\Controllers\Api\CategoryController;
use App\Http\Controllers\Api\ContactController;
use App\Http\Controllers\Api\TourController;
use App\Http\Controllers\Api\BlogController;
use App\Http\Controllers\Api\DestinationController;
use App\Http\Controllers\Api\GeneralController;
use App\Http\Controllers\Api\HotelController;
use App\Http\Controllers\Api\JobController;
use App\Http\Controllers\Api\PackageController;
use App\Http\Controllers\Api\StripeController;
use App\Http\Controllers\Api\VisaController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Route;


Route::group(['middleware' => 'web'], function () {
    // your routes
    Route::get('/user', function (Request $request) {
        // return 'hi';

        return auth()->user();
    });
});
Route::get('temp', [GeneralController::class, 'temp']);

Route::get('all-categories', [CategoryController::class, 'index']);
Route::get('categories-on-section', [CategoryController::class, 'getCategoriesOnSection']);
Route::get('all-tours', [TourController::class, 'getAllTours']);
Route::get('all-activities', [ActivityController::class, 'getAllActivities']);
Route::get('destination-tours', [TourController::class, 'getDestinationTours']);
Route::get('trending-destinations', [DestinationController::class, 'trendingDestinations']);
Route::get('all-hotels', [HotelController::class, 'getAllHotels']);
Route::get('destination-hotels', [HotelController::class, 'getDestinationHotels']);
Route::get('all-packs', [PackageController::class, 'getAllPacks']);
Route::get('destination-packs', [PackageController::class, 'getDestinationPacks']);
Route::get('filtered-blogs', [BlogController::class, 'getFilteredBlogs']);
Route::get('filtered-activities', [ActivityController::class, 'getFilteredActivities']);
Route::get('filtered-packs', [PackageController::class, 'getFilteredPacks']);
Route::get('filtered-tours', [TourController::class, 'getFilteredTours']);
Route::get('destination-activities', [ActivityController::class, 'getDestinationActivities']);
Route::get('categories-slides', [CategoryController::class, 'getSlides']);
Route::get('category/{slug}', [CategoryController::class, 'getCategoryDetails']);
Route::get('countries', [DestinationController::class, 'getCountries']);
Route::get('countries-destinations', [DestinationController::class, 'getDestinationsOnCountry']);
Route::get('tour/{slug}', [TourController::class, 'getTourDetails']);
Route::get('activity/{slug}', [ActivityController::class, 'getActivityDetails']);
Route::get('single_package/{slug}', [PackageController::class, 'getPackageDetails']);
Route::get('inquire', [ContactController::class, 'makeInquire']);
Route::get('contact', [ContactController::class, 'makeContact']);
Route::post('coupon', [ContactController::class, 'haveCoupon']);
Route::post('apply-to-job', [ContactController::class, 'applyToJob']);
Route::get('nav-destination', [GeneralController::class, 'destinations']);
Route::get('nav-tours', [GeneralController::class, 'tours']);
Route::get('single-blog/{slug}', [BlogController::class, 'getSingleBlog']);
Route::get('all-jobs', [JobController::class, 'index']);
Route::get('all-visas', [VisaController::class, 'allVisas']);
Route::get('visa/{slug}', [VisaController::class, 'getVisaDetails']);
Route::get('all-destinations', [DestinationController::class, 'getDestinations']);
Route::get('single-destinations', [DestinationController::class, 'getDestination']);


Route::get('get-session', [GeneralController::class, 'getSession']);
Route::post('visa-application', [GeneralController::class, 'applyToVisa']);
Route::post('ipn', [GeneralController::class, 'handleIPN']);
Route::post('post-test', [GeneralController::class, 'postTest']);
