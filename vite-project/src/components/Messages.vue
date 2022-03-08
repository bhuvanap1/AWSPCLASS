<script setup lang="ts">
    import { useMessages } from '../models/messages';
    const messages = useMessages();
</script>

<template>
    <div>
        <div v-for=" (x, i) in messages.notifications" :class="`notification is-${x.type}`">
            <button class="delete" @click="messages.close(i)" ></button>
            {{ x.message }}
        </div>
    </div>
</template>


<style scoped>
</style>