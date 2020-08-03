import React, { useCallback } from "react";
import events from "../../../../events";
import "./index.scss";

export default ({ date, className, onClick }) => {
  const _onClick = useCallback(() => {
    onClick();
  }, [onClick]);
  return date ? (
    <td className={className} onClick={_onClick}>
      {date.getDate()}

      <span
        className={
          events(date.toLocaleDateString())?.length &&
          "calendar-day_count-events"
        }
      >
        {events(date.toLocaleDateString())?.length}
      </span>
    </td>
  ) : (
    <td className="calendar-day_empty-day">-</td>
  );
};
