import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
// https://vite.dev/config/
export default defineConfig({
  theme:{
   extend:{
      colors:{
        'primary':'#FFCE1A',
        'secondary':'#0D0842',
        'black':'#F3F3F3',
        'favorite':'#FF5841',
      },
      fontFamily:{
        'primary':["League Spartan", "sans-serif"],
        'secondary':["Nunito Sans", "sans-serif"],
      },
   },
  },
  plugins: [react(),
    tailwindcss(),],
})
