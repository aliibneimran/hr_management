<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="csrf-token" content="{{ csrf_token() }}">

        <title inertia>{{ config('app.name', 'Laravel') }}</title>

        <!-- Fonts -->
        <link rel="preconnect" href="https://fonts.bunny.net">
        <link href="https://fonts.bunny.net/css?family=figtree:400,500,600&display=swap" rel="stylesheet" />

        <!-- App favicon -->
        <link rel="shortcut icon" type="image/png" href="assets/images/favicon.png">

        <link href="{{asset('assets/vendor/bootstrap-select/dist/css/bootstrap-select.min.css')}}" rel="stylesheet">

        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/noUiSlider/14.6.4/nouislider.min.css">

        <!-- Style css -->
        <link href="{{asset('assets/css/style.css')}}" rel="stylesheet">

        <script src="https://kit.fontawesome.com/60cd01b8da.js" crossorigin="anonymous"></script>
        <!-- Scripts -->
        @routes
        @viteReactRefresh
        @vite(['resources/js/app.jsx', "resources/js/Pages/{$page['component']}.jsx"])
        @inertiaHead
    </head>
    <body class="font-sans antialiased">
        @inertia


    <!-- Required vendors -->
    <script src="{{asset('assets/vendor/global/global.min.js')}}"></script>
	<script src="{{asset('assets/vendor/bootstrap-select/dist/js/bootstrap-select.min.js')}}"></script>

    <script src="{{asset('assets/js/custom.js')}}"></script>
	<script src="{{asset('assets/js/deznav-init.js')}}"></script>
	<script src="{{asset('assets/js/demo.js')}}"></script>
    {{-- <script src="{{ asset('assets/js/styleSwitcher.js') }}"></script> --}}

    @if(Auth::check())
    {{-- <script src="{{ asset('assets/js/styleSwitcher.js') }}"></script> --}}
    @endif

    </body>
</html>
