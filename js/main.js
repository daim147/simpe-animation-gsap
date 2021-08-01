gsap.registerPlugin(ScrollTrigger);
const timeline = gsap.timeline({
  defaults: {
    duration: 1.5,
  },
});

timeline
  .from("body", {
    backgroundColor: "#234d34",
    duration: 1,
  })
  .from(["h1", ".intro"], {
    opacity: 0,
    // duration: 1.5,
    x: -50,
    stagger: 0.5,
  })
  .addLabel("myLabel", "-=1")
  .from(
    "img",
    {
      opacity: 0,
      // duration: 1.5,
    },
    "myLabel"
  )
  .from(
    "h2",
    {
      opacity: 0,
      // duration: 1.5,
      y: 10,
    },
    "myLabel"
  )
  .from(
    "ul li",
    {
      opacity: 0,
      x: -20,
      stagger: 0.2,
      duration: 1,
    },
    "myLabel+=0.5"
  );
