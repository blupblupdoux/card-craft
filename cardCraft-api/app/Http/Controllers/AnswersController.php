<?php

namespace App\Http\Controllers;

use App\Models\Answer;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class AnswersController extends Controller
{
    public function create(Request $request)
    {
        $validated = $request->validate([
            'user_id' => 'required',
            'flashcard_id' => 'required',
            'type' => 'string|required',
            'value' => 'string|required'
        ]);

        Answer::create([
            'user_id' => $validated['user_id'],
            'flashcard_id' => $validated['flashcard_id'],
            'type' => Answer::$TYPES[$validated['type']],
            'value' => Answer::$VALUES[$validated['value']],
        ]);

        return response('Answer stored!')->setStatusCode(Response::HTTP_CREATED);
    }
}
