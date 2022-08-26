input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 20; index++) {
        pins.digitalWritePin(DigitalPin.P13, 1)
        basic.pause(500)
        pins.digitalWritePin(DigitalPin.P13, 0)
        basic.pause(200)
    }
})
input.onButtonPressed(Button.B, function () {
    for (let index = 0; index < 20; index++) {
        pins.digitalWritePin(DigitalPin.P13, 1)
        basic.pause(1000)
        pins.digitalWritePin(DigitalPin.P13, 0)
        basic.pause(100)
        music.playMelody("- B A A G - E E ", 120)
        music.playTone(262, music.beat(BeatFraction.Whole))
        pins.digitalWritePin(DigitalPin.P15, 1)
        basic.pause(100)
        pins.digitalWritePin(DigitalPin.P15, 0)
        basic.pause(50)
    }
})
