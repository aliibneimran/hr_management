<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class HomeController extends Controller
{
    public function index(){
        return Inertia::render('Dashboard');
    }
    public function about(){
        return Inertia::render('about');
    }
    public function contact(){
        return Inertia::render('contact');
    }
}

