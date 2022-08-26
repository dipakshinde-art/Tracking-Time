import React, { Component } from "react";
import moment from "moment";
import WeekToolbar from "./WeekToolbar";
import { getAllDaysInTheWeek } from "./util";
import Weekheader from "./Weekheader";
import ScrollCalender from "../Pages/Dashbord/ScrollCalender";
import CalenderGrid from "../Pages/Dashbord/CalenderGrid";
class WeekView extends Component {
  state = {
    startDate: +moment(),
    weekDays: getAllDaysInTheWeek(),
    showAddEventModal: false,
    eventStart: null,
    eventEnd: null,
  };

  goToNextWeek = () => {
    const dateAfter7Days = moment(this.state.startDate).add(7, "days");
    this.setState({
      startDate: +dateAfter7Days,
      weekDays: getAllDaysInTheWeek(dateAfter7Days),
    });
  };

  /**
   * Sets previous week days in the state
   */
  goToPreviousWeek = () => {
    const dateBefore7Days = moment(this.state.startDate).subtract(7, "days");
    this.setState({
      startDate: +dateBefore7Days,
      weekDays: getAllDaysInTheWeek(dateBefore7Days),
    });
  };

  /**
   * Brings today's date in the view
   */
  goToToday = () => {
    this.setState({
      startDate: +moment(),
      weekDays: getAllDaysInTheWeek(),
    });
  };
  render() {
    const { weekDays, showAddEventModal, eventStart, eventEnd, startDate } =
      this.state;
    return (
      <>
        <ScrollCalender
          goToPreviousWeek={this.goToPreviousWeek}
          goToNextWeek={this.goToNextWeek}
          startDate={startDate}
          goToToday={this.goToToday}
        />
        {/* <Weekheader weekDays={weekDays} /> */}
        <CalenderGrid weekDays={weekDays}/>
      </>
    );
  }
}
export default WeekView;
