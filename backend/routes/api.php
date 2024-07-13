<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\HomeController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/blogs/{type}', [HomeController::class, 'api_blog'])->name('blogs.api_blog');
Route::get('/blogs/{type}/{news_id}', [HomeController::class, 'api_blog_detail'])->name('blogs.api_blog_detail');