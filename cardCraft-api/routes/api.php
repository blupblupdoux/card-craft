<?php

use App\Http\Controllers\AnswersController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\DecksController;
use App\Http\Controllers\FlashcardsController;
use Illuminate\Support\Facades\Route;


/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::get('/initialize', [AuthController::class, 'initialize']);

// Authentication
Route::post('/register', [AuthController::class, 'register']);
Route::post('/authenticate', [AuthController::class, 'authenticate']);

// Authenticated routes
Route::middleware(['auth:sanctum'])->group(function () {

    Route::get('/decks', [DecksController::class, 'all']);
    Route::get('/deck/{id}', [DecksController::class, 'find']);
    Route::get('/decks/lastLearnt', [DecksController::class, 'getLastLearnt']);
    Route::post('/deck/create', [DecksController::class, 'create']);
    Route::post('/deck/edit', [DecksController::class, 'update']);
    Route::put('/deck/edit/lastLearnAt', [DecksController::class, 'updateLastLearnAt']);

    Route::get('/deck/{deck_id}/flashcards', [FlashcardsController::class, 'flashcardsFromDeck']);
    Route::post('/flashcard/create', [FlashcardsController::class, 'create']);
    Route::post('/flashcard/edit', [FlashcardsController::class, 'update']);

    Route::post('/answer/create', [AnswersController::class, 'create']);
});
