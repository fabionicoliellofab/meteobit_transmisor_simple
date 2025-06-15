let velocidad = 0
let Humedad = 0
let Temp = 0
let Presión = 0
BME280.PowerOn()
BMP280.Address(BMP280_I2C_ADDRESS.ADDR_0x76)
radio.setGroup(1)
datalogger.setColumnTitles(
"Presion",
"Temp",
"Humedad"
)
loops.everyInterval(120000, function () {
    Presión = BME280.pressure(BME280_P.hPa)
    radio.sendString("Presión")
    radio.sendNumber(Presión)
    Temp = BME280.temperature(BME280_T.T_C)
    radio.sendString("Temp")
    radio.sendNumber(Temp)
    Humedad = BME280.humidity()
    radio.sendString("Humedad")
    radio.sendNumber(Humedad)
    velocidad = pins.analogReadPin(AnalogReadWritePin.P3)
    radio.sendString("velocidad")
    radio.sendNumber(velocidad)
    datalogger.log(
    datalogger.createCV("Presión", BME280.pressure(BME280_P.hPa)),
    datalogger.createCV("Temp", BME280.temperature(BME280_T.T_C)),
    datalogger.createCV("Humedad", BME280.humidity())
    )
})
