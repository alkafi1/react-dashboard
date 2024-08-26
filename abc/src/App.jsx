
import { useEffect, useState } from 'react';
import './App.css'

function App() {
  const [isActive, setIsActive] = useState(false);
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  // Handler for toggling the menu
  const handleMenuToggle = () => {
    setIsMenuVisible(prev => !prev);
  };

  // Handler for toggling the active state
  const handleToggleClick = () => {
    setIsActive(prev => !prev);
  };

  // Apply data attribute to body based on isActive
  useEffect(() => {
    if (isActive) {
      document.body.setAttribute('data-kt-aside-minimize', 'on');
    } else {
      document.body.removeAttribute('data-kt-aside-minimize');
    }
  }, [isActive]);



  return (
    <>
      <div className="d-flex flex-column flex-root">
        <div className="page d-flex flex-row flex-column-fluid">
          <div
            id="kt_aside"
            className={`aside aside-dark aside-hoverable ${isActive ? 'aside-minimized' : ''}`}
            data-kt-drawer="true"
            data-kt-drawer-name="aside"
            data-kt-drawer-activate="{default: true, lg: false}"
            data-kt-drawer-overlay="true"
            data-kt-drawer-width="{default:'200px', '300px': '250px'}"
            data-kt-drawer-direction="start"
            data-kt-drawer-toggle="#kt_aside_mobile_toggle"
          >
            <div className="aside-logo flex-column-auto" id="kt_aside_logo">
              <a href="#">
                <img alt="Logo" src="/src/assets/media/logos/logo-2.svg" className="logo" />
              </a>
              <div
                id="kt_aside_toggle"
                className={`btn btn-icon w-auto px-0 btn-active-color-primary aside-toggle ${isActive ? 'active' : ''}`}
                onClick={handleToggleClick}
                data-kt-toggle="true"
                data-kt-toggle-state="active"
                data-kt-toggle-target="body"
                data-kt-toggle-name="aside-minimize"
              >
                <span className="svg-icon svg-icon-1 rotate-180">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path opacity="0.5"
                      d="M14.2657 11.4343L18.45 7.25C18.8642 6.83579 18.8642 6.16421 18.45 5.75C18.0358 5.33579 17.3642 5.33579 16.95 5.75L11.4071 11.2929C11.0166 11.6834 11.0166 12.3166 11.4071 12.7071L16.95 18.25C17.3642 18.6642 18.0358 18.6642 18.45 18.25C18.8642 17.8358 18.8642 17.1642 18.45 16.75L14.2657 12.5657C13.9533 12.2533 13.9533 11.7467 14.2657 11.4343Z"
                      fill="black" />
                    <path
                      d="M8.2657 11.4343L12.45 7.25C12.8642 6.83579 12.8642 6.16421 12.45 5.75C12.0358 5.33579 11.3642 5.33579 10.95 5.75L5.40712 11.2929C5.01659 11.6834 5.01659 12.3166 5.40712 12.7071L10.95 18.25C11.3642 18.6642 12.0358 18.6642 12.45 18.25C12.8642 17.8358 12.8642 17.1642 12.45 16.75L8.2657 12.5657C7.95328 12.2533 7.95328 11.7467 8.2657 11.4343Z"
                      fill="black" />
                  </svg>
                </span>
              </div>
            </div>
            <div className="aside-menu flex-column-fluid">
              <div className="hover-scroll-overlay-y my-5 my-lg-5" id="kt_aside_menu_wrapper" data-kt-scroll="true"
                data-kt-scroll-activate="{default: false, lg: true}" data-kt-scroll-height="auto"
                data-kt-scroll-dependencies="#kt_aside_logo, #kt_aside_footer"
                data-kt-scroll-wrappers="#kt_aside_menu" data-kt-scroll-offset="0">
                <div className="menu menu-column menu-title-gray-800 menu-state-title-primary menu-state-icon-primary menu-state-bullet-primary menu-arrow-gray-500"
                  id="#kt_aside_menu" data-kt-menu="true">
                  <div className="menu-item">
                    <div className="menu-content pb-2">
                      <span className="menu-section text-muted text-uppercase fs-8 ls-1">Dashboard</span>
                    </div>
                  </div>
                  <div className="menu-item">
                    <a className="menu-link active" href="#">
                      <span className="menu-icon">
                        <span className="svg-icon svg-icon-2">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                            viewBox="0 0 24 24" fill="none">
                            <rect x="2" y="2" width="9" height="9" rx="2" fill="black" />
                            <rect opacity="0.3" x="13" y="2" width="9" height="9" rx="2" fill="black" />
                            <rect opacity="0.3" x="13" y="13" width="9" height="9" rx="2"
                              fill="black" />
                            <rect opacity="0.3" x="2" y="13" width="9" height="9" rx="2" fill="black" />
                          </svg>
                        </span>
                      </span>
                      <span className="menu-title">Default</span>
                    </a>
                  </div>

                  <div className="menu-item">
                    <div className="menu-content pt-8 pb-2">
                      <span className="menu-section text-muted text-uppercase fs-8 ls-1">Crafted</span>
                    </div>
                  </div>
                  <div data-kt-menu-trigger="click" className="menu-item menu-accordion">
                    <span className="menu-link">
                      <span className="menu-icon">
                        <span className="svg-icon svg-icon-2">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                            viewBox="0 0 24 24" fill="none">
                            <path
                              d="M21 9V11C21 11.6 20.6 12 20 12H14V8H20C20.6 8 21 8.4 21 9ZM10 8H4C3.4 8 3 8.4 3 9V11C3 11.6 3.4 12 4 12H10V8Z"
                              fill="black" />
                            <path
                              d="M15 2C13.3 2 12 3.3 12 5V8H15C16.7 8 18 6.7 18 5C18 3.3 16.7 2 15 2Z"
                              fill="black" />
                            <path opacity="0.3"
                              d="M9 2C10.7 2 12 3.3 12 5V8H9C7.3 8 6 6.7 6 5C6 3.3 7.3 2 9 2ZM4 12V21C4 21.6 4.4 22 5 22H10V12H4ZM20 12V21C20 21.6 19.6 22 19 22H14V12H20Z"
                              fill="black" />
                          </svg>
                        </span>
                      </span>
                      <span className="menu-title">Pages</span>
                      <span className="menu-arrow"></span>
                    </span>
                    <div className="menu-sub menu-sub-accordion menu-active-bg">
                      <div data-kt-menu-trigger="click" className="menu-item menu-accordion">
                        <span className="menu-link">
                          <span className="menu-bullet">
                            <span className="bullet bullet-dot"></span>
                          </span>
                          <span className="menu-title">Profile</span>
                          <span className="menu-arrow"></span>
                        </span>
                        <div className="menu-sub menu-sub-accordion menu-active-bg">
                          <div className="menu-item">
                            <a className="menu-link" href="../../demo1/dist/pages/profile/overview.html">
                              <span className="menu-bullet">
                                <span className="bullet bullet-dot"></span>
                              </span>
                              <span className="menu-title">Overview</span>
                            </a>
                          </div>
                          <div className="menu-item">
                            <a className="menu-link" href="../../demo1/dist/pages/profile/projects.html">
                              <span className="menu-bullet">
                                <span className="bullet bullet-dot"></span>
                              </span>
                              <span className="menu-title">Projects</span>
                            </a>
                          </div>
                          <div className="menu-item">
                            <a className="menu-link" href="../../demo1/dist/pages/profile/campaigns.html">
                              <span className="menu-bullet">
                                <span className="bullet bullet-dot"></span>
                              </span>
                              <span className="menu-title">Campaigns</span>
                            </a>
                          </div>
                          <div className="menu-item">
                            <a className="menu-link" href="../../demo1/dist/pages/profile/documents.html">
                              <span className="menu-bullet">
                                <span className="bullet bullet-dot"></span>
                              </span>
                              <span className="menu-title">Documents</span>
                            </a>
                          </div>
                          <div className="menu-item">
                            <a className="menu-link" href="../../demo1/dist/pages/profile/connections.html">
                              <span className="menu-bullet">
                                <span className="bullet bullet-dot"></span>
                              </span>
                              <span className="menu-title">Connections</span>
                            </a>
                          </div>
                          <div className="menu-item">
                            <a className="menu-link" href="../../demo1/dist/pages/profile/activity.html">
                              <span className="menu-bullet">
                                <span className="bullet bullet-dot"></span>
                              </span>
                              <span className="menu-title">Activity</span>
                            </a>
                          </div>
                        </div>
                      </div>

                    </div>
                  </div>

                </div>
              </div>
            </div>

          </div>
          <div className="wrapper d-flex flex-column flex-row-fluid" id="kt_wrapper">
            <div id="kt_header" className="header align-items-stretch">
              <div className="container-fluid d-flex align-items-stretch justify-content-between">
                <div className="d-flex align-items-center d-lg-none ms-n3 me-1" title="Show aside menu">
                  <div className="btn btn-icon btn-active-light-primary w-30px h-30px w-md-40px h-md-40px"
                    id="kt_aside_mobile_toggle">
                    <span className="svg-icon svg-icon-2x mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                        fill="none">
                        <path
                          d="M21 7H3C2.4 7 2 6.6 2 6V4C2 3.4 2.4 3 3 3H21C21.6 3 22 3.4 22 4V6C22 6.6 21.6 7 21 7Z"
                          fill="black" />
                        <path opacity="0.3"
                          d="M21 14H3C2.4 14 2 13.6 2 13V11C2 10.4 2.4 10 3 10H21C21.6 10 22 10.4 22 11V13C22 13.6 21.6 14 21 14ZM22 20V18C22 17.4 21.6 17 21 17H3C2.4 17 2 17.4 2 18V20C2 20.6 2.4 21 3 21H21C21.6 21 22 20.6 22 20Z"
                          fill="black" />
                      </svg>
                    </span>
                  </div>
                </div>
                <div className="d-flex align-items-center flex-grow-1 flex-lg-grow-0">
                  <a href="#" className="d-lg-none">
                    <img alt="Logo" src="/src/assets//media/logos/logo-2.svg" className="h-30px" />
                  </a>
                </div>
                <div className="d-flex align-items-stretch justify-content-end flex-lg-grow-1">

                  <div className="d-flex align-items-stretch flex-shrink-0">
                    <div className="d-flex align-items-stretch flex-shrink-0">

                      <div
                        id="kt_header_user_menu_toggle"
                        className="d-flex align-items-center ms-1 ms-lg-3"
                      >
                        <div className="cursor-pointer symbol symbol-30px symbol-md-40px"
                          data-kt-menu-trigger="click" data-kt-menu-attach="parent"
                          data-kt-menu-placement="bottom-end">
                          <img src="/src/assets/media/avatars/150-26.jpg" alt="user" />
                        </div>
                        <div
                          className={`menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-800 menu-state-bg menu-state-primary fw-bold py-4 fs-6 w-275px`}
                          data-kt-menu="true"
                        >
                          <div className="menu-item px-3">
                            <div className="menu-content d-flex align-items-center px-3">
                              <div className="symbol symbol-50px me-5">
                                <img alt="Logo" src="/src/assets//media/avatars/150-26.jpg" />
                              </div>
                              <div className="d-flex flex-column">
                                <div className="fw-bolder d-flex align-items-center fs-5">Max Smith
                                  <span
                                    className="badge badge-light-success fw-bolder fs-8 px-2 py-1 ms-2">Pro</span>
                                </div>
                                <a href="#"
                                  className="fw-bold text-muted text-hover-primary fs-7">max@kt.com</a>
                              </div>
                            </div>
                          </div>
                          <div className="separator my-2"></div>
                          <div className="menu-item px-5">
                            <a href="../../demo1/dist/account/overview.html" className="menu-link px-5">My
                              Profile</a>
                          </div>
                          <div className="menu-item px-5">
                            <a href="../../demo1/dist/pages/projects/list.html" className="menu-link px-5">
                              <span className="menu-text">My Projects</span>
                              <span className="menu-badge">
                                <span
                                  className="badge badge-light-danger badge-circle fw-bolder fs-7">3</span>
                              </span>
                            </a>
                          </div>

                          <div className="menu-item px-5">
                            <a href="../../demo1/dist/authentication/flows/basic/sign-in.html"
                              className="menu-link px-5">Sign Out</a>
                          </div>
                          <div className="separator my-2"></div>
                          <div className="menu-item px-5">
                            <div className="menu-content px-5">
                              <label
                                className="form-check form-switch form-check-custom form-check-solid pulse pulse-success"
                                htmlFor="kt_user_menu_dark_mode_toggle">
                                <input className="form-check-input w-30px h-20px" type="checkbox"
                                  value="1" name="mode" id="kt_user_menu_dark_mode_toggle"
                                  data-kt-url="#" />
                                <span className="pulse-ring ms-n1"></span>
                                <span className="form-check-label text-gray-600 fs-7">Dark Mode</span>
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="d-flex align-items-center d-lg-none ms-2 me-n3" title="Show header menu">
                        <div className="btn btn-icon btn-active-light-primary w-30px h-30px w-md-40px h-md-40px"
                          id="kt_header_menu_mobile_toggle">
                          <span className="svg-icon svg-icon-1">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                              viewBox="0 0 24 24" fill="none">
                              <path
                                d="M13 11H3C2.4 11 2 10.6 2 10V9C2 8.4 2.4 8 3 8H13C13.6 8 14 8.4 14 9V10C14 10.6 13.6 11 13 11ZM22 5V4C22 3.4 21.6 3 21 3H3C2.4 3 2 3.4 2 4V5C2 5.6 2.4 6 3 6H21C21.6 6 22 5.6 22 5Z"
                                fill="black" />
                              <path opacity="0.3"
                                d="M21 16H3C2.4 16 2 15.6 2 15V14C2 13.4 2.4 13 3 13H21C21.6 13 22 13.4 22 14V15C22 15.6 21.6 16 21 16ZM14 20V19C14 18.4 13.6 18 13 18H3C2.4 18 2 18.4 2 19V20C2 20.6 2.4 21 3 21H13C13.6 21 14 20.6 14 20Z"
                                fill="black" />
                            </svg>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="content d-flex flex-column flex-column-fluid" id="kt_content">
              <div className="toolbar" id="kt_toolbar">
                <div id="kt_toolbar_container" className="container-fluid d-flex flex-stack">
                  <div data-kt-swapper="true" data-kt-swapper-mode="prepend"
                    data-kt-swapper-parent="{default: '#kt_content_container', 'lg': '#kt_toolbar_container'}"
                    className="page-title d-flex align-items-center flex-wrap me-3 mb-5 mb-lg-0">
                    <h1 className="d-flex align-items-center text-dark fw-bolder fs-3 my-1">Dashboard
                      <span className="h-20px border-gray-200 border-start ms-3 mx-2"></span>
                      <small className="text-muted fs-7 fw-bold my-1 ms-1">#XRS-45670</small>
                    </h1>
                  </div>
                </div>
              </div>
              <div className="post d-flex flex-column-fluid" id="kt_post">
                <div id="kt_content_container" className="container-xxl">
                  <a href="#">

                  </a>
                </div>
              </div>
            </div>
            <div className="footer py-4 d-flex flex-lg-column" id="kt_footer">
              <div className="container-fluid d-flex flex-column flex-md-row align-items-center justify-content-between">
                <div className="text-dark order-2 order-md-1">
                  <span className="text-muted fw-bold me-1">2021©</span>
                  <a href="https://keenthemes.com" target="_blank"
                    className="text-gray-800 text-hover-primary">Keenthemes</a>
                </div>
                <ul className="menu menu-gray-600 menu-hover-primary fw-bold order-1">
                  <li className="menu-item">
                    <a href="https://keenthemes.com" target="_blank" className="menu-link px-2">About</a>
                  </li>
                  <li className="menu-item">
                    <a href="https://keenthemes.com/support" target="_blank" className="menu-link px-2">Support</a>
                  </li>
                  <li className="menu-item">
                    <a href="https://1.envato.market/EA4JP" target="_blank" className="menu-link px-2">Purchase</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
