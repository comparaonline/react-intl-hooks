import { useContext } from 'react';
import { IntlContext } from './IntlContext';

export const useFormatMessage = () => {
  const intl = useContext(IntlContext);
  return id => intl.formatMessage({ id });
};
