<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class TodosController extends Controller
{
    //

    public function index ()
    {
        $todo = 'test todo';

        return $todo;
    }
}
