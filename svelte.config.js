import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),
	
	compilerOptions: {
		// Force runes mode for the project, except for libraries. Can be removed in svelte 6.
		runes: ({ filename }) => (filename.split(/[/\\]/).includes('node_modules') ? undefined : true)
	},
	kit: { adapter: adapter({
			pages: 'build',
			assets: 'build',
			fallback: '404.html', // Essential for SPA routing
			precompress: false,
			strict: true
		}),
		paths: {
			// Replace 'your-repo-name' with your actual repository name
			base: process.env.NODE_ENV === 'production' ? '/main' : '',
		} 
		}
};

export default config;
