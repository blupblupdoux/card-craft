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
            'type' => 'integer|required'
        ]);

        Answer::create($validated);

        return response('Answer stored!')->setStatusCode(Response::HTTP_CREATED);
    }
}
