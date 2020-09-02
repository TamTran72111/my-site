<template>
  <section id="about">
    <div class="image-border">
      <div class="image-wrapper">
        <g-image class="image" src="../assets/images/photo.jpg" />
      </div>
    </div>
    <div class="info">
      <h3 class="name">
        <span class="firstname">Tam</span>
        <span class="lastname">Tran</span>
      </h3>
      <p class="detail">
        I am a self-directed and motivated software engineer experienced working effectively in dynamic environments.
        Fluent in C/C++, Javascript and Python programming languages, including Django Rest Framework and VueJs.
      </p>
    </div>
    <div class="social-links">
      <a
        v-for="socialLink in socialLinks"
        :key="socialLink.link"
        class="social-link"
        :href="socialLink.link"
        target="_blank"
        rel="noopener noreferrer"
      >
        <font-awesome-icon :icon="socialLink.icon" />
      </a>
    </div>
  </section>
</template>


<script>
export default {
  data() {
    return {
      socialLinks: [
        {
          link: "https://github.com/TamTran72111",
          icon: ["fab", "github"],
        },
        {
          link: "https://www.linkedin.com/in/tamtran72111",
          icon: ["fab", "linkedin"],
        },
        {
          link: "mailto:tam.tran72111@gmail.com",
          icon: "envelope",
        },
      ],
    };
  },
};
</script>

<style scoped>
image {
  width: 50%;
}
.image-wrapper {
  width: 200px;
  height: 200px;
  margin: 0 auto;
  border-radius: 50%;
  overflow: hidden;
}
.image {
  object-fit: center;
  object-position: center center;
  width: 100%;
}
.image-border {
  height: 200px;
  width: 200px;
  margin: 0 auto;
  padding: 5px;
  background: #59c5f3;
  border-radius: 50%;
}
.info {
  margin: 0 auto;
  padding: 0 2rem;
}
.name {
  text-align: center;
  font-size: 2.5rem;
}
.name span {
  display: inline-block;
  margin: 0.2rem 0.4rem;
}
.detail {
  font-size: 1.1rem;
  letter-spacing: 0.1rem;
}

.social-links {
  font-size: 1.7rem;
  display: flex;
  justify-content: space-around;
}
a.social-link {
  color: #102a42;
}
a.social-link:hover {
  color: #59c5f3;
}
</style>
