<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Http\Requests\User\StoreRequest;
use App\Models\User;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\ValidationException;

class StoreController extends Controller
{
    public function userRegister(StoreRequest $request)
    {
        $data = $request->validated();
        $data['password'] = Hash::make($data['password']);

        $user = (new User)->newQuery()
            ->where('email', $data['email'])
            ->first();

        if ($user) {
            return response([
                'message' => 'Пользователь с таким email уже существует!'
            ]);
        }

        $user = (new User)->newQuery()->create($data);
        $token = auth()->tokenById($user->id);

        return response([
            'access_token' => $token
        ]);
    }

    public function updateUserData(Request $request) {
        try {
            $data = $this->validate($request, [
                'firstname' => 'required|string',
                'lastname' => 'nullable|string',
                'email' => 'required|string',
                'password' => 'required|string',
                'phone' => 'required|string',
                'address' => 'required|string',
                'gender' => 'required|integer',

//                firstname: this.firstname,
//                email: this.email,
//                password: this.password,
//                lastname: this.lastname,
//                address: this.address,
//                phone: this.phone,
//                gender: this.gender,
            ]);
        } catch (ValidationException $ex) {
            return new JsonResponse([
                'error' => 'Заполните все поля!'
            ]);
        }
    }
}
