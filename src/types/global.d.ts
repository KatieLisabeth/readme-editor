declare global {
  type IElement = {
    id: string;
    element: string;
    syntax: string;
  };

  type ISection = {
    id: string;
    title: string;
    elements: IElement[];
  };

  type IConfig = {
    route?: string;
    sections: ISection[];
  };

  type IContextValue = {
    markdownText: string;
    setMarkdownText: React.Dispatch<React.SetStateAction<string>>;
    savedItems: string[];
    setSavedItems: React.Dispatch<React.SetStateAction<string[]>>;
    resetMarkdown: () => void;
  };

  type IMarkdownProvider = {
    children: React.ReactNode;
  };

  interface IMarkdownSection {
    section: ISection;
    onSelectElement: (selectedSyntax: string[]) => void;
    isSearch?: boolean;
  }

  type IRouteConfig = {
    path: string;
    element: React.FC;
  };

  type IMarkdownEditor = {
    savedItems: string[];
    onMarkdownChange: (updatedItems: string[]) => void;
  };

  type IMarkdownPreview = {
    markdownText: string;
    ReactMarkdown: any;
    rehypeDocument: any;
    remarkGfm: any;
  };

  type IMarkdownSelector = {
    value: string;
    onChange: (event: SelectChangeEvent<string>) => void;
  };

  type IMarkdownManager = {
    onReorderItems: (updatedItems: string[]) => void;
  };
}

export {};
