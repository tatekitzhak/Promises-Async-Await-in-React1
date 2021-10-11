import Home from './home';
import Login from './login';
import Page1 from './pages/Page1';
import Page2 from './pages/Page2';


const routes = [
	{
		path: '/login',
		component: Login,
	},
	{
		path: '/home',
		component: Home,
		routes: [
			{
				path: '/home/page1',
				component: Page1,
			},
			{
				path: '/home/page2',
				component: Page2,
			},
		],
	},
];

export default routes;
