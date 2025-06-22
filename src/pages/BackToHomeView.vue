<template>
  <Navbar />
  <div class="q-pa-md text-center">
    <h4>Terima kasih telah berbelanja!</h4>
    <q-btn label="Belanja Lagi" color="primary" to="/" class="q-mt-md" />
  </div>
</template>

<script>
import Navbar from '../components/Navbar.vue'

export default {
  components: { Navbar }
}
</script>
