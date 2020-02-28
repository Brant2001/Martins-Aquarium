const Location = (locationObject) => {
    return `
    <div class="locationList">
        <div class="locationItem">
            <img class="locationItem__image" src="${locationObject.image}" alt="">
            <section class="locationItem__name">${locationObject.location}</section>
        </div>
    </div>
    `
} 

export default Location