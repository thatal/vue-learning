<template>
    <div id="app">
        <h1 :class="classObject">{{ value }}</h1>
        <h1 :style="{ fontSize: (value * 10) + 'px' }">{{value}}</h1>
        <button @click="value++">+</button>
        <button @click="value--">-</button>
        <button @click="error = !error">Error</button>
        <button @click="warning = !warning">Warning</button>
    </div>
</template>

<script>
export default {
    name: "App",
    components: {},
    data: function() {
        return {
            value: 1,
            error: false,
            warning: false,
        }
    },
    computed: {
        classObject: function() {
            return {
                "has-error": this.value > 5,
                "has-green": this.value <= 5,
                "yellow-warning": this.warning,
            }
        },
    },
}
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
.has-error {
    background-color: red;
}
.yellow-warning {
    background-color: yellow;
}
.has-green {
    background-color: green;
}
</style>
