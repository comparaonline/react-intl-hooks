import React from 'react';
import { injectIntl, IntlContext } from 'react-intl';

export const InjectIntlContext = injectIntl(({ intl, children }) => {
  return <IntlContext.Provider value={intl}>{children}</IntlContext.Provider>;
});
