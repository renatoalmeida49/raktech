<template>
  <div class="about">
    <div class="titulo">O nosso time</div>

    <div class="descricao">
      <p>Éramos um grupo de colegas, que virou um time de amigos. O bom atendimento ao cliente é o foco do time. Em qualquer área de atividade buscamos sempre a transparência e a praticidade.</p>
      <p>Nada de termos difíceis ou entrelinhas nos contratos. Todo o problema pode ser resolvido de forma simples e transparente.</p>
    </div>
    
    <div class="equipe">
    
      <div class="time">
        <div class="time-foto"><img src="@/assets/team/anderson.jpg" /></div>
        <div class="time-content">
          <div class="time-nome">Anderson Azevedo</div>
          <div class="time-descricao">Mestre do hardware, domina tudo referente a manutenção de desktops. Perito em redes, não há serviço que não possa ser feito.</div>
          <div class="time-social-media">
            <a href="https://www.facebook.com/BobyAzevedo" target="blank">
              <img src="@/assets/icons/facebook.png"/>
            </a>
            <a href="#" target="blank"><img src="@/assets/icons/github.png"/></a>
            <a href="https://www.instagram.com/bobyazevedo/" target="blank"><img src="@/assets/icons/instagram.png"/></a>
            <a href="https://www.linkedin.com/in/anderson-azevedo-002775103/" target="blank">
              <img src="@/assets/icons/linkedin.png"/>
            </a>
          </div>
        </div>
      </div>

      <div class="time">
        <div class="time-foto"><img src="@/assets/team/katia-linux.png" /></div>
        <div class="time-content">
          <div class="time-nome">Kátia Lins</div>
          <div class="time-descricao">Servidores e ambientes de rede, desenvolvimento de software e banco de dados. Está em constante evolução e capacitação.</div>
          <div class="time-social-media">
            <a href="#" target="blank"><img src="@/assets/icons/facebook.png"/></a>
            <a href="#" target="blank"><img src="@/assets/icons/github.png"/></a>
            <a href="#" target="blank"><img src="@/assets/icons/instagram.png"/></a>
            <a href="#" target="blank"><img src="@/assets/icons/linkedin.png"/></a>
          </div>
        </div>
      </div>

      <div class="time">
        <div class="time-foto"><img src="@/assets/team/renato.jpg" /></div>
        <div class="time-content">
          <div class="time-nome">Renato Novaes</div>
          <div class="time-descricao">Começou como estagiário e agora atua ativamente no time. Atua em todas as áreas. Sabe um pouco de tudo.</div>
          <div class="time-social-media">
            <a href="https://www.facebook.com/renatonovaes49" target="blank">
              <img src="@/assets/icons/facebook.png"/>
            </a>
            <a href="https://github.com/renatoalmeida49" target="blank">
              <img src="@/assets/icons/github.png"/>
            </a>
            <a href="https://instagram.com/novaes_r" target="blank">
              <img src="@/assets/icons/instagram.png"/>
            </a>
            <a href="https://www.linkedin.com/in/renatonovaes49/" target="blank">
              <img src="@/assets/icons/linkedin.png"/>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

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
}
</style>