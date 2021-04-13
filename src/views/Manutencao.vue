<template>
  <div class="background">
    <div class="title">Manutenção</div>
    <div class="page-descricao">
      <ul>
        <li>Troca de peças</li>
        <li>Formatação</li>
        <li>Conserto em geral</li>
        <li>Pequenos reparos</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.background {
  display: flex;
  justify-content: center;
  flex-direction: column;
}

.title {
  font-size: 3rem;
  font-weight: 700;
  padding: 1.5rem 0;
}

.page-descricao {
  font-size: 1.5rem;
  line-height: 140%;
}

ul {
  list-style: none;
}

ul li {
  margin: 3rem 0;
}

</style>