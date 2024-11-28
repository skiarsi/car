<?php

namespace App\Http\Controllers;

use App\Http\Resources\V1\DealerResource;
use App\Models\Cardealers;
use Illuminate\Support\Facades\DB;

class CardealersController extends Controller
{
    public function index()  {
        return DealerResource::collection(Cardealers::all());
    }

    public function show($id) {
        // $car =Cardealers::where('id', $id)->first();
        $car = DB::table('cardealers')->where('id', $id)->first();

        return new DealerResource($car);
    }
}
