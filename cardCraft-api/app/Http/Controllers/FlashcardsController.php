<?php

namespace App\Http\Controllers;

use App\Models\Flashcard;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class FlashcardsController extends Controller
{
    public function create(Request $request)
    {
        $validated = $request->validate([
            'deck_id' => 'required',
            'recto' => 'string|required',
            'verso' => 'string|required',
        ]);

        $flashcard = Flashcard::create($validated);

        return response($flashcard)->setStatusCode(Response::HTTP_CREATED);
    }
}
