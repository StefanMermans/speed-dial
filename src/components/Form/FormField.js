import React from "react";

import styles from  "./FormField.module.scss";

export default function FormField({ label, children }) {
  return (
    // <div className={cn("bg-red", styles.formField)}>
    <div className="flex align-middle flex-col">
      <label className={styles.label}>{label}</label>
      {children}
    </div>
  )
}
