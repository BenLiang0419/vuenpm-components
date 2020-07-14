<template>
    <div>
        <button>{{msg}}</button>
    </div>
</template>

<script>
    export default {
        name: "test-button",
        data() {
            return {
                msg: '测试一下我的组件'
            }
        }
    }
</script>

<style scoped>

</style>