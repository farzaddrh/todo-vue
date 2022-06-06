<template>
    <button :class="mode" class="btn">
        <slot></slot>
    </button>
</template>
<script>
export default {
    props:['mode']

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
    font-size: 1.5rem;

}

.btn:hover {
    color: hsl(235, 19%, 35%);
}
.active{
    color: hsl(220, 98%, 61%);
}

/* ///////////dark mode/////////// */
.container.dark .btn{
    color: #4d5066;
}
.container.dark .btn:hover{
  color: hsl(233, 11%, 84%);
}
.container.dark .active{
     color: hsl(220, 98%, 61%);
}
</style>
