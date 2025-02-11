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
input.onButtonPressed(Button.A, function () {
    ESP8266_IoT.publishMqttMessage("1-ON", "myhome/tutor/remote-control", ESP8266_IoT.QosList.Qos2)
})
input.onButtonPressed(Button.B, function () {
    ESP8266_IoT.publishMqttMessage("1-OFF", "myhome/tutor/remote-control", ESP8266_IoT.QosList.Qos2)
})
pins.digitalWritePin(DigitalPin.P1, 0)
pins.digitalWritePin(DigitalPin.P2, 0)
pins.digitalWritePin(DigitalPin.P3, 0)
pins.digitalWritePin(DigitalPin.P4, 0)
basic.showNumber(0)
ESP8266_IoT.initWIFI(SerialPin.P8, SerialPin.P12, BaudRate.BaudRate115200)
ESP8266_IoT.connectWifi("RM309", "RM309-y5")
let clientID = randint(0, 99999999)
basic.showNumber(1)
ESP8266_IoT.setMQTT(
ESP8266_IoT.SchemeList.TCP,
convertToText(clientID),
"test",
"test",
""
)
ESP8266_IoT.connectMQTT("172.16.82.251", 1884, false)
basic.showNumber(2)
OLED.init(128, 64)
basic.showNumber(3)
basic.pause(2000)
if (ESP8266_IoT.isMqttBrokerConnected()) {
    basic.showIcon(IconNames.Yes)
}
basic.pause(5000)
led.enable(false)
