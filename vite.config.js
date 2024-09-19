import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/animatedAvatar3D/', // Dodaj tę linię, aby ustawić poprawną ścieżkę bazową
  plugins: [react()],
})
