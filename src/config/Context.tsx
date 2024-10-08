import React from 'react';

const Context = React.createContext<IContextValue>({} as any);

export const MarkdownProvider: React.FC<IMarkdownProvider> = ({ children }) => {
  const [markdownText, setMarkdownText] = React.useState<string>('');

  return (
    <Context.Provider value={{ markdownText, setMarkdownText }}>
      {children}
    </Context.Provider>
  );
};

export const useMarkdownContext = () => {
  const context = React.useContext(Context);
  if (!context) {
    throw new Error(
      'useMarkdownContext must be used within a MarkdownProvider'
    );
  }
  return context;
};

export default Context;
