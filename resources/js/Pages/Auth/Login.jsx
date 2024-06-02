import { useEffect, useState } from "react";
import { Link, useForm } from "@inertiajs/react";

export default function Login() {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: "",
        password: "",
        remember: false,
    });

    useEffect(() => {
        return () => {
            reset("password");
        };
    }, []);

    const submit = (e) => {
        e.preventDefault();

        post(route("login"));
    };

    // State variable to track password visibility
    const [showPassword, setShowPassword] = useState(false);
    // Function to toggle password visibility
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div className="auth-page">
            <div className="container-fluid p-0">
                <div className="row g-0">
                    {/* end col */}
                    <div className="col-xxl-6 col-lg-5 col-md-5 d-none d-md-block">
                      {/* <img src="assets/images/login/hr (6).jpg" alt="" width={'100%'} height={'100%'}/> */}
                        <div
                            id="carouselExampleCaptions"
                            className="carousel slide"
                        >
                            <div className="carousel-indicators">
                                <button
                                    type="button"
                                    data-bs-target="#carouselExampleCaptions"
                                    data-bs-slide-to={0}
                                    className="active"
                                    aria-current="true"
                                    aria-label="Slide 1"
                                />
                                <button
                                    type="button"
                                    data-bs-target="#carouselExampleCaptions"
                                    data-bs-slide-to={1}
                                    aria-label="Slide 2"
                                />
                                <button
                                    type="button"
                                    data-bs-target="#carouselExampleCaptions"
                                    data-bs-slide-to={2}
                                    aria-label="Slide 3"
                                />
                            </div>
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img
                                        src="assets/images/login/hr (6).jpg"
                                        className="d-block"
                                        alt="image"

                                        height={600}
                                        width={'100%'}
                                    />
                                    <div className="carousel-caption d-none d-md-block">
                                        <h5>First slide label</h5>
                                        <p>
                                            Some representative placeholder
                                            content for the first slide.
                                        </p>
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <img
                                        src="assets/images/login/hr (7).jpg"
                                        className="d-block"
                                        alt="image"
                                        height={600}
                                        width={'100%'}
                                    />
                                    <div className="carousel-caption d-none d-md-block">
                                        <h5>Second slide label</h5>
                                        <p>
                                            Some representative placeholder
                                            content for the second slide.
                                        </p>
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <img
                                        src="assets/images/login/hr (9).jpg"
                                        className="d-block"
                                        alt="image"
                                        height={600}
                                        width={'100%'}
                                    />
                                    <div className="carousel-caption d-none d-md-block">
                                        <h5>Third slide label</h5>
                                        <p>
                                            Some representative placeholder
                                            content for the third slide.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <button
                                className="carousel-control-prev"
                                type="button"
                                data-bs-target="#carouselExampleCaptions"
                                data-bs-slide="prev"
                            >
                                <span
                                    className="carousel-control-prev-icon"
                                    aria-hidden="true"
                                />
                                <span className="visually-hidden">
                                    Previous
                                </span>
                            </button>
                            <button
                                className="carousel-control-next"
                                type="button"
                                data-bs-target="#carouselExampleCaptions"
                                data-bs-slide="next"
                            >
                                <span
                                    className="carousel-control-next-icon"
                                    aria-hidden="true"
                                />
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div>


                    </div>
                    <div className="col-xxl-6 col-lg-7 col-md-7">
                        <div className="auth-full-page-content d-flex p-sm-5 p-4">
                            <div className="w-75 m-auto">
                                <div className="d-flex flex-column h-100">
                                    <div className="mb-4 mb-md-6 text-center">
                                        <a
                                            className="d-block auth-logo"
                                        >
                                            <img
                                                src="assets/images/logo.jpg"
                                                alt
                                                height={28}
                                            />
                                            {/* <span className="logo-txt">
                                                MY HR LOUNGE
                                            </span> */}
                                        </a>
                                    </div>
                                    <div className="auth-content my-auto">
                                        <div className="text-center">
                                            <p className="text-muted mt-2 h3">
                                                Welcome to HR LOUNGE
                                            </p>
                                        </div>
                                        <div className="text-center">
                                            <p className="text-muted mt-2">
                                                Please sign in with your
                                                credentials
                                            </p>
                                        </div>
                                        <form
                                            className="mt-4 pt-2"
                                            onSubmit={submit}
                                        >
                                            <div className="mb-3">
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="email"
                                                    name="email"
                                                    placeholder="Email or Username"
                                                    value={data.email}
                                                    autoComplete="username"
                                                    isFocused={true}
                                                    onChange={(e) => setData('email', e.target.value)}
                                                />
                                            </div>
                                            <div className="mb-3">
                                                <div className="input-group auth-pass-inputgroup">
                                                    <input
                                                        type={showPassword ? "text" : "password"}
                                                        className="form-control"
                                                        id="password"
                                                        name="password"
                                                        placeholder="Password"
                                                        aria-label="Password"
                                                        aria-describedby="password-addon"
                                                        value={data.password}
                                                        autoComplete="current-password"
                                                        onChange={(e) => setData('password', e.target.value)}
                                                    />
                                                    <button
                                                        onClick={togglePasswordVisibility}
                                                        className="btn btn-light shadow-none ms-0"
                                                        type="button"
                                                        id="password-addon"
                                                    >
                                                        <i className={`mdi ${showPassword ? 'mdi-eye-off-outline' : 'mdi-eye-outline'}`} />
                                                    </button>

                                                </div>
                                            </div>
                                            <div className="row mb-4 mt-4">
                                                <div className="col">
                                                    <div className="form-check">
                                                        <input
                                                            className="form-check-input"
                                                            type="checkbox"
                                                            id="remember"
                                                            name="remember"
                                                            checked={data.remember}
                                                            onChange={(e) => setData('remember', e.target.checked)}
                                                        />
                                                        <label
                                                            className="form-check-label"
                                                            htmlFor="remember-check"
                                                        >
                                                            Remember me
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="mb-3">
                                                <button
                                                    className="btn btn-primary w-100 waves-effect waves-light"
                                                    type="submit"
                                                >
                                                    Log In
                                                </button>
                                            </div>
                                        </form>
                                        <div className="mt-4 pt-2 text-center">
                                            <div className="signin-other-title">
                                                <h5 className="font-size-14 mb-3 text-muted fw-medium">
                                                    - Sign in with -
                                                </h5>
                                            </div>
                                            <ul className="list-inline mb-0">
                                                <li className="list-inline-item">
                                                    <a
                                                        href="javascript:void()"
                                                        className="social-list-item bg-primary text-white border-primary p-1"
                                                    >
                                                        <i className="mdi mdi-facebook" />
                                                    </a>
                                                </li>
                                                <li className="list-inline-item">
                                                    <a
                                                        href="javascript:void()"
                                                        className="social-list-item bg-info text-white border-info p-1"
                                                    >
                                                        <i className="mdi mdi-twitter" />
                                                    </a>
                                                </li>
                                                <li className="list-inline-item">
                                                    <a
                                                        href="javascript:void()"
                                                        className="social-list-item bg-danger text-white border-danger p-1"
                                                    >
                                                        <i className="mdi mdi-google" />
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="mt-3 text-center">
                                            <p className="text-muted mb-0">
                                                Forget password ?
                                                <Link
                                                    href={route('password.request')}
                                                    className="text-primary fw-semibold m-2"
                                                >

                                                    Reset now
                                                </Link>
                                            </p>
                                        </div>
                                    </div>
                                    <div className="mt-4 mt-md-3 text-center">
                                        <p className="mb-0">
                                            <span className="p-2">© Hr Lounge.</span>
                                            {/* <i className="mdi mdi-heart text-danger" /> */}
                                            Developed by <Link>A &amp; A Consulting Limited</Link>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* end auth full page content */}
                    </div>
                    {/* end col */}
                </div>
                {/* end row */}
            </div>
            {/* end container fluid */}
        </div>
    );
}
