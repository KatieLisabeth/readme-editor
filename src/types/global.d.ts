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
    sections?: ISection[];
  };

  type IContextValue = {
    markdownText: string;
    setMarkdownText: (text: string) => void;
  };

  type IMarkdownProvider = {
    children: React.ReactNode;
  };

  type IRouteConfig = {
    path: string;
    element: React.FC;
  };

  type IMarkdownEditor = {
    markdownText: string;
    onMarkdownChange: (
      event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
    ) => void;
    onToggleView: () => void;
  };

  type IMarkdownPreview = {
    markdownText: string;
    ReactMarkdown: any;
    rehypeDocument: any;
    remarkGfm: any;
    onToggleView: () => void;
  };
}

export {};
