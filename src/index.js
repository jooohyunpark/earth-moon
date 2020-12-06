import './style.scss'

const svg = document.querySelector('svg')
const background = svg.querySelector('rect')
const earth = svg.querySelector('.earth')
const moon = svg.querySelector('.moon')

const height = 640
const width = 640
console.log('size: ', width, height)

// set size
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
