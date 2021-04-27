import React from "react";
import FormField from "./FormField";
import Input from "./Input";

export default function FormInput({label, inputProps}) {
  return (
    <FormField label={label}>
      <Input {...inputProps} />
    </FormField>
  );
}

