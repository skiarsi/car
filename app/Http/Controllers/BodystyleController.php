<?php

namespace App\Http\Controllers;

use App\Models\Bodystyle;

class BodystyleController extends Controller
{
    public function index()  {
        return Bodystyle::all(['id','bodystyle_title']);
    }
}
