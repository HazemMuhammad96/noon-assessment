import { Post, User } from "@features/post";

const user1: User = {
    id: 1,
    name: "tracymcgrady",
    profilePicture:
        "https://wac-cdn.atlassian.com/dam/jcr:ba03a215-2f45-40f5-8540-b2015223c918/Max-R_Headshot%20(1).jpg?cdnVersion=1373",
};

const user2: User = {
    id: 2,
    name: "john_doe",
    profilePicture:
        "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D",
};

const user3: User = {
    id: 3,
    name: "jane_doe",
    profilePicture:
        "https://media.licdn.com/dms/image/C4E03AQEDWldIzAaQXw/profile-displayphoto-shrink_400_400/0/1648990807111?e=2147483647&v=beta&t=npwmQd8BCD0YjIS1PNvUE6wpr1tgs0VaijzFQtSpXns",
};

const mockPosts: Post[] = [
    {
        id: 1,
        user: user1,
        title: "Leaf iPhone Case Hard Plastic",
        body: "This is a hard plastic case for the iPhone 11 Pro Max. It is a leaf design and is in great condition.\n#iphone #cases #mobile_phones",
        image: "https://images.unsplash.com/photo-1535157412991-2ef801c1748b?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        imageAlt: "iPhone case",
        commentCount: 12,
        description: "AED 230",
        isLiked: false,
        likes: 111,
    },
    {
        id: 2,
        user: user2,
        title: "Tech Gadgets Unveiled at CES 2023",
        body: "A glimpse into the latest tech unveiled at CES 2023. Exciting innovations and futuristic gadgets! 🚀 #tech #gadgets #innovation",
        image: "https://www.cnet.com/a/img/resize/9a9725ea098b4e422a8380aa8b4e9420f3898a42/hub/2023/01/09/25f9ff3d-6abb-432f-b1e8-600b35b3a256/ces-2023-3381.jpg?auto=webp&fit=crop&height=675&width=1200",
        imageAlt: "CES 2023 Tech Gadgets",
        commentCount: 32,
        description: "Cutting-edge technology",
        isLiked: false,
        likes: 245,
    },
    {
        id: 3,
        user: user3,
        title: "Hiking Trails in the Alps",
        body: "Exploring breathtaking hiking trails in the Alps. The stunning landscapes and fresh mountain air are invigorating! ⛰️ #hiking #nature #alps",
        image: "https://images.unsplash.com/photo-1463693396721-8ca0cfa2b3b5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        imageAlt: "Hiking in the Alps",
        commentCount: 18,
        description: "Nature's beauty",
        isLiked: false,
        likes: 132,
    },
    {
        id: 4,
        user: user1,
        title: "Delicious Homemade Pizza",
        body: "Sharing my favorite homemade pizza recipe! A crispy crust with a blend of flavorful toppings. 🍕 #cooking #recipes #pizza",
        image: "https://images.unsplash.com/photo-1594007654729-407eedc4be65?q=80&w=1928&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        imageAlt: "Homemade Pizza",
        commentCount: 40,
        description: "Yummy pizza delight",
        isLiked: false,
        likes: 312,
    },
    {
        id: 5,
        user: user2,
        title: "Mighty Thor: God of Thunder's Heroic Saga",
        body: "Delve into the heroic saga of Thor, the God of Thunder. Explore his journey from Asgard to Earth, his epic battles, his mighty hammer Mjolnir, and his role as a key Avenger in the Marvel Cinematic Universe! ⚡🔨 #Thor #GodofThunder #Avengers",
        image: "https://cdn.kobo.com/book-images/97e39cbc-ba87-4d2c-9c2e-722d11ef183b/1200/1200/False/thor-the-dark-world-junior-novel.jpg",
        imageAlt: "Thor: God of Thunder",
        commentCount: 55,
        description: "As mighty as thunder",
        isLiked: false,
        likes: 500,
    },
    {
        id: 6,
        user: user2,
        title: "DIY: Home Garden Ideas",
        body: "Exploring creative home garden setups and DIY planting techniques. A guide to transforming spaces into green paradises! 🌱 #gardening #DIY #home",
        image: "https://plus.unsplash.com/premium_photo-1683133966718-f2c2d64a745b?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        imageAlt: "Home Garden Ideas",
        commentCount: 30,
        description: "Green spaces at home",
        isLiked: false,
        likes: 275,
    },
    {
        id: 7,
        user: user1,
        title: "The Wonders of Space Exploration",
        body: "Diving into the incredible achievements and mysteries of space exploration. Witness the marvels beyond our planet! 🚀 #space #science #exploration",
        image: "https://images.unsplash.com/photo-1446776709462-d6b525c57bd3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        imageAlt: "Space Exploration",
        commentCount: 20,
        description: "Unraveling the cosmos",
        isLiked: false,
        likes: 178,
    },
    {
        id: 8,
        user: user3,
        title: "Travel Guide: Exploring Tokyo, Japan",
        body: "A comprehensive guide to experiencing the vibrant culture and attractions of Tokyo. Discover must-visit places and local delicacies! 🏯 #travel #tokyo #japan",
        image: "https://images.unsplash.com/photo-1526481280693-3bfa7568e0f3?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        imageAlt: "Tokyo Travel Guide",
        commentCount: 65,
        description: "City of contrasts",
        isLiked: false,
        likes: 512,
    },
    {
        id: 9,
        user: user2,
        title: "Exploring Jazz Classics",
        body: "A journey through the timeless melodies of jazz classics. Dive into the history and magic of this influential music genre! 🎵 #music #jazz #classics",
        image: "https://images.unsplash.com/photo-1525093485273-34834413e1ba?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        imageAlt: "Jazz Music",
        commentCount: 28,
        description: "Soulful rhythms",
        isLiked: false,
        likes: 220,
    },
    {
        id: 10,
        user: user3,
        title: "Managing Personal Budgets",
        body: "Useful tips and strategies for managing personal finances and budgeting effectively. A step towards financial wellness! 💰 #finance #budgeting #money",
        image: "https://images.unsplash.com/photo-1554224154-26032ffc0d07?q=80&w=2026&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        imageAlt: "Personal Finance",
        commentCount: 48,
        description: "Financial stability",
        isLiked: false,
        likes: 340,
    },
    {
        id: 11,
        user: user1,
        title: "Nature Photography: Capturing Wildlife",
        body: "Exploring the beauty of wildlife through the lens. A showcase of stunning photography amidst natural habitats! 📷 #photography #wildlife #nature",
        image: "https://plus.unsplash.com/premium_photo-1663127579036-03ddc09a1b28?q=80&w=1922&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        imageAlt: "Wildlife Photography",
        commentCount: 60,
        description: "Nature's wonders",
        isLiked: false,
        likes: 480,
    },
    {
        id: 12,
        user: user2,
        title: "Motivation: Building Positive Habits",
        body: "Strategies and insights into building positive habits for personal growth and motivation. Elevate your life with productive routines! 🌟 #motivation #selfimprovement #habits",
        image: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max",
        imageAlt: "Positive Habits",
        commentCount: 38,
        description: "Personal development",
        isLiked: false,
        likes: 280,
    },
    {
        id: 13,
        user: user3,
        title: "The Future of Wearable Devices",
        body: "Exploring the evolving landscape of wearable technology and its impact on our daily lives. Innovations that redefine convenience! ⌚ #samsung #technology #wearables #innovation",
        image: "https://images.unsplash.com/photo-1680113729613-7635a0b8be09?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        imageAlt: "Wearable Devices",
        commentCount: 25,
        description: "Tech on the move",
        isLiked: false,
        likes: 210,
    },
    {
        id: 14,
        user: user2,
        title: "Marvel vs. DC: Exploring the Epic Crossover Potential",
        body: "An exploration of the potential for epic crossovers between Marvel and DC Comics. Imagining dream matchups, team-ups, and the ultimate collision of iconic superheroes! ⚔️ #Marvel #DCComics #Crossover",
        image: "https://blogs.libraries.indiana.edu/wp-content/uploads/2016/04/dc-vs-marvel-why-marvel-will-win-the-movie-wars-313789.jpg",
        imageAlt: "Marvel vs. DC",
        commentCount: 70,
        description: "Epic superhero showdowns",
        isLiked: false,
        likes: 620,
    },
    {
        id: 15,
        user: user2,
        title: "Unraveling Quantum Physics",
        body: "A glimpse into the fascinating world of quantum physics and its mind-bending principles. Exploring the mysteries of the universe! 🔬 #science #quantumphysics #universe",
        image: "https://images.unsplash.com/photo-1607988795691-3d0147b43231?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        imageAlt: "Quantum Physics",
        commentCount: 18,
        description: "Quantum mysteries",
        isLiked: false,
        likes: 150,
    },
];

export default mockPosts;
