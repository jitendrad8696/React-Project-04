import React, { useId } from "react";

function InputBox({
  className = "",
  label,
  amount,
  setAmount,
  from,
  setFrom,
  disabled = false,
  options = [],
}) {
  const inputId = useId();
  const selectId = useId();
  return (
    <div className={className}>
      <label htmlFor={inputId}>{label}</label>
      <input
        type="number"
        id={inputId}
        value={amount}
        disabled={disabled}
        onChange={(e) => setAmount(Number(e.target.value))}
      />
      <label htmlFor={selectId}>Select Currency</label>
      <select
        id={selectId}
        value={from}
        onChange={(e) => setFrom(e.target.value)}
      >
        {options.map((value) => (
          <option key={value} value={value}>
            {value}
          </option>
        ))}
      </select>
    </div>
  );
}

export default InputBox;
