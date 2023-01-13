<template>
    <div>
        <van-nav-bar
            :title="title"
            left-arrow
            @click-left="onClickLeft"
        />
    </div>
</template>

<script>
    export default {
        name:"MyHeader",
        props:["title"],
        methods:{
            onClickLeft(){
                this.$router.go(-1);
            },
        }
    }
</script>

<style lang="less" scoped>

</style>