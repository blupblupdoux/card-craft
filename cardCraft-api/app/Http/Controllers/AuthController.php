<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Symfony\Component\HttpFoundation\Response;

class AuthController extends Controller
{
    public function register(Request $request) {

        // Check data
        $data = $request->validate([
            'username' => 'string|required|unique:users',
            'password' => 'required|min:5',
            'name' => 'string|nullable',
            'email' => 'email|nullable|unique:users',
        ]);

        // Create new user
        $newUser = User::create([
            'username' => $data['username'],
            'password' => Hash::make($data['password']),
            'name' => $data['name'],
            'email' => $data['email']
        ]);

        return (new JsonResource([
            'message' => 'Successful registeration.',
            'user' => $newUser,
            'token' => $newUser->createToken(uniqid())->plainTextToken
        ]))->response()->setStatusCode(Response::HTTP_OK);
    }

    public function authenticate(Request $request) {

        // Check data
        $credentials = $request->validate([
            'username' => 'string|required',
            'password' => 'required'
        ]);

        // Check credentials
        if(!Auth::attempt($credentials)) {
            return (new JsonResource(['message'=> 'Wrong credentials.']))->response()->setStatusCode(Response::HTTP_UNAUTHORIZED);
        }

        $user = User::where('email', $request->email)->first();

        return (new JsonResource([
            'message' => 'Successful authentication.',
            'user' => $user,
            'token' => $user->createToken(uniqid())->plainTextToken
        ]))->response()->setStatusCode(Response::HTTP_OK);
    }
}
