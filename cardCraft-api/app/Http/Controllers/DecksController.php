<?php

namespace App\Http\Controllers;

use App\Models\Decks;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Symfony\Component\HttpFoundation\Response;

class DecksController extends Controller
{
    public function all()
    {
        $decks = Decks::where('user_id', Auth::id())->get();
        return response($decks)->setStatusCode(Response::HTTP_OK);
    }

    public function create(Request $request)
    {
        $validated = $request->validate([
            'user_id' => 'required',
            'name' => 'string|required',
            'description' => 'string||nullable',
            'color' => 'string|required|size:7|starts_with:#'
        ]);

        $newDeck = Decks::create($validated);

        return response($newDeck)->setStatusCode(Response::HTTP_CREATED);
    }

    public function update(Request $request)
    {
        $validated = $request->validate([
            'id' => 'required',
            'user_id' => 'required',
            'name' => 'string|required',
            'description' => 'string||nullable',
            'color' => 'string|required|size:7|starts_with:#'
        ]);

        Decks::where('id', $validated['id'])->update($validated);

        return response()->setStatusCode(Response::HTTP_CREATED);
    }
}
