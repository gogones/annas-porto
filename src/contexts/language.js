import {createContext} from 'react';

const LanguageContext = createContext({
  value: 'en',
  change: lang => {},
});

export default LanguageContext;
