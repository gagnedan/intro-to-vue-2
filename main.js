var app = new Vue({
  el: '#app',
  data: {
    product: 'Socks',
    description:
      'A sock is a piece of clothing worn on the feet and often covering the ankle or some part of the calf.',
    image: './assets/vmSocks-green-onWhite.jpg',
    link:
      'https://www.vuemastery.com/images/challenges/vmSocks-green-onWhite.jpg',
    inStock: true,
    onSale: true,
    details: ["80% cotton", "20% polyester", "Gender-neutral"],
    sizes: ["small", "medium", "large"],
    variants: [
      {
        variantId: 2234,
        variantColor: "green",
        variantImage: "./assets/vmSocks-green-onWhite.jpg"
      },
      {
        variantId: 2235,
        variantColor: "blue",
        variantImage: "./assets/vmSocks-blue-onWhite.jpg"
      },
    ],
    cart: 0
    },
    methods: {
      addToCart() {
        this.cart += 1;
      },
      removeToCart() {
       this.cart > 0 ? this.cart -= 1 : 0
      },
      updateProduct(variantImage) {
        this.image = variantImage
      }
    }
});
