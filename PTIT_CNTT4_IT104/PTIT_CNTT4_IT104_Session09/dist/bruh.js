class Device {
    stop() { console.log("Stop"); }
    ;
}
class Phone extends Device {
    start() { console.log("start"); }
    ;
}
const myDevice = new Phone();
myDevice.start();
myDevice.stop();
