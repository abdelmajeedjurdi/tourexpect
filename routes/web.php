<?php

use App\Http\Controllers\Api\ActivityController;
use App\Http\Controllers\Api\BlogController;
use App\Http\Controllers\Api\CategoryController;
use App\Http\Controllers\Api\DestinationController;
use App\Http\Controllers\Api\GeneralController;
use App\Http\Controllers\Api\HotelController;
use App\Http\Controllers\Api\PackageController;
use App\Http\Controllers\Api\TourController;
use App\Http\Controllers\Api\UserController;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/




Route::apiResource('api/categories', CategoryController::class)->middleware(['auth', 'isAdmin']);
Route::apiResource('api/destinations', DestinationController::class)->middleware(['auth', 'isAdmin']);
Route::apiResource('api/tours', TourController::class)->middleware(['auth', 'isAdmin']);
Route::apiResource('api/activities', ActivityController::class)->middleware(['auth', 'isAdmin']);
Route::apiResource('api/hotels', HotelController::class)->middleware(['auth', 'isAdmin']);
Route::apiResource('api/packages', PackageController::class)->middleware(['auth', 'isAdmin']);
Route::apiResource('api/blogs', BlogController::class)->middleware(['auth', 'isAdmin']);
Route::delete('api/delete-image/{id}', [TourController::class, 'deleteImage'])->middleware(['auth', 'isAdmin']);
Route::delete('api/delete-hotel-image/{id}', [HotelController::class, 'deleteImage'])->middleware(['auth', 'isAdmin']);
Route::delete('api/delete-package-image/{id}', [PackageController::class, 'deleteImage'])->middleware(['auth', 'isAdmin']);
Route::delete('api/delete-file/{id}', [TourController::class, 'deleteFile'])->middleware(['auth', 'isAdmin']);
Route::post('api/category/dublicate/{id}', [CategoryController::class, 'dublicate'])->middleware(['auth', 'isAdmin']);
Route::post('api/destination/dublicate/{id}', [DestinationController::class, 'dublicate'])->middleware(['auth', 'isAdmin']);
Route::post('api/tour/dublicate/{id}', [TourController::class, 'dublicate'])->middleware(['auth', 'isAdmin']);
Route::post('api/activity/dublicate/{id}', [ActivityController::class, 'dublicate'])->middleware(['auth', 'isAdmin']);
Route::post('api/blog/dublicate/{id}', [BlogController::class, 'dublicate'])->middleware(['auth', 'isAdmin']);

Route::post('api/rooms', [HotelController::class, 'storeRoom'])->middleware(['auth', 'isAdmin']);
Route::get('api/rooms/{id}', [HotelController::class, 'getRoom'])->middleware(['auth', 'isAdmin']);
Route::patch('api/rooms/{id}', [HotelController::class, 'updateRoom'])->middleware(['auth', 'isAdmin']);
Route::delete('api/rooms/{id}', [HotelController::class, 'deleteRoom'])->middleware(['auth', 'isAdmin']);

Route::patch('api/update-icons', [GeneralController::class, 'updateOptionsImages'])->middleware(['auth', 'isAdmin']);
Route::get('api/get-icons', [GeneralController::class, 'get'])->middleware(['auth', 'isAdmin']);
Route::delete('api/delete-icon/{id}', [GeneralController::class, 'deleteIcon'])->middleware(['auth', 'isAdmin']);


Route::apiResource('api/users', UserController::class)->middleware(['auth', 'isAdmin']);

Route::get('/', function () {
    return view('frontend');
});
Route::get('/categories', function () {
    return view('categories');
});
Route::middleware(['auth', 'isAdmin'])->group(function () {
    Route::get('/dashboard', function () {
        // return 'this is admin';
        return view('dashboard');
    })->name('dashboard');;
    Route::view('/dashboard/{any}', 'dashboard')
        ->middleware('auth')
        ->where('any', '.*');
});

require __DIR__ . '/auth.php';


Route::view('/{any}', 'frontend')
    ->where('any', '.*');
