import React from "react";
import "./index.scss";

export default ({
  hex = "#000",
  startDate,
  endDate,
  startTime,
  endTime,
  text,
}) => {
  return (
    <div className="event-item">
      <div className="event-item_inner">
        <div className="event-item_block">
          <div
            className="event-item_circle-hex"
            style={{ backgroundColor: hex }}
          ></div>
          <div className="event-item_descr">
            <div className="event-item_text">{text}</div>
            <div className="event-item_date">
              <div className="event-item_start-date">
                <div className="event-item_time">
                  {startTime}{" "}
                  <span className="event-item_format">(MSK +3)</span>
                </div>
                <div className="event-item_field">{startDate}</div>
              </div>
              <div className="event-item_end-date">
                <div className="event-item_time">
                  {endTime} <span className="event-item_format">(MSK +3)</span>
                </div>
                <div className="event-item_field">{endDate}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
