<template>
  <div class="line">
    <p class="m-8 text-xs subtitle">
      © 2024 Ponto do Suplemento. Todos os direitos reservados. <br> 
      Site desenvolvido por <a href="https://www.linkedin.com/in/mdudafranca/">Eduarda França</a>
    </p>
  </div>
</template>

<script>
  export default {
    name: 'FooterAll'
  }
</script>

<style>
  .line::before {
    content: '';
    position: absolute;
    left: 0;
    width: 100%;
    height: 1px;
    background-color: #ccc;
  }
</style>