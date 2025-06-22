<template>
  <Navbar />
  <div class="q-pa-md">
    <h2>AboutView</h2>
    <label>
      Search: <input v-model.trim="search" maxlength="28" />
    </label>
  </div>
</template>

<script>
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import Navbar from '../components/Navbar.vue'

export default {
  components: { Navbar },
  setup() {
    const router = useRouter()
    const route = useRoute()

    const search = computed({
      get() {
        return route.query.search ?? ''
      },
      set(search) {
        router.replace({ query: { search } })
      }
    })

    return { search }
  }
}
</script>