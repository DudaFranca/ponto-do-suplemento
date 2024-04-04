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
        <a href="#">
          <img
            :src="category.img" 
            class="border-category"
          >
          <div class="absolute inset-0 flex items-center justify-center p-4 bg-category">
            <div class="font-bold text-3xl text-white">
              {{ category.name }}
            </div>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        categorys: [
          { name: 'Whey Protein', img: '../../public/whey.png', link: '' },
          { name: 'Hiper Calórico', img: '../../public/hiper.png', link: '' },
          { name: 'Whey Isolado e Zero Lactose', img: '../../public/isolate.png', link: '' },
          { name: 'Creatina', img: '../../public/creatina.png', link: '' },
          { name: 'Pré Treino', img: '../../public/prohibido.png', link: '' },
          { name: 'Thermogenico', img: '../../public/thermo.png', link: '' },
          { name: 'Suplementação', img: '../../public/testo.png', link: '' },
        ]
      }
    }
  }
</script>
