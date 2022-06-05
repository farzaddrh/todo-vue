<template>
    <button class="btn">
        <slot></slot>
    </button>
</template>
<script>
export default {

}
</script>
<style scoped>
.btn {
    border: none;
    background: none;
    cursor: pointer;
    font-family: "Josefin Sans";
    color: #8f909a;
    font-weight: 700;
    font-size: 1.4rem;

}

.btn:hover {
    color: hsl(235, 19%, 35%);
}
</style>
