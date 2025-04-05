import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/

export default defineConfig({
  base: '/RISkylollipop/', // trailing slash is important
  plugins: [react()],
});
