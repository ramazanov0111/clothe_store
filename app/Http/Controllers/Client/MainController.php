<?php

namespace App\Http\Controllers\Client;

use App\Http\Controllers\Controller;

class MainController extends Controller
{
    public function __invoke()
    {
        return view('client.main.index');
    }
}
