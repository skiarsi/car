<?php

namespace App\Http\Controllers;
use App\Models\Car;
use Illuminate\Http\Request;

class CarController extends Controller
{
    public function index() {
        return Car::all();
    }

    // public function count($brand, $modelvalue, $yearvalue, $price, $mileage, $titlevalue,$bodyvalue,$drivevalue,$enginevalue) {
    public function count($brand, $modelvalue, $yearvalue, $price, $mileage,$title, $body,$drive,$engin) {
        // return $brand;
        return Car::
                      ByMake($brand)
                    ->ByModel($modelvalue)
                    ->ByYear($yearvalue)
                    ->ByPrice($price)
                    ->ByMileage($mileage)
                    ->ByTitle($title)
                    ->ByBody($body)
                    ->ByDrive($drive)
                    ->ByEngine($engin)
                    ->count();
    }


    // list of resualt
    public function showlist(Request $request) {
        $carlist = Car::
                      with(['carmake','carmodel','drivetype','title','transmission','engintype','fueltype','bodytype','dealersel','thumbnail'
                    //   'like' =>function($query){
                    //     if (auth()->check()) {
                    //         $query->where('user_id', auth()->id());
                    //     }
                    ])
                    ->with(['like'=> function($query){
                        if (auth()->check()) {
                            $query->where('user_id', auth()->id());
                        }
                    }])
                    ->ByMake($request->brand)
                    ->ByModel($request->model)
                    ->ByYear($request->year)
                    ->ByPrice($request->price)
                    ->ByMileage($request->mileage)
                    ->ByTitle($request->title)
                    ->ByBody($request->body)
                    ->ByDrive($request->drive)
                    ->ByEngine($request->engin)
                    ->paginate(25);

        return inertia('result',[
            'current_url' => '/result',
            'carlist'   => $carlist
        ]);
    }


    // get max mileage
    public function maxmilieage($brand, $model, $year, $price, $mileage, $title, $body, $drive, $engin) {
            return Car::
                      ByMake($brand)
                    ->ByModel($model)
                    ->ByYear($year)
                    ->ByPrice($price)
                    ->ByMileage($mileage)
                    ->ByTitle($title)
                    ->ByBody($body)
                    ->ByDrive($drive)
                    ->ByEngine($engin)
                    ->max('mileage');
    }
}
