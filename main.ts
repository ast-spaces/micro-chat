input.onButtonPressed(Button.A, function () {
    radio.sendString("H")
})
radio.onReceivedString(function (receivedString) {
    basic.showString(receivedString)
})
input.onButtonPressed(Button.B, function () {
    control.reset()
})
radio.setGroup(123)
