
import { useFish } from "./FishDataProvider.js";
import Fish from "./Fish.js"

const FishList = () => {

const contentTarget = document.querySelector(".fishList")
const fishObjectsArray = useFish()

for (const fishObject of fishObjectsArray) {
    contentTarget.innerHTML += Fish(fishObject)
}
}

export default FishList