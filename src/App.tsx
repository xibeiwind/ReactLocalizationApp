
import React, { FC, useState, useCallback, useEffect, Component, useReducer } from 'react';
import { ToastContainer, toast } from "react-toastify";
import { strings } from "./common/strings";
import { Toggle, TextField, DefaultButton } from '@fluentui/react';
import "react-toastify/dist/ReactToastify.css";

export const App: FC = () => {

  const onCreateSuccessInfo = () => {
    toast.success(strings.projectCreatedMessage(projectName), { autoClose: 5000 });
  };
  const onCreateFailInfo = () => {
    toast.error(strings.projectCreateFailMessage(projectName, strings.error.nameDuplicate), { autoClose: 5000 });
  }
  function languageReducer(state: any, action: any) {
    strings.setLanguage(action.lang);
    return action.lang;
  }
  const [language, switchLanguage] = useReducer(languageReducer, 'en');
  const [projectName, setProjectName] = useState('Demo Project');

  useEffect(() => {
    strings.setLanguage(language);
    return () => { };
  }, [language]);

  const toggleLanguage = () => {
    if (language === 'en') {
      switchLanguage({ lang: 'cn' });
    } else {
      switchLanguage({ lang: 'en' });
    }
  }

  const onSetProjectName = (e: any) => {
    setProjectName(e.target.value);
  }

  return (
    <>
      <h2>App {strings.appName}</h2>
      <div>
        <span>
          <Toggle label={strings.language} onChange={toggleLanguage} />
        </span>
      </div>
      <div>
        <TextField styles={{ root: { maxWidth: '300px' } }}
          onChange={(e) => { onSetProjectName((e)) }}
          label={strings.projectName} value={projectName} />
        <div>
          {projectName}
        </div>
      </div>

      <div>
        <DefaultButton onClick={onCreateSuccessInfo}>{strings.createSuccess} </DefaultButton>
        <DefaultButton onClick={onCreateFailInfo} >{strings.createFail}</DefaultButton>
      </div>
      <ToastContainer />
    </>
  );
};