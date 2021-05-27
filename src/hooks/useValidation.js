import { useEffect, useState } from 'react';

export const useValidation = (value, validations) => {
  const [isEmpty, setEmpty] = useState(true);
  const [emailError, setEmailError] = useState(true);
  const [minLengthError, setMinLengthError] = useState(false);

  useEffect(() => {
    for (const validation in validations) {
      switch (validation) {
        case 'isEmpty':
          setEmpty(!value);
          break;
        case 'minLength':
          setMinLengthError(value.length < validations[validation]);
          break;
        case 'emailError':
          const isEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
          setEmailError(!isEmail);
          break;
        default:
          break;
      }
    }
  }, [value, validations]);

  return { isEmpty, emailError, minLengthError };
};
