<template>
  <div class="flex flex-col min-h-screen">
    <div class="bg-logo w-full h-screen bg-cover bg-center">
      <div class="w-full h-screen flex items-center justify-center bg-category">
        <Banner @redirect-to-category="redirectToCategory" />
      </div>
    </div>
    <div 
      ref="category" 
      class="w-full pt-28 flex text-center justify-center"
    >
      <Category />
    </div>
    <div class="w-full pt-28 flex">
      <FooterAll />
    </div>
  </div>
</template>

<script>
  import Banner from '../components/Banner.vue';
  import Category from '../components/Category.vue';
  // import Location from './components/Location.vue';
  import FooterAll from '../components/Footer.vue';

  export default {
    name: "Home",
    components: {
        Banner,
        Category,
        FooterAll,
    },
    data() {
      return {
        
      }
    },
    methods: {
      redirectToCategory() {
        const categoryElement = this.$refs.category;
        categoryElement.scrollIntoView({behavior: "smooth"})
      }
    }
  }
</script>
