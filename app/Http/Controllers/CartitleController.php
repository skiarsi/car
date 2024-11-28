<?php

namespace App\Http\Controllers;

use App\Models\Cartitle;

class CartitleController extends Controller
{
    public function index()  {
        return Cartitle::all(['id','cartitle_title','cartitle_slug']);
    }
}
