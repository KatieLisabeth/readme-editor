declare global {
  type ISection = {
    id: string;
    title: string;
    description: string;
  };

  type IConfig = {
    basePath: string;
    route: string;
    sections: ISection[];
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
}

export {};
