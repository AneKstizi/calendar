import React from "react";
import "./index.scss";
import EventItem from "./components/EventItem";

export default ({ currentEvent, selectedDate = new Date() }) => {
  const options = { year: "numeric", month: "long", day: "numeric" };
  return (
    <div className="event-list">
      <div className="event-list_inner">
        <div className="event-list_title">
          {selectedDate?.toLocaleDateString("ru", options) || ""}
        </div>
        {currentEvent?.length ? (
          currentEvent.map((item, index) => (
            <div key={index} className="event-list_item">
              <EventItem
                key={index}
                hex={item.hex}
                startDate={item.startDate}
                endDate={item.endDate}
                startTime={item.startTime}
                endTime={item.endTime}
                text={item.eventsName}
              />
            </div>
          ))
        ) : (
          <div>Событий нет</div>
        )}
      </div>
    </div>
  );
};
