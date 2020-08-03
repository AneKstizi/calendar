import React from "react";

export default ({
  value,
  change,
  className,
  options,
  link = () => {},
  filter = false,
}) => {
  return (
    <select ref={link} value={value} onChange={change} className={className}>
      {options.map((e, i) => (
        <option key={i} value={filter ? e : i}>
          {e}
        </option>
      ))}
    </select>
  );
};
