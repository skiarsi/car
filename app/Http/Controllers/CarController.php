<?php

namespace App\Http\Controllers;
use App\Models\Car;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

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
                    ->with(['user'=> function($query){
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


    /**
     *   get max mileage
     *
     *
     * I made this to make mileage slider in resualt page
    */

    // public function maxmilieage($brand, $model, $year, $price, $mileage, $title, $body, $drive, $engin) {
    //         return Car::
    //                   ByMake($brand)
    //                 ->ByModel($model)
    //                 ->ByYear($year)
    //                 ->ByPrice($price)
    //                 ->ByMileage($mileage)
    //                 ->ByTitle($title)
    //                 ->ByBody($body)
    //                 ->ByDrive($drive)
    //                 ->ByEngine($engin)
    //                 ->max('mileage');
    // }

    public function like($id) {

        $car = Car::findOrFail($id);
        $user = Auth::user();
        if($user){
            // $findexist = $car->user()->where('car_id', $id)->where('user_id',Auth::user()->id)->count();
            // $findexist = Car::with('user')->get();
            // return response()->json(['message' => $findexist]);
            if(!$car->user()->where('car_id', $id)->where('user_id',Auth::user()->id)->exists()){
                $car->user()->attach($user->id);

                return response()->json(['message' => 'Car liked successfully','carlike'=>1], 200);
            }else{
                $car->user()->detach($user->id);
                return response()->json(['message' => 'user liked this before','carlike'=>0]);
            }
        }else{
            return response()->json(['message' => 'user not online']);
        }
    }
}
