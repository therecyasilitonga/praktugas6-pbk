<template>
  <q-card class="my-card q-ma-md" flat bordered>
    <q-img :src="image" height="150px" />
    <q-card-section>
      <div class="text-h6">{{ title }}</div>
      <div class="text-subtitle2">Rp {{ price.toLocaleString() }}</div>
    </q-card-section>
    <q-card-actions align="right">
      <q-btn label="Beli" color="primary" @click="addToCart" />
    </q-card-actions>
  </q-card>
</template>

<script>
export default {
  props: ['title', 'price', 'image'],
  methods: {
    addToCart() {
      this.$emit('add-to-cart', {
        title: this.title,
        price: this.price
      })
    }
  }
}
</script>