import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig} from 'vite';

export default defineConfig(() => {
  return {
    plugins: [react(), tailwindcss()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    build: {
      rollupOptions: {
        input: {
          main: path.resolve(__dirname, 'html/index.html'),
          explore: path.resolve(__dirname, 'explore.html'),
          destination: path.resolve(__dirname, 'destination.html'),
          attractions: path.resolve(__dirname, 'attractions.html'),
          planner: path.resolve(__dirname, 'planner.html'),
          itinerary: path.resolve(__dirname, 'itinerary.html'),
          wishlist: path.resolve(__dirname, 'wishlist.html'),
          budget: path.resolve(__dirname, 'budget.html'),
          profile: path.resolve(__dirname, 'profile.html'),
          map: path.resolve(__dirname, 'map.html'),
          login: path.resolve(__dirname, 'html/login.html'),
          signup: path.resolve(__dirname, 'html/signup.html'),
          destinations: path.resolve(__dirname, 'html/destinations.html'),
          experiences: path.resolve(__dirname, 'html/experiences.html'),
          estimator: path.resolve(__dirname, 'html/budget-estimator.html'),
          sitemap: path.resolve(__dirname, 'html/interactive-map.html'),
          wisdom: path.resolve(__dirname, 'html/wisdom.html'),
          contact: path.resolve(__dirname, 'html/contact.html'),
        },
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modify—file watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});

