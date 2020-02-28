import Location from "./Location.js"
import { useLocation } from "./LocationDataProvider.js";


const LocationList = () => {
    const contentTarget = document.querySelector(".locationList")
    const locationObjectsArray = useLocation()

    for (const locationObject of locationObjectsArray) {
        contentTarget.innerHTML += Location(locationObject)
    }
}

export default LocationList