import React, {useState} from 'react';
// import 'assets/css/app.css';
import Home from 'pages/Home';
import {LanguageContext} from 'contexts';

function App() {
  const [languange, setLanguage] = useState('en');

  const changeLanguage = lang => setLanguage(lang);

  return (
    <LanguageContext.Provider
      value={{value: languange, change: changeLanguage}}>
      <Home />
    </LanguageContext.Provider>
  );
}

export default App;
