<template>
  <div class="container">
    <div class="font-black text-6xl text-light-gray">
      <h1>CATEGORIA</h1>
    </div>
    <div class="font-bold text-4xl text-yellow title-all">
      <h1>Categoria</h1>
    </div>
    <div class="subtitle items-center mb-10">
      <p>Conheça nossas opções de para dar um up no seu treino</p>
    </div>
    
    <div class="grid md:grid-cols-2 xl:grid-cols-4 gap-3">
      <div 
        v-for="(category, index) in categorys" 
        :key="index"
        class="relative md:col-span-1"
      >
        <router-link 
          :to="'/produtos/' + category.id"
          @click="categoryProduct(category)"
        >
          <img
            :src="category.img" 
            class="border-category"
          >
          <div class="absolute inset-0 flex items-center justify-center p-4 bg-category">
            <div class="font-bold text-3xl text-white">
              {{ category.name }}
            </div>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapState, mapActions } from "vuex";

  export default {
    name: "Category",
    data() {
      return {
        
      }
    },
    computed: {
      ...mapState(["category", "categorys"]),
    },
    methods: {
      ...mapActions(["ActionSetCategory"]),
      categoryProduct(category){
        this.ActionSetCategory(category);
      }
    }
  }
</script>
