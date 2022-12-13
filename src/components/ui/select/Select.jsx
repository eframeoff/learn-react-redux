import React from "react";

const Select = ({ options, defaultVal, value, onChange }) => {
  return (
    <>
      <select
        style={{ width: "150px", height: "30px" }}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      >
        <option disabled value="">
          {defaultVal}
        </option>
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.name}
          </option>
        ))}
      </select>
    </>
  );
};

export default Select;
