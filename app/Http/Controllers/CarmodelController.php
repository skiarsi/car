<?php

namespace App\Http\Controllers;

use App\Http\Resources\ModelResource;
use App\Models\Carmodel;

class CarmodelController extends Controller
{
    // public function index()  {
    //     return ModelResource::collection(Carmodel::with('carmakes')->paginate(25));
    // }

    public function show($slug) {
        $modelCollection = Carmodel::where('make_slug', $slug)->get();
        return ModelResource::collection($modelCollection);
    }

    // specific model by make
    // public function specifixmodel($make_slug, $slug) {
    //     $model = Carmodel::
    //                           with(['carmakes'])
    //                         ->where('slug', $slug)
    //                         ->where('make_slug', $make_slug)
    //                         ->get();

    //     return ModelResource::collection($model);
    // }
}
