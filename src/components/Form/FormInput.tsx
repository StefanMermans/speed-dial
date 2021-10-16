import React from "react";

import {Input} from "./Input";
import {FormField} from "./FormField";

interface props {
  label: string;
  inputProps: any;
}

export const FormInput: React.FC<props> = ({ label, inputProps }) => {
  return (
    <FormField label={label}>
      <Input {...inputProps} />
    </FormField>
  );
}

