<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    public function login(Request $request) {
        dd('ok');
        // $request->validate([
        //     'email' => 'required|string',
        //     'password' => 'required|string'
        // ]);


        // if(!Auth::attempt($request->only('email','password'))){
        //     return response()->json(['message'=>'Invalid credentials'], 401);
        // }


        // $user = User::where('email',$request->email)->first();

        // return response()->json([
        //                     'message'=>'login successfull',
        //                     'token' => $user->createToken('Api token for'.$user->email)->plainTextToken
        //                 ], 200);

    }
}
