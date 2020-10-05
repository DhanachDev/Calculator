<template>
<div class="_modal">
    <div class="body">
        <div class="message"> hello </div>
        <div class="btn">
            <button type="button" class="btn btn-secondary btn-lg" @click="confirm('cancel')">Cancel</button>
            <button type="button" class="btn btn-danger btn-lg" @click="confirm('ok')">Ok</button>
        </div>
    </div>
</div>
</template>

<script>
export default {
    
    methods: {
        confirm(answer) {
            this.$emit("confirm",answer)
        }
    }
}
</script>

<style lang="scss" scoped>
._modal {
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, .7);
    position: fixed;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    z-index: 10000;
    top: 0;
    left: 0;

    .body {
        min-width: 300px;
        padding: 25px;
        display: block;
        background-color: white;
        border-radius: 15px;

        .message {
            font-size: 2rem;
        }

        button {
            margin-right: 10px;
        }
    }
}
</style>
