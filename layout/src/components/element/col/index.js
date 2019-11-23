import Col from './src/Col.js';
Col.install = (Vue) => {
    Vue.component(Col.name,Col)
}
export default Col;