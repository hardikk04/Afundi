const brandImg1 = document.querySelector(".brand1");
const brandImg2 = document.querySelector(".brand2");
const brandImg3 = document.querySelector(".brand3");
const brandTag = document.querySelector(".page1-heading-top > h1>span");

brandTag.addEventListener("mouseenter", () => {
  brandImg1.style.scale = 1;
  brandImg2.style.scale = 1;
  brandImg3.style.scale = 1;
});

brandTag.addEventListener("mouseleave", () => {
  brandImg1.style.scale = 0;
  brandImg2.style.scale = 0;
  brandImg3.style.scale = 0;
});

const websiteImg1 = document.querySelector(".website1");
const websiteImg2 = document.querySelector(".website2");
const websiteImg3 = document.querySelector(".website3");
const websiteTag = document.querySelector(".page1-heading-center > h1>span");

websiteTag.addEventListener("mouseenter", () => {
  websiteImg1.style.scale = 1;
  websiteImg2.style.scale = 1;
  websiteImg3.style.scale = 1;
});

websiteTag.addEventListener("mouseleave", () => {
  websiteImg1.style.scale = 0;
  websiteImg2.style.scale = 0;
  websiteImg3.style.scale = 0;
});

const plateformImg1 = document.querySelector(".plateform1");
const plateformImg2 = document.querySelector(".plateform2");
const plateformImg3 = document.querySelector(".plateform3");
const plateformTag = document.querySelector(".page1-heading-bottom > h1>span");

plateformTag.addEventListener("mouseenter", () => {
  plateformImg1.style.scale = 1;
  plateformImg2.style.scale = 1;
  plateformImg3.style.scale = 1;
});

plateformTag.addEventListener("mouseleave", () => {
  plateformImg1.style.scale = 0;
  plateformImg2.style.scale = 0;
  plateformImg3.style.scale = 0;
});

const t1 = gsap.timeline();
t1.from(
  ".page1-heading h1",
  0.5,
  {
    opacity: 0,
    y: 100,
    duration: 1,
    stagger: 0.3,
  },
  0.5
);

t1.from(
  ".page1-video video",
  0.5,
  {
    opacity: 0,
    y: 100,
    duration: 0.3,
  },
  0.5
);

t1.to(".page1-video video", {
  height: "100%",
  width: "100%",
  scrollTrigger: {
    scroller: "body",
    trigger: ".page1-video",
    pin: true,
    scrub: 1,
    start: "top top",
    // markers: true,
  },
});

t1.from(".page2-text", {
  y: 100,
  opacity: 0,
  scrollTrigger: {
    scroller: "body",
    trigger: ".page2-text",
    scrub: 0.5,
    start: "top 70%",
    end: "top 40%",
    // markers: true,
  },
});

t1.to(".scroller > h1", {
  transform: "translateX(-15%)",
  scrollTrigger: {
    scroller: "body",
    trigger: ".scroller",
    scrub: 0.5,
    start: "top 90%",
  },
});

t1.to(".page3-elem1-img > img", {
  height: "100%",
  width: "100%",
  scrollTrigger: {
    scroller: "body",
    trigger: ".page3-elem1-img",
    scrub: 0.5,
    start: "top 90%",
    end: "top 10%",
    // markers: true,
  },
});

t1.to(".page3-elem2-img > img", {
  height: "100%",
  width: "100%",
  scrollTrigger: {
    scroller: "body",
    trigger: ".page3-elem2-img",
    scrub: 0.5,
    start: "top 100%",
    end: "top 10%",
    // markers: true,
  },
});

t1.to(".page3-elem3-img > img", {
  height: "100%",
  width: "100%",
  scrollTrigger: {
    scroller: "body",
    trigger: ".page3-elem3-img",
    scrub: 0.5,
    start: "top 100%",
    end: "top 10%",
    // markers: true,
  },
});

t1.to(".page3-elem4-img > img", {
  height: "100%",
  width: "100%",
  scrollTrigger: {
    scroller: "body",
    trigger: ".page3-elem4-img",
    scrub: 0.5,
    start: "top 100%",
    end: "top 10%",
    // markers: true,
  },
});

t1.to(
  ".page4-right > .page4-right-elem:nth-child(2),.page4-right > .page4-right-elem:nth-child(3)",
  {
    top: "0%",
    stagger: 0.1,
    scrollTrigger: {
      scroller: "body",
      trigger: ".page4",
      scrub: 0.5,
      start: "top 30%",
      end: "top 0%",
      // markers: true,
      pin: true,
      pinSpacing: false,
    },
  }
);

t1.from(".page6-text", {
  y: 100,
  opacity: 0,
  scrollTrigger: {
    scroller: "body",
    trigger: ".page6-text",
    scrub: 0.5,
    start: "top 70%",
    end: "top 50%",
    // markers: true,
  },
});

Shery.mouseFollower();

Shery.makeMagnet(
  "nav>h1,.nav-right>button,.nav-right>i,.page3 h1,.page3 button,.page5 button,.page7-right-elem>h1,.icons i",
  {
    //Parameters are optional.
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    duration: 1,
  }
);
