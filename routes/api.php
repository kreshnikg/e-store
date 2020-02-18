<?php

require 'routes/Route.php';

use Route\Route;

#region Products
Route::get('/api/products','ProduktiController@index');
Route::post('/api/products','ProduktiController@store');
Route::get('/api/products/*','ProduktiController@show');
Route::post('/api/products/*','ProduktiController@update');
#endregion

#region Users
Route::get('/api/users', 'PerdoruesiController@index');
Route::post('/api/users', 'PerdoruesiController@store');
Route::get('/api/users/*', 'PerdoruesiController@show');
Route::post('/api/users/*', 'PerdoruesiController@update');
#endregion

#region Authentication
Route::post('/api/register', 'Auth\RegisterController@register');
Route::post('/api/login', 'Auth\LoginController@login');
Route::get('/api/logout', 'Auth\LoginController@logout');
#endregion

#region Dashboard
Route::get('/api/dashboard/products','Dashboard\ProduktiController@index');
Route::get('/api/dashboard/users','Dashboard\PerdoruesiController@index');
#endregion
