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
</style>
