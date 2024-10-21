icon = randint(1, 2)
if icon == 1:
    basic.show_leds("""
        . . . . .
        . . . . #
        . . . # .
        # . # . .
        . # . . .
        """)
else:
    basic.show_leds("""
        # . . . #
        . # . # .
        . . # . .
        . # # # .
        # . . . #
        """)
control.wait_micros(1000000)
if True:
    pass
else:
    pass