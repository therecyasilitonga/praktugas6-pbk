<template>
  <Navbar />
  <div class="q-pa-md row wrap justify-center">
    <LaptopCard
      v-for="(laptop, index) in laptops"
      :key="index"
      :title="laptop.title"
      :price="laptop.price"
      :image="laptop.image"
      @add-to-cart="addToCart"
    />
  </div>
  <Cart :cart="cart" />
</template>

<script>
import Navbar from '../components/Navbar.vue'
import LaptopCard from '../components/LaptopCard.vue'
import Cart from '../components/Cart.vue'

export default {
  components: { Navbar, LaptopCard, Cart },
  data() {
    return {
      laptops: [
        { title: 'ASUS ROG', price: 18000000, image: '/images/laptops/asus-rog.jpg' },
        { title: 'MacBook Pro', price: 27000000, image: '/images/laptops/macbook-pro.jpg' },
        { title: 'Acer Nitro', price: 15000000, image: '/images/laptops/acer-nitro.jpg' }
      ],
      cart: []
    }
  },
  methods: {
    addToCart(item) {
      this.cart.push(item)
    }
  }
}
</script>

