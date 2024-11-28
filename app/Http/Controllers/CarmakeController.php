<?php

namespace App\Http\Controllers;

use App\Http\Resources\MakeResource;
use App\Models\Carmake;


class CarmakeController extends Controller
{
    public function index() {
        return MakeResource::collection(Carmake::all());
    }

    public function show($slug) {
        return Carmake::where('slug',$slug)->get();
    }

    public function models($slug)  {
        return MakeResource::collection(Carmake::where('slug',$slug)->with('carmodels')->get());
    }
}
