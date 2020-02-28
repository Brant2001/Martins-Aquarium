const fishCollection = [
    {
        name: "Bart",
        species: "Axalot",
        length: "1 ft",
        food: "Some Stuff",
        location: "Xochimilco, Mexixo City",
        image: "https://boringduckling.com/wp-content/uploads/2014/04/axolotl-mexican-walking-fish-101.jpg"

    },
    {
        name: "Betty",
        species: "Flowerhorn",
        length: "2 ft",
        food: "Small Stuff",
        location: "Cumberland River",
        image: "https://5.imimg.com/data5/OE/NB/FK/SELLER-4075233/flower-horn-fish-500x500.jpg"
    },
    {
        name: "Dory",
        species: "Blue Tang",
        length: "4 in",
        food: "Clownfish",
        location: "Australia",
        image: "https://cdn.mos.cms.futurecdn.net/BgZFhT7piMqXpyzfWrdKyP-320-80.jpg"
    },
    {
        name: "Nemo",
        species: "Clownfish",
        length: "2 in",
        food: "Sea Stuff",
        location: "Australia",
        image: "https://floridapets.com/WebRoot/Store6/Shops/047c0125-dd4b-4d34-97de-30717de1adee/5BFC/132D/7548/AD52/2AE3/0A48/331F/297B/Ocellaris-clown-seg.jpg"
    },
    {
        name: "SeaDemon",
        species: "Black Seadevil",
        length: "3 ft",
        food: "Nemo and Dory",
        location: "Monterey Canyon (CA)",
        image: "https://www.mindenpictures.com/cache/pcache2/90137301.jpg"
    },
    {
        name: "BigBertha",
        species: "Humpback Whale",
        length: "50 ft",
        food: "Krill",
        location: "Anywhere that's not freezing",
        image: "https://uk.whales.org/wp-content/uploads/sites/6/2018/06/humpback-whale-vanessa-mignon.jpg"
    },
    {
        name: "Anchor",
        species: "Hammerhead",
        length: "20 ft",
        food: "Nemo and Dory",
        location: "Warmer Coastal Areas",
        image: "https://discovery.sndimg.com/content/dam/images/discovery/editorial/shows/s/shark-week-/photo-galleries/hammer-head-sharks/hammerhead-shark-2.jpg.rend.hgtvcom.966.644.suffix/1559943191625.jpeg"
    },
    {
        name: "Daenerys",
        species: "White Dragon King Crown Beta",
        length: "2 in",
        food: "Beta Fish",
        location: "The Narrow and Summer Seas",
        image: "https://i.pinimg.com/originals/a0/b1/f0/a0b1f029879dbd1a405ef3261a907436.jpg"
    },
    {
        name: "Gryskod",
        species: "Catfish Mutant",
        length: "9 ft",
        food: "Humans",
        location: "Darkest Place In The Deepest Swamp",
        image: "https://www.seekpng.com/png/detail/216-2167854_710px-mirelurk-710768-mirelurk-queen-fan-art-fallout.png"
    },
    {
        name: "Gary",
        species: "Giant Sea Bass",
        length: "4 ft",
        food: "Smaller Fish",
        location: "Off The Shores Of California and Mexico",
        image: "https://www.montereybayaquarium.org/-/m/images/animal-guide/fishes/giant-sea-bass-largest.jpg?bc=white&h=1600&mh=916&mw=1222&w=2128&usecustomfunctions=1&cropx=147&cropy=0"
    },

]

export const useFish = () => {
    return fishCollection.slice()
}
