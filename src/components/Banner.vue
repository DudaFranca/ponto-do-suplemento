<template>
  <div class="container flex items-center justify-center pt-38">
    <div class="text-center text-white">
      <div>
        <button 
          class="text-sm button bg-yellow" 
          type="button"
          @click="redirectToCategory"
        >
          PRODUTOS
        </button>
      </div>

      <div class="text-3xl my-12 lg:text-5xl">
        <h1>Ponto do Suplemento</h1>
      </div>

      <div class="uppercase text-sm">
        <p>Whey Protein × Creatina × Thermogenico × E muito mais</p>
      </div>

      <div class="my-12 grid lg:grid-cols-4 gap-3">
        <div class="flex items-center justify-center lg:col-span-1">
          <span class="material-symbols-outlined">
            pin_drop
          </span>
          <h2 class="ml-3"> 
            Rua São João, 503 Bela Vista, Igarassu
          </h2>
        </div>

        <div class="flex items-center justify-center lg:col-span-1 mt-6 lg:mt-0">
          <span class="material-symbols-outlined">
            schedule
          </span>
          <h2 class="ml-3">
            Segunda a Sábado de 09:00 às 17:00
          </h2>
        </div>

        <div class="flex items-center justify-center lg:col-span-1 mt-6 lg:mt-0">
          <span class="material-symbols-outlined">
            call
          </span>
          <h2 class="ml-3">
            (81) 99999-9999
          </h2>
        </div>
        <div class="flex items-center justify-center lg:col-span-1 mt-6 lg:mt-0">
          <span class="material-symbols-outlined">
            photo_camera
          </span>
          <h2 class="ml-3">
            <a 
              href="https://www.instagram.com/pontodosuplementope/"
              target="_blank"
            >
              @pontodosuplementope
            </a>
          </h2>
        </div>  
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Banner",
    data() {

    },
    methods: {
      redirectToCategory() {
        this.$emit('redirect-to-category');
      }
    }
  }
</script>