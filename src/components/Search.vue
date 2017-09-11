<template>
    <div class="Search">
        <input type="text" class="Search__input" v-model="query">
        <button class="Search__button">Search</button>
    </div>
</template>

<script>
    export default {
      data() {
        return {
          query: ''
        }
      }
    }  
</script>