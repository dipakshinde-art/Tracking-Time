import moment from "moment";

export const getAllDaysInTheWeek = (currentDate = moment()) => {
    const weekStart = currentDate.clone().startOf("week");

    const days = Array.from(Array(7))
      .map((day, index) => index)
      .map((day) =>
        moment(weekStart).add(day, "days").set("minutes", 0).set("seconds", 0)
      )
      .map((momentObj) => ({
        date: momentObj.date(),
        dateStamp: +momentObj,
        weekDayName: momentObj.format("ddd"),
      }));

    return days;
  };

  export const isTodaysDate = dateStamp => {
    const today = moment ();
    dateStamp = moment (dateStamp);
    return (
      moment.duration (dateStamp.diff (today)).days () === 0 &&
      today.day () === dateStamp.day ()
    );
  };