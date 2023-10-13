function zeigeRPS () {
    if (rps == 0) {
        basic.showLeds(`
            . . # . .
            . # # # .
            . # # # .
            . . # . .
            . . . . .
            `)
    } else if (rps == 1) {
        basic.showLeds(`
            . # # # .
            . # # # .
            . # # # .
            . # # # .
            . # # # .
            `)
    } else if (rps == 2) {
        basic.showLeds(`
            # # . . #
            # # . # .
            . . # . .
            # # . # .
            # # . . #
            `)
    }
}
input.onButtonPressed(Button.A, function () {
	
})
input.onButtonPressed(Button.AB, function () {
	
})
input.onButtonPressed(Button.B, function () {
	
})
let rps = 0
let rps_funk = 0
radio.setGroup(165)
rps = 0
let gesendet = false
basic.forever(function () {
	
})
