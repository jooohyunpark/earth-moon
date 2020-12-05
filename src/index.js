import './style.scss'

const svg = document.querySelector('svg')
const background = svg.querySelector('rect')

const height = 640
const width = 640
console.log('size: ', width, height)

// svg
svg.setAttribute('width', width)
svg.setAttribute('height', height)

// background
background.setAttribute('width', width)
background.setAttribute('height', height)

// // earth
// earth.setAttribute('cx', coordinate.x)
// earth.setAttribute('cy', coordinate.y)
// earth.setAttribute('r', 2)

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
