import { gsap } from "gsap";
import { Elastic } from "gsap";

gsap.registerPlugin(Elastic);

function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

let persi_buttons = document.querySelectorAll('.persi-button');

persi_buttons.forEach((item) => {
  window.addEventListener('scroll', () => {
    if (isInViewport(item)) {
      let persi_button_tl = gsap.timeline({});
      persi_button_tl.add(gsap.to(item, {
        scale: 1, duration: 1.5, delay: 0.5, ease: Elastic.easeOut.config(1, 0.3),
      }))
    }
  })
})