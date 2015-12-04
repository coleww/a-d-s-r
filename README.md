a-d-s-r
----------------

given a gainNode, does the ADSR dance

[![NPM](https://nodei.co/npm/a-d-s-r.png)](https://nodei.co/npm/a-d-s-r/)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)
[![Build Status](https://secure.travis-ci.org/coleww/a-d-s-r.png)](http://travis-ci.org/coleww/a-d-s-r)

### API

`adsr(gainNode, when/time/ac.currentTime(probably), adsrObject:{attack, decay, sustain, release, peak, mid})`

### EXAMPLE

```
var AudioContext = AudioContext || webkitAudioContext
var ac = new AudioContext()
var gain = ac.createGain()

// other stuff, make an oscillator, idk, do u

adsr(gain, ac.currentTime, {attack: 0.25, decay: 0.1, sustain: 0.2, release: 0.05, peak: 0.7, mid: 0.5})
```

### WOW, COOL!

```
starting at the passed time (2nd arg) 
the adsr function will take the gain of the gain node 
from whatever it is at to the peak volume in attack time,
then down to the mid in decay time,
then chill at the mid for sustain time,
then go down to 0 after release time.
```

