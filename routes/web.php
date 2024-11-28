<?php

use App\Http\Controllers\BodystyleController;
use App\Http\Controllers\CarController;
use App\Http\Controllers\CarmakeController;
use App\Http\Controllers\CarmodelController;
use App\Http\Controllers\CartitleController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\DrivetypeController;
use App\Http\Controllers\EngineController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\ProjectController;
use App\Http\Controllers\TaskController;
use App\Http\Controllers\UserController;

use Illuminate\Support\Facades\Route;

// Route::redirect('/', '/dashboard');
Route::get('/', function(){
    return inertia('Index',[
        'current_url' => '/',
        // 'users'=>  User::all()
    ]);
})->name('index');

Route::group(['prefix'=>'/brands'], function(){
    Route::get('/',[CarmakeController::class,'index'])->name('carmake.index');
});

Route::group(['prefix'=>'/model'], function(){
    Route::get('/',[CarmodelController::class,'index'])->name('carmodel.index');
    Route::get('/{make}',[CarmodelController::class,'show'])->name('carmodel.show');
});


Route::group(['prefix'=>'/car'], function(){
    Route::get('/count/{brand}/{model}/{year}/{price}/{mileage}/{title}/{body}/{drive}/{engin}', [CarController::class,'count'])->name('car.count');
});


Route::group(['prefix'=>'/bodytype'], function(){
    Route::get('/', [BodystyleController::class,'index'])->name('body.index');
});

Route::group(['prefix'=>'/engintype'], function(){
    Route::get('/', [EngineController::class,'index'])->name('engine.index');
});

Route::group(['prefix'=>'/cartitle'], function(){
    Route::get('/', [CartitleController::class,'index'])->name('title.index');
});

Route::group(['prefix'=>'/drivetype'], function(){
    Route::get('/', [DrivetypeController::class,'index'])->name('drive.index');
});



// result page
Route::group(['prefix'=>'/result'], function(){
    Route::get('/', [CarController::class, 'showlist'])->name('car.result');
});



// Route::middleware(['auth', 'verified'])->group(function () {
//     Route::get('/dashboard', [DashboardController::class, 'index'])
//         ->name('dashboard');

//     Route::resource('project', ProjectController::class);
//     Route::get('/task/my-tasks', [TaskController::class, 'myTasks'])
//         ->name('task.myTasks');
//     Route::resource('task', TaskController::class);
//     Route::resource('user', UserController::class);
// });

// Route::middleware('auth')->group(function () {
//     Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
//     Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
//     Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
// });

require __DIR__ . '/auth.php';
