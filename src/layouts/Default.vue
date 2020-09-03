<template>
  <div class="layout">
    <Nav />
    <main>
      <slot />
    </main>
  </div>
</template>

<script>
import Nav from "@/components/Nav";
export default {
  components: { Nav },
};
</script>

<style>
body {
  font-family: "Open Sans", sans-serif;
  margin: 0;
}
section {
  padding: 3rem 1.5rem;
}
h4.section-title {
  font-size: 2.5rem;
  text-align: center;
  padding: 0;
  margin: 1.5rem;
}
.time {
  color: #868e96;
  font-size: 0.75rem;
  text-align: right;
}
.company,
.degree {
  color: #617d98;
}
.detail {
  font-size: 0.9rem;
  padding: 0;
}
@media only screen and (min-width: 600px) {
  section {
    padding: 3rem;
  }
}
@media only screen and (min-width: 768px) {
  section {
    width: calc(650px + 10vw);
    max-width: 800px;
    margin: auto;
    height: 100vh;
    padding: 0;
    display: flex;
    align-items: center;
  }
  h4.section-title {
    font-size: 4.5rem;
    margin: 4.5rem;
  }
  .time {
    font-size: 1rem;
  }
  .detail {
    font-size: 1.25rem;
  }
}
</style>
