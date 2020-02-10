<?php

namespace App\Http\Controllers;

use App\Todos;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use App\Http\Controllers\TodosController;

class TodosController extends Controller
{
    /**
     * @return Todos[]|\Illuminate\Database\Eloquent\Collection
     */
    public function index ()
    {
        $todos = Todos::all();
        return $todos;
    }

    public function show ($id)
    {
        $items = Todos::all()->count();
        if($id > $items) {
            return response('Not found', 404);
        } else {
            return response(Todos::find($id), 201);
        }
    }
}
