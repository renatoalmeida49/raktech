<template>
<div class="background">
  <div class="title">Redes</div>
  <div class="page-descricao">
    <p>A rede lógica e cabeamentp de todo prédio deve ser cuidadosamente planejada e pensada.</p>
    <p>O principal motivo é a expansão. Uma rede planejada permite uma expansão organizada e de fácil manutenção</p>
  </div>
</div>
</template>

<script>
export default {

}
</script>

<style scoped>
.background {
  background: url('../assets/services/equipamentos-rede.jpg') no-repeat;
  background-size: cover;
  background-position: center;

  color: white;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.8);
}

.title {
  font-size: 3rem;
  font-weight: 700;
  padding: 1.5rem 0;
}

.page-descricao {
  line-height: 140%;
  font-size: 1.3rem;
  margin: 1.5rem 0.5rem;
  padding: 1rem;
}

@media (min-width: 640px) {
  .title {
    font-size: 3.5rem;
  }

  .page-descricao {
    font-size: 1.8rem;
  }
}
</style>