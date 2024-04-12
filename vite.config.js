import { defineConfig } from 'vite';
import reactRefresh from '@vitejs/plugin-react-refresh';

export default defineConfig({
  plugins: [reactRefresh()],
  optimizeDeps: {
    include: [
      '@mui/material/Button',
      '@mui/material/FormControl',
      '@mui/material/InputLabel',
      '@mui/material/NativeSelect',
      '@mui/material/MenuItem',
    ],
  },
  base:""
});
