<template>
  <div class="container flex items-center justify-center">
    <div class="text-center text-white">
      <div>
        <button 
          class="text-sm button bg-yellow" 
          type="button"
        >
          PRODUTOS
        </button>
      </div>
      <div class="text-5xl my-12">
        <h1>Ponto do Suplemento</h1>
      </div>
      <div class="uppercase">
        <p>Whey Protein × Creatina × Thermogenico × E muito mais</p>
      </div>
      <div class="my-12 grid lg:grid-cols-4 gap-3">
        <div class="flex items-center justify-center lg:col-span-1">
          <span class="material-symbols-outlined">
            pin_drop
          </span>
          <h2 class="ml-3"> 
            Rua São João, 503 - Bela Vista, <br> Igarassu
          </h2>
        </div>
        <div class="flex items-center justify-center lg:col-span-1 mt-12 lg:mt-0">
          <span class="material-symbols-outlined">
            schedule
          </span>
          <h2 class="ml-3">
            Segunda a Sábado <br> de 09:00 às 17:00
          </h2>
        </div>
        <div class="flex items-center justify-center lg:col-span-1 mt-12 lg:mt-0">
          <span class="material-symbols-outlined">
            call
          </span>
          <h2 class="ml-3">
            (81) 99999-9999
          </h2>
        </div>
        <div class="flex items-center justify-center lg:col-span-1 mt-12 lg:mt-0">
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

    }
    
  }
</script>