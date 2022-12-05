<?php

use App\Http\Controllers\Api\ActivityController;
use App\Http\Controllers\Api\CategoryController;
use App\Http\Controllers\Api\ContactController;
use App\Http\Controllers\Api\TourController;
use App\Http\Controllers\Api\BlogController;
use App\Http\Controllers\Api\DestinationController;
use App\Http\Controllers\Api\GeneralController;
use App\Http\Controllers\Api\HotelController;
use App\Http\Controllers\Api\PackageController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

// Route::get('/user', function (Request $request) {
//     Log::info('hello');
//     return 'hi';
// });


Route::group(['middleware' => 'web'], function () {
    // your routes
    Route::get('/user', function (Request $request) {
        // return 'hi';

        return auth()->user();
    });
});
// Route::middleware('auth:sanctum')->apiResource('/categories', CategoryController::class);

Route::get('all-categories', [CategoryController::class, 'index']);
Route::get('categories-on-section', [CategoryController::class, 'getCategoriesOnSection']);
Route::get('all-tours', [TourController::class, 'getAllTours']);
Route::get('all-activities', [ActivityController::class, 'getAllActivities']);
Route::get('destination-tours', [TourController::class, 'getDestinationTours']);
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
Route::post('inquire', [ContactController::class, 'makeInquire']);
Route::post('contact', [ContactController::class, 'makeContact']);
Route::get('nav-destination', [GeneralController::class, 'destinations']);
Route::get('nav-tours', [GeneralController::class, 'tours']);
Route::get('single-blog/{slug}', [BlogController::class, 'getSingleBlog']);
