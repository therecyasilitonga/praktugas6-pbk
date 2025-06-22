<template>
  <div class="q-pa-md">
    <h5>Keranjang Belanja</h5>
    <ul>
      <li v-for="(item, index) in cart" :key="index">
        {{ item.title }} - Rp {{ item.price.toLocaleString() }}
      </li>
    </ul>
    <h6>Total: Rp {{ total.toLocaleString() }}</h6>
    <q-btn label="Buat Pesanan" color="secondary" @click="goHome" />
  </div>
</template>

<script>
export default {
  props: ['cart'],
  computed: {
    total() {
      return this.cart.reduce((sum, item) => sum + item.price, 0)
    }
  },
  methods: {
    goHome() {
      this.$router.push('/back-home')
    }
  }
}
</script>

