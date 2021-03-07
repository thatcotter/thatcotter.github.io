<template>
    <div class="columns">
        <div class="column is-3-desktop is-1-tablet"></div>
        <div class="column is-6-desktop">
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
    </div>
</template>

<script lang="ts">
export default {
    props: ['data']
}
</script>