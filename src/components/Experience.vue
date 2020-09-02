<template>
  <section id="experience">
    <h4 class="section-title">Experience</h4>
    <div class="experience-list">
      <div v-for="(exp, idx) in experience" :key="idx" class="experience-item">
        <div class="company-time">
          <h5 class="position">{{exp.position}}</h5>
          <div class="time">{{exp.time}}</div>
          <h5 class="company">{{exp.company}}</h5>
        </div>
        <div class="detail">
          <div class="description">
            <div
              v-for="(description, idx) in exp.description"
              :key="idx"
            >&nbsp;&nbsp;&nbsp;&nbsp;-&nbsp;{{description}}</div>
          </div>
          <div class="achievement">
            <div
              v-for="(achievement, idx) in exp.achievement"
              :key="idx"
            >&nbsp;&nbsp;&nbsp;&nbsp;-&nbsp;{{achievement}}</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      experience: [
        {
          company: "Robert Bosch Engineering and Business Solutions",
          time: "June 2016 - June 2018",
          location: "Ho Chi Minh city - Viet Nam",
          position: "Software Engineer",
          description: [
            "Conducting Unit Testing, analyzing code and results, then submitting observations to development teams",
            "Coordinating tasks and balancing workload for team members",
          ],
          achievement: [
            "Improving 20% of team productivity by automating processes using Python",
            "Rewarded as Defect Hunter King by detecting 26 bugs in the first two quarters of 2017",
          ],
        },
      ],
    };
  },
};
</script>

<style scoped>
.experience-item {
  padding: 0.3rem;
  margin: 1.2rem auto;
}

.position {
  font-size: 1.2rem;
  font-weight: 700;
  margin: 0;
  width: 65%;
}

.company {
  margin: 0;
  color: #617d98;
  width: 80%;
}

.detail {
  padding: 0;
  font-size: 0.8rem;
  padding: 0.25rem 0.4rem 0.25rem 0.8rem;
}

.description {
  font-family: "Roboto" sans-serif;
  color: #242038;
}
</style>