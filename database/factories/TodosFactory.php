<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Todos;
use Faker\Generator as Faker;

$factory->define(Todos::class, function (Faker $faker) {
    return [
        'title' => $faker->word(1),
    ];
});
