import React from 'react';
import { useField } from 'formik';

import TextField from '@material-ui/core/TextField';

const FormTextField = ({ name, ...props }) => {
  const [field, meta] = useField(name);
  const errorText = meta.error && meta.touched ? meta.error : '';

  return (
    <TextField
      {...props}
      {...field}
      helperText={errorText}
      error={!!errorText}
    />
  );
};

export default FormTextField;