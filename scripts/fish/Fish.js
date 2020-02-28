

const Fish = (fishObject) => {
    return `
        <div class="fish">
            <div>
                <img class="fish_image" src="${fishObject.image}" alt="">
            </div>
            <div class="fish__name">${fishObject.name}</div>
            <button class="button--open" id="fish--${fishObject.name}">Info</button>

            <dialog class="dialog--fish" id="details--${fishObject.name}">
                <div>Species: ${fishObject.species}</div>
                <div>Location: ${fishObject.location}</div>
                <div>Length: ${fishObject.length}</div>
                <div>Food: ${fishObject.food}</div>

                <button class="button--close">Close ${fishObject.name}</button>
            </dialog>
        </div>
    `
}


export default Fish