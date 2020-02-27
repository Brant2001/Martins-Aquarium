const fishCollection = [
    {
        name: "Bart",
        species: "Axalot",
        length: "1 ft",
        food: "Some Stuff",
        location: "Places",
        image: "https://boringduckling.com/wp-content/uploads/2014/04/axolotl-mexican-walking-fish-101.jpg"
        
    },
    {
        name: "Betty",
        species: "Flowerhorn",
        length: "2 ft",
        food: "Small Stuff",
        location: "Cumberland River",
        image: "https://lh3.googleusercontent.com/proxy/dF75Uv1yY42zu_SLg40YZctDlkXb9j4LOBBwud0mWCLNSUJZg7yEieR_FTLbgNK9s0QyG7Cyy22tC0StmrV0ZKcATbUD9VoXaZ8AxESV09V6KGdB9buTUxw7iDRU-5jP"
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
        name: "Sea Demon",
        species: "Black Seadevil",
        length: "3 ft",
        food: "Nemo and Dory",
        location: "Monterey Canyon (CA)",
        image: "https://www.mindenpictures.com/cache/pcache2/90137301.jpg"
    },
    {
        name: "Big Bertha",
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
        location: "Lot's of Places",
        image: "https://discovery.sndimg.com/content/dam/images/discovery/editorial/shows/s/shark-week-/photo-galleries/hammer-head-sharks/hammerhead-shark-2.jpg.rend.hgtvcom.966.644.suffix/1559943191625.jpeg"
    }

]

export const useFish = () => {
    return fishCollection.slice()
}
