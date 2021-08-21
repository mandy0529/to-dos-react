import React, {useState, useContext} from 'react';

export const TranslateContext = React.createContext();

const TranslateProvider = ({defaultLang, children, translation}) => {
  const [lang, setLang] = useState(defaultLang);
  console.log(lang);
  const autoChangeLang = (text) => {
    if (lang === defaultLang) {
      return text;
    } else {
      return translation[lang][text];
    }
  };
  return (
    <TranslateContext.Provider value={{setLang, autoChangeLang}}>
      {children}
    </TranslateContext.Provider>
  );
};

export const useTranslate = () => {
  const {setLang} = useContext(TranslateContext);
  return setLang;
};

export const useChangeTranslate = () => {
  const {autoChangeLang} = useContext(TranslateContext);
  return autoChangeLang;
};

export default TranslateProvider;
