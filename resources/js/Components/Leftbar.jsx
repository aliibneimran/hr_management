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
            <i class="fa-solid fa-shield-halved"></i>
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
            <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g opacity="0.5">
                <path d="M9.34933 14.8577C5.38553 14.8577 2 15.47 2 17.9174C2 20.3666 5.364 21 9.34933 21C13.3131 21 16.6987 20.3877 16.6987 17.9404C16.6987 15.4911 13.3347 14.8577 9.34933 14.8577Z" fill="white" />
                <path opacity="0.4" d="M9.34935 12.5248C12.049 12.5248 14.2124 10.4062 14.2124 7.76241C14.2124 5.11865 12.049 3 9.34935 3C6.65072 3 4.48633 5.11865 4.48633 7.76241C4.48633 10.4062 6.65072 12.5248 9.34935 12.5248Z" fill="white" />
                <path opacity="0.4" d="M16.1734 7.84876C16.1734 9.19508 15.7605 10.4513 15.0364 11.4948C14.9611 11.6022 15.0276 11.7468 15.1587 11.7698C15.3407 11.7996 15.5276 11.8178 15.7184 11.8216C17.6167 11.8705 19.3202 10.6736 19.7908 8.87119C20.4885 6.19677 18.4415 3.79544 15.8339 3.79544C15.5511 3.79544 15.2801 3.82419 15.0159 3.87689C14.9797 3.88456 14.9405 3.9018 14.921 3.93247C14.8955 3.97176 14.9141 4.02254 14.9395 4.05608C15.7233 5.13217 16.1734 6.44208 16.1734 7.84876Z" fill="white" />
                <path d="M21.7791 15.1693C21.4318 14.444 20.5932 13.9466 19.3173 13.7023C18.7155 13.5586 17.0854 13.3545 15.5697 13.3832C15.5472 13.3861 15.5345 13.4014 15.5325 13.411C15.5296 13.4263 15.5365 13.4493 15.5658 13.4656C16.2664 13.8048 18.9738 15.2805 18.6333 18.3928C18.6187 18.5289 18.7292 18.6439 18.8672 18.6247C19.5335 18.5318 21.2478 18.1705 21.7791 17.0475C22.0737 16.4534 22.0737 15.7634 21.7791 15.1693Z" fill="white" />
              </g>
            </svg>
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
            <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g opacity="0.5">
                <path d="M9.34933 14.8577C5.38553 14.8577 2 15.47 2 17.9174C2 20.3666 5.364 21 9.34933 21C13.3131 21 16.6987 20.3877 16.6987 17.9404C16.6987 15.4911 13.3347 14.8577 9.34933 14.8577Z" fill="white" />
                <path opacity="0.4" d="M9.34935 12.5248C12.049 12.5248 14.2124 10.4062 14.2124 7.76241C14.2124 5.11865 12.049 3 9.34935 3C6.65072 3 4.48633 5.11865 4.48633 7.76241C4.48633 10.4062 6.65072 12.5248 9.34935 12.5248Z" fill="white" />
                <path opacity="0.4" d="M16.1734 7.84876C16.1734 9.19508 15.7605 10.4513 15.0364 11.4948C14.9611 11.6022 15.0276 11.7468 15.1587 11.7698C15.3407 11.7996 15.5276 11.8178 15.7184 11.8216C17.6167 11.8705 19.3202 10.6736 19.7908 8.87119C20.4885 6.19677 18.4415 3.79544 15.8339 3.79544C15.5511 3.79544 15.2801 3.82419 15.0159 3.87689C14.9797 3.88456 14.9405 3.9018 14.921 3.93247C14.8955 3.97176 14.9141 4.02254 14.9395 4.05608C15.7233 5.13217 16.1734 6.44208 16.1734 7.84876Z" fill="white" />
                <path d="M21.7791 15.1693C21.4318 14.444 20.5932 13.9466 19.3173 13.7023C18.7155 13.5586 17.0854 13.3545 15.5697 13.3832C15.5472 13.3861 15.5345 13.4014 15.5325 13.411C15.5296 13.4263 15.5365 13.4493 15.5658 13.4656C16.2664 13.8048 18.9738 15.2805 18.6333 18.3928C18.6187 18.5289 18.7292 18.6439 18.8672 18.6247C19.5335 18.5318 21.2478 18.1705 21.7791 17.0475C22.0737 16.4534 22.0737 15.7634 21.7791 15.1693Z" fill="white" />
              </g>
            </svg>
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
            <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g opacity="0.5">
                <path d="M9.34933 14.8577C5.38553 14.8577 2 15.47 2 17.9174C2 20.3666 5.364 21 9.34933 21C13.3131 21 16.6987 20.3877 16.6987 17.9404C16.6987 15.4911 13.3347 14.8577 9.34933 14.8577Z" fill="white" />
                <path opacity="0.4" d="M9.34935 12.5248C12.049 12.5248 14.2124 10.4062 14.2124 7.76241C14.2124 5.11865 12.049 3 9.34935 3C6.65072 3 4.48633 5.11865 4.48633 7.76241C4.48633 10.4062 6.65072 12.5248 9.34935 12.5248Z" fill="white" />
                <path opacity="0.4" d="M16.1734 7.84876C16.1734 9.19508 15.7605 10.4513 15.0364 11.4948C14.9611 11.6022 15.0276 11.7468 15.1587 11.7698C15.3407 11.7996 15.5276 11.8178 15.7184 11.8216C17.6167 11.8705 19.3202 10.6736 19.7908 8.87119C20.4885 6.19677 18.4415 3.79544 15.8339 3.79544C15.5511 3.79544 15.2801 3.82419 15.0159 3.87689C14.9797 3.88456 14.9405 3.9018 14.921 3.93247C14.8955 3.97176 14.9141 4.02254 14.9395 4.05608C15.7233 5.13217 16.1734 6.44208 16.1734 7.84876Z" fill="white" />
                <path d="M21.7791 15.1693C21.4318 14.444 20.5932 13.9466 19.3173 13.7023C18.7155 13.5586 17.0854 13.3545 15.5697 13.3832C15.5472 13.3861 15.5345 13.4014 15.5325 13.411C15.5296 13.4263 15.5365 13.4493 15.5658 13.4656C16.2664 13.8048 18.9738 15.2805 18.6333 18.3928C18.6187 18.5289 18.7292 18.6439 18.8672 18.6247C19.5335 18.5318 21.2478 18.1705 21.7791 17.0475C22.0737 16.4534 22.0737 15.7634 21.7791 15.1693Z" fill="white" />
              </g>
            </svg>
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
            <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g opacity="0.5">
                <path d="M9.34933 14.8577C5.38553 14.8577 2 15.47 2 17.9174C2 20.3666 5.364 21 9.34933 21C13.3131 21 16.6987 20.3877 16.6987 17.9404C16.6987 15.4911 13.3347 14.8577 9.34933 14.8577Z" fill="white" />
                <path opacity="0.4" d="M9.34935 12.5248C12.049 12.5248 14.2124 10.4062 14.2124 7.76241C14.2124 5.11865 12.049 3 9.34935 3C6.65072 3 4.48633 5.11865 4.48633 7.76241C4.48633 10.4062 6.65072 12.5248 9.34935 12.5248Z" fill="white" />
                <path opacity="0.4" d="M16.1734 7.84876C16.1734 9.19508 15.7605 10.4513 15.0364 11.4948C14.9611 11.6022 15.0276 11.7468 15.1587 11.7698C15.3407 11.7996 15.5276 11.8178 15.7184 11.8216C17.6167 11.8705 19.3202 10.6736 19.7908 8.87119C20.4885 6.19677 18.4415 3.79544 15.8339 3.79544C15.5511 3.79544 15.2801 3.82419 15.0159 3.87689C14.9797 3.88456 14.9405 3.9018 14.921 3.93247C14.8955 3.97176 14.9141 4.02254 14.9395 4.05608C15.7233 5.13217 16.1734 6.44208 16.1734 7.84876Z" fill="white" />
                <path d="M21.7791 15.1693C21.4318 14.444 20.5932 13.9466 19.3173 13.7023C18.7155 13.5586 17.0854 13.3545 15.5697 13.3832C15.5472 13.3861 15.5345 13.4014 15.5325 13.411C15.5296 13.4263 15.5365 13.4493 15.5658 13.4656C16.2664 13.8048 18.9738 15.2805 18.6333 18.3928C18.6187 18.5289 18.7292 18.6439 18.8672 18.6247C19.5335 18.5318 21.2478 18.1705 21.7791 17.0475C22.0737 16.4534 22.0737 15.7634 21.7791 15.1693Z" fill="white" />
              </g>
            </svg>
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
      <li><a className="has-arrow " href="javascript:void(0);" aria-expanded="false">
          <div className="menu-icon">
            <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g opacity="0.5">
                <path opacity="0.4" d="M11.776 21.8374C9.49292 20.4273 7.37062 18.7645 5.44789 16.8796C4.0905 15.5338 3.05386 13.8905 2.41716 12.0753C1.27953 8.53523 2.60381 4.48948 6.30111 3.2884C8.25262 2.67553 10.375 3.05175 12.007 4.29983C13.6396 3.05315 15.7614 2.67705 17.713 3.2884C21.4103 4.48948 22.7435 8.53523 21.6058 12.0753C20.9743 13.8888 19.9438 15.5319 18.5929 16.8796C16.6684 18.7625 14.5463 20.4251 12.2648 21.8374L12.0159 22L11.776 21.8374Z" fill="white" />
                <path d="M12.0109 22L11.776 21.8374C9.49013 20.4274 7.36487 18.7647 5.43902 16.8796C4.0752 15.5356 3.03238 13.8922 2.39052 12.0753C1.26177 8.53523 2.58605 4.48948 6.28335 3.2884C8.23486 2.67553 10.3853 3.05204 12.0109 4.31057V22Z" fill="white" />
                <path d="M18.2304 9.99922C18.0296 9.98629 17.8425 9.8859 17.7131 9.72157C17.5836 9.55723 17.5232 9.3434 17.5459 9.13016C17.5677 8.4278 17.168 7.78851 16.5517 7.53977C16.1609 7.43309 15.9243 7.00987 16.022 6.59249C16.1148 6.18182 16.4993 5.92647 16.8858 6.0189C16.9346 6.027 16.9816 6.04468 17.0244 6.07105C18.2601 6.54658 19.0601 7.82641 18.9965 9.22576C18.9944 9.43785 18.9117 9.63998 18.7673 9.78581C18.6229 9.93164 18.4291 10.0087 18.2304 9.99922Z" fill="white" />
              </g>
            </svg>
          </div>
          <span className="nav-text">Bootstrap</span>
        </a>
        <ul aria-expanded="false">
          <li><a href="./ui-accordion.html">Accordion</a></li>
          <li><a href="./ui-alert.html">Alert</a></li>
          <li><a href="./ui-badge.html">Badge</a></li>
          <li><a href="./ui-button.html">Button</a></li>
          <li><a href="./ui-modal.html">Modal</a></li>
          <li className="extra-menu-li">
            <ul id="collapseExample" className="pt-0 extra-menu-links extra-menu-area">
              <li><a href="./ui-button-group.html">Button Group</a></li>
              <li><a href="./ui-list-group.html">List Group</a></li>
              <li><a href="./ui-card.html">Cards</a></li>
              <li><a href="./ui-carousel.html">Carousel</a></li>
              <li><a href="./ui-dropdown.html">Dropdown</a></li>
              <li><a href="./ui-popover.html">Popover</a></li>
              <li><a href="./ui-progressbar.html">Progressbar</a></li>
              <li><a href="./ui-tab.html">Tab</a></li>
              <li><a href="./ui-typography.html">Typography</a></li>
              <li><a href="./ui-pagination.html">Pagination</a></li>
              <li><a href="./ui-grid.html">Grid</a></li>
            </ul>
            <a className="btn show-more-btn border-0" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
              <span className="show-more">Show More + </span>
              <span className="show-less">Show Less - </span>
            </a>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</div>

  )
}
