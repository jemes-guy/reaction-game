let icon = 0
basic.forever(function () {
    basic.showString("Hold A+B to Play 30 rounds")
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    if (input.buttonIsPressed(Button.AB)) {
        basic.clearScreen()
        control.waitMicros(1000000)
        for (let index = 0; index < 30; index++) {
            icon = randint(1, 2)
            if (icon == 1) {
                basic.showLeds(`
                    . . # . .
                    . # . # .
                    . # # # .
                    . # . # .
                    . # . # .
                    `)
            } else {
                basic.showLeds(`
                    . # # . .
                    . # . # .
                    . # # . .
                    . # . # .
                    . # # . .
                    `)
            }
            control.waitMicros(500000)
            if (icon == 1) {
                if (input.buttonIsPressed(Button.A)) {
                    basic.showLeds(`
                        . . . . .
                        . . . . #
                        . . . # .
                        # . # . .
                        . # . . .
                        `)
                    control.waitMicros(333333)
                    for (let index = 0; index < 2; index++) {
                        basic.clearScreen()
                        control.waitMicros(333333)
                        basic.showLeds(`
                            . . . . .
                            . . . . #
                            . . . # .
                            # . # . .
                            . # . . .
                            `)
                        control.waitMicros(333333)
                    }
                } else {
                    basic.showLeds(`
                        # . . . #
                        . # . # .
                        . . # . .
                        . # . # .
                        # . . . #
                        `)
                    control.waitMicros(333333)
                    for (let index = 0; index < 2; index++) {
                        basic.clearScreen()
                        control.waitMicros(333333)
                        basic.showLeds(`
                            # . . . #
                            . # . # .
                            . . # . .
                            . # . # .
                            # . . . #
                            `)
                        control.waitMicros(333333)
                    }
                }
            } else {
                if (input.buttonIsPressed(Button.B)) {
                    basic.showLeds(`
                        . . . . .
                        . . . . #
                        . . . # .
                        # . # . .
                        . # . . .
                        `)
                    control.waitMicros(333333)
                    for (let index = 0; index < 2; index++) {
                        basic.clearScreen()
                        control.waitMicros(333333)
                        basic.showLeds(`
                            . . . . .
                            . . . . #
                            . . . # .
                            # . # . .
                            . # . . .
                            `)
                        control.waitMicros(333333)
                    }
                } else {
                    basic.showLeds(`
                        # . . . #
                        . # . # .
                        . . # . .
                        . # . # .
                        # . . . #
                        `)
                    control.waitMicros(333333)
                    for (let index = 0; index < 2; index++) {
                        basic.clearScreen()
                        control.waitMicros(333333)
                        basic.showLeds(`
                            # . . . #
                            . # . # .
                            . . # . .
                            . # . # .
                            # . . . #
                            `)
                        control.waitMicros(333333)
                    }
                }
            }
            basic.clearScreen()
            control.waitMicros(1000000)
        }
    }
})
