import React from 'react';
import PropTypes from 'prop-types';

export default function PassengerTypeComponent(props) {
    return (
        <>
            <div className="row">
                <div className="col d-flex align-items-center">
                    <div className="pl-1">
                        <p className="m-0"><b>{props.passengerType}</b></p>
                        <p className="m-0 font-12">{props.secondaryMessage}</p>
                    </div>
                </div>
                <div className="col-auto d-flex align-items-center">
                    <button
                        className="button--transparent button--black rounded-circle d-flex align-items-center justify-content-center overflow-hidden"
                        style={{ height: "40px", width: "40px" }}
                        onClick={props.decClickHandler}
                        disabled={props.passengerTypeCount <= 0 ? true : false}
                        data-operation="dec" data-passenger-type="childrenCount"><i className="material-icons">remove</i></button>
                    <p className="m-0 text-center" style={{ width: "50px" }}>{props.passengerTypeCount}</p>
                    <button
                        className="button--transparent button--black rounded-circle d-flex align-items-center justify-content-center overflow-hidden"
                        style={{ height: "40px", width: "40px" }}
                        onClick={this.incClickHandler}
                        data-operation="inc" data-passenger-type="childrenCount"><i className="material-icons">add</i></button>
                </div>
            </div>        </>
    );
}
PassengerTypeComponent.propTypes = {
    passengerType: PropTypes.string.isRequired,
    secondaryMessage: PropTypes.string,
    decClickHandler: PropTypes.func.isRequired,
    incClickHandler: PropTypes.func.isRequired,
    passengerTypeCount: PropTypes.number.isRequired,
}