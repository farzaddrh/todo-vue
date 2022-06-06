<template >
    <div class="cart">
        <slot></slot>
    </div>
</template>
<script>
export default {

}
</script>
<style scoped>
.cart {
    border-radius: 4px;
    box-shadow: -1px 5px 17px 11px rgba(0, 0, 0, 0.08);
    background-color: white;
    width: 50rem;
    margin: 0 auto;
}
/* /////dark mode/////////////////// */
.container.dark .cart{
     background-color: hsl(235, 24%, 19%);
}
/* ////////////////////responsive//////////// */
@media (max-width: 768px) {

    .cart{width: 100%;}
}
</style>
