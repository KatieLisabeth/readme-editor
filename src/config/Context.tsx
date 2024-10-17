import React from 'react';
import { MARKDOWN_KEY } from 'utils/constants';

const Context = React.createContext<IContextValue>({} as any);

export const MarkdownProvider: React.FC<IMarkdownProvider> = ({ children }) => {
  const [markdownText, setMarkdownText] = React.useState<string>('');
  const [savedItems, setSavedItems] = React.useState<string[]>(() => {
    const storedItems = JSON.parse(
      sessionStorage.getItem(MARKDOWN_KEY) || '[]'
    );
    return storedItems;
  });

  React.useEffect(() => {
    sessionStorage.setItem(MARKDOWN_KEY, JSON.stringify(savedItems));
  }, [savedItems]);

  const resetMarkdown = () => {
    sessionStorage.removeItem(MARKDOWN_KEY);
    setSavedItems([]);
  };

  return (
    <Context.Provider
      value={{
        markdownText,
        setMarkdownText,
        savedItems,
        setSavedItems,
        resetMarkdown,
      }}
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
