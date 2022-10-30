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
    <!-- about section -->
    <section class="about">
      <div class="container">
        <div
          class="about-content grid grid-cols-1 md:grid-cols-2 gap-10 items-center md:mb-20"
        >
          <div class="about-img">
            <div class="img-area relative flex justify-center">
              <img
                src="@/assets/imgs/about-image.png"
                class="main-img rounded-full hidden md:block"
                alt=""
              />
              <img
                src="@/assets/imgs/about-image_2.png"
                class="main-img rounded-full block md:hidden"
                alt=""
              />
              <img
                src="@/assets/imgs/about-pattren.png"
                class="pattren-img rounded-full absolute top-0 left-0 z-10"
                alt=""
              />
            </div>
          </div>
          <div class="about-info">
            <h2
              class="text-title font-primary text-primary font-bold leading-title max-w-4xl"
            >
              About the <br />
              apprenticeship
            </h2>
            <p class="text-body py-8">
              Our scholarships are designed to give talented and driven young
              people from any background access to top-class education,
              experience and network. We offer a fully-funded master’s degree
              alongside an apprenticeship and a guaranteed job upon graduation.
            </p>
          </div>
        </div>
        <div
          class="about-info grid grid-cols-1 md:grid-cols-3 py-8 col-span-full gap-x-5 gap-y-10 md:gap-y-0"
        >
          <div
            class="one border border-gray-300 py-5 px-4 roubded border-b-0 hidden md:block"
          >
            <span class="text-primary"> Scholarship value </span>
            <h2 class="text-secondary text-title">€31,300</h2>
          </div>
          <div class="tow border border-gray-300 py-5 px-4 roubded">
            <span class="text-primary"> Study commitment </span>
            <h2 class="text-secondary text-other mb-8">3 hours / day</h2>
            <span class="line block w-10 h-1 bg-gray-300 my-8"></span>
            <p class="text-secondary">
              You will complete 15 modules to graduate. Daily classes are 3
              hours, plus coursework to complete in your own time.
            </p>
          </div>
          <div class="three border border-gray-300 py-5 px-4 roubded">
            <span class="text-primary"> Work commitment </span>
            <h2 class="text-secondary text-other">4 hours / day</h2>
            <span class="line block w-10 h-1 bg-gray-300 my-8"></span>
            <p class="text-secondary">
              Immerse yourself in the professional world during your
              apprenticeship. You’ll learn the ropes from the best and get to
              apply your newly acquired knowledge in the field from day one.
            </p>
          </div>
          <div
            class="four py-5 items-center gap-10 border border-gray-300 border-t-0 border-b-0 hidden md:flex"
          >
            <span
              class="line block w-9/12 mx-auto h-1 border-t-2 border-gray-100 my-6"
            ></span>
          </div>
          <div class="five py-5 flex items-center gap-10">
            <span
              class="line block w-full h-1 border-t-2 border-gray-100 my-6"
            ></span>
            <span class="uppercase">GRADUATION</span>
            <span
              class="line block w-full h-1 my-8 border-t-2 border-gray-100"
            ></span>
          </div>
          <div
            class="six border-0 md:border border-gray-300 py-5 px-4 h-100 roubded border-t-0"
          >
            <ul class="grid grid-cols-2 gap-5">
              <li>
                <span class="text-primary block"> Tuition covered </span>
                <span class="block"> €20,900 </span>
              </li>
              <li>
                <span class="text-primary block"> Remaining </span>
                <span class="block"> €2,000 </span>
              </li>
              <li>
                <span class="text-primary block"> Living stipend </span>
                <span class="block"> €8,400 (€700/month) </span>
              </li>
            </ul>
          </div>
          <div class="seven border border-gray-300 py-5 px-4 h-100 roubded">
            <span class="text-primary"> A full-time contract </span>
            <h2 class="text-secondary text-other">1 Year / Full-Time</h2>
            <span class="line block w-10 h-1 bg-gray-300 my-8"></span>
            <p class="text-secondary">
              You’ll be guaranteed a 1 year contract with SCG upon graduation.
            </p>
          </div>
        </div>
      </div>
    </section>
    <section class="slider py-8">
      <div class="container">
        <h2 class="text-title">Slider</h2>
        <Splide :options="{ rewind: true }" aria-label="My Favorite Images">
          <SplideSlide>
            <h1>one</h1>
          </SplideSlide>
          <SplideSlide>
            <h1>one</h1>
          </SplideSlide>
        </Splide>
      </div>
    </section>
    <section class="FAQ py-8">
      <div class="container">
        <div class="faq-title border-b-2 pb-5 border-gray-200 relative">
          <h2 class="text-primary text-title w-3/5">
            Frequently asked questions
          </h2>
          <div class="filter block md:flex gap-2">
            <span class="text-secondary filter-title md:relative top-3"
              >Filter by:</span
            >
            <div class="filter-list relative">
              <ul class="px-2 py-2 pr-10 border-gray-200 border rounded-3xl">
                <li class="text-primary mb-2 cursor-pointer">
                  Program conditions
                </li>
                <li class="mb-2 cursor-pointer">All</li>
                <li class="mb-2 cursor-pointer">Admissions</li>
                <li class="mb-2 cursor-pointer">Harbour.space</li>
                <li class="mb-2 cursor-pointer">SCG</li>
                <li class="cursor-pointer">Living in Bangkok</li>
              </ul>
              <img
                src="@/assets/imgs/arrow.png"
                class="absolute top-5 right-3"
                alt=""
              />
            </div>
          </div>
        </div>
        <div class="faq-list">
          <div
            v-for="(faq, index) in faqs"
            :key="index"
            class="faq text-body grid grid-cols-2 md:grid-cols-3 justify-between py-5 border-b-2 border-gray-200"
          >
            <div class="catigort hidden md:block">
              <h3 class="text-primary font-bold">{{ faq.catigory }}</h3>
            </div>
            <div class="item-title">
              <span class=""> {{ faq.title }} </span>
              <div
                class="faq-details pt-5 font-extralight"
                :class="[!faq.status ? 'pt-0 max-h-0 overflow-hidden' : '']"
              >
                <p class="mb-5 text-body">
                  The majority of our students receive numerous job offers at
                  the end of the second academic year of their Bachelor's
                  programme and at the end of the first academic year of their
                  Master's programme. The best applicants receive an offer from
                  our industrial partners at the beginning of their programmes.
                </p>
                <p class="mb-5 text-body">
                  Harbour.Space is highly recognized among innovative employers
                  and is strategic partner of B.Grimm multi- industry
                  corporation with 140 years of history in Thailand. Together we
                  insure students get the best knowledge about the current job
                  market opportunities.
                </p>
                <p class="mb-5 text-body">
                  We offer our students paid internships options during studies
                  jointly with our industrial partners.
                </p>
                <p class="mb-5 text-body">
                  Employers that hired graduates of Harbour.Space in the past
                  include Google, IBM, Accenture, Typeform, Frog, and other tech
                  centric companies. Our industry specific employability report
                  could be provided to you separately during the admission
                  process.
                </p>
              </div>
            </div>
            <div class="faq-toggle justify-self-end" @click="toggleFaq(faq)">
              <div
                class="icon w-20 h-20 border-2 border-gray-300 relative rounded-full"
              >
                <!-- <svg>
                  <circle
                    class="w-40 h-40"
                    cx="90"
                    cy="90"
                    r="50"
                    stroke="#231f20"
                    stroke-width="10"
                    fill-opacity="0"
                  />
                </svg> -->
                <!-- <div
                  class="plus absolute w-10 h-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                >
                  <span
                    class="w-10 h-2 inline-block bg-gray-300 top-1/2 left-1/2 absolute transform -translate-x-1/2 -translate-y-1/2"
                  ></span>
                  <span
                    class="w-10 h-2 inline-block bg-gray-300 top-1/2 left-1/2 transform rotate-90 absolute -translate-x-1/2 -translate-y-1/2"
                  ></span>
                </div> -->
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import { Splide, SplideSlide } from "@splidejs/vue-splide";
export default {
  data() {
    return {
      faqs: [
        {
          catigory: "Program conditions",
          title: "What are my obligations? ",
          status: false,
        },
        {
          catigory: "Program conditions",
          title: "Do I get a job placement upon graduation? ",
          status: false,
        },
        {
          catigory: "Program conditions",
          title: "What if I want to start my own company?  ",
          status: false,
        },
        {
          catigory: "Program conditions",
          title: "Do I need a visa?   ",
          status: false,
        },
      ],
    };
  },
  methods: {
    toggleFaq(faq) {
      this.faqs.forEach((el) => (el.status = false));
      faq.status = true;
    },
  },
  components: {
    Splide,
    SplideSlide,
  },
};
</script>
