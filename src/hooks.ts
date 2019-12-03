import { useContext } from 'react';
import {
  DateSource,
  FormattedDate,
  FormattedMessage,
  FormattedNumber,
  FormattedTime,
  MessageValue
} from 'react-intl';
import { IntlContext } from './IntlContext';

export type FormatMessage = (
  id: FormattedMessage.MessageDescriptor['id'],
  values?: { [key: string]: MessageValue }
) => string;

export const useFormatMessage = () => {
  const { formatMessage } = useContext(IntlContext);

  const formatMessageFn: FormatMessage = (id, values) =>
    formatMessage({ id }, values);

  return formatMessageFn;
};

export type FormatNumber = (
  value: number,
  options?: FormattedNumber.PropsBase
) => string;

export const useFormatNumber = () => {
  const { formatNumber } = useContext(IntlContext);

  const formatNumberFn: FormatNumber = (value, options) =>
    formatNumber(value, options);

  return formatNumberFn;
};

export type FormatDate = (
  value: DateSource,
  options?: FormattedDate.PropsBase
) => string;

export const useFormatDate = () => {
  const { formatDate } = useContext(IntlContext);

  const formatDateFn: FormatDate = (value, options) =>
    formatDate(value, options);

  return formatDateFn;
};

export type FormatTime = (
  value: DateSource,
  options?: FormattedTime.PropsBase
) => string;

export const useFormatTime = () => {
  const { formatTime } = useContext(IntlContext);

  const formatTimeFn: FormatTime = (value, options) =>
    formatTime(value, options);

  return formatTimeFn;
};
