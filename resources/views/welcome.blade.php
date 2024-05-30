<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Laravel</title>

        <!-- Fonts -->
        <link rel="preconnect" href="https://fonts.bunny.net">
        <link href="https://fonts.bunny.net/css?family=figtree:400,600&display=swap" rel="stylesheet" />
        <!-- App favicon -->
        <link rel="shortcut icon" href="assets/images/favicon.ico">

        <!-- preloader css -->
        {{-- <link rel="stylesheet" href="assets/css/preloader.min.css" type="text/css" /> --}}

        <!-- Bootstrap Css -->
        <link href="assets/css/bootstrap.min.css" id="bootstrap-style" rel="stylesheet" type="text/css" />
        <!-- Icons Css -->
        <link href="assets/css/icons.min.css" rel="stylesheet" type="text/css" />
        <!-- App Css-->
        <link href="assets/css/app.min.css" id="app-style" rel="stylesheet" type="text/css" />
        <link href="assets/css/login.css" id="app-style" rel="stylesheet" type="text/css" />
        <!-- Styles -->

    </head>
    <body>
        <div class="auth-page">
            <div class="container-fluid p-0">
                <div class="row g-0">
                    <!-- end col -->
                    <div class="col-xxl-5 col-lg-5 col-md-5 d-none d-md-block">
                        {{-- <div id="carouselExampleCaptions" class="carousel slide">
                            <div class="carousel-indicators">
                              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                            </div>
                            <div class="carousel-inner">
                              <div class="carousel-item active">
                                <img src="assets/images/login/hr (6).jpg" class="d-block w-100 he" alt="image">
                                <div class="carousel-caption d-none d-md-block">
                                  <h5>First slide label</h5>
                                  <p>Some representative placeholder content for the first slide.</p>
                                </div>
                              </div>
                              <div class="carousel-item">
                                <img src="assets/images/login/hr (7).jpg" class="d-block w-100" alt="image">
                                <div class="carousel-caption d-none d-md-block">
                                  <h5>Second slide label</h5>
                                  <p>Some representative placeholder content for the second slide.</p>
                                </div>
                              </div>
                              <div class="carousel-item">
                                <img src="assets/images/login/hr (9).jpg" class="d-block w-100" alt="image">
                                <div class="carousel-caption d-none d-md-block">
                                  <h5>Third slide label</h5>
                                  <p>Some representative placeholder content for the third slide.</p>
                                </div>
                              </div>
                            </div>
                            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                              <span class="visually-hidden">Previous</span>
                            </button>
                            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                              <span class="carousel-control-next-icon" aria-hidden="true"></span>
                              <span class="visually-hidden">Next</span>
                            </button>
                        </div> --}}
                        <div class="auth-bg pt-md-5 p-4 d-flex">
                            <div class="bg-overlay bg-primary opacity-75"></div>
                            <ul class="bg-bubbles">
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                            </ul>
                            <!-- end bubble effect -->
                            <div class="row justify-content-center align-items-center">
                                <div class="col-xl-7">
                                    <div class="p-0 p-sm-4 px-xl-0">
                                        <div id="reviewcarouselIndicators" class="carousel slide" data-bs-ride="carousel">
                                            <div class="carousel-indicators carousel-indicators-rounded justify-content-start ms-0 mb-0">
                                                <button type="button" data-bs-target="#reviewcarouselIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                                                <button type="button" data-bs-target="#reviewcarouselIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                                <button type="button" data-bs-target="#reviewcarouselIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                                            </div>
                                            <!-- end carouselIndicators -->
                                            <div class="carousel-inner">
                                                <div class="carousel-item active">
                                                    <div class="testi-contain text-white">
                                                        <i class="bx bxs-quote-alt-left text-success display-6"></i>

                                                        <h4 class="mt-4 fw-medium lh-base text-white">“I feel confident
                                                            imposing change
                                                            on myself. It's a lot more progressing fun than looking back.
                                                            That's why
                                                            I ultricies enim
                                                            at malesuada nibh diam on tortor neaded to throw curve balls.”
                                                        </h4>
                                                        <div class="mt-4 pt-3 pb-5">
                                                            <div class="d-flex align-items-start">
                                                                <div class="flex-shrink-0">
                                                                    <img src="assets/images/users/avatar-1.jpg" class="avatar-md img-fluid rounded-circle" alt="...">
                                                                </div>
                                                                <div class="flex-grow-1 ms-3 mb-4">
                                                                    <h5 class="font-size-18 text-white">Richard Drews
                                                                    </h5>
                                                                    <p class="mb-0 text-white-50">Web Designer</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div class="carousel-item">
                                                    <div class="testi-contain text-white">
                                                        <i class="bx bxs-quote-alt-left text-success display-6"></i>

                                                        <h4 class="mt-4 fw-medium lh-base text-white">“Our task must be to
                                                            free ourselves by widening our circle of compassion to embrace
                                                            all living
                                                            creatures and
                                                            the whole of quis consectetur nunc sit amet semper justo. nature
                                                            and its beauty.”</h4>
                                                        <div class="mt-4 pt-3 pb-5">
                                                            <div class="d-flex align-items-start">
                                                                <div class="flex-shrink-0">
                                                                    <img src="assets/images/users/avatar-2.jpg" class="avatar-md img-fluid rounded-circle" alt="...">
                                                                </div>
                                                                <div class="flex-grow-1 ms-3 mb-4">
                                                                    <h5 class="font-size-18 text-white">Rosanna French
                                                                    </h5>
                                                                    <p class="mb-0 text-white-50">Web Developer</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div class="carousel-item">
                                                    <div class="testi-contain text-white">
                                                        <i class="bx bxs-quote-alt-left text-success display-6"></i>

                                                        <h4 class="mt-4 fw-medium lh-base text-white">“I've learned that
                                                            people will forget what you said, people will forget what you
                                                            did,
                                                            but people will never forget
                                                            how donec in efficitur lectus, nec lobortis metus you made them
                                                            feel.”</h4>
                                                        <div class="mt-4 pt-3 pb-5">
                                                            <div class="d-flex align-items-start">
                                                                <img src="assets/images/users/avatar-3.jpg"
                                                                    class="avatar-md img-fluid rounded-circle" alt="...">
                                                                <div class="flex-1 ms-3 mb-4">
                                                                    <h5 class="font-size-18 text-white">Ilse R. Eaton</h5>
                                                                    <p class="mb-0 text-white-50">Manager
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <!-- end carousel-inner -->
                                        </div>
                                        <!-- end review carousel -->
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xxl-7 col-lg-7 col-md-7">
                        <div class="auth-full-page-content d-flex p-sm-5 p-4">
                            <div class="w-60 m-auto">
                                <div class="d-flex flex-column h-100">
                                    <div class="mb-4 mb-md-6 text-center">
                                        <a href="index.html" class="d-block auth-logo">
                                            <img src="assets/images/logo.jpg" alt="" height="28"> <span class="logo-txt">MY HR LOUNGE</span>
                                        </a>
                                    </div>
                                    <div class="auth-content my-auto">
                                        <div class="text-center">
                                            <p class="text-muted mt-2 h3">Welcome to HR LOUNGE</p>
                                        </div>
                                        <div class="text-center">
                                            <p class="text-muted mt-2">Please sign in with your credentials</p>
                                        </div>
                                        <form class="mt-4 pt-2" action="{{route('login')}}" method="POST">
                                            @csrf
                                            <div class="mb-3">
                                                <input type="text" class="form-control" id="email" name="email" placeholder="Email or Username">
                                            </div>
                                            <div class="mb-3">

                                                <div class="input-group auth-pass-inputgroup">
                                                    <input type="password" class="form-control" id="password" name="password"  placeholder="Password" aria-label="Password" aria-describedby="password-addon">
                                                    <button class="btn btn-light shadow-none ms-0" type="button" id="password-addon"><i class="mdi mdi-eye-outline"></i></button>
                                                </div>
                                            </div>
                                            <div class="row mb-4 mt-4">
                                                <div class="col">
                                                    <div class="form-check">
                                                        <input class="form-check-input" type="checkbox" id="remember" name="remember">
                                                        <label class="form-check-label" for="remember-check">
                                                            Remember me
                                                        </label>
                                                    </div>
                                                </div>

                                            </div>
                                            <div class="mb-3">
                                                <button class="btn btn-primary w-100 waves-effect waves-light" type="submit">Log In</button>
                                            </div>
                                        </form>

                                        <div class="mt-4 pt-2 text-center">
                                            <div class="signin-other-title">
                                                <h5 class="font-size-14 mb-3 text-muted fw-medium">- Sign in with -</h5>
                                            </div>

                                            <ul class="list-inline mb-0">
                                                <li class="list-inline-item">
                                                    <a href="javascript:void()"
                                                        class="social-list-item bg-primary text-white border-primary">
                                                        <i class="mdi mdi-facebook"></i>
                                                    </a>
                                                </li>
                                                <li class="list-inline-item">
                                                    <a href="javascript:void()"
                                                        class="social-list-item bg-info text-white border-info">
                                                        <i class="mdi mdi-twitter"></i>
                                                    </a>
                                                </li>
                                                <li class="list-inline-item">
                                                    <a href="javascript:void()"
                                                        class="social-list-item bg-danger text-white border-danger">
                                                        <i class="mdi mdi-google"></i>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>

                                        <div class="mt-3 text-center">
                                            <p class="text-muted mb-0">Forget password ? <a href="auth-register.html"
                                                    class="text-primary fw-semibold"> Reset now</a> </p>
                                        </div>
                                    </div>
                                    <div class="mt-4 mt-md-3 text-center">
                                        <p class="mb-0">© <script>document.write(new Date().getFullYear())</script> Hr Lounge <i class="mdi mdi-heart text-danger"></i> by A & A Consulting Limited</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- end auth full page content -->
                    </div>
                    <!-- end col -->
                </div>
                <!-- end row -->
            </div>
            <!-- end container fluid -->
        </div>


         <!-- JAVASCRIPT -->
         <script src="assets/libs/jquery/jquery.min.js"></script>
         <script src="assets/libs/bootstrap/js/bootstrap.bundle.min.js"></script>
         <script src="assets/libs/metismenu/metisMenu.min.js"></script>
         <script src="assets/libs/simplebar/simplebar.min.js"></script>
         <script src="assets/libs/node-waves/waves.min.js"></script>
         <script src="assets/libs/feather-icons/feather.min.js"></script>
         <!-- pace js -->
         <script src="assets/libs/pace-js/pace.min.js"></script>
         <!-- password addon init -->
         <script src="assets/js/pages/pass-addon.init.js"></script>
    </body>
</html>
