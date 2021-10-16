import React from "react";

interface props {
  label: string;
}

export const FormField: React.FC<props> = ({ label, children }) => {
  return (
    <div className="flex flex-col">
      <label className="mb-4">{label}</label>
      {children}
    </div>
  )
}
