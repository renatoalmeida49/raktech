<template>
<footer>
    <div class="footer">
        <div class="box address">
            <div class="title">
                Endereço
            </div>
            <div class="content">
                <img src="@/assets/icons/address.png"/>Maceió-AL
            </div>
        </div>

        <div class="box follow-us">
            <div class="title">
                Redes sociais
            </div>
            <div class="content">
                <img src="@/assets/icons/facebook.png"/>
                <img src="@/assets/icons/github.png"/>
                <img src="@/assets/icons/instagram.png"/>
                <img src="@/assets/icons/linkedin.png"/>
            </div>
        </div>

        <div class="box contact">
            <div class="title">
                Contato
            </div>
            <div class="content">
                contato@mtech.com.br
            </div>
        </div>
    </div>
</footer>
</template>

<script>
export default {

}
</script>

<style scoped>
footer {
    background: #666;
}
.box {
    padding: 1rem;
}

img {
    height: 1.5rem;
}

.address {
    background: #777;
}

.follow-us {
    background: #888;
}

.follow-us img {
    margin: 0.6rem 0.6rem;
}

.contact {
    background: #999;
}

.footer {
    color: black;
    background: rgb(37, 37, 37);
    display: flex;
    flex-direction: column;
    max-width: 1000px;
    margin: auto;
}

.title {
    text-transform: uppercase;
    font-weight: 700;
    font-size: 1rem;
}

.content {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0.5rem 0;
}

@media (min-width: 640px) {
    .footer {
        flex-direction: row;
        justify-content: space-evenly;
    }

    .box {
        width: calc(100% / 3);
    }
}
</style>