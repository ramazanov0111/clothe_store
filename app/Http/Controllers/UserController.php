<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Http\Requests\User\StoreRequest;
use App\Http\Requests\User\UpdateRequest;
use Illuminate\Contracts\Foundation\Application;
use Illuminate\Contracts\View\Factory;
use Illuminate\Contracts\View\View;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\RedirectResponse;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return Application|Factory|View
     */
    public function index()
    {
        $users = User::all();
        return view('user.index', compact('users'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return Application|Factory|View
     */
    public function create()
    {
        return view('user.create');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param StoreRequest $request
     * @return RedirectResponse|JsonResponse
     */
    public function store(StoreRequest $request): RedirectResponse
    {
        $data = $request->validated();
        User::firstOrCreate([
            'email' => $data['email']
        ], $data);

        return redirect()->route('user.index');
    }

    /**
     * Display the specified resource.
     *
     * @param User $user
     * @return Application|Factory|View
     */
    public function show(User $user)
    {
        return view('user.show', compact('user'));
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param User $user
     * @return Application|Factory|View
     */
    public function edit(User $user)
    {
        return view('user.edit', compact('user'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param UpdateRequest $request
     * @param User $user
     * @return Application|Factory|View
     */
    public function update(UpdateRequest $request, User $user)
    {
        $data = $request->validated();
        $user->update($data);

        return view('user.show', compact('user'));
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param User $user
     * @return RedirectResponse
     */
    public function destroy(User $user): RedirectResponse
    {
        $user->delete();

        return redirect()->route('user.index');
    }
}
