import React from 'react'
import '../App.css';

export default function Sidebar() {
    const navbar = document.querySelector("nav"),
        menuBtns = document.querySelectorAll(".menu-icon"),
        overlay = document.querySelectorAll(".overlay");

    menuBtns.forEach(itemBtn => {
        itemBtn.addEventListener("click", () => {
            navbar.classList.toggle("open")
        })
    })

    // overlay.addEventListener("click", () => {
    //     navbar.classList.remove("open")
    // })
    return (
        <>
            <nav>
                <div className='logo'>
                    <i class='bx bx-menu menu-icon'></i>
                    <span className='logo-name'>Mr Vu</span>
                </div>
                <div className='sidebar'>
                    <div className='logo'>
                        <i class='bx bx-menu menu-icon'></i>
                        <span className='logo-name'>Mr Vu</span>
                    </div>
                    <div className='sidebar-content'>
                        <ul className='list'>
                            <li className='list'>
                                <a href='#' className='nav-link'>
                                    <i class='bx bx-home icon' ></i>
                                    <span className='link'>Dashboard</span>
                                </a>
                            </li>
                            <li className='list'>
                                <a href='#' className='nav-link'>
                                    <i class='bx bx-home icon' ></i>
                                    <span className='link'>Dashboard 2</span>
                                </a>
                            </li>
                            <li className='list'>
                                <a href='#' className='nav-link'>
                                    <i class='bx bx-home icon' ></i>
                                    <span className='link'>Dashboard 3</span>
                                </a>
                            </li>
                            <li className='list'>
                                <a href='#' className='nav-link'>
                                    <i class='bx bx-home icon' ></i>
                                    <span className='link'>Dashboard 4</span>
                                </a>
                            </li>
                            <li className='list'>
                                <a href='#' className='nav-link'>
                                    <i class='bx bx-home icon' ></i>
                                    <span className='link'>Dashboard 5</span>
                                </a>
                            </li>
                            <li className='list'>
                                <a href='#' className='nav-link'>
                                    <i class='bx bx-home icon' ></i>
                                    <span className='link'>Dashboard 6</span>
                                </a>
                            </li>
                            <li className='list'>
                                <a href='#' className='nav-link'>
                                    <i class='bx bx-home icon' ></i>
                                    <span className='link'>Dashboard 7</span>
                                </a>
                            </li>
                        </ul>
                        <div className='bottom-content'>
                            <li className='list'>
                                <a href='#' className='nav-link'>
                                    <i class='bx bx-cog icon' ></i>
                                    <span className='link'>Settings</span>
                                </a>
                            </li>
                            <li className='list'>
                                <a href='#' className='nav-link'>
                                    <i class='bx bx-log-out icon' ></i>
                                    <span className='link'>Logout</span>
                                </a>
                            </li>
                        </div>
                    </div>
                </div>
            </nav>
            <section className='overlay'></section>
        </>
    )
}
