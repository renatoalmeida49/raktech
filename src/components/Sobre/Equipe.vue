<template>
<section class="equipe">
    <div
        class="time"
        v-for="membro, index in membros"
        :key="index"
    >
        <div class="time-foto"><img :src="membro.img" /></div>
        <div class="time-content">
            <div class="time-nome">{{membro.nome}}</div>
            <div class="time-descricao">{{membro.descricao}}</div>
            <div class="time-social-media">
            <a :href="membro.links.facebook" target="blank"><img src="@/assets/icons/facebook.png"/></a>
            <a :href="membro.links.github" target="blank"><img src="@/assets/icons/github.png"/></a>
            <a :href="membro.links.instagram" target="blank"><img src="@/assets/icons/instagram.png"/></a>
            <a :href="membro.links.linkedin" target="blank"><img src="@/assets/icons/linkedin.png"/></a>
            </div>
        </div>
    </div>
</section>
</template>

<script>
export default {
    name: "Equipe",
    props: ['membros'],
}
</script>

<style>

.equipe {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.time {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin: 1rem 1rem;
  padding: 1rem;

  background: #fff;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);

  border-radius: 10px;

  width: 80%;
  min-height: 473px;
}

.time-foto {
  width: 12rem;
  height: 12rem;
  border-radius: 50%;
  overflow: hidden;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  margin: 1rem 0;
}

.time-foto img {
  height: 100%;
}

.time-nome {
  font-size: 1.5rem;
  font-weight: 700;
  margin: 0.8rem 0;
}

.time-descricao {
  margin: 0.8rem 0;
}

.time-social-media img {
  height: 1.5rem;
  margin: 1rem 1rem;
}

@media (min-width: 930px) {
    .equipe {
        flex-direction: row;
    }
  .time {
    
    justify-content: space-between;
    padding: 2rem;
    max-width: 793px;
  }

  .time-descricao {
    max-width: 600px;
  }

  #katia .time-foto {
    order: 0;
  }
}
</style>