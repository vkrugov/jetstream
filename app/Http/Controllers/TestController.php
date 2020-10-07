<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\JsonResponse;
use Inertia\Inertia;
use Inertia\Response;

class TestController extends Controller
{
    /**
     * @return Response
     */
    public function test(): Response
    {
        $profile = User::query()->get()->first();

        return Inertia::render('Test', ['profile' => $profile]);
    }

    /**
     * @return JsonResponse
     */
    public function getNumber(): JsonResponse
    {
        return \response()->json(rand(1, 10));
    }
}
