<template>
  <nav :class="{ show }">
    <div>
      <button @click="show = !show" class="navbar-icon">
        <font-awesome-icon icon="align-right" />
      </button>
    </div>
    <hr v-if="show" />
    <transition name="slide">
      <ul v-if="show" class="nav-items">
        <li class="nav-item" v-for="link in links" :key="link.text">
          <a @click="clickLink(link.link)" class="nav-link">{{ link.text }}</a>
        </li>
      </ul>
    </transition>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      links: [
        { text: "About", link: "#about" },
        { text: "Skills", link: "#skills" },
        { text: "Experience", link: "#experience" },
        { text: "Education", link: "#education" },
      ],
      show: false,
    };
  },

  methods: {
    clickLink(el) {
      this.show = false;
      this.$scrollTo(el);
    },
  },
};
</script>

<style scoped>
nav {
  position: fixed;
  top: 0;
  width: 100%;
  height: 3.5rem;
  z-index: 200;
  background: transparent;
  display: flex;
  flex-direction: column;
}
.navbar-icon:hover {
  color: #59c5f3;
}
.show {
  background: lightgrey;
}
hr {
  border: 0.15rem solid black;
  margin: 0.3rem 0 0 0;
  background: black;
}
.navbar-icon {
  margin-top: 0.4rem;
  margin-right: 0.4rem;
  font-size: 1.5rem;
  float: right;
}
.nav-items {
  cursor: pointer;
  padding: 0;
  margin: 0;
  background: lightgrey;
  list-style-type: none;
}
.nav-item {
  text-align: center;
  padding: 0.5rem;
  font-size: 1.5rem;
  font-weight: 700;
  font-style: italic;
  font-family: "Roboto", sans-serif;

  color: #fc5130;
}
.nav-item:hover {
  background: rgb(65, 58, 58);
}
.nav-items:hover .nav-item {
  opacity: 0.5;
}
.nav-items:hover .nav-item:hover {
  opacity: 1;
  font-style: normal;
}
.slide-enter,
.slide-leave-active {
  transform: translateY(-2rem);
  opacity: 0;
}
.slide-enter-active,
.slide-leave-active {
  transition: all 1s linear;
}
</style>
