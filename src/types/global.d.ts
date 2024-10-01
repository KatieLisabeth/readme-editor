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

  type RouteConfig = {
    path: string;
    element: React.FC;
  };
}

export {};
