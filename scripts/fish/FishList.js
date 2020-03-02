
import { mostHolyFish, soldierFish, nonHolyFish } from "./FishDataProvider.js";
import Fish from "./Fish.js"

const FishList = () => {

const contentTarget = document.querySelector(".fishList")
let fishObjectsArray = mostHolyFish()

for (const fishObject of fishObjectsArray) {
    contentTarget.innerHTML += Fish(fishObject)
}

fishObjectsArray = soldierFish()

for (const fishObject of fishObjectsArray) {
    contentTarget.innerHTML += Fish(fishObject)
}

fishObjectsArray = nonHolyFish()

for (const fishObject of fishObjectsArray) {
    contentTarget.innerHTML += Fish(fishObject)
}
}

export default FishList