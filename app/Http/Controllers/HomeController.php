<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class HomeController extends Controller
{
    public function about(){
        return Inertia::render('about');
    }
    public function contact(){
        return Inertia::render('contact');
    }
}

