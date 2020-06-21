<template>
    <div>
        <p v-text="dropdownResult"></p>
        <drop-down @update:option="optionUpdate"></drop-down>
    </div>
</template>

<script>
import DropDown from "./Dropdown.vue"
export default {
    name: "List",
    components: {
        DropDown,
    },
    methods: {
        optionUpdate: function(value){
            this.dropdownResult = value;
        }
    },
    data: function(){
        return {
            dropdownResult: ""
        }
    }
}
</script>

<style>
</style>