console.log( '😀👍🍎' );

// GSAP library
// https://unpkg.co/gsap@3/dist/gsap.min.js

// ScrollTrigger plugin
// https://unpkg.com/gsap@3/dist/ScrollTrigger.min.js

// Install Plugin
gsap.registerPlugin(ScrollTrigger);

// defaults
ScrollTrigger.defaults({
  toggleActions: "restart pause resume pause"
});

// Panel One
gsap.to(".one", {
  scrollTrigger: "one",
  backgroundColor: "brown",
  duration: 0.5
});

gsap.to(".one h1 ", {
  scrollTrigger: "one",
  color: "white",
  duration: 3,
  rotate: 360,
  opacity: 1
});

// Panel Two
gsap.to(".two", {
  scrollTrigger: "two"
});

// Panel Three
gsap.to(".three", {
  scrollTrigger: "three"
});

gsap.to(".three p", {
  scrollTrigger: "three",
  letterSpacing: 1,
  duration: 5
});

// Panel Four
gsap.to(".four", {
  scrollTrigger: "four"
});

// Panel Five
gsap.to(".five", {
  scrollTrigger: "five"
});

gsap.to(".six", {
  scrollTrigger: "six",
  translateX: -500,
  duration: 30
});
