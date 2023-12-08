import { Button, Dropdown } from "antd";
import React, { useContext } from "react";
import { TranslationsContext } from "../services/NI_23";

function MultiLang() {
  var { currentLanguage, setLanguage, availableLang, updateLanguagesPath } =
    useContext(TranslationsContext);
  return (
    <Dropdown
      menu={{
        items: availableLang.map((item) => {
          return {
            key: item,
            label: (
              <span
                key={item}
                onClick={() => {
                  setLanguage(item);
                }}
              >
                {item}
              </span>
            ),
          };
        }),
      }}
      placement="bottomLeft"
      arrow
    >
      <Button> {currentLanguage} </Button>
    </Dropdown>
  );
}

export default MultiLang;
