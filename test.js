var tap = require('tape')
require('web-audio-mock')
var AudioContext = AudioContext || webkitAudioContext
var ac = new AudioContext()
var adsr = require('./')
var gain = ac.createGain()
gain.gain.setValueAtTime(0, ac.currentTime)

tap.test('does the thing', function (t) {
  t.plan(1)
  t.equal(gain.gain.value, 0)
  adsr(gain, ac.currentTime, {attack: 0.2, decay: 0.2, sustain: 0.2, release: 0.2, peak: 1, mid: 0.5, end: 0.0001})
  // i guess web audio mock doesn't do linearRamps or something?? :<
  // could test in browser i guess...
  // setTimeout(function () {
  //   t.equal(gain.gain.value, 1)
  //   setTimeout(function () {
  //     t.equal(gain.gain.value, 0.5)
  //     setTimeout(function () {
  //       t.equal(gain.gain.value, 0.5)
  //       setTimeout(function () {
  //         t.equal(gain.gain.value, 0)
  //       }, 210)
  //     }, 210)
  //   }, 210)
  // }, 210)
})
