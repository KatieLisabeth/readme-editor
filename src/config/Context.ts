import React from 'react';

const ConfigContext = React.createContext<IConfigContextValue>({} as any);

export const useConfig = () => {
  const ctx = React.useContext(ConfigContext);
  return ctx;
};

export default ConfigContext;
