<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\DecksController;
use Illuminate\Http\Request;
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
    Route::post('/decks/create', [DecksController::class, 'create']);
    Route::post('/decks/edit', [DecksController::class, 'update']);
});
