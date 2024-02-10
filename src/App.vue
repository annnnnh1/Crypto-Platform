<script setup>
import HeaderMenu from '@/components/HeaderMenu.vue'
import FooterNav from '@/components/FooterNav.vue'
</script>

<template>
    <HeaderMenu/>
        <router-view/>
    <FooterNav/>
</template>
