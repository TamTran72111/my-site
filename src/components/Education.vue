<template>
  <section id="education">
    <h4 class="section-title">Education</h4>
    <div class="education-list">
      <div v-for="(school, idx) in schools" :key="idx" class="education-item">
        <div class="school-time">
          <h5 class="school">{{school.name}}</h5>
          <div class="time">{{school.time}}</div>
        </div>
        <div class="detail">
          <!-- <span class="major">{{school.major}} - {{school.degree}}</span> -->
          <span class="degree">{{school.degree}}</span>
          <span class="gpa">GPA: {{school.gpa}}</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      schools: [
        {
          name: "Seneca College",
          time: "January 2019 - April 2020",
          degree: "College Diploma - Computer Programmer",
          gpa: "4.0 / 4.0",
        },
        {
          name: "Danang Univeristy of Science and Technology",
          time: "September 2011 - June 2016",
          degree: "Bachelor's degree - Embedded System",
          gpa: "3.7 / 4.0",
        },
      ],
    };
  },
};
</script>

<style scoped>
.education-item {
  padding: 0.3rem;
  margin: 1.2rem auto;
}
.school {
  font-size: 1.2rem;
  font-weight: 700;
  margin: 0;
}
.time {
  color: #868e96;
}
.time,
.gpa {
  font-size: 0.75rem;
  text-align: right;
}
.detail {
  padding: 0;
  font-size: 0.9rem;
}
.detail span {
  display: block;
  padding: 0.1rem 0;
}
.gpa {
  font-weight: 700;
}
.degree {
  font-family: "Roboto" sans-serif;
}
</style>