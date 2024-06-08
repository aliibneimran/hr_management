import { Link, useForm } from "@inertiajs/react";
import React, { useEffect, useState } from "react";

export default function ForgetRight() {
    const { data, setData, post, processing, errors } = useForm({
        email: "",
    });

    const submit = (e) => {
        e.preventDefault();

        post(route("password.email"));
    };

    return (
        <div className="auth-full-page-content d-flex p-sm-5 p-4">
            <div className="w-75 m-auto">
                <div className="d-flex flex-column h-100">
                    <div className="mb-4 mb-md-6 text-center">
                        <a className="d-block auth-logo">
                            <img src="assets/images/logo.jpg" alt height={28} />
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
                                Please sign in with your credentials
                            </p>
                        </div>
                        <form className="mt-4 pt-2" onSubmit={submit}>
                            <div className="mb-3">
                                <input
                                    type="text"
                                    className="form-control"
                                    id="email"
                                    name="email"
                                    placeholder="Email"
                                    value={data.email}
                                    isFocused={true}
                                    onChange={(e) =>
                                        setData(
                                            "email",
                                            e.target.value
                                        )
                                    }
                                />
                            </div>


                            <div className="mb-3">
                                <button
                                    className="btn btn-primary w-100 waves-effect waves-light"
                                    type="submit"
                                >
                                    Reset
                                </button>
                            </div>
                        </form>

                        <div className="mt-3 text-center">
                            <p className="text-muted mb-0">
                                Remember it ?
                                <Link
                                    href={route("login")}
                                    className="text-primary fw-semibold m-2"
                                >
                                    Sign in
                                </Link>
                            </p>
                        </div>
                    </div>
                    <div className="mt-4 mt-md-3 text-center">
                        <p className="mb-0">
                            <span className="p-2">© Hr Lounge.</span>
                            {/* <i className="mdi mdi-heart text-danger" /> */}
                            Developed by{" "}
                            <Link>A &amp; A Consulting Limited</Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
