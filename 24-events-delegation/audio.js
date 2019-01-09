var context = new AudioContext()
var o = null
var g = null

function example3(freq, type, x){
  o = context.createOscillator()
  g = context.createGain()
  o.connect(g)
  o.type = type
  o.frequency.value = freq
  g.connect(context.destination)
  o.start(0)

  g.gain.exponentialRampToValueAtTime(
    0.00001, context.currentTime + x
  )
}

function playNote(freq){
  example3(freq, 'sine', 2)
}

const f = 349.2
const bFlat = 466.2
const fHigh = 698.5
const eFlatHigh = 622.3
const gHigh = 784.0

const wun = [f, bFlat, fHigh]
const too = [bFlat, fHigh, eFlatHigh]
const tree = [gHigh, eFlatHigh, bFlat, f]

function arpeggio(arr) {
  arr.forEach((freq, index) => setTimeout(() => playNote(freq), index * 100))
}

function addSound() {
  arpeggio(too)
}

function removeSound() {
  arpeggio(tree)
}

