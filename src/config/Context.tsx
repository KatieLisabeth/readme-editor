import React from 'react';

const Context = React.createContext<IContextValue>({} as any);

export const MarkdownProvider: React.FC<IMarkdownProvider> = ({ children }) => {
  const [markdownText, setMarkdownText] = React.useState<string>('');
  const [savedItems, setSavedItems] = React.useState<string[]>(() => {
    // Load saved items from sessionStorage on initialization
    const storedItems = JSON.parse(
      sessionStorage.getItem('savedItems') || '[]'
    );
    return storedItems;
  });

  // Save savedItems to sessionStorage whenever it changes
  React.useEffect(() => {
    sessionStorage.setItem('savedItems', JSON.stringify(savedItems));
  }, [savedItems]);
  return (
    <Context.Provider
      value={{ markdownText, setMarkdownText, savedItems, setSavedItems }}
    >
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
