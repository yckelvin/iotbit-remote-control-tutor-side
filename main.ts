ESP8266_IoT.MqttEvent("myhome/tutor/remote-control", ESP8266_IoT.QosList.Qos2, function (message) {
    if (message == "1-ON") {
        pins.digitalWritePin(DigitalPin.P1, 1)
    } else if (message == "2-ON") {
        pins.digitalWritePin(DigitalPin.P2, 1)
    } else if (message == "3-ON") {
        pins.digitalWritePin(DigitalPin.P3, 1)
    } else if (message == "4-ON") {
        pins.digitalWritePin(DigitalPin.P4, 1)
    } else if (message == "1-OFF") {
        pins.digitalWritePin(DigitalPin.P1, 0)
    } else if (message == "2-OFF") {
        pins.digitalWritePin(DigitalPin.P2, 0)
    } else if (message == "3-OFF") {
        pins.digitalWritePin(DigitalPin.P3, 0)
    } else if (message == "4-OFF") {
        pins.digitalWritePin(DigitalPin.P4, 0)
    }
})
basic.showNumber(0)
ESP8266_IoT.initWIFI(SerialPin.P8, SerialPin.P12, BaudRate.BaudRate115200)
ESP8266_IoT.connectWifi("ssid", "password")
let clientID = randint(0, 99999999)
basic.showNumber(1)
ESP8266_IoT.setMQTT(
ESP8266_IoT.SchemeList.TCP,
convertToText(clientID),
"test",
"test",
""
)
ESP8266_IoT.connectMQTT("192.168.0.32", 1884, false)
basic.showNumber(2)
OLED.init(128, 64)
basic.showNumber(3)
basic.pause(2000)
if (ESP8266_IoT.isMqttBrokerConnected()) {
    basic.showIcon(IconNames.Yes)
}
