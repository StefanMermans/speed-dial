import React from "react";

export default function FormField({ label, children }) {
  return (
    <div className="flex flex-col">
      <label className="mb-4">{label}</label>
      {children}
    </div>
  )
}
