import { useEffect, useState } from 'react';

export const useValidation = (value, validations) => {
  const [isEmpty, setEmpty] = useState(true);
  const [emailError, setEmailError] = useState(true);
  const [minLengthError, setMinLengthError] = useState(false);

  useEffect(() => {
    for (const validation in validations) {
      switch (validation) {
        case 'isEmpty':
          value ? setEmpty(false) : setEmpty(true);
          break;
        case 'minLength':
          value.length < validations[validation]
            ? setMinLengthError(true)
            : setMinLengthError(false);
          break;
        case 'emailError':
          const isEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
          isEmail ? setEmailError(false) : setEmailError(true);
          break;
        default:
          break;
      }
    }
  }, [value, validations]);

  return { isEmpty, emailError, minLengthError };
};
