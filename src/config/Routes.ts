import Playground from 'views/Playground';
import WelcomePage from 'views/WelcomePage';

const routesConfig: IRouteConfig[] = [
  {
    path: '/',
    element: WelcomePage,
  },
  {
    path: '/playground',
    element: Playground,
  },
];

export default routesConfig;
