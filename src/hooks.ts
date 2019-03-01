import { useContext } from 'react';
import { MessageValue } from 'react-intl';
import { IntlContext } from './IntlContext';

export const useFormatMessage = () => {
  const { formatMessage } = useContext(IntlContext);

  return (id: string, values?: { [key: string]: MessageValue }) =>
    formatMessage({ id }, values);
};
