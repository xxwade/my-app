import { IRoute, createApp } from 'mili-app';

const routes: IRoute[] = [
  {
    path: '/page1',
    component: () => import('./pages/Page1'),
  },
  {
    path: '/page2',
    component: () => import('./pages/Page2'),
  },
  {
    path: '/',
    redirect: '/page1'
  },
]

createApp({
  name: 'mine',
  rootElementId: 'root',
  routes
})
