<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Laravel\Sanctum\PersonalAccessToken;
use Symfony\Component\HttpFoundation\Response;

class AuthController extends Controller
{
    public function initialize() {

        $authorizationToken = app('request')->header('authorization');
        $bearerToken = $authorizationToken ? substr($authorizationToken, 7) : null;
        $personalToken = PersonalAccessToken::findToken($bearerToken);
        $user = $personalToken && $personalToken->tokenable ? $personalToken->tokenable : null;

        return response([
            'user' => $user,
            'env' => env('APP_ENV')
        ])->setStatusCode(Response::HTTP_OK);
    }

    public function register(Request $request) {

        // Check data
        $data = $request->validate([
            'username' => 'string|required|unique:users',
            'password' => 'required',
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

        return response([
            'message' => 'Successful registeration.',
            'user' => $newUser,
            'token' => $newUser->createToken(uniqid())->plainTextToken
        ])->setStatusCode(Response::HTTP_OK);
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

        $user = User::where('username', $request->username)->first();

        return response([
            'message' => 'Successful authentication.',
            'user' => $user,
            'token' => $user->createToken(uniqid())->plainTextToken
        ])->setStatusCode(Response::HTTP_OK);
    }
}
