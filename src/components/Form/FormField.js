import React from "react";

import styles from  "./FormField.module.scss";

export default function FormField({ label, children }) {
  return (
    <div className={styles.formField}>
      <label className={styles.label}>{label}</label>
      {children}
    </div>
  )
}
