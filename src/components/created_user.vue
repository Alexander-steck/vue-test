<template>
    <div class="modal">{{msg}}</div>
</template>
<script>
    export default {
        data() {
            return {
                msg: 'User successfully created!'
            }
        },
    }
</script>
<style>
    .modal {
        width: 400px;
        overflow: hidden;
        padding: 10px 0;
        margin: 5px 10px;
        background-color: rgba(0,191,165, 1);
        border-radius: 5px;
        color: white;
        text-align: center;
        font-size: 24px;
        font-weight: bold;
        position: absolute;
        top: 10px;
        right: calc(50% - 200px);
        z-index: 2;
    }
    
</style>