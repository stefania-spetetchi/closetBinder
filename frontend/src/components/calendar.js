import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import 'bootstrap';
import { useState } from 'react';
import NavBar from './navBar';
import './style.css';

const CalendarView = () => {
  console.log('hello');
  const [value, onChange] = useState(new Date());

  return (
    <div>
      <NavBar />
      <div>
        <Calendar className="calendar" onChange={onChange} value={value} />
      </div>
    </div>
  );
};

export default CalendarView;
