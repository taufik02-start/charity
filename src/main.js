import App from './App.svelte';
import Navigation from './Navigation.svelte';
const app = new App({
	target: document.body,
	props: {
		name: 'Taufik'
	}
});

export default app;