import './assets/style/style.scss'

const svg = document.querySelector('svg')
const background = svg.querySelector('rect')
const earth = svg.querySelector('.earth')
const moon = svg.querySelector('.moon')

// canvas setup
////////////////////////////////////////////////////////////
const _width = 84.1
const _height = 118.9

const canvas_scale = 0.06
const width = fixed(cm2pix(_width) * canvas_scale, 0)
const height = fixed(cm2pix(_height) * canvas_scale, 0)

console.log('canvas size: ', _width, 'cm', _height, 'cm')
console.log('canvas pixel: ', cm2pix(_width), 'px', cm2pix(_height), 'px')
console.log('---------------------------------')
console.log('canvas scale: ', canvas_scale) // scale for better development
console.log('scaled canvas pixel: ', width, 'px', height, 'px')
console.log('---------------------------------')

svg.setAttribute('width', width)
svg.setAttribute('height', height)
background.setAttribute('width', width)
background.setAttribute('height', height)
////////////////////////////////////////////////////////////

// data configuration
////////////////////////////////////////////////////////////
const _earth_radius = 6371 // km
const _moon_radius = 1737.1 // km
const _distance = 384400 // km
const target_radius = 1 // cm
const scale = target_radius / _earth_radius

console.log('target radius: ', target_radius, 'cm')
console.log('scale: ', target_radius, '/', _earth_radius)
console.log('---------------------------------')

console.log('earth radius: ', fixed(_earth_radius * scale), 'cm')
console.log('moon radius: ', fixed(_moon_radius * scale), 'cm')
console.log('distance: ', fixed(_distance * scale), 'cm')
console.log('---------------------------------')

//  scaled
const earth_radius = fixed(cm2pix(_earth_radius * scale) * canvas_scale)
console.log('scaled earth radius pixel: ', earth_radius, 'px')

const moon_radius = fixed(cm2pix(_moon_radius * scale) * canvas_scale)
console.log('scaled moon radius pixel: ', moon_radius, 'px')

const distance = fixed(cm2pix(_distance * scale) * canvas_scale)
console.log('scaled distance pixel: ', distance, 'px')
console.log('---------------------------------')

// earth pos
const earth_pos = {
  x: 200,
  y: 160
}

const moon_pos = {
  x: earth_pos.x + distance * Math.cos((Math.PI / 2) * 0.8),
  y: earth_pos.y + distance * Math.sin((Math.PI / 2) * 0.8)
}
console.log(moon_pos)

// draw
////////////////////////////////////////////////////////////
// earth
earth.setAttribute('cx', earth_pos.x)
earth.setAttribute('cy', earth_pos.y)
earth.setAttribute('r', earth_radius)

// moon
moon.setAttribute('cx', moon_pos.x)
moon.setAttribute('cy', moon_pos.y)
moon.setAttribute('r', moon_radius)
// // earth
// earth.setAttribute('x', 100)
// earth.setAttribute('y', 100)
// earth.setAttribute('width', earth_radius * 2)
// earth.setAttribute('height', earth_radius * 2)
// earth.setAttribute(
//   'transform',
//   `translate(${-1 * earth_radius},${-1 * earth_radius})`
// )

// // moon
// moon.setAttribute('x', 300)
// moon.setAttribute('y', 300)
// moon.setAttribute('width', moon_radius * 2)
// moon.setAttribute('height', moon_radius * 2)
// moon.setAttribute(
//   'transform',
//   `translate(${-1 * moon_radius},${-1 * moon_radius})`
// )

function download() {
  const dataURL = svgDataURL(svg)
  const dl = document.createElement('a')
  dl.setAttribute('href', dataURL)
  dl.setAttribute('download', 'earth-moon.svg')
  dl.click()
  console.log('download')
}

function svgDataURL(svg) {
  var svgAsXML = new XMLSerializer().serializeToString(svg)
  return 'data:image/svg+xml,' + encodeURIComponent(svgAsXML)
}

function cm2pix(value) {
  const dpi = 300
  const ratio = 2.54 / dpi
  return fixed(value / ratio)
}

function fixed(val, n = 2) {
  return Number(parseFloat(val).toFixed(n))
}

document.addEventListener('keydown', e => {
  if (e.which === 32) download()
})
