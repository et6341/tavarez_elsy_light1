while (true) {
    console.log("light Level: " + input.lightLevel())
    // if light level is greater than 10, set neopixels off
    if (input.lightLevel() >= 10) {
        light.setAll(color.rgb(0, 0, 0))
    } else {
        // if light level is less than 10, then set all neopixels on
        light.setAll(color.rgb(0, 0, 255))
    }
    
}
while (true) {
    console.log("light level: " + input.lightLevel())
    if (input.lightLevel() < 6) {
        light.setAll(light.rgb(0, 0, 255))
    } else if (input.lightLevel() < 13) {
        light.setAll(light.rgb(255, 255, 0))
    } else {
        light.clear()
    }
    
}
