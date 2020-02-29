import React from "react";
import { Link } from "react-router-dom";

import queryString from 'query-string';
import axios from 'axios';
import moment from 'moment';

import BasicHeader from '../../components/BasicHeader';
import BasicFooter from '../../components/BasicFooter';

import Accordion from 'react-bootstrap/Accordion';
import Modal from 'react-bootstrap/Modal'

import "../../css/flightsui.css";

export default class FlightsUI extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      flights: [],
      loading: true,
      sidebarFilterOpen: false,
      modalOpen: false,
    }
  }
  componentDidMount() {
    if (this.props.location.search.length !== 0) {
      const parsed = queryString.parse(this.props.location.search);
      console.log(parsed.tripType);

      axios.post("/api/test/offers/dummydata")
        .then(response => {
          console.log(response.data);
          this.setState({ loading: false });
          if (response.data.flights.length > 0) {
            this.setState({ flights: response.data.flights });
          }
          // else {
          //   this.setState({ ...this.state, showError: true });
          // }
        })
        .catch(err => {
          console.log(err);
        });
    } else {
      this.setState({
        loading: false
      });
      if (this.state.flights.length === 0) {
        console.log("nothing found");
      }
    }
  }

  handleClickBackToHome = () => {
    this.props.history.goBack();
  }
  handleClickSidebarOpen = (openSidebarFilter) => {
    this.setState({ sidebarFilterOpen: openSidebarFilter });
  }
  handleClickModalOpen = (openModal) => {
    this.setState({ modalOpen: openModal });
  }
  handleClickScrollToTop = () => {
    window.scrollTo(0, 0);
  }
  handleClickItem = (index) => {
    console.log("clicked", index);
    this.setState({ modalOpen: true });
  }

  render() {
    var cover = this.state.loading ? (<Cover></Cover>) : null;

    var flights = this.state.flights;
    var flightsJSX = flights.map((curr, i) => {
      return (
        <div key={i} className="mb-4">
          <div
            className="row m-0 border border-black flex-nowrap"
            style={{ overflowX: "auto" }}
            onClick={() => this.handleClickItem(i)}>
            <div className="col border-right">

              <p className="m-0 text-right text-danger">Seats remaining: {curr.numberOfBookableSeats}</p>
              {curr.itineraries.map((curr, i) => {
                // maybe will crash if less than 1 hour?
                let totalTimeString = curr.duration.substring(2).split("H");
                let totalTimeHour = totalTimeString[0];
                let totalTimeMinute = totalTimeString[1].substring(0, totalTimeString[1].length - 1);
                return (
                  <div key={i}>
                    {i === 0 ? (<p className="m-0 font-18"><b>Departing</b></p>) : (<p className="m-0 font-18"><b>Returning</b></p>)}
                    <p className="m-0">{totalTimeHour + "h " + totalTimeMinute + "m"}</p>
                    {curr.segments.map((curr, i) => {
                      let segmentTimeString = curr.duration.substring(2).split("H");
                      let segmentTimeHour = segmentTimeString[0];
                      let segmentTimeMinute = segmentTimeString[1].substring(0, segmentTimeString[1].length - 1);
                      return (
                        <div className="px-3 py-2 border mb-3" key={i}>
                          {/* <p className="m-0"><b>TRIP ID {curr.id}</b></p> */}
                          <div className="row">
                            <div className="col-12 mb-1 col-lg-auto mb-lg-0 d-flex align-items-center ">
                              <p className="m-0 bg-black text-white d-flex align-items-center justify-content-center" style={{ height: "30px", minWidth: "30px" }}>{curr.carrierCode}</p>
                            </div>
                            <div className="col-12 col-lg">
                              <div className="row flex-nowrap">
                                <div className="col-auto pr-0 d-flex flex-column align-items-center">
                                  <p className="m-0">{curr.departure.iataCode}</p>
                                  <p className="m-0 font-24">{moment(curr.departure.at).format("HH:mm")}</p>
                                  <p className="m-0 font-10">{moment(curr.departure.at).format("DD MMM YYYY")}</p>
                                </div>
                                <div className="col d-flex align-items-center justify-content-center">
                                  <p className="m-0 text-nowrap">{segmentTimeHour + "h " + segmentTimeMinute + "m"}</p>
                                </div>
                                <div className="col-auto pl-0 d-flex flex-column align-items-center">
                                  <p className="m-0">{curr.arrival.iataCode}</p>
                                  <p className="m-0 font-24">{moment(curr.arrival.at).format("HH:mm")}</p>
                                  <p className="m-0 font-10">{moment(curr.arrival.at).format("DD MMM YYYY")}</p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-12 py-2">
                              <p className="m-0 font-10 bg-light px-2 py-2">{curr.carrierCode}{curr.number}</p>
                            </div>
                          </div>
                        </div>
                      )
                    })}
                  </div>
                )
              })}

            </div>



            <div className="col-auto flex-shrink-0 d-flex align-items-center" style={{ minWidth: "164px" }}>
              <div className="w-100">
                {curr.travelerPricings.map((curr, i) => {
                  return (
                    <div key={i}>
                      {/* <p className="m-0">{curr.travelerType}</p> */}
                      {/* <p className="m-0 d-flex">Total<span className="ml-auto">({curr.price.currency})</span></p> */}
                      <p className="m-0 text-right">Total&nbsp;<span >({curr.price.currency})</span></p>
                      <p className="m-0 font-24 text-right"><span className="text-muted">$</span><span><b>{curr.price.total}</b></span></p>
                      <button className="button--transparent button--black mx-auto py-1 px-3 w-100">View</button>
                      {/* {curr.fareDetailsBySegment.map((curr, i) => {
                        return (
                          <div key={i}>
                            <p className="m-0"><b>TRIP ID {curr.segmentId}</b> {curr.cabin} {curr.includedCheckedBags ?
                              (<>checked bags: {curr.includedCheckedBags.quantity} {curr.includedCheckedBags.weight}{curr.includedCheckedBags.weightUnit}</>) : ""}</p>
                          </div>
                        );
                      })} */}
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      );
    });







    return (
      <>
        <div className={this.state.sidebarFilterOpen ? "ui--layout ui--flights overflow-c no-scroll" : "ui--layout ui--flights overflow-c"}>
          <BasicHeader></BasicHeader>


          <main className="page-c">
            <div className="container pt-5 pb-5">
              <div className="d-flex align-items-center mb-5">
                <button className="button--transparent mr-auto px-0" onClick={this.handleClickBackToHome} style={{ textDecoration: "none", color: "black" }}>&#8592; Back to Home</button>
                <p className="m-0"><b>{this.state.flights.length}</b> result{this.state.flights.length === 1 ? null : "s"} </p>
              </div>
              <div className="d-flex align-items-center mb-3">
                {/* <button className="button--transparent button--black mr-auto px-3" style={{height: "40px", width: "40px"}}>
                  <i className="material-icons">menu</i>
                </button> */}
                <button
                  className="button--transparent button--black mr-auto px-3 d-md-none"
                  style={{ height: "40px", minWidth: "40px" }}
                  onClick={() => { this.handleClickSidebarOpen(true) }}>
                  <b>FILTERS</b>
                </button>
                <label htmlFor="sort" className="m-0 ml-auto mr-3">Sort</label>
                <select id="sort" className="form-control w-auto border-black" defaultValue="best">
                  <option value="best">Best</option>
                  <option>Lowest Price</option>
                  <option>Earliest Departure</option>
                </select>
              </div>




              <div className="row justify-content-center mb-5 pt-3">
                <div className={this.state.sidebarFilterOpen ? "sidebar--filter open" : "sidebar--filter"}>
                  <div className="interior px-3 pt-2 pb-3">
                    <div className="d-flex align-items-center mt-2 mb-2">
                      <p className="m-0 font-20"><b>Filters</b></p>
                      <button
                        className="button--transparent button--black button--close ml-auto d-md-none font-26"
                        style={{ height: "40px", width: "40px" }}
                        onClick={() => { this.handleClickSidebarOpen(false) }}>
                      </button>
                    </div>

                    <Accordion defaultActiveKey="0" className="mb-4">
                      <Accordion.Toggle eventKey="0" className="border-0 w-100 d-flex align-items-center p-0 bg-transparent">
                        <p className="m-0 mr-auto">Stops</p><i className="material-icons">keyboard_arrow_down</i>
                      </Accordion.Toggle>
                      <Accordion.Collapse eventKey="0">
                        <div>
                          <ul className="list-unstyled m-0">
                            <li className="d-flex align-items-center">
                              <input type="checkbox" id="direct" className="mr-3"></input><label htmlFor="direct" className="m-0 text-truncate w-100">Direct</label>
                            </li>
                            <li className="d-flex align-items-center">
                              <input type="checkbox" id="stopone" className="mr-3"></input><label htmlFor="stopone" className="m-0 text-truncate w-100">1 stop</label>
                            </li>
                            <li className="d-flex align-items-center">
                              <input type="checkbox" id="stopthree" className="mr-3"></input><label htmlFor="stopthree" className="m-0 text-truncate w-100">2 stops</label>
                            </li>
                          </ul>
                        </div>
                      </Accordion.Collapse>
                    </Accordion>


                    <Accordion defaultActiveKey="0" className="mb-4">
                      <Accordion.Toggle eventKey="0" className="border-0 w-100 d-flex align-items-center p-0 bg-transparent">
                        <p className="m-0 mr-auto">Price</p><i className="material-icons">keyboard_arrow_down</i>
                      </Accordion.Toggle>
                      <Accordion.Collapse eventKey="0">
                        <div>
                          <div className="d-flex">
                            <p className="m-0 font-10 mr-auto">$0</p>
                            <p className="m-0 font-10 ml-3">$1200</p>
                          </div>
                          <div className="px-0">
                            <input type="range" className="w-100" />
                          </div>
                        </div>
                      </Accordion.Collapse>
                    </Accordion>
                    <Accordion defaultActiveKey="0" className="mb-4">
                      <Accordion.Toggle eventKey="0" className="border-0 w-100 d-flex align-items-center p-0 bg-transparent">
                        <p className="m-0 mr-auto">Departure Time</p><i className="material-icons">keyboard_arrow_down</i>
                      </Accordion.Toggle>
                      <Accordion.Collapse eventKey="0">
                        <div>
                          <div className="d-flex">
                            <p className="m-0 font-10 mr-auto">00:00</p>
                            <p className="m-0 font-10 ml-3">24:00</p>
                          </div>
                          <div className="px-0">
                            <input type="range" className="w-100" />
                          </div>
                        </div>
                      </Accordion.Collapse>
                    </Accordion>
                    <Accordion defaultActiveKey="0" className="mb-4">
                      <Accordion.Toggle eventKey="0" className="border-0 w-100 d-flex align-items-center p-0 bg-transparent">
                        <p className="m-0 mr-auto">Arrival Time</p><i className="material-icons">keyboard_arrow_down</i>
                      </Accordion.Toggle>
                      <Accordion.Collapse eventKey="0">
                        <div>
                          <div className="d-flex">
                            <p className="m-0 font-10 mr-auto">00:00</p>
                            <p className="m-0 font-10 ml-3">24:00</p>
                          </div>
                          <div className="px-0">
                            <input type="range" className="w-100" />
                          </div>
                        </div>
                      </Accordion.Collapse>
                    </Accordion>




                    <Accordion defaultActiveKey="0">
                      <Accordion.Toggle eventKey="0" className="border-0 w-100 d-flex align-items-center p-0 bg-transparent">
                        <p className="m-0 mr-auto">Airlines</p><i className="material-icons">keyboard_arrow_down</i>
                      </Accordion.Toggle>
                      <Accordion.Collapse eventKey="0">
                        <div>
                          <ul className="list-unstyled m-0">
                            <li className="d-flex align-items-center">
                              <input type="checkbox" id="unitedairlines" className="mr-3"></input><label htmlFor="unitedairlines" className="m-0 text-truncate w-100">United Airlines</label>
                            </li>
                            <li className="d-flex align-items-center">
                              <input type="checkbox" id="qantas" className="mr-3"></input><label htmlFor="qantas" className="m-0 text-truncate w-100">Qantas</label>
                            </li>
                          </ul>
                        </div>
                      </Accordion.Collapse>
                    </Accordion>
                  </div>
                </div>
                <div className="col">
                  {flightsJSX.length > 0 ? flightsJSX : ""}
                </div>
              </div>




            </div>
          </main>


          <button
            className="button--transparent button--black rounded-circle"
            style={{ height: "40px", width: "40px", position: "fixed", right: "16px", bottom: "16px" }}
            onClick={this.handleClickScrollToTop}>
            {/* <i className="material-icons">arrow_upward</i> */}
            <i className="material-icons">keyboard_arrow_up</i>
          </button>

          <BasicFooter></BasicFooter>
          {cover}
          {this.state.sidebarFilterOpen ? (<Backdrop handleClick={() => { this.handleClickSidebarOpen(false) }}></Backdrop>) : null}




          <Modal show={this.state.modalOpen} onHide={() => { this.handleClickModalOpen(false) }} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
            <Modal.Header closeButton>
              <Modal.Title id="contained-modal-title-vcenter">
                details...
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <h4>details...</h4>
              <p>
                more details...
              </p>
            </Modal.Body>
            <Modal.Footer>
              <button className="button--transparent button--black" onClick={() => { this.handleClickModalOpen(false) }}>Close</button>
            </Modal.Footer>
          </Modal>
        </div>
      </>
    );
  }
}


export function Cover() {
  return (
    <>
      <section className="someblockingcover page-c">
        <div className="container h-100">
          <div className="row h-100 justify-content-center">
            <div className="col-11 col-md-7 col-lg-5 h-100 position-relative d-flex align-items-center">
              <div className="center py-5">
                <div className="d-flex align-items-center">
                  <div className="spinner-border mr-3" role="status">
                    <span className="sr-only">Loading...</span>
                  </div>
                  <p className="m-0">Searching for flights...</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export function Backdrop(props) {
  return (
    <>
      <section className="backdrop--white d-md-none" onClick={props.handleClick}>
      </section>
    </>
  );
}

export function FlightRow() {
  return (
    <>
    </>
  );
}