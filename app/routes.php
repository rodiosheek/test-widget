<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the Closure to execute when that URI is requested.
|
*/



Route::get('/', function()
{
	return View::make('index.index');
});


Route::get('/item', 'ItemController@index');
Route::get('/item/{id}', 'ItemController@show');
Route::post('/item', 'ItemController@store');
Route::post('/item/{id}', 'ItemController@update');
Route::delete('/item/{id}', 'ItemController@destroy');