<?php

use App\Http\Controllers\Api\AccessoryController;
use App\Http\Controllers\Api\CategoryController;
use App\Http\Controllers\Api\ContactController;
use App\Http\Controllers\Api\ProductController;
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
Route::apiResource('products', ProductController::class);
Route::apiResource('accessories', AccessoryController::class);
Route::delete('cat-property/{id}', [CategoryController::class, 'deleteProperty']);
Route::get('categories-slides', [CategoryController::class, 'getSlides']);
Route::get('category/{slug}', [CategoryController::class, 'getCategoryDetails']);
Route::get('get-flags-signs', [CategoryController::class, 'getFlagsOrSigns']);
Route::get('product/{slug}', [ProductController::class, 'getProductDetails']);
Route::delete('delete-image/{id}', [ProductController::class, 'deleteImage']);
Route::delete('delete-file/{id}', [ProductController::class, 'deleteFile']);
Route::delete('delete-accessory-file/{id}', [AccessoryController::class, 'deleteFile']);
Route::delete('delete-accessory-image/{id}', [AccessoryController::class, 'deleteImage']);
Route::get('accessory/{slug}', [AccessoryController::class, 'getAccessoryDetails']);
Route::post('inquire', [ContactController::class, 'makeInquire']);
Route::post('contact', [ContactController::class, 'makeContact']);
