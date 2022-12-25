<template>
  <div class="hero min-h-screen">
    <div class="hero-content flex-col lg:flex-row-reverse justify-between">
      <div class="relative w-1/2">
        <img
          src="/images/hero-image.png"
          class="max-w-sm rounded-lg shadow-2xl"
        />
        <img
          src="/images/rating-1.png"
          alt="rating-1"
          class="absolute top-1/2 -left-16 shadow-md"
        />
        <img
          src="/images/rating-2.png"
          alt="rating-2"
          class="absolute top-48 right-36 shadow-md"
        />
      </div>
      <div class="w-1/4">
        <h1 class="text-5xl font-bold max-w-md">
          We're Serious For Good Taste.
        </h1>
        <p class="py-6">
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

  <section class="my-20">
    <div class="grid grid-cols-4 grid-flow-col gap-4">
      <div v-for="promo in promos" :key="promo.title" class="flex flex-row">
        <img class="mx-auto" :src="promo.image" alt="icon-1" />
        <div class="flex-col">
          <div class="text-lg">{{ promo.title }}</div>
          <p>{{ promo.subtitle }}</p>
        </div>
      </div>
    </div>
  </section>

  <div class="divider"></div>

  <section class="my-20">
    <div class="flex flex-row justify-between text-center">
      <div class="w-1/2 flex items-center justify-center">
        <div class="relative -top-6">
          <img src="/images/home/hero-1.png" alt="hero-1" class="w-60" />
          <div
            class="bg-accent w-72 h-full absolute top-10 -left-6 -z-10"
          ></div>
        </div>
      </div>
      <div class="w-1/2">
        <div class="text-left space-y-4">
          <p>Our Benefit</p>
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

  <section class="my-14">
    <div class="flex flex-row justify-between text-center">
      <div class="w-1/2">
        <div class="text-left">
          <p>Our Stars</p>
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
      <div class="w-1/2 flex items-center justify-end">
        <div class="relative -top-10">
          <img src="/images/home/hero-2.png" alt="hero-2" class="w-60" />
          <div
            class="bg-accent w-72 h-full absolute top-10 -right-0 -z-10"
          ></div>
        </div>
      </div>
    </div>
  </section>

  <section class="my-20">
    <div class="grid grid-cols-4 gap-4">
      <HomeProduct image-src="/images/home/hero-1.png" />
      <HomeProduct image-src="/images/home/hero-1.png" />
      <HomeProduct image-src="/images/home/hero-1.png" />
      <HomeProduct image-src="/images/home/hero-1.png" />
    </div>
  </section>
</template>

<script setup lang="ts">
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
</script>
