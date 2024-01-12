<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Facades\Auth;
use Symfony\Component\HttpFoundation\Response;

class AuthController extends Controller
{
    public function authenticate(Request $request) {

        // Check data
        $credentials = $request->validate([
            'username' => ['required'],
            'password' => ['required']
        ]);

        if(Auth::attempt($credentials)) {
            $request->session()->regenerate();
            return (new JsonResource(['message'=> 'Successful authentication.']))->response()->setStatusCode(Response::HTTP_OK);
        }

        return (new JsonResource(['message'=> 'Wrong credentials.']))->response()->setStatusCode(Response::HTTP_UNAUTHORIZED);
    }
}
