import React from 'react';

export default function BreakpointIndicator() {
    return (
        <>
            <div className="position-fixed" style={{zIndex: "100000", bottom: "0px", left: "0px", opacity: "0.5"}}>
                <p className="d-block d-sm-none bg-dark text-light py-1 px-4 text-nowrap">
                    <b>xs (0px &raquo; mobile sm)</b></p>
                <p className="d-none d-sm-block d-md-none bg-danger text-light py-1 px-4 text-nowrap">
                    <b>sm (576px &raquo; mobile lg)</b></p>
                <p className="d-none d-md-block d-lg-none bg-warning py-1 px-4 text-nowrap">
                    <b>md (768px &raquo; tablet)</b></p>
                <p className="d-none d-lg-block d-xl-none bg-success text-light py-1 px-4 text-nowrap">
                    <b>lg (992px &raquo; laptop)</b></p>
                <p className="d-none d-xl-block bg-primary text-light py-1 px-4 text-nowrap">
                    <b>xl (1200px &raquo; desktop)</b></p>
            </div>
        </>
    );
}