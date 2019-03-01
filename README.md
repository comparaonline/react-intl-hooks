# @comparaonline/react-intl-hooks

Workaround to have a React Intl Hooks

Source: https://github.com/yahoo/react-intl/issues/1224#issuecomment-449895045

## Installation

```
yarn add @comparaonline/react-intl-hooks
```

## Usage

```tsx
import { useFormatMessage } from '@comparaonline/react-intl-hooks';

const TestIntl = () => {
  const t = useFormatMessage();
  return (
    <div>
      { t('translation.id', { value: 'sample'}) }
    </div>
  )
}

const App = () => 
  <IntlProvider locale={intlLocale} key={intlLocale} messages={messages} defaultLocale='en-gb'>
    <InjectIntlContext>
      <TestIntl />
    </InjectIntlContext>
  </IntlProvider>

```
