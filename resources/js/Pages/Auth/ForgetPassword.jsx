import LoginLeft from "@/Components/LoginLeft";
import ForgetRight from "@/Components/ForgetRight";

export default function ForgetPassword() {
    return (
        <div className="auth-page">
            <div className="container-fluid p-0">
                <div className="row g-0">
                    {/* end col */}
                    <div className="col-xxl-6 col-lg-5 col-md-5 d-none d-md-block">
                      {/* <img src="assets/images/login/hr (6).jpg" alt="" width={'100%'} height={'100%'}/> */}
                       <LoginLeft></LoginLeft>


                    </div>
                    <div className="col-xxl-6 col-lg-7 col-md-7">
                        <ForgetRight></ForgetRight>
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
