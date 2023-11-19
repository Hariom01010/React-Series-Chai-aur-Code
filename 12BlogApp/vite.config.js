import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true
  },
  build:{
    rollupOptions:{
      input:{
        main:"./index.html",
        about:"./pages/About.html",
        posts:"./pages/AddPost.html",
        "add-post":"./pages/AddPost.html",
        login:"./pages/Login.html",
        signup:"./pages/Signup.html",
        verify:"./pages/Verify.html"
      }
    }
  }
})
