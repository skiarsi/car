<?php

namespace App\Http\Controllers;

use App\Models\Engine;

class EngineController extends Controller
{
    public function index() {
        return Engine::all(['id','engine_title']);
    }
}
