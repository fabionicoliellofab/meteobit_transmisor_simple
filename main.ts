let velocidad = 0
let humedad = 0
let temp = 0
let presion = 0
BMP280.Address(BMP280_I2C_ADDRESS.ADDR_0x76)
radio.setGroup(1)
loops.everyInterval(120000, function () {
    presion = BME280.pressure(BME280_P.hPa)
    radio.sendString("presion")
    radio.sendNumber(presion)
    temp = BME280.temperature(BME280_T.T_C)
    radio.sendString("temp")
    radio.sendNumber(temp)
    humedad = BME280.humidity()
    radio.sendString("humedad")
    radio.sendNumber(humedad)
    velocidad = pins.analogReadPin(AnalogReadWritePin.P3)
    radio.sendString("velocidad")
    radio.sendNumber(velocidad)
})
