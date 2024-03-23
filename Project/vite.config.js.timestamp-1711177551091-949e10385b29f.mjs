// vite.config.js
import path from "path";
import react from "file:///C:/Users/paras/Desktop/Hack%20X/Hack-X-Project/Project/node_modules/@vitejs/plugin-react/dist/index.mjs";
import { defineConfig } from "file:///C:/Users/paras/Desktop/Hack%20X/Hack-X-Project/Project/node_modules/vite/dist/node/index.js";
var __vite_injected_original_dirname = "C:\\Users\\paras\\Desktop\\Hack X\\Hack-X-Project\\Project";
var vite_config_default = defineConfig({
  server: {
    proxy: {
      "/api": {
        target: "http://localhost:3000",
        changeOrigin: true,
        rewrite: (path2) => path2.replace(/api/, "")
      }
    }
  },
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__vite_injected_original_dirname, "./src")
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxwYXJhc1xcXFxEZXNrdG9wXFxcXEhhY2sgWFxcXFxIYWNrLVgtUHJvamVjdFxcXFxQcm9qZWN0XCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxwYXJhc1xcXFxEZXNrdG9wXFxcXEhhY2sgWFxcXFxIYWNrLVgtUHJvamVjdFxcXFxQcm9qZWN0XFxcXHZpdGUuY29uZmlnLmpzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9DOi9Vc2Vycy9wYXJhcy9EZXNrdG9wL0hhY2slMjBYL0hhY2stWC1Qcm9qZWN0L1Byb2plY3Qvdml0ZS5jb25maWcuanNcIjtpbXBvcnQgcGF0aCBmcm9tIFwicGF0aFwiXHJcbmltcG9ydCByZWFjdCBmcm9tIFwiQHZpdGVqcy9wbHVnaW4tcmVhY3RcIlxyXG5pbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tIFwidml0ZVwiXHJcblxyXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xyXG4gIHNlcnZlcjp7XHJcbiAgICBwcm94eTp7XHJcbiAgICAgICcvYXBpJzp7XHJcbiAgICAgICAgdGFyZ2V0OiAnaHR0cDovL2xvY2FsaG9zdDozMDAwJyxcclxuICAgICAgICBjaGFuZ2VPcmlnaW46dHJ1ZSxcclxuICAgICAgICByZXdyaXRlOiAocGF0aCkgPT4gcGF0aC5yZXBsYWNlKC9hcGkvLCcnKSxcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0sXHJcbiAgcGx1Z2luczogW3JlYWN0KCldLFxyXG4gIHJlc29sdmU6IHtcclxuICAgIGFsaWFzOiB7XHJcbiAgICAgIFwiQFwiOiBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCBcIi4vc3JjXCIpLFxyXG4gICAgfSxcclxuICB9LFxyXG59KVxyXG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQThWLE9BQU8sVUFBVTtBQUMvVyxPQUFPLFdBQVc7QUFDbEIsU0FBUyxvQkFBb0I7QUFGN0IsSUFBTSxtQ0FBbUM7QUFJekMsSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDMUIsUUFBTztBQUFBLElBQ0wsT0FBTTtBQUFBLE1BQ0osUUFBTztBQUFBLFFBQ0wsUUFBUTtBQUFBLFFBQ1IsY0FBYTtBQUFBLFFBQ2IsU0FBUyxDQUFDQSxVQUFTQSxNQUFLLFFBQVEsT0FBTSxFQUFFO0FBQUEsTUFDMUM7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUFBLEVBQ0EsU0FBUyxDQUFDLE1BQU0sQ0FBQztBQUFBLEVBQ2pCLFNBQVM7QUFBQSxJQUNQLE9BQU87QUFBQSxNQUNMLEtBQUssS0FBSyxRQUFRLGtDQUFXLE9BQU87QUFBQSxJQUN0QztBQUFBLEVBQ0Y7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogWyJwYXRoIl0KfQo=
