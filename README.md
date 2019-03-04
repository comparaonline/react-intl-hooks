# @comparaonline/react-intl-hooks

Workaround to have a React Intl Hooks

Source: https://github.com/yahoo/react-intl/issues/1224#issuecomment-449895045

## Installation

This package has as peer dependencies React (^16.8) and React Intl

```
yarn add react-intl 
```

If you use TS

```
yarn add [--dev] @types/react-intl
```

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

const App = () => ( 
  <IntlProvider locale={intlLocale} key={intlLocale} messages={messages} defaultLocale='en-gb'>
    <InjectIntlContext>
      <TestIntl />
    </InjectIntlContext>
  </IntlProvider>
);
```
