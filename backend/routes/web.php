<?php

use App\Http\Controllers\{
    ProfileController,
    ServicesController,
    UsersController,
    HomeController,
    BlogsController,
};
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

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

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});
Route::get('/', [HomeController::class, 'index']);

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
    // *************** (users) **************** //
    Route::get('/users', [UsersController::class, 'index'])->name('users.index');
    Route::get('/users/create', [UsersController::class, 'create'])->name('users.create');
    Route::post('/users/store', [UsersController::class, 'store'])->name('users.store');
    Route::get('/users/edit/{id}', [UsersController::class, 'edit'])->name('users.edit');
    Route::put('/users/update/{id}', [UsersController::class, 'update'])->name('users.update');
    Route::delete('/users/destroy/{id}', [UsersController::class, 'destroy'])->name('users.destroy');
    // *************** (services) **************** //
    Route::get('/services', [ServicesController::class, 'index'])->name('services.index');
    Route::get('/services/create', [ServicesController::class, 'create'])->name('services.create');
    Route::post('/services/store', [ServicesController::class, 'store'])->name('services.store');
    Route::get('/services/{url}', [ServicesController::class, 'preview']);
    Route::get('/services/edit/{id}', [ServicesController::class, 'edit']);
    Route::post('/services/update/{id}', [ServicesController::class, 'update'])->name('services.update');
    Route::delete('/services/destroy/{id}', [ServicesController::class, 'destroy'])->name('services.destroy');
    // *************** (cronjob) **************** //
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    // *************** (blogs) **************** //
    Route::get('/blogs', [BlogsController::class, 'index'])->name('blogs.index');
    Route::get('/blogs/create', [BlogsController::class, 'create'])->name('blogs.create');
    Route::post('/blogs/store', [BlogsController::class, 'store'])->name('blogs.store');
    Route::get('/blogs/edit/{id}', [BlogsController::class, 'edit'])->name('blogs.edit');
    Route::put('/blogs/update/{id}', [BlogsController::class, 'update'])->name('blogs.update');
    Route::delete('/blogs/destroy/{id}', [BlogsController::class, 'destroy'])->name('blogs.destroy');
    // *************** (blogs categories) **************** //
    Route::get('/blogs/categories', [BlogsController::class, 'index'])->name('blogs.category.index');
    Route::get('/blogs/categories/create', [BlogsController::class, 'create'])->name('blogs.category.create');
    Route::post('/blogs/categories/store', [BlogsController::class, 'store'])->name('blogs.category.store');
    Route::get('/blogs/categories/edit/{id}', [BlogsController::class, 'edit'])->name('blogs.category.edit');
    Route::put('/blogs/categories/update/{id}', [BlogsController::class, 'update'])->name('blogs.category.update');
    Route::delete('/blogs/categories/destroy/{id}', [BlogsController::class, 'destroy'])->name('blogs.category.destroy');
    // *************** (blogs videos) **************** //
    Route::get('/blogs/videos', [BlogsController::class, 'videos'])->name('videos');
    Route::get('/blogs/videos/create', [BlogsController::class, 'video_create'])->name('blogs.video_create');
    Route::post('/blogs/videos/store', [BlogsController::class, 'video_store'])->name('blogs.video_store');
    Route::get('/blogs/videos/edit/{id}', [BlogsController::class, 'video_edit'])->name('blogs.video_edit');
    Route::put('/blogs/videos/update/{id}', [BlogsController::class, 'video_update'])->name('blogs.video_update');
    Route::delete('/blogs/videos/destroy/{id}', [BlogsController::class, 'video_destroy'])->name('blogs.video_destroy');
    
});


require __DIR__.'/auth.php';
