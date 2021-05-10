<template>
  <div class="about">
    <div class="titulo">O nosso time</div>

    <div class="descricao">
      <p>Éramos um grupo de colegas, que virou um time de amigos. O bom atendimento ao cliente é o foco do time. Em qualquer área de atividade buscamos sempre a transparência e a praticidade.</p>
      <p>Nada de termos difíceis ou entrelinhas nos contratos. Todo o problema pode ser resolvido de forma simples e transparente.</p>
    </div>
    
    <Equipe :membros="equipe"/>

  </div>
</template>

<script>
import Equipe from "@/components/Sobre/Equipe.vue"

export default {
  name: "Sobre",
  components: {
    Equipe
  },
  data() {
    return {
      equipe: [
        {
          img: require("@/assets/team/anderson.jpg"),
          nome: "Anderson Azevedo",
          descricao: "Mestre do hardware, domina tudo referente a manutenção de desktops. Perito em redes, não há serviço que não possa ser feito.",
          links: {
            facebook: "https://www.facebook.com/BobyAzevedo",
            github: "#",
            instagram: "https://www.instagram.com/bobyazevedo/",
            linkedin: "https://www.linkedin.com/in/anderson-azevedo-002775103/"
          }
        },
        {
          img: require('@/assets/team/katia-linux.png'),
          nome: "Kátia Lins",
          descricao: "Servidores e ambientes de rede, desenvolvimento de software e banco de dados. Está em constante evolução e capacitação.",
          links: {
            facebook: "#",
            github: "#",
            instagram: "#",
            linkedin: "#"
          }
        },
        {
          img: require("@/assets/team/renato.jpg"),
          nome: "Renato Novaes",
          descricao: "Começou como estagiário e agora atua ativamente no time. Atua em todas as áreas. Sabe um pouco de tudo.",
          links: {
            facebook: "https://www.facebook.com/renatonovaes49",
            github: "https://github.com/renatoalmeida49",
            instagram: "https://instagram.com/novaes_r",
            linkedin: "https://www.linkedin.com/in/renatonovaes49/"
          }
        }
      ]
    }
  }
}
</script>

<style scoped>
.titulo {
  margin: 1.5rem 0;
  font-size: 2rem;
  font-weight: 700;
}

.descricao p {
  line-height: 140%;
  margin: 1.5rem 0.5rem;
  padding: 1rem;
}
</style>