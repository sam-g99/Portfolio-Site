<template>
  <section class="contact" id="contact">
    <div class="content">
      <div class="section-info">
        <p>
          <span>Contact</span> me if you liked my work!
        </p>
      </div>
      <p class="email">samuel.graham099dev@gmail.com</p>
      <a href="mailto:samuel.graham099dev@gmail.com">Email Me</a>
    </div>
  </section>
</template>


<style lang="scss" scoped>
@import "@/assets/css/main.scss";
h2 {
  @include desktop-start {
    font-size: 80px;
  }
}
.contact {
  display: flex;
  flex-flow: column;
  margin-bottom: 70px;
}
.section-info {
  margin-bottom: 10px;
  @include desktop-start {
    margin-bottom: 30px;
  }
}
.email {
  font-size: 5.5vw;
  @include breakpoint(550) {
    font-size: 30px;
  }
}
span {
  font-size: 6vw;
  @include breakpoint(460) {
    font-size: 30px;
  }
}
p {
  color: white;
  font-size: 6vw;
  font-weight: 300;
  margin-bottom: 30px;
  @include breakpoint(460) {
    font-size: 30px;
  }
}
a {
  display: block;
  color: white;
  text-decoration: none;
  padding: 5px;
  font-size: 8vw;
  width: 90%;
  text-align: center;
  border: 2px solid rgba(119, 119, 119, 0.753);
  @include breakpoint(460) {
    font-size: 30px;
  }
  @include desktop-start {
    width: 300px;
  }
}
.content {
  display: flex;
  flex-flow: column;
  align-items: center;
  @include desktop-start {
    display: block;
  }
}
</style>
