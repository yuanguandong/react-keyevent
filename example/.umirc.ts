import { defineConfig } from 'umi';


export default defineConfig({
  publicPath: '/react-keyevent/',
  base: '/react-keyevent/',
  nodeModulesTransform: {
    type: 'none',
  },
  antd:{},
  routes: [
    { path: '/', component: '@/pages/index' },
  ],
  fastRefresh: {},
  outputPath:'../docs'
});
