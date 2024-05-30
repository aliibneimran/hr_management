import Layouts from '@/Layouts/Layouts'
import React from 'react'

export default function about() {
  return (
    <Layouts>
    <div className="main-content">
                <div className="page-content">
                    <div className="container-fluid text-center p-4">
                        <h1>About</h1>
                    </div>
                    {/* container-fluid */}
                </div>
                {/* <Horizontal></Horizontal> */}
                {/* End Page-content */}
                <footer className="footer">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-sm-6">© My Hr Lounge.</div>
                            <div className="col-sm-6">
                                <div className="text-sm-end d-none d-sm-block">
                                    Design &amp; Develop by
                                    <a href="#!" className="text-decoration-underline ml-2">A & A Consulting Limited</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
            </Layouts>
  )
}
