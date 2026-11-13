import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { viteStaticCopy } from 'vite-plugin-static-copy';
export default defineConfig({plugins:[react(),viteStaticCopy({targets:['Workers','ThirdParty','Assets','Widgets'].map(x=>({src:`node_modules/cesium/Build/Cesium/${x}`,dest:'cesium'}))})],define:{CESIUM_BASE_URL:JSON.stringify('/cesium/')},server:{proxy:{'/v1':'http://127.0.0.1:8000'}}});
