/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import 'bootstrap';
import moment from 'moment';
import { useState } from 'react';
import NavBar from './navBar';
import './style.css';

const CalendarView = (props) => {
  const { dates } = props;
  console.log(dates);

  return (
    <div>
      <div>
        <Calendar
          className="calendar"
          // onChange={setValue}
          value={new Date(moment(dates[5]).format('YYYY, MMM, DD'))}
        />
      </div>
    </div>
  );
};

export default CalendarView;
