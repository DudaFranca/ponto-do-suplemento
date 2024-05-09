<template>
  <div class="flex flex-col min-h-screen">
    <div class="w-full pt-28 flex text-center justify-center">
      <div class="container">
        <div class="font-black text-6xl text-light-gray uppercase">
          <h1>{{ category.name }}</h1>
        </div>
        <div class="font-bold text-4xl text-yellow title-all">
          <h1>{{ category.name }}</h1>
        </div>
        <div 
          v-if="category.description" 
          class="subtitle items-center mb-10"
        >
          <p>{{ category.description }}</p>
        </div>

        <div class="grid md:grid-cols-2 xl:grid-cols-3 gap-3 lg:p-5">
          <div 
            v-for="(product, index) in category.products" 
            :key="index"
            class="relative md:col-span-1 border border-blue border-category mb-10"
          >
            <img 
              :src="'/ponto-do-suplemento' + product.img"
              class="border-category-top"
            >
            <div class="font-bold text-2xl mt-5">
              <h1 class="text-yellow">
                {{ product.name }}
              </h1>
            </div>
            <p class="text-blue text-xl font-bold my-5">
              R$ {{ product.price }}
            </p>
            <p class="subtitle text-sm">
              Escolha o sabor e peça o seu pelo whatsapp
            </p>
            <div class="grid grid-cols-2 mb-10 mx-10 mt-5">
              <div 
                v-for="(flavor, i) in product.flavors"
                :key="i"
              >
                <a 
                  :href="'https://api.whatsapp.com/send?phone=5581997328920&text=Olá, gostaria de pedir um ' + product.name + ' sabor ' + flavor.name"
                  target="_blank"
                >
                  <div class="border rounded-full mx-2 my-1 p-1 bg-blue text-white">
                    {{ flavor.name }}
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="w-full pt-28 flex">
      <FooterAll />
    </div>
  </div>
</template>

<script>
  import { mapState } from "vuex";
  import FooterAll from '../components/Footer.vue';
  export default {
    name: "ProductList",
    components: {
      FooterAll
    },
    data() {
      return {

      }
      
    },
    computed: {
      ...mapState(["category"]),
    },
  }
</script>

