<?php

namespace App\Http\Controllers;

use App\Models\Deck;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Symfony\Component\HttpFoundation\Response;

class DecksController extends Controller
{
    public function all()
    {
        $decks = Deck::where('user_id', Auth::id())->get();
        return response($decks)->setStatusCode(Response::HTTP_OK);
    }

    public function getLastLearnt()
    {
        $decks = Deck::where('user_id', Auth::id())
                    ->orderBy('last_learnt_at', 'DESC')
                    ->take(2)
                    ->get();
        return response($decks)->setStatusCode(Response::HTTP_OK);
    }

    public function find($id)
    {
        return response(Deck::find($id)->load('flashcards'))->setStatusCode(Response::HTTP_OK);
    }

    public function create(Request $request)
    {
        $validated = $request->validate([
            'user_id' => 'required',
            'name' => 'string|required',
            'description' => 'string||nullable',
            'color' => 'string|required|size:7|starts_with:#'
        ]);

        $newDeck = Deck::create($validated);

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

        Deck::where('id', $validated['id'])->update($validated);

        return response(Deck::find($validated['id']))->setStatusCode(Response::HTTP_OK);
    }

    public function updateLastLearnAt(Request $request) {
        $validated = $request->validate([
            'id' => 'required',
        ]);

        Deck::where('id', $validated['id'])->update(['last_learnt_at' => Carbon::now()]);

        return response(Deck::find($validated['id']))->setStatusCode(Response::HTTP_OK);
    }
}
