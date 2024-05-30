import { Link } from '@inertiajs/react'
import React from 'react'

export default function Leftbar() {
  return (
    <div className="vertical-menu">
    <div data-simplebar className="h-100">
      {/*- Sidemenu */}
      <div id="sidebar-menu">
        {/* Left Menu Start */}
        <ul className="metismenu list-unstyled" id="side-menu">
          <li className="menu-title" data-key="t-menu">Menu</li>
          {/* <li><a href="index.html">
              <i data-feather="home" />
              <span data-key="t-dashboard">HR</span></a>
          </li> */}
          <li>
            <a href="javascript: void(0);" className="has-arrow">
              <i class="fa-solid fa-user-tie"></i>
              {/* <img src="/assets/images/icon/admin.png" alt="icon"  width={25}/> */}
              {/* <i class="fa-brands fa-black-tie"></i> */}
              <span data-key="t-apps">HR Administration</span>
            </a>
            <ul className="sub-menu" aria-expanded="false">
              <li><a href="javascript: void(0);" className="has-arrow"><span data-key="t-email">Company Profile</span></a>
                <ul className="sub-menu" aria-expanded="false">
                  <li><a href="apps-email-inbox.html" data-key="t-inbox">Company Definition</a></li>
                  <li><a href="apps-email-read.html" data-key="t-read-email">Company Hierarchy</a></li>
                  <li><a href="apps-email-read.html" data-key="t-read-email">Location</a></li>
                  <li><a href="apps-email-read.html" data-key="t-read-email">Sub Location</a></li>
                  <li><a href="apps-email-read.html" data-key="t-read-email">Cost Centre</a></li>
                </ul>
              </li>
              <li><a href="apps-calendar.html"><span data-key="t-calendar">House Keeping</span></a></li>
              <li><a href="javascript: void(0);" className="has-arrow"><span data-key="t-email">Work Structure</span></a>
                <ul className="sub-menu" aria-expanded="false">
                  <li><a href="apps-email-inbox.html" data-key="t-inbox">Salary Grade</a></li>
                  <li><a href="apps-email-read.html" data-key="t-read-email">Corporate Title</a></li>
                  <li><a href="apps-email-read.html" data-key="t-read-email">Designation</a></li>
                  <li><a href="apps-email-read.html" data-key="t-read-email">Job Description Type</a></li>
                  <li><a href="apps-email-read.html" data-key="t-read-email">Job Description</a></li>
                </ul>
              </li>
              <li><a href="javascript: void(0);" className="has-arrow"><span data-key="t-email">Variable Setting</span></a>
                <ul className="sub-menu" aria-expanded="false">
                  <li><a href="apps-email-inbox.html" data-key="t-inbox">Blood Group</a></li>
                  <li><a href="apps-email-read.html" data-key="t-read-email">Gender</a></li>
                  <li><a href="apps-email-read.html" data-key="t-read-email">Employee Type</a></li>
                  <li><a href="apps-email-read.html" data-key="t-read-email">Education Board</a></li>
                  <li><a href="apps-email-read.html" data-key="t-read-email">Exam Name</a></li>
                  <li><a href="apps-email-read.html" data-key="t-read-email">Marital Status</a></li>
                  <li><a href="apps-email-read.html" data-key="t-read-email">Language</a></li>
                  <li><a href="apps-email-read.html" data-key="t-read-email">Nationality</a></li>
                  <li><a href="apps-email-read.html" data-key="t-read-email">Religion</a></li>
                  <li><a href="apps-email-read.html" data-key="t-read-email">Salutation</a></li>
                  <li><a href="apps-email-read.html" data-key="t-read-email">Relationships</a></li>
                  <li><a href="apps-email-read.html" data-key="t-read-email">Designation</a></li>
                  <li><a href="apps-email-read.html" data-key="t-read-email">Attachment Type</a></li>
                  <li><a href="apps-email-read.html" data-key="t-read-email">Currency Type</a></li>
                  <li><a href="apps-email-read.html" data-key="t-read-email">Non Cash Benefit</a></li>
                  <li><a href="apps-email-read.html" data-key="t-read-email">Salary Grade</a></li>
                </ul>
              </li>
              <li><a href="apps-calendar.html"><span data-key="t-calendar">Level  Configuration</span></a></li>
              <li><a href="apps-calendar.html"><span data-key="t-calendar">Geo Code Information</span></a></li>
              <li><a href="javascript: void(0);" className="has-arrow"><span data-key="t-email">Upload Images</span></a>
                <ul className="sub-menu" aria-expanded="false">
                  <li><a href="apps-email-inbox.html" data-key="t-inbox">Bulk Image Uploader</a></li>
                  <li><a href="apps-email-read.html" data-key="t-read-email">Bulk Attachment Uploader</a></li>
                </ul>
              </li>
            </ul>
          </li>
          <li>
            <a href="javascript: void(0);" className="has-arrow">
              <i class="fa-solid fa-shield-halved"></i>
              {/* <img src="/assets/images/icon/security.png" alt="icon"  width={25}/> */}
              <span data-key="t-apps">Security</span>
            </a>
            <ul className="sub-menu" aria-expanded="false">
              <li><a href="javascript: void(0);" className="has-arrow"><span data-key="t-email">User Rights</span></a>
                <ul className="sub-menu" aria-expanded="false">
                  <li><a href="apps-email-inbox.html" data-key="t-inbox">Accounts</a></li>
                  <li><a href="apps-email-read.html" data-key="t-read-email">Roles</a></li>
                  <li><a href="apps-email-read.html" data-key="t-read-email">Role Assignment</a></li>
                  <li><a href="apps-email-read.html" data-key="t-read-email">User Role Rights</a></li>
                </ul>
              </li>
              <li><a href="javascript: void(0);" className="has-arrow"><span data-key="t-email">Permission</span></a>
                <ul className="sub-menu" aria-expanded="false">
                  <li><a href="apps-email-inbox.html" data-key="t-inbox">User Permissions</a></li>
                  <li><a href="apps-email-read.html" data-key="t-read-email">Grant Permissions</a></li>
                  <li><a href="apps-email-read.html" data-key="t-read-email">Assign Permissions</a></li>
                </ul>
              </li>
              <li><a href="apps-calendar.html"><span data-key="t-calendar">Workflow</span></a></li>
              <li><a href="apps-calendar.html"><span data-key="t-calendar">Audit Log</span></a></li>
            </ul>
          </li>
          <li><a href="index.html">
              <i class="fa-solid fa-user-check"></i>
              {/* <img src="/assets/images/icon/employee.png" alt="icon"  width={25}/> */}
              <span data-key="t-dashboard">Employee Information</span></a>
          </li>
          <li><a href="index.html">
              <i class="fa-solid fa-sitemap"></i>
              {/* <img src="/assets/images/icon/hierarchy.png" alt="icon"  width={25}/> */}
              <span data-key="t-dashboard">Organizational Chart</span></a>
          </li>
          <li><a href="index.html">
              <i class="fa-solid fa-arrows-spin"></i>
              {/* <img src="/assets/images/icon/cycle.png" alt="icon"  width={25}/> */}
              <span data-key="t-dashboard">Employee Life Cycle</span></a>
          </li>
          <li><a href="index.html">
              <i class="fa-solid fa-umbrella-beach"></i>
              {/* <img src="/assets/images/icon/vacation.png" alt="icon"  width={25}/> */}
              <span data-key="t-dashboard">Leave  Management</span></a>
          </li>
          <li><a href="index.html">
              <i class="fa-solid fa-clipboard-user"></i>
              {/* <img src="/assets/images/icon/attent.png" alt="icon"  width={25}/> */}
              <span data-key="t-dashboard">Attendance Management</span></a>
          </li>
          <li><a href="index.html">
              <i class="fa-solid fa-money-check-dollar"></i>
              {/* <img src="/assets/images/icon/salary.png" alt="icon"  width={25}/> */}
              <span data-key="t-dashboard">Payroll Management</span></a>
          </li>
          <li><a href="index.html">
              <i class="fa-solid fa-circle-exclamation"></i>
              {/* <img src="/assets/images/icon/claim.png" alt="icon"  width={25}/> */}
              <span data-key="t-dashboard">Claim Management</span></a>
          </li>
          <li><a href="index.html">
              <i class="fa-solid fa-file-circle-check"></i>
              {/* <img src="/assets/images/icon/report.png" alt="icon"  width={25}/> */}
              <span data-key="t-dashboard">On Demand Reports</span></a>
          </li>
          <li><a href="index.html">
              <i class="fa-solid fa-eye"></i>
              {/* <img src="/assets/images/icon/review.png" alt="icon"  width={25}/> */}
              <span data-key="t-dashboard">Report Viewer</span></a>
          </li>
          <li><a href="index.html">
              <i class="fa-solid fa-users-gear"></i>
              {/* <img src="/assets/images/icon/workforce.png" alt="icon"  width={25}/> */}
              <span data-key="t-dashboard">Workforce Planning</span></a>
          </li>
          <li><a href="index.html">
            <i class="fa-solid fa-store"></i>
          {/* <img src="/assets/images/icon/gift.png" alt="icon"  width={25}/> */}
              <span data-key="t-dashboard">Recruitment Management</span></a>
          </li>
          <li><a href="index.html">
          <i class="fa-solid fa-chart-line"></i>
          {/* <img src="/assets/images/icon/performance.png" alt="icon"  width={25}/> */}
              <span data-key="t-dashboard">Performance Management</span></a>
          </li>
          <li><a href="index.html">
          <i class="fa-solid fa-chalkboard-user"></i>
          {/* <img src="/assets/images/icon/learning.png" alt="icon"  width={25}/> */}
              <span data-key="t-dashboard">Learning Management</span></a>
          </li>
          <li><a href="index.html">
          <i class="fa-solid fa-graduation-cap"></i>
          {/* <img src="/assets/images/icon/examination.png" alt="icon"  width={25}/> */}
              <span data-key="t-dashboard">Probation Evaluation</span></a>
          </li>
          <li><a href="index.html">
          <i class="fa-solid fa-hand"></i>
          {/* <img src="/assets/images/icon/request.png" alt="icon"  width={25}/> */}
              <span data-key="t-dashboard">Request Tracker</span></a>
          </li>
          <li><a href="index.html">
          <i class="fa-solid fa-comments"></i>
          {/* <img src="/assets/images/icon/complain.png" alt="icon"  width={25}/> */}
              <span data-key="t-dashboard">Grievance Handling</span></a>
          </li>
        </ul>
        <div className="card sidebar-alert border-0 text-center mx-4 mb-0 mt-5">
          <div className="card-body">
            <img src="assets/images/giftbox.png" alt />
            <div className="mt-4">
              <h5 className="alertcard-title font-size-16">Unlimited Access</h5>
              <p className="font-size-13">Upgrade your plan from a Free trial, to select ‘Business Plan’.</p>
              <a href="#!" className="btn btn-primary mt-2">Upgrade Now</a>
            </div>
          </div>
        </div>
      </div>
      {/* Sidebar */}
    </div>
  </div>
  )
}
