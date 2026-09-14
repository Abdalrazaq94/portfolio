import blockchainHealthcareDapp from "./projects/blockchainHealthcareDapp";
import womennetic from "./projects/womennetic";
import fitnessTracker from "./projects/fitnessTracker";
import coronaTracker from "./projects/coronaTracker";
import sensationalLife from "./projects/sensationalLife";
import gcuIndoorMap from "./projects/gcuIndoorMap";
import laptopLoop from "./projects/laptopLoop";
import iotThermostat from "./projects/iotThermostat";
import devopsPipeline from "./projects/devopsPipeline";

const allProjects = [
  blockchainHealthcareDapp,
  womennetic,
  fitnessTracker,
  coronaTracker,
  sensationalLife,
  gcuIndoorMap,
  laptopLoop,
  iotThermostat,
  devopsPipeline,
];

const projectsData = {};
allProjects.forEach(function (p) {
  projectsData[p.slug] = p;
});

export default projectsData;
export { allProjects };