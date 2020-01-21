<template>
    <div>
        <section class="section">
            <p class="title"><Content slot-key="title"/></p>
            <p class="subtitle"><Content slot-key="subtitle"/></p>
        </section>
        <section class="hero">
            <Content slot-key="hero"/>
        </section>
        <section class="section">
            <Content/>
        </section>
    </div>
</template>

<script lang="ts">
export default {
    props: ['data']
}
</script>