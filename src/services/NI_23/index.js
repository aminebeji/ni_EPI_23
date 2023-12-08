import React, { createContext, useContext, useState } from "react";

const TranslationsContext = createContext();

var TranslationProvider = ({ children }) => {
  let locale = navigator.language.split("-")[0] || "en";

  var [currentLanguage, setCurrentLanguage] = useState(
    sessionStorage.getItem("lang") || locale
  );

  var [languagesPath, setLanguagesPath] = useState({});

  var setLanguage = (value) => {
    sessionStorage.setItem("lang", value);
    setCurrentLanguage(value);
  };

  var [availableLang, setavailableLang] = useState([]);

  var updateLanguagesPath = (values) => {
    console.log("update lang paths => ", values);
    setLanguagesPath(values);
    setavailableLang(Object.keys(values));
  };

  var translate = (key) => {
    var currentLanguage = sessionStorage.getItem("lang") || locale;
    console.log(currentLanguage);
    console.log(languagesPath);
    var translations = languagesPath[currentLanguage];
    console.log(translations);
    return translations ? translations[key] : "";
  };
  return (
    <TranslationsContext.Provider
      value={{
        currentLanguage,
        setLanguage,
        languagesPath,
        availableLang,
        updateLanguagesPath,
        translate,
      }}
    >
      {children}
    </TranslationsContext.Provider>
  );
};
export default TranslationProvider;
export { TranslationProvider, TranslationsContext };
