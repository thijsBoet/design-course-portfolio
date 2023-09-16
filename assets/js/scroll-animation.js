gsap.registerPlugin(ScrollTrigger);
var tl = gsap.timeline();

tl.from('.content', {
	y: '-30%',
	opacity: 0,
	duration: 2,
	ease: 'power4.out',
});

tl.from('.stagger1', {
  opacity: 0,
  y: -50,
  stagger: .3,
  ease: 'power4.out',
  duration: 2
}, '-=1.5');

tl.from('.hero-design', {
	opacity: 0,
	y: 50,
  ease: 'power4.out',
  duration: 1
}, '-=2');

gsap.from('.square-anim', {
  stagger: .2,
  scale: 0.1,
  duration: 1,
  ease: 'Back.easeOut.config(1.7)',
})

gsap.from('.transition2', {
  scrollTrigger: {
    trigger: '.transition2',
    start: 'top bottom',
  },
  y: 50,
  opacity: 0,
  duration: 1.2,
  stagger: .3
});

gsap.from('.transition3', {
  scrollTrigger: {
    trigger: '.transition3',
    start: 'top bottom',
  },
  y: 50,
  opacity: 0,
  duration: 1.2,
  stagger: .3
});
















const lenis = new Lenis();

lenis.on('scroll', (e) => {
	console.log(e);
});

function raf(time) {
	lenis.raf(time);
	requestAnimationFrame(raf);
}

requestAnimationFrame(raf);
