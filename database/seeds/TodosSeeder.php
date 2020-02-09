<?php

use Illuminate\Database\Seeder;
use App\Todos;

class TodosSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        factory(Todos::class, 3)->create();
    }
}
