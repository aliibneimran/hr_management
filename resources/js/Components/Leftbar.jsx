import { Link } from '@inertiajs/react'
import React from 'react'

export default function Leftbar() {
  return (
<div className="deznav">
  <div className="deznav-scroll">
    <ul className="metismenu" id="menu">
      {/* <li className="menu-title">YOUR COMPANY</li> */}
      <li><Link className="has-arrow " href="javascript:void(0);" aria-expanded="false">
          <div className="menu-icon">
            <i class="fa-solid fa-shield-halved"></i>
            {/* <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-shield"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg> */}
          </div>
          <span className="nav-text">Security</span>
        </Link>
        <ul aria-expanded="false">
          <li><Link className="has-arrow" href="javascript:void(0);" aria-expanded="false">User Rights</Link>
            <ul aria-expanded="false">
                <li><Link className="has-arrow" href="javascript:void(0);" aria-expanded="false">Accounts</Link>
                    <ul aria-expanded="false">
                        <li><Link href="./email-compose.html">Roles</Link></li>
                        <li><Link href="./email-inbox.html"> Role Assignment </Link></li>
                        <li><Link href="./email-read.html">User Role Rights</Link></li>
                    </ul>
                </li>
            </ul>
          </li>
          <li><Link className="has-arrow" href="javascript:void(0);" aria-expanded="false">Permission</Link>
            <ul aria-expanded="false">
              <li><Link href="./email-compose.html">User Permission</Link></li>
              <li><Link href="./email-inbox.html">Grant Permission</Link></li>
              <li><Link href="./email-read.html">Assign Permission</Link></li>
            </ul>
          </li>
          <li><Link href={route('about')}>Workflow</Link></li>
          <li><Link href="./chat.html">Audit Log</Link></li>
        </ul>
      </li>

      <li><Link href="task.html" className aria-expanded="false">
        <div className="menu-icon">
            <i class="fa-solid fa-umbrella-beach"></i>
            {/* <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-feather"><path d="M20.24 4.24a5.5 5.5 0 0 0-7.78 0L3 13.49V21h7.51l9.49-9.49a5.5 5.5 0 0 0 0-7.78z"></path><line x1="16" y1="8" x2="2" y2="22"></line><line x1="17.5" y1="15" x2="9" y2="15"></line></svg> */}

        </div>
        <span className="nav-text">Leave Management</span>
        </Link>
      </li>




    </ul>
  </div>
</div>

  )
}
