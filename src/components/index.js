
import Vue from 'vue'

function capitalizeFirstLetter (string) {
  return string.charAt(0).toUpperCase() + string.slice(1)
}
//  自动加载 global 目录下的 .js 结尾的文件
const requireComponent = require.context('./global', false, /\.vue$/)
requireComponent.keys().forEach(fileName => {
  const componentConfig = requireComponent(fileName)
  const componentName = capitalizeFirstLetter(fileName.replace(/^\.\//, '').replace(/\.\w+$/, ''))
  Vue.component(componentName, componentConfig.default || componentConfig)
})
