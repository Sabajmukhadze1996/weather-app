import React, { useState, useEffect, createContext } from "react";
import translation from "./translation.json";

export const Translation = createContext<any>({});

const TranslationContextProvider = ({ children }: any) => {
  const [lang, setLang] = useState("en");
  const [content, setContent] = useState({});

  useEffect(() => {
    if (lang === "en") {
      setTimeout(() => {
        setContent(translation.en);
      }, 500);
    } else if (lang === "geo") {
      setTimeout(() => {
        setContent(translation.geo);
      }, 500);
    }
  }, [lang]);

  return (
    <Translation.Provider value={{ lang, setLang, content, setContent }}>
      {children}
    </Translation.Provider>
  );
};

export default TranslationContextProvider;
