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
    route: string;
    elements: IElement[];
    sections?: ISection[];
  };

  type IConfigContextValue = IConfig;

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

  type ISidebar = {
    isExpanded: boolean;
  };
}

export {};
