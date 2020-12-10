while True:
    print("light Level: " + input.light_level())
    #if light level is greater than 10, set neopixels off
    if input.light_level() >= 10 :
        light.set_all(color.rgb(0, 0, 0))
    #if light level is less than 10, then set all neopixels on
    else:
        light.set_all(color.rgb(0, 0, 255))
while True: 
    print("light level: " + input.light_level())
    if input.light_level() <6:
        light.set_all(light.rgb(0, 0, 255))
    elif input.light_level() <13:
        light.set_all(light.rgb(255, 255, 0))
    else:
        light.clear()
