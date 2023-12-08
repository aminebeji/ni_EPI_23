import { useContext, useEffect } from "react";
import "./styles/App.css";
import { TranslationsContext } from "./services/NI_23";
import NavBar from "./components/NavBar";
import TextAnimation from "./components/TextAnimation";

function App() {
  var { currentLanguage, setLanguage, translate, updateLanguagesPath } =
    useContext(TranslationsContext);
  useEffect(() => {
    updateLanguagesPath({
      en: require("./services/data/en.json"),
      fr: require("./services/data/fr.json"),
      es: require("./services/data/es.json"),
      de: require("./services/data/de.json"),
      ar: require("./services/data/ar.json"),
      zh : require("./services/data/zh.json")
    });
  }, []);
  return (
    <div className="App">
      <NavBar />
      <TextAnimation direction="left" text={translate("par1")} />
      <TextAnimation direction="right" text={translate("par2")} />
      <TextAnimation direction="left" text={translate("par3")} />
    </div>
  );
}

export default App;
