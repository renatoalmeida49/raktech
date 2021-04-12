<template>
<div class="more-info">
    <div class="title">Saiba mais sobre nossos serviços</div>

    <div class="links">
        <router-link to="/manutencao">
            <div class="link">
                <div class="link-image">
                    <img src="@/assets/images/hardware.jpg" />
                </div>
                <div class="link-title">Manuteção</div>
            </div>
        </router-link>
        <router-link to="/redes">
            <div class="link">
                <div class="link-image">
                    <img src="@/assets/images/network.jpg" />
                </div>
                <div class="link-title">Redes</div>
            </div>
        </router-link>
        <router-link to="/web">
            <div class="link">
                <div class="link-image">
                    <img src="@/assets/images/webDevelopment.jpg" />
                </div>
                <div class="link-title">Web</div>
            </div>
        </router-link>
    </div>
</div>
</template>

<script>
export default {
    name: "MoreInfo",
}
</script>

<style scoped>
.more-info {
    background: #fff;
    padding: 1rem;
}
a {
    text-decoration: none;
    color: black;
}

.title {
    font-size: 2rem;
    margin: 1.5rem 0;
    font-weight: 700;
}

.links {
    display: flex;
    flex-direction: column;
    max-width: 1000px;
    margin: auto;
    justify-content: center;
    align-items: center;
}

img {
    height: 100%;
}

.link {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    cursor: pointer;
}

.link-image {
    width: 12rem;
    height: 12rem;
    border-radius: 50%;
    overflow: hidden;
}

.link-title {
    font-size: 1.3rem;
    margin: 10px 0 25px 0;
    font-weight: 600;
}

@media (min-width: 640px) {
    .links {
        flex-direction: row;
        justify-content: space-evenly;
    }
}
</style>