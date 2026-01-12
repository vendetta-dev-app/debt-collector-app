import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import flowbiteReact from 'flowbite-react/plugin/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), flowbiteReact()],
  resolve: {
    alias: {
      '@': '/src',
      // Atoms
      '@atoms': '/src/atoms/index',
      // constants
      '@constants': '/src/constants/index',
      // Components
      '@components': '/src/components/index',
      // hooks
      '@hooks': '/src/hooks/index',
      // GraphQL
      '@gql': '/src/gql/index',
      '@types': '/src/gql/graphql',
      // Modules
      '@auth': '/src/modules/auth',
      // Snippets
      '@snippets': 'src/snippets/index',
    },
  },
})