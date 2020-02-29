module.exports = function (app) {
  app.post("/api/test/offers/dummydata", function (req, res) {
    res.json({
      flights: [
        {
          "type": "flight-offer",
          "id": "1",
          "source": "GDS",
          "instantTicketingRequired": false,
          "nonHomogeneous": false,
          "oneWay": false,
          "lastTicketingDate": "2020-02-22",
          "numberOfBookableSeats": 9,
          "itineraries": [
            {
              "duration": "PT13H40M",
              "segments": [
                {
                  "departure": {
                    "iataCode": "SYD",
                    "terminal": "1",
                    "at": "2020-02-27T11:50:00"
                  },
                  "arrival": {
                    "iataCode": "LAX",
                    "terminal": "B",
                    "at": "2020-02-27T06:30:00"
                  },
                  "carrierCode": "UA",
                  "number": "842",
                  "aircraft": {
                    "code": "789"
                  },
                  "operating": {
                    "carrierCode": "UA"
                  },
                  "duration": "PT13H40M",
                  "id": "1",
                  "numberOfStops": 0,
                  "blacklistedInEU": false
                }
              ]
            },
            {
              "duration": "PT15H10M",
              "segments": [
                {
                  "departure": {
                    "iataCode": "LAX",
                    "terminal": "7",
                    "at": "2020-03-18T22:50:00"
                  },
                  "arrival": {
                    "iataCode": "SYD",
                    "terminal": "1",
                    "at": "2020-03-20T08:00:00"
                  },
                  "carrierCode": "UA",
                  "number": "839",
                  "aircraft": {
                    "code": "789"
                  },
                  "operating": {
                    "carrierCode": "UA"
                  },
                  "duration": "PT15H10M",
                  "id": "4",
                  "numberOfStops": 0,
                  "blacklistedInEU": false
                }
              ]
            }
          ],
          "price": {
            "currency": "AUD",
            "total": "1047.06",
            "base": "828.00",
            "fees": [
              {
                "amount": "0.00",
                "type": "SUPPLIER"
              },
              {
                "amount": "0.00",
                "type": "TICKETING"
              }
            ],
            "grandTotal": "1047.06"
          },
          "pricingOptions": {
            "fareType": [
              "PUBLISHED"
            ],
            "includedCheckedBagsOnly": true
          },
          "validatingAirlineCodes": [
            "UA"
          ],
          "travelerPricings": [
            {
              "travelerId": "1",
              "fareOption": "STANDARD",
              "travelerType": "ADULT",
              "price": {
                "currency": "AUD",
                "total": "1047.06",
                "base": "828.00"
              },
              "fareDetailsBySegment": [
                {
                  "segmentId": "1",
                  "cabin": "ECONOMY",
                  "fareBasis": "GKX08L4G",
                  "class": "G",
                  "includedCheckedBags": {
                    "quantity": 2
                  }
                },
                {
                  "segmentId": "4",
                  "cabin": "ECONOMY",
                  "fareBasis": "GKX08L4G",
                  "class": "G",
                  "includedCheckedBags": {
                    "quantity": 2
                  }
                }
              ]
            }
          ]
        },
        {
          "type": "flight-offer",
          "id": "2",
          "source": "GDS",
          "instantTicketingRequired": false,
          "nonHomogeneous": false,
          "oneWay": false,
          "lastTicketingDate": "2020-02-22",
          "numberOfBookableSeats": 9,
          "itineraries": [
            {
              "duration": "PT13H40M",
              "segments": [
                {
                  "departure": {
                    "iataCode": "SYD",
                    "terminal": "1",
                    "at": "2020-02-27T11:50:00"
                  },
                  "arrival": {
                    "iataCode": "LAX",
                    "terminal": "B",
                    "at": "2020-02-27T06:30:00"
                  },
                  "carrierCode": "UA",
                  "number": "842",
                  "aircraft": {
                    "code": "789"
                  },
                  "operating": {
                    "carrierCode": "UA"
                  },
                  "duration": "PT13H40M",
                  "id": "1",
                  "numberOfStops": 0,
                  "blacklistedInEU": false
                }
              ]
            },
            {
              "duration": "PT18H20M",
              "segments": [
                {
                  "departure": {
                    "iataCode": "LAX",
                    "terminal": "7",
                    "at": "2020-03-18T19:45:00"
                  },
                  "arrival": {
                    "iataCode": "SFO",
                    "terminal": "3",
                    "at": "2020-03-18T21:19:00"
                  },
                  "carrierCode": "UA",
                  "number": "283",
                  "aircraft": {
                    "code": "739"
                  },
                  "operating": {
                    "carrierCode": "UA"
                  },
                  "duration": "PT1H34M",
                  "id": "5",
                  "numberOfStops": 0,
                  "blacklistedInEU": false
                },
                {
                  "departure": {
                    "iataCode": "SFO",
                    "terminal": "I",
                    "at": "2020-03-18T23:00:00"
                  },
                  "arrival": {
                    "iataCode": "SYD",
                    "terminal": "1",
                    "at": "2020-03-20T08:05:00"
                  },
                  "carrierCode": "UA",
                  "number": "863",
                  "aircraft": {
                    "code": "789"
                  },
                  "operating": {
                    "carrierCode": "UA"
                  },
                  "duration": "PT15H5M",
                  "id": "6",
                  "numberOfStops": 0,
                  "blacklistedInEU": false
                }
              ]
            }
          ],
          "price": {
            "currency": "AUD",
            "total": "1047.06",
            "base": "828.00",
            "fees": [
              {
                "amount": "0.00",
                "type": "SUPPLIER"
              },
              {
                "amount": "0.00",
                "type": "TICKETING"
              }
            ],
            "grandTotal": "1047.06"
          },
          "pricingOptions": {
            "fareType": [
              "PUBLISHED"
            ],
            "includedCheckedBagsOnly": true
          },
          "validatingAirlineCodes": [
            "UA"
          ],
          "travelerPricings": [
            {
              "travelerId": "1",
              "fareOption": "STANDARD",
              "travelerType": "ADULT",
              "price": {
                "currency": "AUD",
                "total": "1047.06",
                "base": "828.00"
              },
              "fareDetailsBySegment": [
                {
                  "segmentId": "1",
                  "cabin": "ECONOMY",
                  "fareBasis": "GKX08L4G",
                  "class": "G",
                  "includedCheckedBags": {
                    "quantity": 2
                  }
                },
                {
                  "segmentId": "5",
                  "cabin": "ECONOMY",
                  "fareBasis": "GKX08L4G",
                  "class": "G",
                  "includedCheckedBags": {
                    "quantity": 2
                  }
                },
                {
                  "segmentId": "6",
                  "cabin": "ECONOMY",
                  "fareBasis": "GKX08L4G",
                  "class": "G",
                  "includedCheckedBags": {
                    "quantity": 2
                  }
                }
              ]
            }
          ]
        },
        {
          "type": "flight-offer",
          "id": "3",
          "source": "GDS",
          "instantTicketingRequired": false,
          "nonHomogeneous": false,
          "oneWay": false,
          "lastTicketingDate": "2020-02-22",
          "numberOfBookableSeats": 9,
          "itineraries": [
            {
              "duration": "PT13H40M",
              "segments": [
                {
                  "departure": {
                    "iataCode": "SYD",
                    "terminal": "1",
                    "at": "2020-02-27T11:50:00"
                  },
                  "arrival": {
                    "iataCode": "LAX",
                    "terminal": "B",
                    "at": "2020-02-27T06:30:00"
                  },
                  "carrierCode": "UA",
                  "number": "842",
                  "aircraft": {
                    "code": "789"
                  },
                  "operating": {
                    "carrierCode": "UA"
                  },
                  "duration": "PT13H40M",
                  "id": "1",
                  "numberOfStops": 0,
                  "blacklistedInEU": false
                }
              ]
            },
            {
              "duration": "PT19H35M",
              "segments": [
                {
                  "departure": {
                    "iataCode": "LAX",
                    "terminal": "7",
                    "at": "2020-03-18T18:30:00"
                  },
                  "arrival": {
                    "iataCode": "SFO",
                    "terminal": "3",
                    "at": "2020-03-18T20:01:00"
                  },
                  "carrierCode": "UA",
                  "number": "481",
                  "aircraft": {
                    "code": "738"
                  },
                  "operating": {
                    "carrierCode": "UA"
                  },
                  "duration": "PT1H31M",
                  "id": "7",
                  "numberOfStops": 0,
                  "blacklistedInEU": false
                },
                {
                  "departure": {
                    "iataCode": "SFO",
                    "terminal": "I",
                    "at": "2020-03-18T23:00:00"
                  },
                  "arrival": {
                    "iataCode": "SYD",
                    "terminal": "1",
                    "at": "2020-03-20T08:05:00"
                  },
                  "carrierCode": "UA",
                  "number": "863",
                  "aircraft": {
                    "code": "789"
                  },
                  "operating": {
                    "carrierCode": "UA"
                  },
                  "duration": "PT15H5M",
                  "id": "8",
                  "numberOfStops": 0,
                  "blacklistedInEU": false
                }
              ]
            }
          ],
          "price": {
            "currency": "AUD",
            "total": "1047.06",
            "base": "828.00",
            "fees": [
              {
                "amount": "0.00",
                "type": "SUPPLIER"
              },
              {
                "amount": "0.00",
                "type": "TICKETING"
              }
            ],
            "grandTotal": "1047.06"
          },
          "pricingOptions": {
            "fareType": [
              "PUBLISHED"
            ],
            "includedCheckedBagsOnly": true
          },
          "validatingAirlineCodes": [
            "UA"
          ],
          "travelerPricings": [
            {
              "travelerId": "1",
              "fareOption": "STANDARD",
              "travelerType": "ADULT",
              "price": {
                "currency": "AUD",
                "total": "1047.06",
                "base": "828.00"
              },
              "fareDetailsBySegment": [
                {
                  "segmentId": "1",
                  "cabin": "ECONOMY",
                  "fareBasis": "GKX08L4G",
                  "class": "G",
                  "includedCheckedBags": {
                    "quantity": 2
                  }
                },
                {
                  "segmentId": "7",
                  "cabin": "ECONOMY",
                  "fareBasis": "GKX08L4G",
                  "class": "G",
                  "includedCheckedBags": {
                    "quantity": 2
                  }
                },
                {
                  "segmentId": "8",
                  "cabin": "ECONOMY",
                  "fareBasis": "GKX08L4G",
                  "class": "G",
                  "includedCheckedBags": {
                    "quantity": 2
                  }
                }
              ]
            }
          ]
        },
        {
          "type": "flight-offer",
          "id": "4",
          "source": "GDS",
          "instantTicketingRequired": false,
          "nonHomogeneous": false,
          "oneWay": false,
          "lastTicketingDate": "2020-02-22",
          "numberOfBookableSeats": 9,
          "itineraries": [
            {
              "duration": "PT13H40M",
              "segments": [
                {
                  "departure": {
                    "iataCode": "SYD",
                    "terminal": "1",
                    "at": "2020-02-27T11:50:00"
                  },
                  "arrival": {
                    "iataCode": "LAX",
                    "terminal": "B",
                    "at": "2020-02-27T06:30:00"
                  },
                  "carrierCode": "UA",
                  "number": "842",
                  "aircraft": {
                    "code": "789"
                  },
                  "operating": {
                    "carrierCode": "UA"
                  },
                  "duration": "PT13H40M",
                  "id": "1",
                  "numberOfStops": 0,
                  "blacklistedInEU": false
                }
              ]
            },
            {
              "duration": "PT21H5M",
              "segments": [
                {
                  "departure": {
                    "iataCode": "LAX",
                    "terminal": "7",
                    "at": "2020-03-18T17:00:00"
                  },
                  "arrival": {
                    "iataCode": "SFO",
                    "terminal": "3",
                    "at": "2020-03-18T18:31:00"
                  },
                  "carrierCode": "UA",
                  "number": "632",
                  "aircraft": {
                    "code": "320"
                  },
                  "operating": {
                    "carrierCode": "UA"
                  },
                  "duration": "PT1H31M",
                  "id": "2",
                  "numberOfStops": 0,
                  "blacklistedInEU": false
                },
                {
                  "departure": {
                    "iataCode": "SFO",
                    "terminal": "I",
                    "at": "2020-03-18T23:00:00"
                  },
                  "arrival": {
                    "iataCode": "SYD",
                    "terminal": "1",
                    "at": "2020-03-20T08:05:00"
                  },
                  "carrierCode": "UA",
                  "number": "863",
                  "aircraft": {
                    "code": "789"
                  },
                  "operating": {
                    "carrierCode": "UA"
                  },
                  "duration": "PT15H5M",
                  "id": "3",
                  "numberOfStops": 0,
                  "blacklistedInEU": false
                }
              ]
            }
          ],
          "price": {
            "currency": "AUD",
            "total": "1047.06",
            "base": "828.00",
            "fees": [
              {
                "amount": "0.00",
                "type": "SUPPLIER"
              },
              {
                "amount": "0.00",
                "type": "TICKETING"
              }
            ],
            "grandTotal": "1047.06"
          },
          "pricingOptions": {
            "fareType": [
              "PUBLISHED"
            ],
            "includedCheckedBagsOnly": true
          },
          "validatingAirlineCodes": [
            "UA"
          ],
          "travelerPricings": [
            {
              "travelerId": "1",
              "fareOption": "STANDARD",
              "travelerType": "ADULT",
              "price": {
                "currency": "AUD",
                "total": "1047.06",
                "base": "828.00"
              },
              "fareDetailsBySegment": [
                {
                  "segmentId": "1",
                  "cabin": "ECONOMY",
                  "fareBasis": "GKX08L4G",
                  "class": "G",
                  "includedCheckedBags": {
                    "quantity": 2
                  }
                },
                {
                  "segmentId": "2",
                  "cabin": "ECONOMY",
                  "fareBasis": "GKX08L4G",
                  "class": "G",
                  "includedCheckedBags": {
                    "quantity": 2
                  }
                },
                {
                  "segmentId": "3",
                  "cabin": "ECONOMY",
                  "fareBasis": "GKX08L4G",
                  "class": "G",
                  "includedCheckedBags": {
                    "quantity": 2
                  }
                }
              ]
            }
          ]
        },
        {
          "type": "flight-offer",
          "id": "5",
          "source": "GDS",
          "instantTicketingRequired": false,
          "nonHomogeneous": false,
          "oneWay": false,
          "lastTicketingDate": "2020-02-22",
          "numberOfBookableSeats": 9,
          "itineraries": [
            {
              "duration": "PT13H40M",
              "segments": [
                {
                  "departure": {
                    "iataCode": "SYD",
                    "terminal": "1",
                    "at": "2020-02-27T11:50:00"
                  },
                  "arrival": {
                    "iataCode": "LAX",
                    "terminal": "B",
                    "at": "2020-02-27T06:30:00"
                  },
                  "carrierCode": "UA",
                  "number": "842",
                  "aircraft": {
                    "code": "789"
                  },
                  "operating": {
                    "carrierCode": "UA"
                  },
                  "duration": "PT13H40M",
                  "id": "1",
                  "numberOfStops": 0,
                  "blacklistedInEU": false
                }
              ]
            },
            {
              "duration": "PT21H50M",
              "segments": [
                {
                  "departure": {
                    "iataCode": "LAX",
                    "terminal": "7",
                    "at": "2020-03-18T15:10:00"
                  },
                  "arrival": {
                    "iataCode": "IAH",
                    "terminal": "C",
                    "at": "2020-03-18T20:23:00"
                  },
                  "carrierCode": "UA",
                  "number": "1148",
                  "aircraft": {
                    "code": "738"
                  },
                  "operating": {
                    "carrierCode": "UA"
                  },
                  "duration": "PT3H13M",
                  "id": "9",
                  "numberOfStops": 0,
                  "blacklistedInEU": false
                },
                {
                  "departure": {
                    "iataCode": "IAH",
                    "terminal": "E",
                    "at": "2020-03-18T21:25:00"
                  },
                  "arrival": {
                    "iataCode": "SYD",
                    "at": "2020-03-20T07:00:00"
                  },
                  "carrierCode": "UA",
                  "number": "101",
                  "aircraft": {
                    "code": "789"
                  },
                  "operating": {
                    "carrierCode": "UA"
                  },
                  "duration": "PT17H35M",
                  "id": "10",
                  "numberOfStops": 0,
                  "blacklistedInEU": false
                }
              ]
            }
          ],
          "price": {
            "currency": "AUD",
            "total": "1047.06",
            "base": "828.00",
            "fees": [
              {
                "amount": "0.00",
                "type": "SUPPLIER"
              },
              {
                "amount": "0.00",
                "type": "TICKETING"
              }
            ],
            "grandTotal": "1047.06"
          },
          "pricingOptions": {
            "fareType": [
              "PUBLISHED"
            ],
            "includedCheckedBagsOnly": true
          },
          "validatingAirlineCodes": [
            "UA"
          ],
          "travelerPricings": [
            {
              "travelerId": "1",
              "fareOption": "STANDARD",
              "travelerType": "ADULT",
              "price": {
                "currency": "AUD",
                "total": "1047.06",
                "base": "828.00"
              },
              "fareDetailsBySegment": [
                {
                  "segmentId": "1",
                  "cabin": "ECONOMY",
                  "fareBasis": "GKX08L4G",
                  "class": "G",
                  "includedCheckedBags": {
                    "quantity": 2
                  }
                },
                {
                  "segmentId": "9",
                  "cabin": "ECONOMY",
                  "fareBasis": "GKX08L4G",
                  "class": "G",
                  "includedCheckedBags": {
                    "quantity": 2
                  }
                },
                {
                  "segmentId": "10",
                  "cabin": "ECONOMY",
                  "fareBasis": "GKX08L4G",
                  "class": "G",
                  "includedCheckedBags": {
                    "quantity": 2
                  }
                }
              ]
            }
          ]
        }
      ]
    });
  });
}
