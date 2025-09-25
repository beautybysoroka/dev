<script setup>
import { ref } from "vue";

const props = defineProps({
  menuItems: {
    type: Array,
    default: () => [
      { to: "/", label: "Home" },
      { to: "/preparation", label: "Preparation" },
      { to: "/plan", label: "Plan" },
    ],
  },
});

const isOpen = ref(false);
</script>
<template>
  <div class="burger-menu">
    <!-- Burger Icon -->
    <button class="burger-icon" @click="isOpen = !isOpen">
      <span :class="{ open: isOpen }"></span>
      <span :class="{ open: isOpen }"></span>
      <span :class="{ open: isOpen }"></span>
    </button>

    <!-- Sidebar Menu -->
    <transition name="slide">
      <nav v-if="isOpen" class="menu">
        <router-link
            v-for="item in menuItems"
            :key="item.to"
            :to="item.to"
            class="menu-link"
            @click="isOpen = false"
        >
          {{ item.label }}
        </router-link>
      </nav>
    </transition>
  </div>
</template>

<style scoped>
.burger-menu {
  position: relative;
  z-index: 1000;
}

/* Burger Icon */
.burger-icon {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 30px;
  height: 22px;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 1001;
}

.burger-icon span {
  height: 3px;
  background: #333;
  border-radius: 2px;
  transition: all 0.3s ease;
}

/* Animate icon when open */
.burger-icon span.open:nth-child(1) {
  transform: rotate(45deg) translate(5px, 5px);
}
.burger-icon span.open:nth-child(2) {
  opacity: 0;
}
.burger-icon span.open:nth-child(3) {
  transform: rotate(-45deg) translate(5px, -5px);
}

/* Sidebar Menu */
.menu {
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100vw;
  background: #222;
  padding-top: 60px;
  display: flex;
  flex-direction: column;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.4);
}

/* Sidebar Links */
.menu-link {
  color: #fff;
  padding: 15px 20px;
  text-decoration: none;
  transition: background 0.2s;
}

.menu-link:hover {
  background: rgba(255, 255, 255, 0.1);
}

/* Slide-in animation */
.slide-enter-from {
  transform: translateX(-100%);
}
.slide-enter-to {
  transform: translateX(0);
}
.slide-enter-active {
  transition: transform 0.3s ease;
}
.slide-leave-from {
  transform: translateX(0);
}
.slide-leave-to {
  transform: translateX(-100%);
}
.slide-leave-active {
  transition: transform 0.3s ease;
}
</style>
