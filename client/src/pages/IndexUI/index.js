import React from "react";

// import axios from "axios";
import moment from "moment";
// import { Link } from "react-router-dom";
import queryString from 'query-string';

import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
// import { DateRangePicker, SingleDatePicker, DayPickerRangeController } from 'react-dates';
import { DateRangePicker } from 'react-dates';
// import Autosuggest from 'react-autosuggest';

import BasicHeader from '../../components/BasicHeader';
import BasicFooter from '../../components/BasicFooter';

import "../../css/indexui.css";

class IndexUI extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      focusedDatesInput: null,
      currencyCode: "AUD",
      tripType: 2,
      cabin: "ECONOMY",
      startDate: moment(),
      endDate: null,
      adultsCount: 1,
      childrenCount: 0,
      infantsCount: 0,
      origin: "none",
      destination: "none",
      results: [],
      showSpinner: false,
      showError: false
    };

    this.handleDatesChange.bind(this);
    this.handleDatesFocusChange.bind(this);
    this.handleChangeTripTypeSelect.bind(this);
    this.handleChangeCabinSelect.bind(this);
    this.handleChangeOriginSelect.bind(this);
    this.handleChangeDestinationSelect.bind(this);
    this.handleClickPassengerCount.bind(this);
  }

  handleDatesChange = ({ startDate, endDate }) => {
    this.setState({ ...this.state, startDate: startDate, endDate: endDate });
  }
  handleDatesFocusChange = focusedInput => {
    this.setState({ focusedDatesInput: focusedInput });
  }
  handleChangeTripTypeSelect = e => {
    this.setState({ ...this.state, tripType: e.currentTarget.value });
  }
  handleChangeCabinSelect = e => {
    this.setState({ ...this.state, cabin: e.currentTarget.value });
  }
  handleChangeOriginSelect = e => {
    var value = e.currentTarget.value;
    var destination = this.state.destination;
    if (value !== "none" && value !== destination) { this.setState({ ...this.state, origin: e.currentTarget.value }); }
  }
  handleChangeDestinationSelect = e => {
    var value = e.currentTarget.value;
    var origin = this.state.origin;
    if (value !== "none" && value !== origin) { this.setState({ ...this.state, destination: e.currentTarget.value }); }
  }
  handleClickPassengerCount = e => {
    var operation = e.currentTarget.getAttribute("data-operation");
    var passengerType = e.currentTarget.getAttribute("data-passenger-type");
    var count = this.state[passengerType];
    switch (operation) {
      case "dec":
        if (count > 0) {
          count--;
        }
        break;
      case "inc":
        count++;
        break;
      default:
        console.log("something went wrong");
    }
    var newState = { ...this.state };
    newState[passengerType] = count;
    this.setState(newState);
  }
  handleClickAmadeusTestFindFlightsPost = () => {
    var currencyCode = this.state.currencyCode;
    var tripType = this.state.tripType;
    var cabin = this.state.cabin;
    var origin = this.state.origin;
    var destination = this.state.destination;
    var startDate = this.state.startDate;
    var endDate = this.state.endDate;
    var adultsCount = this.state.adultsCount;
    var childrenCount = this.state.childrenCount;
    var infantsCount = this.state.infantsCount;

    if (currencyCode && tripType && cabin && origin && origin !== "none" && destination && destination !== "none" && startDate && endDate && !isNaN(adultsCount) && !isNaN(childrenCount) && !isNaN(infantsCount) && !(adultsCount === 0 && childrenCount === 0 && infantsCount === 0)) {
      console.log("post");
      this.setState({ ...this.state, results: [], showSpinner: true, showError: false });
      var uploadObj = {
        currencyCode: currencyCode,
        tripType: tripType,
        cabin: cabin,
        // locations: { origin: origin, destination: destination },
        location_origin: origin,
        location_destionation: destination,
        // times: { startDate: startDate.format("X"), endDate: endDate.format("X") },
        times_startDate: startDate.format("X"),
        times_endDate: endDate.format("X"),
        // passengers: { adultsCount: adultsCount, childrenCount: childrenCount, infantsCount: infantsCount }
        passengers_adultsCount: adultsCount,
        passengers_childrenCount: childrenCount,
        passengers_infantsCount: infantsCount,
      }
      var stringObject = queryString.stringify(uploadObj);
      console.log(uploadObj);
      console.log(stringObject);
      this.props.history.push("/flights?"+stringObject);
    }
  }

  render() {

    return (
      <>
        <div className="ui--layout ui--home overflow-c">
          <BasicHeader></BasicHeader>
          <main className="page-c">
            <div className="container pt-5 pb-5">
              <div className="row justify-content-center">
                <div className="col-12">
                  <div className="border border-black p-3">
                    {/* flight type, class */}
                    <div className="row mb-3">
                      <div className="col-6">
                        <select className="form-control w-auto font-15" value={this.state.tripType} onChange={this.handleChangeTripTypeSelect}>
                          <option value="2">Return flights</option>
                          <option value="1" disabled>One way flignt</option>
                          <option value="3" disabled>Multi-stop</option>
                        </select>
                      </div>
                      <div className="col-6">
                        <select className="form-control w-auto font-15" value={this.state.cabin} onChange={this.handleChangeCabinSelect}>
                          <option value="ECONOMY">Economy class</option>
                          <option value="BUSINESS">Business</option>
                          <option value="FIRST">First class</option>
                        </select>
                      </div>
                    </div>
                    {/* origin, destination */}
                    <div className="row mb-3">
                      <div className="col-6">
                        {/* <input list="airports" className="form-control font-15" placeholder="From"/> */}
                        <select className="form-control font-15" value={this.state.origin} onChange={this.handleChangeOriginSelect}>
                          <option value="none">Where are you leaving from?</option>
                          <option value="SYD">Sydney Airport (SYD) Sydney, Australia</option>
                          <option value="HND">Tokyo International Airport (HND) Tokyo, Japan</option>
                          <option value="LAX">Los Angeles International (LAX) Los Angeles, USA</option>
                        </select>
                      </div>
                      <div className="col-6">
                        {/* <input list="airports" className="form-control font-15" placeholder="To" /> */}
                        <select className="form-control font-15" value={this.state.destination} onChange={this.handleChangeDestinationSelect}>
                          <option value="none">Where are you going to?</option>
                          <option value="SYD">Sydney Airport (SYD) Sydney, Australia</option>
                          <option value="HND">Tokyo International Airport (HND) Tokyo, Japan</option>
                          <option value="LAX">Los Angeles International (LAX) Los Angeles, USA</option>
                        </select>
                      </div>
                      <datalist id="airports">
                        <option value="Kingsford Smith (SYD)" data-code="SYD">Sydney, Australia</option>
                        <option value="Haneda (HND)" data-code="HND">Tokyo, Japan</option>
                      </datalist>
                    </div>
                    {/* flight dates return */}
                    {/* Date Range Picker */}
                    <div className="d-flex mb-3">
                      <div className="border border-black rounded px-1 bg-white" style={{ paddingTop: "1.25px", paddingBottom: "1.25px" }}>
                        <DateRangePicker
                          startDate={this.state.startDate}
                          startDateId="your_unique_start_date_id"
                          endDate={this.state.endDate}
                          endDateId="your_unique_end_date_id"
                          // onDatesChange={({ startDate, endDate }) => this.setState({ startDate, endDate })}
                          onDatesChange={this.handleDatesChange}
                          // focusedInput={this.state.focusedInput}
                          // onFocusChange={focusedInput => this.setState({ focusedInput })}
                          focusedInput={this.state.focusedDatesInput}
                          onFocusChange={this.handleDatesFocusChange}

                          orientation="horizontal"
                          small={true}
                          noBorder={true}
                          numberOfMonths={1}
                          displayFormat={() => "DD/MM/YYYY"}

                          minimumNights={0}

                          hideKeyboardShortcutsPanel={true}
                        />
                      </div>
                    </div>

                    {/* number of passengers */}
                    <div className="row mb-3">
                      <div className="col-12 col-md-6">
                        <div className="row">
                          <div className="col d-flex align-items-center">
                            <p className="m-0 pl-1"><b>Adults</b></p>
                          </div>
                          <div className="col-auto d-flex align-items-center">
                            <button
                              className="button--transparent button--black rounded-circle d-flex align-items-center justify-content-center overflow-hidden"
                              style={{ height: "40px", width: "40px" }}
                              onClick={this.handleClickPassengerCount}
                              disabled={this.state.adultsCount <= 0 ? true : false}
                              data-operation="dec" data-passenger-type="adultsCount"><i className="material-icons">remove</i></button>
                            <p className="m-0 text-center" style={{ width: "50px" }}>{this.state.adultsCount}</p>
                            <button
                              className="button--transparent button--black rounded-circle d-flex align-items-center justify-content-center overflow-hidden"
                              style={{ height: "40px", width: "40px" }}
                              onClick={this.handleClickPassengerCount}
                              data-operation="inc" data-passenger-type="adultsCount"><i className="material-icons">add</i></button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row mb-3">
                      <div className="col-12 col-md-6">
                        <div className="row">
                          <div className="col d-flex align-items-center">
                            <div className="pl-1">
                              <p className="m-0"><b>Children</b></p>
                              <p className="m-0 font-12">2 to 12 years old</p>
                            </div>
                          </div>
                          <div className="col-auto d-flex align-items-center">
                            <button
                              className="button--transparent button--black rounded-circle d-flex align-items-center justify-content-center overflow-hidden"
                              style={{ height: "40px", width: "40px" }}
                              onClick={this.handleClickPassengerCount}
                              disabled={this.state.childrenCount <= 0 ? true : false}
                              data-operation="dec" data-passenger-type="childrenCount"><i className="material-icons">remove</i></button>
                            <p className="m-0 text-center" style={{ width: "50px" }}>{this.state.childrenCount}</p>
                            <button
                              className="button--transparent button--black rounded-circle d-flex align-items-center justify-content-center overflow-hidden"
                              style={{ height: "40px", width: "40px" }}
                              onClick={this.handleClickPassengerCount}
                              data-operation="inc" data-passenger-type="childrenCount"><i className="material-icons">add</i></button>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* submit form */}
                    <div className="d-flex">
                      <button
                        className="button--transparent button--black ml-auto py-2 pl-5 pr-3 d-flex align-items-center"
                        onClick={this.handleClickAmadeusTestFindFlightsPost}><b>FIND FLIGHTS</b><i className="material-icons ml-3">flight_takeoff</i></button>
                    </div>

                  </div>
                </div>
              </div>

              {/* <div className="row">
                <div className="col-12">
                  <div className="border">
                    // content goes here
                  </div>
                </div>
              </div> */}
            </div>
          </main>
          <BasicFooter></BasicFooter>
        </div>
      </>
    );
  }
}

export default IndexUI;