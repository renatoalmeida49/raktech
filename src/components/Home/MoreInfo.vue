<template>
<section class="more-info">
    <h1 class="title">Saiba mais sobre nossos serviços</h1>

    <div class="links">
        <router-link to="/manutencao">
            <article class="link">
                <div class="link-image">
                    <img src="@/assets/images/hardware.jpg" />
                </div>
                <h2 class="link-title">Manuteção</h2>
            </article>
        </router-link>
        <router-link to="/redes">
            <article class="link">
                <div class="link-image">
                    <img src="@/assets/images/network.jpg" />
                </div>
                <h2 class="link-title">Redes</h2>
            </article>
        </router-link>
        <router-link to="/web">
            <article class="link">
                <div class="link-image">
                    <img src="@/assets/images/webDevelopment.jpg" />
                </div>
                <h2 class="link-title">Web</h2>
            </article>
        </router-link>
    </div>
</section>
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
    box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.25);
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