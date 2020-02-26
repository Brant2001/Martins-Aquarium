const fishCollection = [
    {
        name: "Bart",
        species: "Ling Salmon",
        length: "3 ft",
        food: "Some Stuff",
        location: "Alaska"
    },
    {
        name: "Betty",
        species: "Flowerhorn Goldfish",
        length: "2 ft",
        food: "Squid",
        location: "Cumberland River"
    },
    {
        name: "Dory",
        species: "Blue Tang",
        length: "4 in",
        food: "Clownfish",
        location: "Australia"
    },
    {
        name: "Nemo",
        species: "Clownfish",
        length: "2 in",
        food: "Sea Stuff",
        location: "Australia"
    },
    {
        name: "Sea Demon",
        species: "Black Seadevil",
        length: "3 ft",
        food: "Nemo and Dory",
        location: "Monterey Canyon (CA)"
    },
    {
        name: "Big Bertha",
        species: "Humpback Whale",
        length: "50 ft",
        food: "Krill",
        location: "Anywhere that's not freezing"
    },
    {
        name: "Anchor",
        species: "Hammerhead",
        length: "20 ft",
        food: "Nemo and Dory",
        location: "Lot's of Places"
    }

]

export const useFish = () => {
    return fishCollection.slice()
}