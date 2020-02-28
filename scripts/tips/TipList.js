import Tip from "./Tip.js"
import { useTip } from "./TipDataProvider.js";


const TipList = () => {
    const contentTarget = document.querySelector(".tipList")
    const tipObjectsArray = useTip()

    for (const tipObject of tipObjectsArray) {
        contentTarget.innerHTML += Tip(tipObject)
    }
}

export default TipList