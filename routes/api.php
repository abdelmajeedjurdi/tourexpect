<?php

use App\Http\Controllers\Api\CategoryController;
use App\Http\Controllers\Api\ContactController;
use App\Http\Controllers\Api\TourController;
use App\Http\Controllers\Api\BlogController;
use App\Http\Controllers\Api\DestinationController;
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

Route::apiResource('categories', CategoryController::class);
Route::apiResource('destinations', DestinationController::class);
Route::apiResource('tours', TourController::class);
Route::get('filtered-blogs', [BlogController::class, 'getFilteredBlogs']);
Route::delete('cat-property/{id}', [CategoryController::class, 'deleteProperty']);
Route::get('categories-slides', [CategoryController::class, 'getSlides']);
Route::get('category/{slug}', [CategoryController::class, 'getCategoryDetails']);
Route::get('countries', [DestinationController::class, 'getCountries']);
Route::get('countries-destinations', [DestinationController::class, 'getDestinationsOnCountry']);
Route::get('tour/{slug}', [TourController::class, 'getTourDetails']);
Route::delete('delete-image/{id}', [TourController::class, 'deleteImage']);
Route::delete('delete-file/{id}', [TourController::class, 'deleteFile']);
Route::post('inquire', [ContactController::class, 'makeInquire']);
Route::post('contact', [ContactController::class, 'makeContact']);

Route::apiResource('blogs', BlogController::class);
