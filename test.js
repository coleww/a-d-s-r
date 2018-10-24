var tap = require('tape')
require('web-audio-mock')
var ac = new AudioContext()
var adsr = require('./')
var gain = ac.createGain()

tap.test('throws errors if passed bad args', function (t) {
  t.plan(4)
  t.throws(
    adsr.bind(null, undefined, ac.currentTime, {attack: 0.2, decay: 0.2, sustain: 0.2, release: 0.2, peak: 1, mid: 0.5, end: 0.0001}),
    'you must pass a gain node to me, got undefined'
  )

  t.throws(
    adsr.bind(null, gain, 'thirty', {attack: 0.2, decay: 0.2, sustain: 0.2, release: 0.2, peak: 1, mid: 0.5, end: 0.0001}),
    'you must pass "when" to me, got thirty'
  )

  t.throws(
    adsr.bind(null, gain, undefined, {attack: 'foo', decay: 0.2, sustain: 0.2, release: 0.2, peak: 1, mid: 0.5, end: 0.0001}),
    'you must tell me the attack, got foo'
  )

  t.throws(
    adsr.bind(null, gain, undefined, {attack: 0, decay: undefined, sustain: 0.2, release: 0.2, peak: 1, mid: 0.5, end: 0.0001}),
    'you must tell me the decay, got undefined'
  )
})
