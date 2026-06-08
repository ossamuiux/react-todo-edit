import React from 'react';

export default function CheckBox({
  label,
  checked,
  onChange,
  className,
  children,
}) {
  return (
    <label className={`checkbox ${className}`}>
      <input
        className="sr-only"
        type="checkbox"
        checked={checked}
        onChange={onChange}
      />
      {children ? (
        children
      ) : (
        <span className="whitespace-pre-wrap">{label}</span>
      )}
    </label>
  );
}
