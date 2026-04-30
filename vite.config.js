import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        thomas: resolve(__dirname, 'profile-thomas.html'),
        salim: resolve(__dirname, 'profile-salim.html'),
        anil: resolve(__dirname, 'profile-anil.html'),
        varughese: resolve(__dirname, 'profile-varughese.html'),
        shiva: resolve(__dirname, 'profile-shiva.html'),
        suhail: resolve(__dirname, 'profile-suhail.html'),
      }
    }
  }
})
