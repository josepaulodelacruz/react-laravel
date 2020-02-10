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

    public function create (Request $request)
    {
        $this->validate($request, [
            'title' => 'required'
        ]);
        $data = $request->all();
        $todos = new Todos();

        $todos->title = $data['title'];
        $todos->save();

        return response($todos, 201);

    }

    public function update (Request $request, $id)
    {
        $todos = Todos::find($id);
        $data = $request->all();

        $todos->title = $data['title'];

        $todos->save();

        return response(Todos::all(), 201);

    }

    public function destroy ($id)
    {
        $todos = Todos::find($id);

        $todos->delete();

        return response('Successfulyy deleted');

    }
}
