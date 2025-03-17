// vite.config.ts
import { defineConfig } from "file:///Users/romancecile/Documents/Projets/GITHUB/monitor-front-v2/node_modules/vite/dist/node/index.js";
import react from "file:///Users/romancecile/Documents/Projets/GITHUB/monitor-front-v2/node_modules/@vitejs/plugin-react/dist/index.mjs";
var vite_config_default = defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": "/src",
      "@assets": "/src/assets",
      "@components": "/src/components",
      "@themes": "/src/themes",
      "@utils": "/src/utils",
      "@router": "/src/router",
      "@config": "/src/config",
      "@api": "/src/api",
      "@shared": "/src/shared",
      "@translation": "/src/translation",
      "@pages": "/src/pages",
      "@ressources": "/src/ressources",
      "@modules": "/src/modules"
    }
  },
  optimizeDeps: {
    extensions: ["cjs"]
  },
  server: {
    port: 3001,
    open: true
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvVXNlcnMvcm9tYW5jZWNpbGUvRG9jdW1lbnRzL1Byb2pldHMvR0lUSFVCL21vbml0b3ItZnJvbnQtdjJcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIi9Vc2Vycy9yb21hbmNlY2lsZS9Eb2N1bWVudHMvUHJvamV0cy9HSVRIVUIvbW9uaXRvci1mcm9udC12Mi92aXRlLmNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vVXNlcnMvcm9tYW5jZWNpbGUvRG9jdW1lbnRzL1Byb2pldHMvR0lUSFVCL21vbml0b3ItZnJvbnQtdjIvdml0ZS5jb25maWcudHNcIjtpbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlJ1xuaW1wb3J0IHJlYWN0IGZyb20gJ0B2aXRlanMvcGx1Z2luLXJlYWN0J1xuXG4vLyBodHRwczovL3ZpdGVqcy5kZXYvY29uZmlnL1xuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcbiAgcGx1Z2luczogW3JlYWN0KCldLFxuICByZXNvbHZlOiB7XG4gICAgYWxpYXM6IHtcbiAgICAgICdAJzogJy9zcmMnLFxuICAgICAgJ0Bhc3NldHMnOiAnL3NyYy9hc3NldHMnLFxuICAgICAgJ0Bjb21wb25lbnRzJzogJy9zcmMvY29tcG9uZW50cycsXG4gICAgICAnQHRoZW1lcyc6ICcvc3JjL3RoZW1lcycsXG4gICAgICAnQHV0aWxzJzogJy9zcmMvdXRpbHMnLFxuICAgICAgJ0Byb3V0ZXInOiAnL3NyYy9yb3V0ZXInLFxuICAgICAgJ0Bjb25maWcnOiAnL3NyYy9jb25maWcnLFxuICAgICAgJ0BhcGknOiAnL3NyYy9hcGknLFxuICAgICAgJ0BzaGFyZWQnOiAnL3NyYy9zaGFyZWQnLFxuICAgICAgJ0B0cmFuc2xhdGlvbic6ICcvc3JjL3RyYW5zbGF0aW9uJyxcbiAgICAgICdAcGFnZXMnOiAnL3NyYy9wYWdlcycsXG4gICAgICAnQHJlc3NvdXJjZXMnOiAnL3NyYy9yZXNzb3VyY2VzJyxcbiAgICAgICdAbW9kdWxlcyc6ICcvc3JjL21vZHVsZXMnLFxuICAgIH0sXG4gIH0sXG4gIG9wdGltaXplRGVwczoge1xuICAgIGV4dGVuc2lvbnM6IFtcImNqc1wiXVxuICB9LFxuICBzZXJ2ZXI6IHtcbiAgICBwb3J0OiAzMDAxLFxuICAgIG9wZW46IHRydWUsXG4gIH0sXG59KVxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUFzVyxTQUFTLG9CQUFvQjtBQUNuWSxPQUFPLFdBQVc7QUFHbEIsSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDMUIsU0FBUyxDQUFDLE1BQU0sQ0FBQztBQUFBLEVBQ2pCLFNBQVM7QUFBQSxJQUNQLE9BQU87QUFBQSxNQUNMLEtBQUs7QUFBQSxNQUNMLFdBQVc7QUFBQSxNQUNYLGVBQWU7QUFBQSxNQUNmLFdBQVc7QUFBQSxNQUNYLFVBQVU7QUFBQSxNQUNWLFdBQVc7QUFBQSxNQUNYLFdBQVc7QUFBQSxNQUNYLFFBQVE7QUFBQSxNQUNSLFdBQVc7QUFBQSxNQUNYLGdCQUFnQjtBQUFBLE1BQ2hCLFVBQVU7QUFBQSxNQUNWLGVBQWU7QUFBQSxNQUNmLFlBQVk7QUFBQSxJQUNkO0FBQUEsRUFDRjtBQUFBLEVBQ0EsY0FBYztBQUFBLElBQ1osWUFBWSxDQUFDLEtBQUs7QUFBQSxFQUNwQjtBQUFBLEVBQ0EsUUFBUTtBQUFBLElBQ04sTUFBTTtBQUFBLElBQ04sTUFBTTtBQUFBLEVBQ1I7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
