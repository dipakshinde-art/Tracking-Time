import React from 'react'
import WeekView from './WeekView';

const Calender = () => {

let events ="abc"

    // addNewEvent = event => {
    //     event = {
    //       ...event,
    //       id: CalendarEventHandler.generateId (event),
    //     };
    //     this.setState (previousSate => ({
    //       events: CalendarEventHandler.add (previousSate.events, event),
    //     }));
    //   };

    //   updateEvent = (eventId, updatedEvent) => {
    //     this.setState (previousState => {
    //       return {
    //         events: CalendarEventHandler.update (
    //           eventId,
    //           updatedEvent,
    //           previousState.events
    //         ),
    //       };
    //     });
    //   };
    //   deleteEvent = eventId => {
    //     this.setState (previousState => {
    //       return {
    //         events: CalendarEventHandler.delete (eventId, previousState.events),
    //       };
    //     });
    //   };
  return (
    <WeekView 
        events={events}
        // onNewEvent={this.addNewEvent}
        // onEventUpdate={this.updateEvent}
        // onEventDelete={this.deleteEvent}
      />
  )
}

export default Calender