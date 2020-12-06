import './style.scss'

const svg = document.querySelector('svg')
const background = svg.querySelector('rect')
const earth = svg.querySelector('.earth')
const moon = svg.querySelector('.moon')

const earth_radius = 6371 // km
const moon_radius = 1737.1 // km
const distance = 384400 // km
const target_radius = 1 // cm
const scale = target_radius / earth_radius
console.log('scale: ', earth_radius, ':', target_radius)

const canvas_scale = 0.7
const height = Math.round(1189 * canvas_scale)
const width = Math.round(841 * canvas_scale)
console.log('size: ', width, height)

// set canvas size
svg.setAttribute('width', width)
svg.setAttribute('height', height)
background.setAttribute('width', width)
background.setAttribute('height', height)

// earth
const earth_pos = {
  x: 0,
  y: 0
}

// draw earth
earth.setAttribute('x', 100)
earth.setAttribute('y', 100)
earth.setAttribute('width', 100)
earth.setAttribute('height', 100)
earth.setAttribute('transform', `translate(${-50},${-50})`)

// draw moon
moon.setAttribute('x', 100)
moon.setAttribute('y', 100)
moon.setAttribute('width', 100)
moon.setAttribute('height', 100)
moon.setAttribute('transform', `translate(${-50},${-50})`)

function download() {
  const dataURL = svgDataURL(svg)
  const dl = document.createElement('a')
  dl.setAttribute('href', dataURL)
  dl.setAttribute('download', 'planet-earth.svg')
  dl.click()
  console.log('download')
}

function svgDataURL(svg) {
  var svgAsXML = new XMLSerializer().serializeToString(svg)
  return 'data:image/svg+xml,' + encodeURIComponent(svgAsXML)
}

document.addEventListener('keydown', e => {
  if (e.which === 32) download()
})
