
// 导入组件
import button from "./button";

// 组件列表
const component = [
    button
];

const install = function (Vue) {
    component.map(item => Vue.component(item.name, item));
}

// 判断是否是直接引入文件
if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue)
}

export default {
    install,
    button
}