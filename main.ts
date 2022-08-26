input.onButtonPressed(Button.A, function () {
    pins.digitalWritePin(DigitalPin.P0, 1)
    basic.pause(200)
    pins.digitalWritePin(DigitalPin.P0, 0)
    basic.pause(200)
    pins.digitalWritePin(DigitalPin.P0, 1)
    basic.pause(200)
})
