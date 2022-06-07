<template>
<the-contaier></the-contaier>
</template>

<script>
import TheContaier from "./components/TheContainer.vue";
export default {
  name: "App",
  components: { TheContaier },
};
</script>

<style  lang="scss">
    @import url("https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@400;700&family=Kumbh+Sans:wght@400;700&family=Manrope:wght@600;800&family=Overpass:wght@400;700&family=Poppins:wght@400;500;600;700&family=Rubik:wght@400;500;700&family=Space+Mono:wght@700&display=swap");

    * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
    }

    html {
    font-size: 62.5%;
    }

    body {
    font-family: "Josefin Sans", sans-serif;
    font-weight: 400;
    line-height: 1;
    font-size: 1.8rem;
    }

</style>
