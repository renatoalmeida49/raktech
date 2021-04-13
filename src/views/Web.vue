<template>
  <div class="background">
    <div class="title">Nossos projetos</div>

    <div class="page-descricao">
      <p>Projetamos o site do seu negócio. O mundo hoje é online e seu negócio precisa estar lá.</p>
    </div>

    <div class="item">
      <a href="http://raktech.com.br/f1results" target="blank">
        <div class="projeto">
          <div class="dispositivos">
            <div class="monitor">
              <div class="tela-monitor">
                <img src="@/assets/projetos/f1results-desktop.png" width="100%" height="100%"/>
              </div>
            </div>

            <div class="celular">
              <div class="tela-celular">
                <img src="@/assets/projetos/f1results-mobile.png" height="100%" width="100%"/>
              </div>
            </div>
          </div>

          <div class="descricao">
            <div class="descricao-title">
              F1 Results
            </div>
            <div class="descricao-text">
              Para os fãs de F1, uma tabela completamente atualizada para acompanhar todas as rodadas do esporte.
            </div>
          </div>
        </div>
      </a>

      <a href="http://raktech.com.br/medicenter" target="blank">
        <div class="projeto">
          <div class="dispositivos">
            <div class="monitor">
              <div class="tela-monitor">
                <img src="@/assets/projetos/medicenter-desktop.png" width="100%" height="100%"/>
              </div>
            </div>

            <div class="celular">
              <div class="tela-celular">
                <img src="@/assets/projetos/medicenter-mobile.png" height="100%" width="100%"/>
              </div>
            </div>
          </div>

          <div class="descricao">
            <div class="descricao-title">
              Medicenter
            </div>
            <div class="descricao-text">
              Layout responsivo para clínica médica.
            </div>
          </div>
        </div>
      </a>

      <a href="http://raktech.com.br/arquitetoednaldo" target="blank">
        <div class="projeto">
          <div class="dispositivos">
            <div class="monitor">
              <div class="tela-monitor">
                <img src="@/assets/projetos/arquiteto-desktop.png" width="100%" height="100%"/>
              </div>
            </div>

            <div class="celular">
              <div class="tela-celular">
                <img src="@/assets/projetos/arquiteto-mobile.png" height="100%" width="100%"/>
              </div>
            </div>
          </div>

          <div class="descricao">
            <div class="descricao-title">
              Arquiteto
            </div>
            <div class="descricao-text">
              Layout responsivo para portfólio de arquitetos.
            </div>
          </div>
        </div>
      </a>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.item {
  background: #ccc;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem 0;
}

.title {
  font-size: 3rem;
  font-weight: 700;
  margin: 1rem 0;
}

.page-descricao {
  font-size: 1.2rem;
  margin: 1.5rem 0;
  line-height: 140%;
}

a {
  text-decoration: none;
  color: #2c3e50;
  width: 100%;
}

.projeto {
  width: 100%;
  max-width: 880px;
  margin: auto;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  border-radius: 10px;
}

.projeto:hover {
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.5);
  border: 1px solid rgba(0, 0, 0, 0.5);
}

.dispositivos {
  height: 200px;
  position: relative;
  overflow: hidden;
  max-width: 320px;
  display: block;
  width: 100%;
  margin: auto;
}

.monitor {
  position: absolute;
  top: 10%;
  left: 10%;
  height: 149px;
  width: 254px;
  background: #444;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.5);
}

.tela-monitor {
  position: absolute;
  overflow: hidden;
  height: 119px;
  width: 90%;
  background: red;
  border-radius: 10px;
  top: 5%;
  left: 5%;
}

.celular {
  position: absolute;
  height: 100px;
  bottom: 5%;
  right: 5%;
  width: 20%;
  background: #888;
  border-radius: 5px;
}

.tela-celular {
  position: absolute;
  overflow: hidden;
  height: 80px;
  width: 90%;
  background: gold;
  border-radius: 5px;
  top: 5%;
  left: 5%;
}

.descricao {
  padding: 2rem;
  max-width: 325px;
  margin: auto;
}

.descricao-title {
  font-size: 2rem;
  font-weight: 700;
}

@media (min-width: 560px) {
  .item {
    padding: 2rem;
  }
  .projeto {
    flex-direction: row;
  }
}

</style>