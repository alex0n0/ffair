import React from 'react';
import { Link } from "react-router-dom";

import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'

export default function BasicHeader() {
    const handleClick = (message) => {
        console.log(message);
    }

    return (
        <>
            <header className="page-c border-bottom border-black">
                <div className="container-fluid py-3 d-flex align-items-center h-100">
                    <h3 className="m-0 mr-auto"><Link to="/" style={{ textDecoration: "none", color: "var(--dark)" }}>FairFares</Link></h3>
                    {/* <button className="btn btn-outline-secondary font-14 mr-3" disabled>Log In</button> */}
                    <button className="button--transparent p-0 border border-black d-flex flex-nowrap mr-3">
                        <div className="d-flex flex-nowrap border-right border-black p-1">
                            English (US)
                        </div>
                        <div className="p-1">AUD</div>
                    </button>
                    {/* <button className="button--transparent p-0 ml-3" style={{ textDecoration: "none", color: "black" }}>Account</button> */}
                    <Dropdown alignRight={true}>
                        <Dropdown.Toggle >
                            Sign in
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item onClick={() => handleClick("sign in")}>
                                <p className="m-0 px-2 py-2 font-14">Manage Account</p>
                            </Dropdown.Item>
                            <Dropdown.Item onClick={() => handleClick("sign up")}>
                                <p className="m-0 px-2 py-2 font-14">Sign up</p>
                            </Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </div>
            </header>
        </>
    );
}