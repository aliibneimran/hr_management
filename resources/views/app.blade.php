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
        {{-- <link href="{{asset('assets/vendor/swiper/css/swiper-bundle.min.css')}}" rel="stylesheet">
        <link href="{{asset('assets/vendor/swiper/css/swiper-bundle.min.css')}}" rel="stylesheet"> --}}
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/noUiSlider/14.6.4/nouislider.min.css">
        <link href="{{asset('assets/vendor/datatables/css/jquery.dataTables.min.css')}}" rel="stylesheet">
        {{-- <link href="https://cdn.datatables.net/buttons/1.6.4/css/buttons.dataTables.min.css')}}" rel="stylesheet"> --}}
        {{-- <link href="{{asset('assets/vendor/bootstrap-datetimepicker/css/bootstrap-datetimepicker.min.css')}}" rel="stylesheet"> --}}

        <!-- tagify-css -->
        {{-- <link href="{{asset('assets/vendor/tagify/dist/tagify.css')}}" rel="stylesheet"> --}}

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

    {{-- <div id="preloader">
		<div>
			<img src="images/pre.gif" alt="">
		</div>
    </div> --}}


    <!-- Required vendors -->
    <script src="{{asset('assets/vendor/global/global.min.js')}}"></script>
	<script src="{{asset('assets/vendor/chart.js/Chart.bundle.min.js')}}"></script>
	<script src="{{asset('assets/vendor/bootstrap-select/dist/js/bootstrap-select.min.js')}}"></script>
	{{-- <script src="{{asset('assets/vendor/apexchart/apexchart.js')}}"></script> --}}

	<!-- Dashboard 1 -->
	{{-- <script src="{{asset('assets/js/dashboard/dashboard-1.js')}}"></script> --}}
	<script src="{{asset('assets/vendor/draggable/draggable.js')}}"></script>
	{{-- <script src="{{asset('assets/vendor/swiper/js/swiper-bundle.min.js')}}"></script> --}}


	<!-- tagify -->
	{{-- <script src="{{asset('assets/vendor/tagify/dist/tagify.js')}}"></script> --}}

	<script src="{{asset('assets/vendor/datatables/js/jquery.dataTables.min.js')}}"></script>
	<script src="{{asset('assets/vendor/datatables/js/dataTables.buttons.min.js')}}"></script>
	<script src="{{asset('assets/vendor/datatables/js/buttons.html5.min.js')}}"></script>
	<script src="{{asset('assets/vendor/datatables/js/jszip.min.js')}}"></script>
	<script src="{{asset('assets/js/plugins-init/datatables.init.js')}}"></script>

	<!-- Apex Chart -->

	<script src="{{asset('assets/vendor/bootstrap-datetimepicker/js/moment.js')}}"></script>
	<script src="{{asset('assets/vendor/bootstrap-datetimepicker/js/bootstrap-datetimepicker.min.js')}}"></script>


	<!-- Vectormap -->
    {{-- <script src="{{asset('assets/vendor/jqvmap/js/jquery.vmap.min.js')}}"></script>
    <script src="{{asset('assets/vendor/jqvmap/js/jquery.vmap.world.js')}}"></script>
    <script src="{{asset('assets/vendor/jqvmap/js/jquery.vmap.usa.js')}}"></script> --}}
    <script src="{{asset('assets/js/custom.js')}}"></script>
	<script src="{{asset('assets/js/deznav-init.js')}}"></script>
	<script src="{{asset('assets/js/demo.js')}}"></script>
    <script src="{{asset('assets/js/styleSwitcher.js')}}"></script>
    </body>
</html>
