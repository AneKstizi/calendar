import React from "react";

export default ({ value, change, className, options, link = () => {} }) => {
  console.log(value);
  return (
    <select ref={link} value={value} onChange={change} className={className}>
      {options.map((e, i) => (
        <option key={i} value={e.mounth}>
          {e.eventsName}
        </option>
      ))}
    </select>
  );
};
