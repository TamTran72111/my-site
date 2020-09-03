<template>
  <section id="skills">
    <div>
      <h4 class="section-title">Skills</h4>
      <span class="skill" v-for="(skill, idx) in skills" :key="idx">{{skill}}</span>
      <!-- <span class="skill">Problem solving</span> -->
      <div>
        <h5>Languages</h5>
        <span class="skill" v-for="(language, idx) in languages" :key="idx">{{language}}</span>
      </div>
      <div>
        <h5>Frameworks &amp; Libraries</h5>
        <span class="skill" v-for="(framework, idx) in frameworks" :key="idx">{{framework}}</span>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      skills: [
        "Problem Solving",
        "Communication",
        "Collaboration",
        "Adaptability",
        "Unit Testing",
        "Git",
        "Machine Learning",
      ],
      languages: [
        "C",
        "C++",
        "Python",
        "Rust",
        "Java",
        "Javascript",
        "HTML",
        "CSS",
        "SQL",
      ],
      frameworks: [
        "Django",
        "ExpressJs",
        "Angular",
        "React",
        "Vue",
        "Selenium",
        "MongoDB",
        "Scikit-learn",
        "Numpy",
        "Pandas",
      ],
    };
  },
};
</script>

<style scoped>
h5 {
  margin: 1rem 0 0.4rem 0;
  font-size: 1.3rem;
}
.skill {
  display: inline-block;
  background: #dae2ec;
  color: #617d98;
  margin: 0.25rem 0.5rem 0.25rem 0;
  padding: 0.25rem 0.5rem;
  border-radius: 0.25rem;
  letter-spacing: 1px;
  font-size: 0.85rem;
}
@media screen and (min-width: 768px) {
  h5 {
    font-size: 1.9rem;
  }
  .skill {
    margin: 0.35rem 0.75rem 0.25rem 0;
    font-size: 1.2rem;
  }
}
</style>