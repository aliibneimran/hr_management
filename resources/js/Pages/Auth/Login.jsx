import { useEffect, useState } from 'react';
import {Link, useForm } from '@inertiajs/react';

export default function Login({ status, canResetPassword }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
        remember: false,
    });

    useEffect(() => {
        return () => {
            reset('password');
        };
    }, []);

    const submit = (e) => {
        e.preventDefault();

        post(route('login'));
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
    <div className="col-xxl-6 col-lg-6 col-md-6">
        <div className="auth-bg pt-md-5 p-4 d-flex d-none d-md-block">

        </div>
      </div>
      <div className="col-xxl-6 col-lg-6 col-md-6">
        <div className="auth-full-page-content d-flex p-sm-5 p-4">
          <div className="w-100">
            <div className="d-flex flex-column h-100">
              <div className="mb-4 mb-md-5 text-center">
                <a href="index.html" className="d-block auth-logo">
                  <img src="assets/images/logo-sm.svg" alt height={28} /> <span className="logo-txt">My Hr Lounge</span>
                </a>
              </div>
              <div className="auth-content my-auto">
                <div className="text-center">
                  <p className="text-muted mt-4">Sign in to continue to MY HR LOUNGE.</p>
                </div>
                <form className="mt-2 pt-2" onSubmit={submit}>
                  <div className="mb-4">
                    <input type="text" className="form-control" id="email" name="email" placeholder="Email Or Username" value={data.email} isFocused={true}
                        onChange={(e) => setData('email', e.target.value)}/>
                  </div>
                  <div className="mb-4">
                    <div className="input-group auth-pass-inputgroup">
                      <input type={showPassword ? "text" : "password"} className="form-control" placeholder="Password" aria-label="Password" aria-describedby="password-addon" id="password" name="password"  value={data.password} autoComplete="current-password"
                        onChange={(e) => setData('password', e.target.value)}/>
                      <button onClick={togglePasswordVisibility} className="btn btn-light shadow-none ms-0" type="button" id="password-addon"><i className={`mdi ${showPassword ? 'mdi-eye-off-outline' : 'mdi-eye-outline'}`} /></button>
                    </div>
                  </div>
                  <div className="d-flex align-items-start mb-4">
                      <div className="flex-grow-1">
                      <div className="form-check">
                        <input className="form-check-input" type="checkbox" id="remember-check" />
                        <label className="form-check-label" htmlFor="remember-check" name="remember" checked={data.remember} onChange={(e) =>setData("remember",e.target.checked)}>
                          Remember me
                        </label>
                      </div>
                      </div>
                      <div className="flex-shrink-0">
                        <div className>
                          <a href="auth-recoverpw.html" className="text-muted">Forgot password?</a>
                        </div>
                      </div>
                    </div>
                  <div className="mb-4">
                    <button className="btn btn-primary w-100 waves-effect waves-light" type="submit">Log In</button>
                  </div>
                </form>
                <div className="mt-4 pt-2 text-center">
                  <div className="signin-other-title">
                    <h5 className="font-size-14 mb-3 text-muted fw-medium">- Sign in with -</h5>
                  </div>
                  <ul className="list-inline mb-0">
                    <li className="list-inline-item">
                      <a href="javascript:void()" className="social-list-item bg-primary text-white border-primary">
                        <i className="mdi mdi-facebook" />
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a href="javascript:void()" className="social-list-item bg-info text-white border-info">
                        <i className="mdi mdi-twitter" />
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a href="javascript:void()" className="social-list-item bg-danger text-white border-danger">
                        <i className="mdi mdi-google" />
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="mt-3 text-center">
                  <p className="text-muted mb-0">Forget Password ? <a href="auth-register.html" className="text-primary fw-semibold"> Reset Now </a> </p>
                </div>
              </div>
              <div className="mt-2 mt-md-2 text-center">
                <p className="mb-0"> © MY HR LOUNGE . Developed <i className="mdi mdi-heart text-danger" /> by <Link>A & A Consulting Limited</Link></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

    );
}
