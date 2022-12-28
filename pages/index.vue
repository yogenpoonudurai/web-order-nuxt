<template>
  <div class="hero min-h-screen">
    <div class="hero-content flex-col lg:flex-row-reverse lg:justify-between">
      <div class="lg:relative lg:w-1/2">
        <img
          src="/images/hero-image.png"
          class="w-full lg:max-w-sm rounded-lg shadow-2xl mx-auto"
        />
        <img
          src="/images/rating-1.png"
          alt="rating-1"
          class="absolute hidden lg:block lg:top-1/2 lg:-left-2 shadow-md"
        />
        <img
          src="/images/rating-2.png"
          alt="rating-2"
          class="absolute hidden lg:block lg:top-48 lg:right-4 shadow-md"
        />
      </div>
      <div class="lg:w-1/2 text-center lg:text-left px-10">
        <h1 class="text-5xl font-bold max-w-md">
          We're Serious For Good Taste.
        </h1>
        <p class="py-6 w-1/2">
          We strive to provide a space where guests can connect with themselves
          and explore their full potential, offering a safe place.
        </p>
        <button class="btn btn-primary hover:text-white">
          Get Started <i class="ri-arrow-right-line ml-2"></i>
        </button>
      </div>
    </div>
  </div>

  <div class="divider"></div>

  <section class="my-20 hero">
    <div
      class="grid lg:grid-cols-4 lg:grid-flow-col lg:gap-4 grid-cols-1 lg:text-left space-y-8 lg:space-y-0"
    >
      <div
        v-for="promo in promos"
        :key="promo.title"
        class="lg:flex flex-row items-center"
      >
        <img class="lg:mr-4 mx-auto lg:mx-0" :src="promo.image" alt="icon-1" />
        <div class="flex-col text-center lg:text-left mt-4 lg:mt-0">
          <div class="text-lg">{{ promo.title }}</div>
          <p>{{ promo.subtitle }}</p>
        </div>
      </div>
    </div>
  </section>

  <div class="divider"></div>

  <section class="my-20 hero-content mx-auto">
    <div class="lg:flex flex-row justify-between text-center">
      <div class="lg:w-1/2 flex items-center justify-start">
        <div class="relative lg:-top-6">
          <img
            src="/images/home/hero-1.png"
            alt="hero-1"
            class="lg:w-60 w-2/3 mx-auto"
          />
          <div
            class="bg-accent w-72 h-full absolute -top-10 lg:top-10 lg:-left-6 left-10 -z-10"
          ></div>
        </div>
      </div>
      <div class="lg:w-1/2">
        <div class="lg:text-left space-y-4">
          <p class="mb-4 mt-10 lg:mt-0">Our Benefit</p>
          <div class="text-5xl">The More Healthy Food The Better</div>

          <ul class="list-none leading-8">
            <li class="flex items-center">
              <i class="ri-check-line mr-2 ri-lg text-primary"></i>
              <p>Be Alive With Veggie Food.</p>
            </li>
            <li class="flex items-center">
              <i class="ri-check-line mr-2 ri-lg text-primary"></i>
              <p>It's The Place To Be.</p>
            </li>
            <li class="flex items-center">
              <i class="ri-check-line mr-2 ri-lg text-primary"></i>
              <p>Nonstop Veggie Food</p>
            </li>
            <li class="flex items-center">
              <i class="ri-check-line mr-2 ri-lg text-primary"></i>
              <p>The Best Silk Dish In Town</p>
            </li>
            <li class="flex items-center">
              <i class="ri-check-line mr-2 ri-lg text-primary"></i>
              <p>Truffles, Egg & Pumpkin Spice</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>

  <section class="my-14 hero-content mx-auto">
    <div class="lg:flex flex-row justify-between text-center">
      <div class="lg:w-1/2">
        <div class="lg:text-left">
          <p class="mb-4">Our Stars</p>
          <div class="text-5xl mb-10 mt-2">
            Veggie Food Goes On And Always On
          </div>

          <div class="flex flex-row justify-between text-center">
            <div>
              <div class="text-primary text-2xl font-bold mb-2">1,500</div>
              <p class="font-thin text-sm">Sold Product</p>
            </div>
            <div>
              <div class="text-primary text-2xl font-bold mb-2">500</div>
              <p class="font-thin text-sm">Positive Feedback</p>
            </div>
            <div>
              <div class="text-primary text-2xl font-bold mb-2">400</div>
              <p class="font-thin text-sm">Official Store</p>
            </div>
          </div>
          <button class="btn btn-primary mt-10">
            Get Special Promo <i class="ri-arrow-right-line ml-2"></i>
          </button>
        </div>
      </div>
      <div class="lg:w-1/2 flex items-center justify-end">
        <div class="relative lg:-top-10 mt-10 lg:mt-0">
          <img
            src="/images/home/hero-2.png"
            alt="hero-2"
            class="lg:w-60 w-2/3 mx-auto"
          />
          <div
            class="bg-accent w-72 h-full absolute lg:top-10 -bottom-10 lg:-right-0 -z-10"
          ></div>
        </div>
      </div>
    </div>
  </section>

  <section
    class="my-20 hero-content mx-auto flex flex-col text-center lg:text-left"
  >
    <p class="mb-4">Our Benefit</p>
    <div class="text-5xl mb-10">Most Popular Product</div>
    <div class="grid lg:grid-cols-4 gap-4">
      <div v-for="product in products" :key="product.name">
        <HomeProduct :product="product" />
      </div>
    </div>
  </section>
  <section class="mt-20 hero-content mx-auto">
    <Footer />
  </section>
  <div class="text-center mb-4">Copyright {{ new Date().getFullYear() }}</div>
</template>

<script setup lang="ts">
import { Product } from "~~/types/product.type";
import { Promo } from "~~/types/promo.type";

const promos: Promo[] = [
  {
    image: "/images/home/icon-shipping.svg",
    title: "Free Shipping",
    subtitle: "Orders over $140",
  },
  {
    image: "/images/home/icon-payment.svg",
    title: "Quick Payment",
    subtitle: "100% secure payment",
  },
  {
    image: " /images/home/icon-promo.svg",
    title: "Special Promo",
    subtitle: "Get special promo",
  },
  {
    image: "/images/home/icon-support.svg",
    title: "24/7 Support",
    subtitle: "Ready support",
  },
];

const products: Product[] = [
  {
    id: "0",
    imageSrc: "/images/home/product-1.png",
    name: "Summer Veganie",
    price: 29.0,
    discount: 0.2,
    stars: 5,
  },
  {
    id: "1",
    imageSrc: "/images/home/product-2.png",
    name: "Geanie Seafood",
    price: 19.0,
    stars: 4,
  },
  {
    id: "2",
    imageSrc: "/images/home/product-3.png",
    name: "Fresh Vegetable",
    price: 39.0,
    stars: 3,
  },
  {
    id: "3",
    imageSrc: "/images/home/product-4.png",
    name: "Fresh Meatyus",
    price: 109.0,
    stars: 2,
  },
];
</script>
