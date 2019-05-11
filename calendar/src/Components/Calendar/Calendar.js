import React, { Component } from 'react';
import moment from 'moment';
import './Calendar.css'

var weekdays = moment.weekdays();
var weekdaysShort = moment.weekdaysShort();
var months = moment.months();

class Calendar extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      momentContext:moment(),
      today:moment(),
      months:moment.months(),
      showMonthPopup: false,
      showYearPopup:false
    }
  }

  year = () => this.state.momentContext.format("Y");
  month = () => this.state.momentContext.format("MMMM");
  daysInMonth = () => this.state.momentContext.daysInMonth();
  currentDate = () => this.state.momentContext.get("date");
  currentDay = () => this.state.momentContext.format("D");

  firstDayOfMonth = () => {
    let dateContext = this.state.momentContext;
    let firstDay = moment(dateContext).startOf('month').format('d');
    return firstDay;
  }
  
  render() {

    let weekdays = weekdaysShort.map((day) => {
      return (
          <td key={day} className="week-day">{day}</td>
      )
  });

  let blanks = [];

  for (let i = 0; i < this.firstDayOfMonth(); i++) {
      blanks.push(<td key={i * 80} className="emptySlot">
          {""}
          </td>
      );
  }

let daysInMonth = [];

for (let d = 1; d <= this.daysInMonth(); d++) {
    let className = (d == this.currentDay() ? "day current-day": "day");
    let selectedClass = (d == this.state.selectedDay ? " selected-day " : "")
    daysInMonth.push(
        <td key={d} className={className + selectedClass} >
            <span onClick={(e)=>{this.onDayClick(e, d)}}>{d}</span>
        </td>
    );
}


  let totalSlots = [...blanks, ...daysInMonth];
  let rows = [];
  let cells = [];

  totalSlots.forEach((row, i) => {
      if ((i % 7) !== 0) {
          cells.push(row);
      } else {
          let insertRow = cells.slice();
          rows.push(insertRow);
          cells = [];
          cells.push(row);
      }
      if (i === totalSlots.length - 1) {
          let insertRow = cells.slice();
          rows.push(insertRow);
      }
  });
  console.log('rows', rows)
  console.log('cells', cells)

  let trElems = rows.map((d, i) => {
      return (
          <tr key={i*100}>
              {d}
          </tr>
      );
  })

    return (
      <div className="calendar-container">
        <h1 className="calendar-title">Calendar</h1>
        <table className="calendar">
          <thead>
              <tr className="calendar-header">

              </tr>
          </thead>
          <tbody>
              <tr>
                {weekdays}
              </tr>
              {trElems}
          </tbody>
        </table>
      </div>
    )
  }
}
export default Calendar