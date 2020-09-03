<template>
  <Layout>
    <header>
      <div class="error-404">
        <h1>oops it's a dead end</h1>
        <g-link class="btn-white" to="/">back to home page</g-link>
      </div>
    </header>
  </Layout>
</template>

<style scoped>
header {
  background: #3fd0d4;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
header > div {
  text-align: center;
  letter-spacing: 4px;
  color: #f7f7f7;
}
header h1 {
  font-size: 3.3rem;
  text-transform: uppercase;
  margin-bottom: 2rem;
  padding: 0 1rem;
  letter-spacing: 6px;
}
header a {
  text-transform: uppercase;
  text-decoration: none;
  letter-spacing: 4px;
  color: #f7f7f7;
  border: 2px solid #f7f7f7;
  padding: 0.9rem 1.6rem;
  display: inline-block;
  -webkit-transition: all 0.3s linear;
  transition: all 0.3s linear;
  cursor: pointer;
}

header a:hover {
  background: #f7f7f7;
  color: #3fd0d4;
}

@media screen and (min-width: 768px) {
  header h1 {
    font-size: 4.5rem;
  }
  header {
    margin-top: 5rem;
    height: calc(100vh - 5rem);
  }
  nav {
    background: #f7f7f7;
  }
}
</style>