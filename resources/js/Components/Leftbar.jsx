import { Link } from '@inertiajs/react'
import React from 'react'

export default function Leftbar() {
  return (
<div className="deznav">
  <div className="deznav-scroll">
    <ul className="metismenu" id="menu">
      <li className="menu-title">YOUR COMPANY</li>
      <li><a className="has-arrow " href="javascript:void(0);" aria-expanded="false">
          <div className="menu-icon">
            <svg fill="#ffffff" height="25px" width="25px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 474.565 474.565" xml:space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path d="M255.204,102.3c-0.606-11.321-12.176-9.395-23.465-9.395C240.078,95.126,247.967,98.216,255.204,102.3z"></path> <path d="M134.524,73.928c-43.825,0-63.997,55.471-28.963,83.37c11.943-31.89,35.718-54.788,66.886-63.826 C163.921,81.685,150.146,73.928,134.524,73.928z"></path> <path d="M43.987,148.617c1.786,5.731,4.1,11.229,6.849,16.438L36.44,179.459c-3.866,3.866-3.866,10.141,0,14.015l25.375,25.383 c1.848,1.848,4.38,2.888,7.019,2.888c2.61,0,5.125-1.04,7.005-2.888l14.38-14.404c2.158,1.142,4.55,1.842,6.785,2.827 c0-0.164-0.016-0.334-0.016-0.498c0-11.771,1.352-22.875,3.759-33.302c-17.362-11.174-28.947-30.57-28.947-52.715 c0-34.592,28.139-62.739,62.723-62.739c23.418,0,43.637,13.037,54.43,32.084c11.523-1.429,22.347-1.429,35.376,1.033 c-1.676-5.07-3.648-10.032-6.118-14.683l14.396-14.411c1.878-1.856,2.918-4.38,2.918-7.004c0-2.625-1.04-5.148-2.918-7.004 l-25.361-25.367c-1.94-1.941-4.472-2.904-7.003-2.904c-2.532,0-5.063,0.963-6.989,2.904l-14.442,14.411 c-5.217-2.764-10.699-5.078-16.444-6.825V9.9c0-5.466-4.411-9.9-9.893-9.9h-35.888c-5.451,0-9.909,4.434-9.909,9.9v20.359 c-5.73,1.747-11.213,4.061-16.446,6.825L75.839,22.689c-1.942-1.941-4.473-2.904-7.005-2.904c-2.531,0-5.077,0.963-7.003,2.896 L36.44,48.048c-1.848,1.864-2.888,4.379-2.888,7.012c0,2.632,1.04,5.148,2.888,7.004l14.396,14.403 c-2.75,5.218-5.063,10.708-6.817,16.438H23.675c-5.482,0-9.909,4.441-9.909,9.915v35.889c0,5.458,4.427,9.908,9.909,9.908H43.987z"></path> <path d="M354.871,340.654c15.872-8.705,26.773-25.367,26.773-44.703c0-28.217-22.967-51.168-51.184-51.168 c-9.923,0-19.118,2.966-26.975,7.873c-4.705,18.728-12.113,36.642-21.803,52.202C309.152,310.022,334.357,322.531,354.871,340.654z "></path> <path d="M460.782,276.588c0-5.909-4.799-10.693-10.685-10.693H428.14c-1.896-6.189-4.411-12.121-7.393-17.75l15.544-15.544 c2.02-2.004,3.137-4.721,3.137-7.555c0-2.835-1.118-5.553-3.137-7.563l-27.363-27.371c-2.08-2.09-4.829-3.138-7.561-3.138 c-2.734,0-5.467,1.048-7.547,3.138l-15.576,15.552c-5.623-2.982-11.539-5.481-17.751-7.369v-21.958 c0-5.901-4.768-10.685-10.669-10.685H311.11c-2.594,0-4.877,1.04-6.739,2.578c3.26,11.895,5.046,24.793,5.046,38.552 c0,8.735-0.682,17.604-1.956,26.423c7.205-2.656,14.876-4.324,22.999-4.324c36.99,0,67.086,30.089,67.086,67.07 c0,23.637-12.345,44.353-30.872,56.303c13.48,14.784,24.195,32.324,31.168,51.976c1.148,0.396,2.344,0.684,3.54,0.684 c2.733,0,5.467-1.04,7.563-3.13l27.379-27.371c2.004-2.004,3.106-4.721,3.106-7.555s-1.102-5.551-3.106-7.563l-15.576-15.552 c2.982-5.621,5.497-11.555,7.393-17.75h21.957c2.826,0,5.575-1.118,7.563-3.138c2.004-1.996,3.138-4.72,3.138-7.555 L460.782,276.588z"></path> <path d="M376.038,413.906c-16.602-48.848-60.471-82.445-111.113-87.018c-16.958,17.958-37.954,29.351-61.731,29.351 c-23.759,0-44.771-11.392-61.713-29.351c-50.672,4.573-94.543,38.17-111.145,87.026l-9.177,27.013 c-2.625,7.773-1.368,16.338,3.416,23.007c4.783,6.671,12.486,10.631,20.685,10.631h315.853c8.215,0,15.918-3.96,20.702-10.631 c4.767-6.669,6.041-15.234,3.4-23.007L376.038,413.906z"></path> <path d="M120.842,206.782c0,60.589,36.883,125.603,82.352,125.603c45.487,0,82.368-65.014,82.368-125.603 C285.563,81.188,120.842,80.939,120.842,206.782z"></path> </g> </g></svg>
          </div>
          <span className="nav-text">Dashboard</span>
        </a>
      </li>
      <li><a className="has-arrow " href="javascript:void(0);" aria-expanded="false">
          <div className="menu-icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-home"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
          </div>
          <span className="nav-text">HR Administration</span>
        </a>
        <ul aria-expanded="false">
          <li><a className="has-arrow" href="javascript:void(0);" aria-expanded="false">Company Profile</a>
            <ul aria-expanded="false">
              <li><a href="./email-compose.html">Company Definition</a></li>
              <li><a href="./email-inbox.html">Company Hierarchy</a></li>
              <li><a href="./email-read.html">Location</a></li>
              <li><a href="./email-read.html">Sub Location</a></li>
              <li><a href="./email-read.html">Cost Centre</a></li>
            </ul>
          </li>
          <li><a className="has-arrow" href="javascript:void(0);" aria-expanded="false">House Keeping</a>
            <ul aria-expanded="false">
              <li><a href="./email-compose.html">House Keeping Master</a></li>
              <li><a href="./email-inbox.html">House Keeping Child</a></li>
                <li><a className="has-arrow" href="javascript:void(0);" aria-expanded="false">Variable Setting</a>
                    <ul aria-expanded="false">
                        <li><a href="./email-compose.html">Blood Group</a></li>
                        <li><a href="./email-inbox.html">Gender</a></li>
                        <li><a href="./email-read.html"> Employee Type</a></li>
                        <li><a href="./email-read.html">Education Board</a></li>
                        <li><a href="./email-read.html">Exam Name</a></li>
                        <li><a href="./email-read.html">Marital Status</a></li>
                        <li><a href="./email-read.html">Language</a></li>
                        <li><a href="./email-read.html">Nationality</a></li>
                        <li><a href="./email-read.html">Religion</a></li>
                        <li><a href="./email-read.html">Salutation</a></li>
                        <li><a href="./email-read.html">Relationships</a></li>
                        <li><a href="./email-read.html">Designation</a></li>
                        <li><a href="./email-read.html">Attachment Type</a></li>
                        <li><a href="./email-read.html">Currency Type</a></li>
                        <li><a href="./email-read.html">Non Cash Benefit</a></li>
                        <li><a href="./email-read.html">Salary Grade</a></li>
                        <li><a href="./email-read.html">Dynamic Fields</a></li>
                        <li><a href="./email-read.html">Employee Status</a></li>
                        <li><a href="./email-read.html">Department</a></li>
                    </ul>
                </li>
            </ul>
          </li>
          <li><a className="has-arrow" href="javascript:void(0);" aria-expanded="false">Work Structure</a>
            <ul aria-expanded="false">
              <li><a href="./email-compose.html">Salary Grade</a></li>
              <li><a href="./email-inbox.html">Corporate Title</a></li>
              <li><a href="./email-read.html">Designation</a></li>
              <li><a href="./email-read.html">Job Description Type</a></li>
              <li><a href="./email-read.html">Job Description</a></li>
            </ul>
          </li>
          <li><a className="has-arrow" href="javascript:void(0);" aria-expanded="false">Common Control</a>
            <ul aria-expanded="false">
              <li><a href="./email-compose.html">Level Configuration</a></li>
              <li><a href="./email-inbox.html">Software Theme Option</a></li>
              <li><a href="./email-read.html">Menu Customization</a></li>
              <li><a href="./email-read.html">Mobile Application Theme Option</a></li>
              <li><a href="./email-read.html">Job Description</a></li>
            </ul>
          </li>
          <li><a href="./chat.html">Geo Code Information</a></li>
          <li><a className="has-arrow" href="javascript:void(0);" aria-expanded="false">Upload Images</a>
            <ul aria-expanded="false">
              <li><a href="./email-compose.html">Bulk Image Uploader </a></li>
              <li><a href="./email-inbox.html">Bulk Attachment Uploader</a></li>
            </ul>
          </li>
        </ul>
      </li>
      <li><a className="has-arrow " href="javascript:void(0);" aria-expanded="false">
          <div className="menu-icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-shield"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
          </div>
          <span className="nav-text">Security</span>
        </a>
        <ul aria-expanded="false">
          <li><a className="has-arrow" href="javascript:void(0);" aria-expanded="false">User Rights</a>
            <ul aria-expanded="false">
                <li><a className="has-arrow" href="javascript:void(0);" aria-expanded="false">Accounts</a>
                    <ul aria-expanded="false">
                        <li><a href="./email-compose.html">Roles</a></li>
                        <li><a href="./email-inbox.html">Role Assignment</a></li>
                        <li><a href="./email-read.html">User Role Rights</a></li>
                    </ul>
                </li>
            </ul>
          </li>
          <li><a className="has-arrow" href="javascript:void(0);" aria-expanded="false">Permission</a>
            <ul aria-expanded="false">
              <li><a href="./email-compose.html">User Permission</a></li>
              <li><a href="./email-inbox.html">Grant Permission</a></li>
              <li><a href="./email-read.html">Assign Permission</a></li>
            </ul>
          </li>
          <li><a href="./chat.html">Workflow</a></li>
          <li><a href="./chat.html">Audit Log</a></li>
        </ul>
      </li>
      <li><a className="has-arrow " href="javascript:void(0);" aria-expanded="false">
          <div className="menu-icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-users"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
          </div>
          <span className="nav-text">Employee Information</span>
        </a>
        <ul aria-expanded="false">
          <li><a href="./chat.html">Add Employee Information</a></li>
          <li><a href="./chat.html">Employee Profile</a></li>
          <li><a href="./chat.html">Supervisor/Team Lead</a></li>
          <li><a href="./chat.html">Manager</a></li>
        </ul>
      </li>
      <li><a className="has-arrow " href="javascript:void(0);" aria-expanded="false">
          <div className="menu-icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-pie-chart"><path d="M21.21 15.89A10 10 0 1 1 8 2.83"></path><path d="M22 12A10 10 0 0 0 12 2v10z"></path></svg>
          </div>
          <span className="nav-text">Organizational Chart</span>
        </a>
        <ul aria-expanded="false">
          <li><a href="./chat.html">Company View</a></li>
          <li><a href="./chat.html">Reporting Structure/Tree</a></li>
        </ul>
      </li>
      <li><a className="has-arrow " href="javascript:void(0);" aria-expanded="false">
          <div className="menu-icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-life-buoy"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="4"></circle><line x1="4.93" y1="4.93" x2="9.17" y2="9.17"></line><line x1="14.83" y1="14.83" x2="19.07" y2="19.07"></line><line x1="14.83" y1="9.17" x2="19.07" y2="4.93"></line><line x1="14.83" y1="9.17" x2="18.36" y2="5.64"></line><line x1="4.93" y1="19.07" x2="9.17" y2="14.83"></line></svg>
          </div>
          <span className="nav-text">Employee Lifecycle</span>
        </a>
        <ul aria-expanded="false">
          <li><a href="./chat.html">Movement Type</a></li>
          <li><a href="./chat.html">Define Reason</a></li>
          <li><a href="./chat.html">Eligibility Configuration</a></li>
          <li><a href="./chat.html">Application</a></li>
          <li><a href="./chat.html">Application Shortlisting</a></li>
          <li><a href="./chat.html">Application History</a></li>
          <li><a href="./chat.html">Update Effective Date</a></li>
          <li><a href="./chat.html">Bulk Application</a></li>
          <li><a href="./chat.html">Excell Uploader</a></li>
        </ul>
      </li>

    </ul>
  </div>
</div>

  )
}
