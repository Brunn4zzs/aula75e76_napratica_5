let number = 0
input.onGesture(Gesture.Shake, function () {
    basic.clearScreen()
    number = randint(0, 10)
})
