<template>
    <div class="columns">
        <div class="column is-3-desktop is-1-tablet"></div>
        <div class="column is-6-desktop">
            <section class="hero is-medium is-bold">
                <div class="hero-body">
                <h1 class="title"><Content slot-key="header"/></h1>
                <Content/>
                </div>
            </section>
        </div>
    </div>
</template>

<script lang="ts">
export default {}
</script>