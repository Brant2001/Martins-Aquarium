const locationCollection = [
    {
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/ParqueEcologico.JPG/1200px-ParqueEcologico.JPG",
        location: "Xochimilco, Mexixo City",
    },
    {
        image: "https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/nashville-skyline-john-seigenthaler-pedestrian-bridge-cumberland-river-cityscape-art-reid-callaway.jpg",
        location: "Cumberland River",
    },
    {
        image: "https://watersource.awa.asn.au/wp-content/uploads/2019/01/Global-water-crisis-being-tackled-by-this-leading-Australian-university_resized.jpg",
        location: "Australia",
    },
    {
        image: "https://i0.wp.com/thescuttlefish.com/wp-content/uploads/2015/10/mbari.jpg?resize=500%2C367",
        location: "Monterey Canyon (CA)",
    },
    {
        image: "https://www.enchantedlearning.com/hgifs/Humpbackdist.GIF",
        location: "Anywhere that's not freezing",
    },
    {
        image: "https://3w9yz8ifp462cet4q2j4fjen-wpengine.netdna-ssl.com/images/hammerhead-shark-habitat-map-1.jpg",
        location: "Warmer Coastal Areas",
    },
    {
        image: "https://atlasoficeandfireblog.files.wordpress.com/2017/06/essos-geographic-with-names.png",
        location: "The Narrow and Summer Seas",
    },
    {
        image: "https://i.pinimg.com/originals/d0/81/0e/d0810e2a58353dc5e48c3e6d9deef724.jpg",
        location: "Darkest Place In The Deepest Swamp",
    },
    {
        image: "https://www.researchgate.net/profile/Gary_Williams7/publication/241695010/figure/fig17/AS:614355313889291@1523485129865/Map-of-the-North-American-Pacific-coast-showing-collecting-localities-for-Cryptophyton.png",
        location: "Off The Shores Of California and Mexico",
    },
    
]


export const useLocation = () => {
    return locationCollection.slice();
}