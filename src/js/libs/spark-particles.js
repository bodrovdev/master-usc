import Particles from 'spark-particles'

const canvas = document.getElementById('particles');
const canvas2 = document.getElementById('particles2');

const settings = {
  debug: false, // boolean
  resize: true, // boolean
  particles: {
    amount: 250, // number
    moveDirection: 'random', // 'random' | 'top'  | 'right'  | 'bottom'  | 'left'
    distanceToLink: 150, // number
    linkedParticles: true, // boolean
    maxVelocity: 0.8, // number
    maxRadius: 4, // number
    color: '#2F7F89',
  },
  renderer: {
    transparentBackground: false, // boolean
    backgroundColor: '#1d707a', // color
    // linearGradient: {
    //   x1: 0, // number
    //   y1: 0, // number
    //   x2: 1, // number
    //   y2: 1, // number
    //   color1: '#327fc2', // color
    //   color2: '#014987', // color
    // },
    width: parent.innerWidth, // number
    height: parent.innerHeight, // number
  },
}

new Particles(canvas).init(settings).start();
new Particles(canvas2).init(settings).start();