import iot1 from "../../assets/iot-1.png";
import iot2 from "../../assets/iot-2.png";
import iot3 from "../../assets/iot-3.png";


const iotThermostat = {
  slug: "iot-thermostat",
  title: "IoT Thermostat with Live Weather Integration",
  cardDesc: "A two-sided Node-RED system simulating real IoT architecture: a physical device and a cloud backend that never connect directly, only through MQTT.",
  cardImage: iot1,
  tags: ["Node-RED", "MQTT", "Docker", "Railway", "OpenWeatherMap API"],
  desc: "An end-to-end IoT system in Node-RED simulating a smart thermostat, combining a local device with a cloud-hosted server, connected entirely through MQTT.",
  longDesc: [
    "The device side runs locally on a Sense HAT simulator, with a live setpoint control and an LED display. The server side runs on Railway, polling live Glasgow weather from OpenWeatherMap every five minutes and driving a dashboard with gauges and charts. The two sides never connect directly, all communication passes through MQTT.",
    "The server was later migrated from running locally to Railway with no changes needed on the device side, since both were built to communicate purely over MQTT. I chose Railway over Google Cloud mainly for cost.",
  ],
  usabilityFinding: {
    title: "Problems worked through",
    body: [
      "An OpenWeatherMap key returned \"invalid\" for about an hour after creation, an activation delay, not a config issue.",
      "The cloud editor was briefly exposed with no login. Fixed by SSHing into the Docker container and adding authentication directly to Node-RED's settings file.",
      "Context storage was split deliberately: setpoint data at flow level, weather data at global level, based on what each part actually needed.",
    ],
  },
  images: [iot1, iot2, iot3],
  features: [
    "Device and server communicate only through MQTT",
    "Sense HAT simulator with live setpoint control and LED display",
    "Live Glasgow weather from OpenWeatherMap, updated every 5 minutes",
    "Dashboard with live gauges and charts, plus a separate status page",
    "Deployed independently on Railway with persistent storage",
  ],
  tools: ["Node-RED", "MQTT", "Docker", "Railway", "OpenWeatherMap API", "JavaScript", "bcrypt"],
  liveUrl: "https://node-red-production-189c.up.railway.app/ui",
  secondaryUrl: "https://node-red-production-189c.up.railway.app/status",
  testNote: false,
};

export default iotThermostat;