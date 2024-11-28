<?php

namespace App\Http\Controllers;

use App\Models\Drivetype;

class DrivetypeController extends Controller
{
    public function index() {
        return Drivetype::all(['id','drivetype_title']);
    }
}
