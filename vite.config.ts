import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import { viteMockServe } from 'vite-plugin-mock'
// https://vite.dev/config/
export default defineConfig(({command})=>{
  return{
    plugins: [vue(),
      viteMockServe({
        mockPath: 'mock',
        enable: command === 'serve',
      }),
    ],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src')
      }
      
    },
    //less全局变量配置
    css: {
      preprocessorOptions: {
        less: {
          javascriptEnabled: true,
          additionalData: '@import "./src/style/variable.less";',
        },
      },
    },
  
    
  } 
})
