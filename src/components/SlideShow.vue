<template>
  <div class="slideShow">
      <div class="mySlides fade">
          <img src="@/assets/images/hardware.jpg"/>
          <div class="text">
              <div class="text-logo">
                <img src="@/assets/logo/logoLine.png" />
              </div>
              <div class="text-title">Manutenção</div>
              <div class="text-description">
                  Conserto de desktops, notebooks, celulares e tablets
                </div>
          </div>
      </div>

      <div class="mySlides fade">
          <img src="@/assets/images/network.jpg"/>
          <div class="text">
              <div class="text-logo">
                <img src="@/assets/logo/logoLine.png" />
              </div>
              <div class="text-title">Serviços de rede</div>
              <div class="text-description">
                  Configuração de equipamentos, passagem de cabos, reestruturação
              </div>
          </div>
      </div>

      <div class="mySlides fade">
          <img src="@/assets/images/webDevelopment.jpg"/>
          <div class="text">
              <div class="text-logo">
                <img src="@/assets/logo/logoLine.png" />
              </div>
              <div class="text-title">Desenvolvimento Web</div>
              <div class="text-description">
                  Criação de sites e sistemas WEB
              </div>
          </div>
      </div>

      <a class="prev" @click="plusSlides(-1)">&#10094;</a>
      <a class="next" @click="plusSlides(1)">&#10095;</a>
  </div>
</template>

<script>
export default {
    name: "SlideShow",
    data() {
        return {
            slideIndex: 0,
            timeOut: null
        }
    },
    methods: {
        plusSlides(n) {
            // Fazer funcionar sem bugar o timeout
            console.log(n)
        },
        showSlides() {
            let i
            let slides = document.getElementsByClassName("mySlides")

            for(i = 0; i < slides.length; i++) {
                slides[i].style.display = "none"
            }

            this.slideIndex++

            if(this.slideIndex > slides.length) {
                this.slideIndex = 1
            }

            slides[this.slideIndex - 1].style.display = "block"
            this.timeOut = setTimeout(this.showSlides, 5000)
        }
    },
    mounted() {
        this.showSlides()
    }
}
</script>

<style scoped>
.slideShow {
    
    position: relative;
    margin: auto;
    overflow: hidden;
    height: 50vh;
}

.mySlides {
    display: none;
}

.prev,
.next {
    cursor: pointer;
    position: absolute;
    top: 50%;
    left: 15px;
    width: auto;
    margin-top: -22px;
    padding: 16px;
    color: white;
    font-weight: bold;
    font-size: 18px;
    transition: 0.6s ease;
    border-radius: 10px;
    user-select: none;
}

.text-logo {
    position: absolute;
    top: 15%;
    width: 100%;
    left: 0;
    padding: 20px;
}

.text-logo img {
    width: 100%;
}

.text-title {
    color: #f2f2f2;
    font-size: 2rem;
    font-weight: 700;
    text-shadow: 4px 4px 2px rgba(0,0,0,0.8);
    position: absolute;
    bottom: 25%;
    width: 100%;
    text-align: center;
}

.text-description {
    color: #e2dddd;
    background: rgba(0,0,0,0.5);
    padding: 0.8rem;
    font-size: 1.2rem;
    font-weight: 700;
    text-shadow: 4px 4px 2px rgba(0,0,0,0.8);
    position: absolute;
    bottom: 0%;
    width: 100%;
    text-align: center;
}

.next {
    right: 15px;
    left: auto;
    border-radius: 10px;
}

.prev:hover, .next:hover {
    background-color: rgba(0,0,0,0.8);
}

.fade {
    -webkit-animation-name: fade;
    -webkit-animation-duration: 1.5s;
    animation-name: fade;
    animation-duration: 1.5s;
}

@-webkit-keyframes fade {
    from {opacity: .4}
    to {opacity: 1}
}

@keyframes fade {
    from {opacity: .4}
    to {opacity: 1}
}

@media (min-width: 640px) {
    .text-title {
        font-size: 3rem;
    }

    .text-logo img {
        max-width: 675px;
    }
}

@media (min-width: 1000px) {
    img {
        width: 100%;
    }

    .text-title {
        font-size: 4rem;
    }
}
</style>