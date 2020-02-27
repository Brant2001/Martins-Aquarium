
import { useFish } from "./fish/FishDataProvider.js";
import Fish from "./fish/Fish.js"

const contentTarget = document.querySelector(".fishList")

const FishList = () => {

    const fishObjectsArray = useFish()

    for (const fishObject of fishObjectsArray) {
        const fishHTMLRepresentation = Fish(fishObject)
        
        contentTarget.innerHTML += fishHTMLRepresentation 
    }
    
  
}

export default FishList