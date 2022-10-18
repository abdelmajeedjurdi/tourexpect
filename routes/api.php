<?php

use App\Http\Controllers\Api\CategoryController;
use App\Http\Controllers\Api\ContactController;
use App\Http\Controllers\Api\TourController;
use App\Http\Controllers\Api\BlogController;
use App\Http\Controllers\Api\DestinationController;
use App\Http\Controllers\Api\GeneralController;
use App\Http\Controllers\Api\HotelController;
use App\Http\Controllers\Api\PackageController;
use Illuminate\Http\Request;
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

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
// Route::middleware('auth:sanctum')->apiResource('/categories', CategoryController::class);

Route::apiResource('categories', CategoryController::class); //->middleware(['auth', 'isAdmin']);
Route::apiResource('destinations', DestinationController::class); //->middleware(['auth', 'isAdmin']);
Route::apiResource('tours', TourController::class); //->middleware(['auth', 'isAdmin']);
Route::post('rooms', [HotelController::class, 'storeRoom']);
Route::get('rooms/{id}', [HotelController::class, 'getRoom']);
Route::patch('rooms/{id}', [HotelController::class, 'updateRoom']);
Route::delete('rooms/{id}', [HotelController::class, 'deleteRoom']);
Route::apiResource('hotels', HotelController::class); //;//->middleware(['auth', 'isAdmin']);
Route::apiResource('packages', PackageController::class); //->middleware(['auth', 'isAdmin']);
Route::apiResource('blogs', BlogController::class); //->middleware(['auth', 'isAdmin']);
Route::get('all-categories', [CategoryController::class, 'index']);
Route::get('all-tours', [TourController::class, 'getAllTours']);
Route::get('destination-tours', [TourController::class, 'getDestinationTours']);
Route::get('all-hotels', [HotelController::class, 'getAllHotels']);
Route::get('destination-hotels', [HotelController::class, 'getDestinationHotels']);
Route::get('all-packs', [PackageController::class, 'getAllPacks']);
Route::get('destination-packs', [PackageController::class, 'getDestinationPacks']);
Route::get('filtered-blogs', [BlogController::class, 'getFilteredBlogs']);
Route::delete('cat-property/{id}', [CategoryController::class, 'deleteProperty']);
Route::get('categories-slides', [CategoryController::class, 'getSlides']);
Route::get('category/{slug}', [CategoryController::class, 'getCategoryDetails']);
Route::get('countries', [DestinationController::class, 'getCountries']);
Route::get('countries-destinations', [DestinationController::class, 'getDestinationsOnCountry']);
Route::get('tour/{slug}', [TourController::class, 'getTourDetails']);
Route::delete('delete-image/{id}', [TourController::class, 'deleteImage']); //->middleware(['auth', 'isAdmin']);
Route::delete('delete-hotel-image/{id}', [HotelController::class, 'deleteImage']); //->middleware(['auth', 'isAdmin']);
Route::delete('delete-package-image/{id}', [PackageController::class, 'deleteImage']); //->middleware(['auth', 'isAdmin']);
Route::delete('delete-file/{id}', [TourController::class, 'deleteFile']); //->middleware(['auth', 'isAdmin']);
Route::post('inquire', [ContactController::class, 'makeInquire']);
Route::post('contact', [ContactController::class, 'makeContact']);
Route::post('category/dublicate/{id}', [CategoryController::class, 'dublicate']);
Route::post('destination/dublicate/{id}', [DestinationController::class, 'dublicate']);
Route::post('tour/dublicate/{id}', [TourController::class, 'dublicate']);
Route::post('blog/dublicate/{id}', [BlogController::class, 'dublicate']);
Route::get('nav-destination', [GeneralController::class, 'destinations']);
Route::get('nav-tours', [GeneralController::class, 'tours']);
Route::get('single-blog/{slug}', [BlogController::class, 'getSingleBlog']);
