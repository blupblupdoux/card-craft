<?php

namespace App\Http\Controllers;

use App\Models\Decks;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class DecksController extends Controller
{
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
}
