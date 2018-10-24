module.exports = function (gainNode, when, adsr) {
  if (!gainNode) throw `you must pass a gain node to me, got ${gainNode}`
  if (typeof when !== 'number') throw `you must pass "when" to me, got ${when}`
  ;['peak', 'mid', 'end', 'attack', 'sustain', 'release', 'decay'].forEach(function (attr) {
    if (typeof adsr[attr] !== 'number') throw `you must tell me the ${attr}, got ${adsr[attr]}`
  })
  
  gainNode.gain.exponentialRampToValueAtTime(adsr.peak, when + adsr.attack)
  gainNode.gain.exponentialRampToValueAtTime(adsr.mid, when + adsr.attack + adsr.decay)
  gainNode.gain.setValueAtTime(adsr.mid, when + adsr.sustain + adsr.attack + adsr.decay)
  gainNode.gain.exponentialRampToValueAtTime(adsr.end, when + adsr.sustain + adsr.attack + adsr.decay + adsr.release)
}
