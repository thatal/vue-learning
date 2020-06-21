<template>
    <!-- <select name="dropdown" id="dropdown" v-model="selectedOption" v-on:change="optionChanged"> -->
    <select name="dropdown" id="dropdown" v-model="selectedOption" @change="optionChanged">
        <option value="" disabled>Please select an option</option>
        <option value="Option 1">Option 1</option>
        <option value="Option 2">Option 2</option>
        <option value="Option 3">Option 3</option>
    </select>
</template>

<script>
export default {
    name: "DropDown",
    data: function(){
        return {
            selectedOption: ""
        }
    },
    methods: {
        optionChanged: function(value){
            this.$emit("update:option", this.selectedOption)
        }
    }
}
</script>