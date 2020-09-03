<template>
  <section id="about">
    <div>
      <div class="image-border">
        <div class="image-wrapper">
          <g-image class="image" src="../assets/images/photo.jpg" />
        </div>
      </div>
    </div>
    <div class="info-wrapper">
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
.image-border,
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
  padding: 5px;
  background: #59c5f3;
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
  width: 60%;
  max-width: 400px;
  margin: auto;
}
a.social-link {
  color: #102a42;
}
a.social-link:hover {
  color: #59c5f3;
}

@media only screen and (min-width: 600px) {
  .image-wrapper,
  .image-border {
    width: 300px;
    height: 300px;
  }
}

@media only screen and (min-width: 768px) {
  .image-wrapper,
  .image-border {
    width: 200px;
    height: 200px;
  }
  section#about {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .name {
    font-size: 3.5rem;
  }
  .social-links {
    margin-top: 1.5rem;
  }
  .social-links {
    font-size: 2rem;
  }
}
@media only screen and (min-width: 1000px) {
  section#about {
    width: 84vw;
    max-width: 1000px;
  }

  section#about div:nth-child(2) {
    width: 75%;
  }
}
</style>
