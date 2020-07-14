// 导入组件
import button from "./src/button";
import Vue from 'vue';

// 注册: 为组件提供 install 安装方法，供按需引入
button.install = function () {
    Vue.component('test-button', button);
}

export default button;