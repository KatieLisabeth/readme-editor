declare global {
  type IElement = {
    id: string;
    element: string;
    syntax: string;
  };

  type ISection = {
    id: string;
    title: string;
    element: IElement[];
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
  };

  type IMarkdownProvider = {
    children: React.ReactNode;
  };

  interface IMarkdownSection {
    section: ISection;
    onSelectElement: (selectedSyntax: string[]) => void;
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
}

export {};
