import React from 'react';
import moment from 'moment';
import { chunk } from 'lodash';

import data from '../naytokset.json';

// Style
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Naytokset = () => {
  const shows = data.shows;

  const PAST = 'red';
  const NEXT = 'blue';
  const COMING = 'green';
  const TODAY = 'red';
  let firstShow = true;

  // Return status for the show
  // -1 => show is in past
  //  0 => next show
  //  1 => show is in future
  const figureShowStatus = () => {
    let status = now - moment(shows[showNumber].date) > 0 ? -1 : 1;
    return status;
  };

  const getShowColor = (status) => {
    switch (status) {
      case -1:
        return PAST;
      case 1:
        return COMING;
      default:
        return;
    }
  };

  // Currently expects json to be sorted by date and time
  // TODO: Implement sorting
  //https://stackoverflow.com/questions/10123953/how-to-sort-an-array-by-a-date-property
  //array.sort((a,b)=>a.getTime()-b.getTime());

  // TODO: Fix case if premiere is not Sunday

  // Get the array of dates
  let dateToBegin = moment(shows[0].date).subtract(6, 'days').format();
  let last = shows[shows.length - 1].date;
  let arr = [];
  for (let date = dateToBegin; date <= last; date = moment(date).add(1, 'days').format()) {
    arr.push({
      'date': date,
      'event1': null,
      'event2': null,

    });
  }

  let showNumber = 0;
  let now = moment();

  for (let i = 0; i < arr.length; i++) {
    if (arr[i].date === shows[showNumber].date) {

      let status = figureShowStatus();

      arr[i].event1 = {
        time: shows[showNumber].time,
        extra: shows[showNumber].extra,
        status
      };

      showNumber++;
      // Check if two shows
      if (arr[i].date === shows[showNumber].date) {

        let status = figureShowStatus();
        
        arr[i].event2 = {
          time: shows[showNumber].time,
          extra: shows[showNumber].extra,
          status
        };

        showNumber++;
      }
    }
  }

  const fillCalendar = () => {

    const devidedArray = chunk(arr, 7);

    const twoRowsOneCol = (date, time, color1) => (
      <div style={{color: color1}}>
        <Row style={{paddingBottom: 3}}>
          <Col xs={12}>
            {date}
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
            {time}
          </Col>
        </Row>
      </div>
    );

    const twoRowsTwoCols = (date, time1, color1, time2, color2) => (
      <div>
        <Row>
          <Col xs={12} style={{color: color2}}>
            {date}
          </Col>
        </Row>
        <Row>
          <Col xs={6} style={{color: color1}}>
            {time1}
          </Col>
          <Col xs={6} style={{color: color2}}>
            {time2}
          </Col>
        </Row>
      </div>
    );

    return(
      <div>
        {devidedArray.map((cols) => (
          <Row>
            {cols.map((col, index) => {
              let outerXs = 1;
              let fontSize = 2;
              switch (index) {
                case 1:
                case 3:
                  outerXs = 2;
                  if (col.event1 !== null)
                    fontSize = 3;
                  break;
                case 6:
                  outerXs = 4;
                  if (col.event1 !== null)
                    fontSize = 3;
                  break;
                default:
                  break;
              }

              const date = moment(col.date).format('DD.MM.');
              const now = moment();
              let color1;
              let color2;
              if (col.event1 !== null) {
                const showTime1 = moment(`${col.date} ${col.event1.time}`);
                color1 = getShowColor(now - showTime1 > 0 ? -1 : 1);
                if (firstShow) {
                  color1 = NEXT;
                  firstShow = false;
                }
                if (col.event2 !== null) {
                  const showTime2 = moment(`${col.date} ${col.event2.time}`);
                  color2 = getShowColor(now - showTime2 > 0 ? -1 : 1);
                  if (firstShow) {
                    color2 = NEXT;
                    firstShow = false;
                  }
                }
              }

              const colStyle = {
                fontSize: fontSize + 'vw',
                paddingTop: 5,
                paddingBottom: 5,
                paddingRight: 0,
                paddingLeft: 0,
              }

              return (
                <Col xs={outerXs} align='center' style={colStyle} className='border border-dark'>
                  {col.event1 === null ?
                    date :
                    col.event2 === null ?
                      twoRowsOneCol(date, col.event1.time, color1) :
                      twoRowsTwoCols(date, col.event1.time, color1, col.event2.time, color2) 
                  }
                </Col>
              );
              })}
            </Row>
          ))
        }
      </div>
    );
  };

  return (
    <Container>
      <Row className='row mt-3'>
        <Col xs={1} align='center'>ma</Col>
        <Col xs={2} align='center'>TI</Col>
        <Col xs={1} align='center'>ke</Col>
        <Col xs={2} align='center'>TO</Col>
        <Col xs={1} align='center'>pe</Col>
        <Col xs={1} align='center'>la</Col>
        <Col xs={4} align='center'>SU</Col>
      </Row>

      {fillCalendar()}

    </Container>
  );
};

export default Naytokset;