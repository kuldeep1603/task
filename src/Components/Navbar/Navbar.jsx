import React from 'react'
import { IoCartOutline } from "react-icons/io5";
import { IoIosNotificationsOutline } from "react-icons/io";

const Navbar = () => {
    return (
        <>
            <nav class="navbar navbar-expand-lg bg-body border-bottom-new">
                <div class="container">
                    <a class="navbar-brand" href="#">
                        <IoCartOutline size={"22px"} className='primary-color'/>

                    </a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
                            <li class="nav-item me-4">
                                <a class="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li class="nav-item me-4">
                                <a class="nav-link" href="#">About Us</a>
                            </li>
                            <li class="nav-item me-4">
                                <a class="nav-link" href="#">Product</a>
                            </li>
                            <li class="nav-item me-4">
                                <a class="nav-link" href="#">Blog</a>
                            </li>
                        </ul>
                        <form class="d-flex gap-3 align-items-center" role="search">
                            <div className="d-flex gap-1 justify-content-center align-items-center">
                                <IoIosNotificationsOutline size={"20px"} />
                                <IoCartOutline size={"20px"} /> |
                            </div>
                            <button type="button" class="btn btn-outline-primary px-3 py-1 text-center">Login</button>
                        </form>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar
