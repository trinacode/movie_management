<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>

        <q-toolbar-title>
          {{ appTitle }}
        </q-toolbar-title>

        <div>{{ author }}</div>
      </q-toolbar>
    </q-header>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">

import { defineComponent } from 'vue'

export default defineComponent({
  name: 'MainLayout',

  components: {
  },

  setup () {
    const author = 'Tony Costa'

    const appTitle = 'Movie management app'

    return {
      author,
      appTitle
    }
  }
})
</script>
