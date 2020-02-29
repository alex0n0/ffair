import React from 'react';
import { Link } from "react-router-dom";

export default function BasicFooter() {
    return (
        <>
            <footer className="page-c pt-5 border-top border-black">
                <div className="container-fluid">
                    <div className="row mb-5">
                        <div className="col-auto">
                            <div style={{ minWidth: "150px" }}>
                                <p><b>Help &amp; Support</b></p>
                                <p className="m-0"><Link to="/" style={{ textDecoration: "none", color: "var(--dark)" }}>FAQ</Link></p>
                                <p className="m-0"><Link to="/" style={{ textDecoration: "none", color: "var(--dark)" }}>Contact us</Link></p>
                                <p className="m-0"><Link to="/" style={{ textDecoration: "none", color: "var(--dark)" }}>Feedback</Link></p>
                            </div>
                        </div>
                        <div className="col-auto">
                            <div style={{ minWidth: "150px" }}>
                                <p><b>Company</b></p>
                                <p className="m-0"><Link to="/" style={{ textDecoration: "none", color: "var(--dark)" }}>About us</Link></p>
                                <p className="m-0"><Link to="/" style={{ textDecoration: "none", color: "var(--dark)" }}>Careers</Link></p>
                                <p className="m-0"><Link to="/" style={{ textDecoration: "none", color: "var(--dark)" }}>Investors</Link></p>
                                <p className="m-0"><Link to="/" style={{ textDecoration: "none", color: "var(--dark)" }}>Partners</Link></p>
                                <p className="m-0"><Link to="/" style={{ textDecoration: "none", color: "var(--dark)" }}>Terms &amp; Conditions</Link></p>
                                <p className="m-0"><Link to="/" style={{ textDecoration: "none", color: "var(--dark)" }}>Privacy Policy</Link></p>
                                <p className="m-0"><Link to="/" style={{ textDecoration: "none", color: "var(--dark)" }}>Cookies Policy</Link></p>
                            </div>
                        </div>
                        <div className="w-100 d-md-none mb-3"></div>
                        <div className="col-auto">
                            <div>
                                <p><b>Social Media</b></p>
                                <div className="d-flex">
                                    <button className="button--transparent button--social mr-3" style={{ height: "50px", width: "50px" }}><i className="fab fa-youtube font-24"></i></button>
                                    <button className="button--transparent button--social mr-3" style={{ height: "50px", width: "50px" }}><i className="fab fa-facebook-f font-24"></i></button>
                                    <button className="button--transparent button--social mr-3" style={{ height: "50px", width: "50px" }}><i className="fab fa-twitter font-24"></i></button>
                                    <button className="button--transparent button--social mr-3" style={{ height: "50px", width: "50px" }}><i className="fab fa-instagram font-24"></i></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <p className="text-center text-10">&copy; 2020 Fair Fares Ltd. All rights reserved.</p>
            </footer>
        </>
    );
}