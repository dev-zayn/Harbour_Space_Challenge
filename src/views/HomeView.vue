<template>
  <div class="home">
    <!-- header section -->
    <header class="py-36 overflow-hidden relative">
      <img
        src="@/assets/imgs/header-pattren.png"
        class="header-pattren absolute top-2/4 right-0 -z-10 md:w-5/12 hidden md:block"
        alt=""
      />
      <div class="container grid grid-cols-1 md:grid-cols-2 gap-x-20">
        <div class="header-title">
          <h1 class="text-title">
            Interaction Design Apprenticeship
            <img
              src="@/assets/imgs/header-title-pattern.png"
              class="absolute -top-28 -right-40"
              alt=""
            />
          </h1>
        </div>
        <div class="details pb-40">
          <P class="font-normal text-body">
            A fully funded work-study program to launch your tech career
          </P>
          <p class="text-body">
            Harbour.Space has partnered with SCG to empower driven talent and
            eliminate the barriers to accessing exceptional education and career
            opportunities through a Masters Fellowship.
          </p>
          <P class="text-body">
            <span class="font-bold"> Position: </span> Marketing Performance
          </P>
          <button>Applay Now</button>
        </div>
        <div class="app-info pt-10 md:pt-0 mb-5">
          <div class="app-logo flex items-center gap-10 mb-5">
            <img src="@/assets/imgs/Logo.svg" alt="" />
            <div>
              <span class="text-furth block text-sm"> Powered by: </span>
              <span class="font-bold text-body block text-secondary">
                Zeptolab
              </span>
            </div>
          </div>
          <div class="app-time">
            <span class="text-primary block pb-3 font-semibold">
              Application closes in
            </span>
            <h3 class="text-secondary text-body">
              6 Day : 22 Hrs : 56 Min : 13 Seg
            </h3>
          </div>
          <div class="app-details">
            <div class="location">
              <span class="text-primary block font-bold"> Location </span>
              <span class="text-secondary">Bangkok </span>
            </div>
            <div class="duration">
              <span class="text-primary block font-bold"> Duration </span>
              <span class="text-secondary block"> 1 Year <br />Full Time </span>
            </div>
            <div class="start-date">
              <span class="text-primary block font-bold"> Start Date </span>
              <span class="text-secondary block"> 30 JUN 2020 </span>
            </div>
            <div class="end-date">
              <span class="text-primary block font-bold"> End Date </span>
              <span class="text-secondary block"> 30 AUG 2020 </span>
            </div>
          </div>
        </div>
      </div>
    </header>
  </div>
</template>

<script>
export default {
  name: "HomeView",
};
</script>
