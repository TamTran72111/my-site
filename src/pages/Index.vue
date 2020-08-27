<template>
  <Layout>
    <About />
    <Skills />
    <Experience />
    <Education />
  </Layout>
</template>

<script>
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Education from "@/components/Education";

export default {
  components: {
    About,
    Skills,
    Experience,
    Education,
  },
};
</script>

<style>
</style>
