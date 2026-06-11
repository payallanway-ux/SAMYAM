export interface TeertthaItineraryItem {
  day: number;
  points: string[];
}

export interface TeerthaDarshanCategory {
  title: string;
  items: string[];
}

export interface TeerthaDetail {
  slug: string;
  name: string;
  tagline: string;
  region: string;
  duration: string;
  date: string;
  desc: string;
  img: string;
  triplePrice: string;
  doublePrice: string;
  slogan: string;
  staysHeading: string;
  staysDesc: string;
  itinerary: TeertthaItineraryItem[];
  darshans: TeerthaDarshanCategory[];
  inclusions: string[];
  highlights: string[];
}

export const teerthaDetailsDb: Record<string, TeerthaDetail> = {
  kashi: {
    slug: "kashi",
    name: "Kashi (Varanasi)",
    tagline: "City of Liberation",
    region: "North",
    duration: "5 Days / 4 Nights",
    date: "Multiple Departures Available",
    desc: "Kashi is the oldest living city in the world, a living field of divine charge along the Ganga. Here, liberation is not a concept but the very air you breathe. Every ghat, every temple, every alley hums with the frequency of Shiva's eternal presence. A pilgrimage to Kashi is a pilgrimage to the very source of spiritual civilization.",
    img: "https://samyam.co/images/kashi.jpg",
    triplePrice: "Rs. 32,000 per Head",
    doublePrice: "Rs. 36,000 per Head",
    slogan: "MOKSHA | DEVOTION | GANGA | SHIVA",
    staysHeading: "Heritage Stay on the Banks of Ganga",
    staysDesc:
      "Experience the mystique of Kashi from a heritage property located right on the ghats. Wake up to the sound of temple bells and the flowing Ganga, with every dawn bringing a new spiritual revelation.",
    itinerary: [
      {
        day: 1,
        points: [
          "Arrive at Varanasi Airport / Railway Station with a warm traditional welcome",
          "Transfer to heritage ghat-side accommodation",
          "Evening boat ride on the holy Ganga",
          "Witness the world-famous Ganga Aarti at Dashashwamedh Ghat",
          "Welcome dinner with introduction to Kashi's sacred geography",
        ],
      },
      {
        day: 2,
        points: [
          "Early morning Ganga Snan (holy bath) at Assi Ghat",
          "Guided temple circuit: Kashi Vishwanath, Annapurna Devi, Kal Bhairav",
          "Explore the ancient lanes and silk weaving heritage",
          "Afternoon discourse on the spiritual significance of Kashi",
          "Evening satsang and devotional music by the Ganga",
        ],
      },
      {
        day: 3,
        points: [
          "Morning Yoga and Pranayama session overlooking the river",
          "Visit Sarnath, where Buddha gave his first sermon",
          "Explore the Dhamek Stupa and Sarnath Museum",
          "Afternoon mantra chanting workshop",
          "Evening free for self-exploration of Kashi's magical lanes",
        ],
      },
      {
        day: 4,
        points: [
          "Sunrise boat ride from Assi Ghat to Manikarnika Ghat",
          "Visit Durga Temple (Monkey Temple), Sankat Mochan Hanuman Temple",
          "Tulsi Manas Mandir and BHU campus visit",
          "Special Rudra Abhishek puja arranged for the group",
          "Musical Baithak: an evening of classical devotional music by artists",
        ],
      },
      {
        day: 5,
        points: [
          "Final morning Ganga snan and prayers",
          "Reflective closing circle and sharing session",
          "Collect sacred prasad and checkout",
          "Departure with the eternal blessings of Kashi",
        ],
      },
    ],
    darshans: [
      {
        title: "Kashi Temple Circuit",
        items: [
          "Kashi Vishwanath Mandir (Jyotirlinga)",
          "Annapurna Devi Temple",
          "Kal Bhairav Mandir",
          "Sankat Mochan Hanuman Temple",
          "Durga Temple (Durga Kund)",
        ],
      },
      {
        title: "Sacred Ghats",
        items: [
          "Dashashwamedh Ghat (Ganga Aarti)",
          "Manikarnika Ghat (Moksha Sthal)",
          "Assi Ghat",
          "Harishchandra Ghat",
          "Tulsi Ghat",
        ],
      },
      {
        title: "Divine Experiences",
        items: [
          "Ganga Aarti at Dashashwamedh",
          "Rudra Abhishek at Vishwanath",
          "Sunrise Boat Ride",
          "Classical Music Baithak",
          "Sarnath Buddhist Heritage",
        ],
      },
    ],
    inclusions: [
      "Heritage accommodation on the banks of Ganga with traditional breakfast and dinner",
      "Special VIP Darshan at Kashi Vishwanath Temple",
      "Guided Ganga boat rides at sunrise and sunset",
      "Yoga, Pranayama & Meditation sessions daily",
      "Rudra Abhishek puja exclusively for the group",
      "Expert-guided temple walks with historical & spiritual commentary",
      "Visit to Sarnath with professional guide",
      "Musical Baithak evening by renowned artists",
      "All local transportation in private AC vehicle",
    ],
    highlights: [
      "Stay at a heritage ghat-side property",
      "VIP Darshan at Kashi Vishwanath",
      "Private Ganga boat rides",
      "Sarnath Buddhist heritage visit",
      "Rudra Abhishek ceremony",
    ],
  },
  rameshwaram: {
    slug: "rameshwaram",
    name: "Rameshwaram",
    tagline: "Where Rama Built the Bridge",
    region: "South",
    duration: "4 Days / 3 Nights",
    date: "Multiple Departures Available",
    desc: "Rameshwaram, one of the four Char Dhams, is where Lord Rama built the legendary bridge to Lanka. The sacred island is surrounded by the ocean on all sides, and the Ramanathaswamy Temple houses the longest corridor of any temple in the world. The sacred 22 theerthams (holy wells) within the temple complex offer purification of body and soul.",
    img: "https://samyam.co/images/rameshwaram.jpg",
    triplePrice: "Rs. 28,000 per Head",
    doublePrice: "Rs. 32,000 per Head",
    slogan: "PURIFICATION | DEVOTION | OCEAN | RAMA",
    staysHeading: "Oceanfront Sacred Stay",
    staysDesc:
      "Stay in a peaceful oceanfront property with views of the sacred waters. Let the rhythm of the waves and the temple bells guide your spiritual experience.",
    itinerary: [
      {
        day: 1,
        points: [
          "Arrive at Madurai Airport and transfer to Rameshwaram (3.5 hrs scenic drive)",
          "Cross the iconic Pamban Bridge over the ocean",
          "Check-in and evening visit to Agnitheertham (sacred shore)",
          "Witness the stunning sunset over the ocean",
          "Welcome dinner and orientation talk on Ramayana significance",
        ],
      },
      {
        day: 2,
        points: [
          "Early morning sacred bath at Agnitheertham",
          "22 Theertham Snan: ritual bathing at all 22 sacred wells inside the temple",
          "Darshan at Sri Ramanathaswamy Temple (Jyotirlinga)",
          "Walk through the world's longest temple corridor (1220 meters)",
          "Evening discourse on the Ramayana and significance of Rameshwaram",
        ],
      },
      {
        day: 3,
        points: [
          "Morning Yoga & Pranayama by the ocean",
          "Visit Dhanushkodi, the tip of the subcontinent where two oceans meet",
          "Explore the ruins of the old Dhanushkodi town",
          "Visit Gandhamadhana Parvatham, the footprint of Lord Rama",
          "Visit Viloondi Theertham and Five-faced Hanuman Temple",
          "Evening free for peaceful ocean meditation",
        ],
      },
      {
        day: 4,
        points: [
          "Final morning prayers and Ganga snan at Agnitheertham",
          "Collect sacred prasad and sacred water from theerthams",
          "Checkout and transfer to Madurai Airport",
          "Departure with the blessings of Lord Rama",
        ],
      },
    ],
    darshans: [
      {
        title: "Temple Darshans",
        items: [
          "Sri Ramanathaswamy Temple (Jyotirlinga)",
          "22 Sacred Theerthams",
          "Five-faced Hanuman Temple",
          "Gandhamadhana Parvatham",
        ],
      },
      {
        title: "Sacred Waters",
        items: [
          "Agnitheertham (Sacred Shore)",
          "Dhanushkodi (Ram Setu point)",
          "Viloondi Theertham",
          "Confluence of Two Oceans",
        ],
      },
      {
        title: "Divine Experiences",
        items: [
          "22 Theertham Snan Ritual",
          "Temple Corridor Walk (1220m)",
          "Ocean Sunrise Meditation",
          "Ramayana Discourse",
        ],
      },
    ],
    inclusions: [
      "Comfortable oceanfront accommodation with all meals",
      "VIP Darshan at Ramanathaswamy Temple",
      "Guided 22 Theertham Snan ritual experience",
      "Expert-guided temple walks with Ramayana commentary",
      "Visit to Dhanushkodi with private transport",
      "Daily Yoga & Pranayama sessions by the ocean",
      "Discourse on Ramayana by Vedic scholars",
      "All local transportation in private AC vehicle",
      "Sacred prasad and holy water to carry home",
    ],
    highlights: [
      "22 Theertham sacred bath ritual",
      "Dhanushkodi, where two oceans meet",
      "World's longest temple corridor",
      "Ocean meditation sessions",
      "Ramayana discourse by scholars",
    ],
  },
  dwarka: {
    slug: "dwarka",
    name: "Dwarka",
    tagline: "Kingdom of Lord Krishna",
    region: "West",
    duration: "4 Days / 3 Nights",
    date: "Multiple Departures Available",
    desc: "Dwarka, the legendary kingdom of Lord Krishna, stands where the ocean meets ancient devotion. One of the four Char Dhams and one of the seven Mokshapuris, Dwarka's Dwarkadhish Temple rises majestically on the banks of the Gomti river. The temple's shikhar with the 52-yard flag (Dwarkadhish Dhwaja) is visible from miles away, a beacon of Krishna's eternal presence.",
    img: "https://samyam.co/images/dwarka.jpg",
    triplePrice: "Rs. 30,000 per Head",
    doublePrice: "Rs. 34,000 per Head",
    slogan: "KRISHNA | DEVOTION | OCEAN | LIBERATION",
    staysHeading: "Stay Near the Sacred Temple",
    staysDesc:
      "Stay in a premium property near the Dwarkadhish Temple, letting the temple bells and ocean breeze guide your mornings.",
    itinerary: [
      {
        day: 1,
        points: [
          "Arrive at Jamnagar Airport and transfer to Dwarka (2.5 hrs drive)",
          "Check-in and evening visit to Dwarkadhish Temple for darshan",
          "Witness the mesmerizing sunset from the Gomti Ghat",
          "Evening Aarti at Dwarkadhish Temple",
          "Welcome dinner with introduction to Krishna's Dwarka",
        ],
      },
      {
        day: 2,
        points: [
          "Early morning Gomti Snan (holy bath)",
          "Special VIP Darshan at Dwarkadhish Temple",
          "Visit Rukmini Devi Temple and Gopi Talav",
          "Explore the Sudama Setu and ancient Dwarka heritage",
          "Evening discourse on Krishna Leela and the Bhagavad Gita",
        ],
      },
      {
        day: 3,
        points: [
          "Morning Yoga & Meditation session facing the Arabian Sea",
          "Day trip to Bet Dwarka (sacred island) by boat",
          "Darshan at the original Dwarkadhish Temple on Bet Dwarka",
          "Visit Nageshwar Jyotirlinga temple en route",
          "Evening satsang and kirtan at the main temple",
        ],
      },
      {
        day: 4,
        points: [
          "Final morning prayers at Dwarkadhish Temple",
          "Visit Lighthouse and panoramic ocean views",
          "Collect sacred prasad, checkout from stay",
          "Transfer to Jamnagar Airport for departure with Krishna's blessings",
        ],
      },
    ],
    darshans: [
      {
        title: "Dwarka Temples",
        items: [
          "Dwarkadhish Temple (Char Dham)",
          "Rukmini Devi Temple",
          "Bet Dwarka Temple",
          "Nageshwar Jyotirlinga",
        ],
      },
      {
        title: "Sacred Sites",
        items: ["Gomti Ghat", "Gopi Talav", "Sudama Setu", "Dwarka Lighthouse"],
      },
      {
        title: "Divine Experiences",
        items: [
          "Dwarkadhish Aarti",
          "Bet Dwarka boat journey",
          "Ocean meditation",
          "Krishna Leela discourse",
        ],
      },
    ],
    inclusions: [
      "Premium accommodation near Dwarkadhish Temple with all meals",
      "VIP Darshan at Dwarkadhish Temple",
      "Boat ride to Bet Dwarka sacred island",
      "Visit to Nageshwar Jyotirlinga",
      "Daily Yoga & meditation sessions facing the Arabian Sea",
      "Expert discourse on Bhagavad Gita and Krishna Leela",
      "Guided heritage walks through ancient Dwarka",
      "All local transportation in private AC vehicle",
    ],
    highlights: [
      "VIP Darshan at Dwarkadhish Temple",
      "Boat pilgrimage to Bet Dwarka island",
      "Nageshwar Jyotirlinga visit",
      "Ocean meditation by Arabian Sea",
      "Krishna Leela discourse",
    ],
  },
  badrinath: {
    slug: "badrinath",
    name: "Badrinath",
    tagline: "Abode of Lord Vishnu",
    region: "North",
    duration: "6 Days / 5 Nights",
    date: "May – October (Season)",
    desc: "Badrinath Dham, nestled at 3,133 meters in the Garhwal Himalayas, is the abode of Lord Vishnu. One of the Char Dhams, this sacred shrine has been the spiritual goal of millions of seekers for millennia. The hot spring of Tapt Kund, the eternal Neelkanth peak, and the ancient Mana village (the last inhabited village before Tibet) all create an atmosphere of profound divine energy.",
    img: "https://samyam.co/images/badrinath.jpg",
    triplePrice: "Rs. 48,000 per Head",
    doublePrice: "Rs. 54,000 per Head",
    slogan: "VISHNU | HIMALAYAS | MOKSHA | TAPAS",
    staysHeading: "Alpine Stays with Mountain Views",
    staysDesc:
      "Stay in comfortable accommodations in Badrinath and Joshimath with views of the majestic Neelkanth peak and Nanda Devi range. Every morning brings the Himalayas to your doorstep.",
    itinerary: [
      {
        day: 1,
        points: [
          "Arrive at Dehradun / Rishikesh for group assembly",
          "Scenic drive through Devprayag (confluence of Alaknanda & Bhagirathi)",
          "Overnight stay at Rudraprayag or Pipalkoti",
          "Evening orientation and Himalayan prayer session",
        ],
      },
      {
        day: 2,
        points: [
          "Morning drive through breathtaking Himalayan valleys to Joshimath",
          "Visit Jyotirmath, the seat of Adi Shankaracharya",
          "Continue to Badrinath Dham (3,133m altitude)",
          "Check-in and evening Darshan at Badrinath Temple",
          "Hot spring bath at Tapt Kund",
        ],
      },
      {
        day: 3,
        points: [
          "Early morning special VIP Abhishek Darshan at Badrinath Temple",
          "Visit Mana Village, the last village of India",
          "See Vyas Cave where Mahabharata was composed",
          "Walk to Bhim Pul and Vasudhara Falls",
          "Visit the origin of River Saraswati",
          "Evening scriptural discourse on Vishnu Sahasranama",
        ],
      },
      {
        day: 4,
        points: [
          "Morning meditation facing Neelkanth peak",
          "Special group Puja at Badrinath Temple",
          "Explore Charanpaduka (footprint of Lord Vishnu)",
          "Begin return journey, staying overnight at Joshimath/Auli",
          "Evening satsang under the stars",
        ],
      },
      {
        day: 5,
        points: [
          "Morning yoga session with panoramic mountain views in Auli",
          "Visit Nandaprayag confluence en route",
          "Drive to Rishikesh for final night stay",
          "Evening Ganga Aarti at Rishikesh",
          "Closing musical baithak and reflections",
        ],
      },
      {
        day: 6,
        points: [
          "Final prayers and Ganga snan at Rishikesh",
          "Closing circle and sharing session",
          "Transfer to Dehradun Airport / Haridwar Station",
          "Departure with the blessings of Badri Vishal",
        ],
      },
    ],
    darshans: [
      {
        title: "Badrinath Sacred Sites",
        items: [
          "Badrinath Temple (Char Dham)",
          "Tapt Kund Hot Springs",
          "Charanpaduka (Vishnu's Footprint)",
          "Mana Village: Last Village of India",
        ],
      },
      {
        title: "Ancient Caves & Rivers",
        items: [
          "Vyas Cave (Mahabharata was written here)",
          "Ganesh Cave",
          "River Saraswati Origin",
          "Bhim Pul",
          "Vasudhara Falls",
        ],
      },
      {
        title: "Journey Confluences",
        items: [
          "Devprayag Confluence",
          "Nandaprayag Confluence",
          "Jyotirmath (Adi Shankaracharya's seat)",
          "Rishikesh Ganga Aarti",
        ],
      },
    ],
    inclusions: [
      "Comfortable accommodations at Badrinath, Joshimath/Auli, and Rishikesh",
      "VIP Abhishek Darshan at Badrinath Temple",
      "All meals throughout the journey (sattvik vegetarian)",
      "Private AC transportation for the entire route",
      "Expert guide with deep knowledge of Himalayan sacred geography",
      "Special group Puja at Badrinath",
      "Daily Yoga & Meditation sessions",
      "Visit to Mana Village and Vyas Cave",
      "Ganga Aarti experience at Rishikesh",
    ],
    highlights: [
      "VIP Abhishek Darshan at Badrinath",
      "Mana: Last Village of India",
      "Vyas Cave where Mahabharata was written",
      "Tapt Kund hot spring bath",
      "Auli panoramic Himalayan views",
    ],
  },
  "jagannath-puri": {
    slug: "jagannath-puri",
    name: "Jagannath Puri",
    tagline: "The Abode of Lord Jagannath",
    region: "East",
    duration: "4 Days / 3 Nights",
    date: "Multiple Departures Available",
    desc: "Puri, one of the four Char Dhams, is the land of Lord Jagannath, the Lord of the Universe. The grand Jagannath Temple, built in the 12th century, stands as one of the most sacred sites in India. The Rath Yatra (chariot festival) is the world's largest annual religious gathering. The sacred Mahaprasad of Lord Jagannath is believed to be cooked by Goddess Mahalakshmi herself.",
    img: "https://samyam.co/images/jagannath%20puri.jpg",
    triplePrice: "Rs. 26,000 per Head",
    doublePrice: "Rs. 30,000 per Head",
    slogan: "JAGANNATH | DEVOTION | MAHAPRASAD | OCEAN",
    staysHeading: "Seaside Heritage Stay",
    staysDesc:
      "Stay in a comfortable seaside property near the Jagannath Temple, with the sound of ocean waves and temple bells creating the perfect atmosphere for devotion.",
    itinerary: [
      {
        day: 1,
        points: [
          "Arrive at Bhubaneswar Airport and transfer to Puri (1.5 hrs drive)",
          "Check-in at seaside accommodation near Jagannath Temple",
          "Evening visit to Puri Beach for sunset",
          "Welcome dinner with introduction to Jagannath tradition",
          "Evening orientation on temple protocol and significance",
        ],
      },
      {
        day: 2,
        points: [
          "Early morning visit to the magnificent Jagannath Temple",
          "VIP Darshan of Lord Jagannath, Balabhadra & Subhadra",
          "Experience the sacred Mahaprasad at Ananda Bazar",
          "Visit Gundicha Temple and the Rath Yatra route",
          "Afternoon discourse on the Jagannath tradition and its philosophy",
          "Evening Aarti at the temple",
        ],
      },
      {
        day: 3,
        points: [
          "Morning Yoga & Meditation by the ocean",
          "Day trip to Konark Sun Temple (UNESCO World Heritage)",
          "Explore the magnificent stone chariot and temple architecture",
          "Visit Chandrabhaga Beach near Konark",
          "Return to Puri, with the evening free for temple revisit or ocean meditation",
        ],
      },
      {
        day: 4,
        points: [
          "Final morning darshan at Jagannath Temple",
          "Visit Lokanath Temple and Markandeshwar Temple",
          "Collect sacred Mahaprasad to carry home",
          "Checkout and transfer to Bhubaneswar Airport",
          "Departure with the blessings of Lord Jagannath",
        ],
      },
    ],
    darshans: [
      {
        title: "Puri Temples",
        items: [
          "Jagannath Temple (Char Dham)",
          "Gundicha Temple",
          "Lokanath Temple",
          "Markandeshwar Temple",
        ],
      },
      {
        title: "Heritage Sites",
        items: [
          "Konark Sun Temple (UNESCO)",
          "Ananda Bazar (Mahaprasad)",
          "Rath Yatra Route",
          "Chandrabhaga Beach",
        ],
      },
      {
        title: "Divine Experiences",
        items: [
          "Jagannath Darshan & Aarti",
          "Sacred Mahaprasad tasting",
          "Konark Temple exploration",
          "Ocean sunrise meditation",
        ],
      },
    ],
    inclusions: [
      "Seaside accommodation near Jagannath Temple with all meals",
      "VIP Darshan at Jagannath Temple",
      "Sacred Mahaprasad experience at Ananda Bazar",
      "Day trip to Konark Sun Temple (UNESCO) with expert guide",
      "Daily Yoga & meditation sessions by the ocean",
      "Discourse on Jagannath philosophy by Vedic scholars",
      "All local transportation in private AC vehicle",
      "Sacred Mahaprasad to carry home",
    ],
    highlights: [
      "VIP Darshan at Jagannath Temple",
      "Sacred Mahaprasad at Ananda Bazar",
      "Konark Sun Temple (UNESCO Heritage)",
      "Ocean meditation at Puri Beach",
      "Jagannath tradition discourse",
    ],
  },
  haridwar: {
    slug: "haridwar",
    name: "Haridwar",
    tagline: "Gateway to the Gods",
    region: "North",
    duration: "3 Days / 2 Nights",
    date: "Multiple Departures Available",
    desc: "Haridwar, the Gateway to the Gods, is where the sacred Ganga emerges from the mountains into the plains. This is one of the seven Mokshapuris and a site of the Kumbh Mela. The evening Ganga Aarti at Har Ki Pauri is one of the most spectacular spiritual experiences in the world. The city pulses with the energy of millions of seekers who have bathed in its sacred waters.",
    img: "https://samyam.co/images/haridwar.jpg",
    triplePrice: "Rs. 18,000 per Head",
    doublePrice: "Rs. 22,000 per Head",
    slogan: "GANGA | MOKSHA | AARTI | PURIFICATION",
    staysHeading: "Riverside Ashram Stay",
    staysDesc:
      "Stay in a serene ashram or riverside property overlooking the Ganga. The sound of flowing water and the fragrance of incense create the perfect setting for spiritual transformation.",
    itinerary: [
      {
        day: 1,
        points: [
          "Arrive at Dehradun Airport / Haridwar Station with a traditional welcome",
          "Check-in at riverside accommodation",
          "Evening Ganga Snan (holy bath) at Har Ki Pauri",
          "Witness the world-famous Ganga Aarti at Har Ki Pauri",
          "Welcome dinner and spiritual orientation",
        ],
      },
      {
        day: 2,
        points: [
          "Early morning Yoga & Pranayama by the Ganga",
          "Visit Mansa Devi Temple (cable car ride to hilltop)",
          "Visit Chandi Devi Temple",
          "Explore the ancient ghats and temples of Haridwar",
          "Afternoon discourse on Ganga Mahatmya",
          "Evening free for meditation and ghat walks",
        ],
      },
      {
        day: 3,
        points: [
          "Morning Ganga snan and final prayers at Har Ki Pauri",
          "Visit Daksha Mahadev Temple and Sati Kund",
          "Collect sacred Ganga jal to carry home",
          "Closing circle and reflections",
          "Departure with the blessings of Maa Ganga",
        ],
      },
    ],
    darshans: [
      {
        title: "Haridwar Temples",
        items: [
          "Har Ki Pauri (Sacred Ghat)",
          "Mansa Devi Temple",
          "Chandi Devi Temple",
          "Daksha Mahadev Temple",
        ],
      },
      {
        title: "Sacred Ghats",
        items: ["Har Ki Pauri", "Vishnu Ghat", "Brahmakund", "Sati Kund"],
      },
      {
        title: "Divine Experiences",
        items: [
          "Ganga Aarti at Har Ki Pauri",
          "Ganga Snan ritual",
          "Cable car to Mansa Devi",
          "Ganga Mahatmya discourse",
        ],
      },
    ],
    inclusions: [
      "Riverside accommodation with all sattvik meals",
      "Guided Ganga Aarti experience at Har Ki Pauri",
      "Cable car rides to Mansa Devi & Chandi Devi temples",
      "Daily Yoga & Pranayama sessions by the Ganga",
      "Discourse on Ganga Mahatmya by Vedic scholars",
      "All local transportation in private vehicle",
      "Sacred Ganga jal to carry home",
    ],
    highlights: [
      "Ganga Aarti at Har Ki Pauri",
      "Mansa Devi hilltop darshan",
      "Sacred Ganga snan ritual",
      "Riverside meditation sessions",
      "Ganga Mahatmya discourse",
    ],
  },
  ayodhya: {
    slug: "ayodhya",
    name: "Ayodhya",
    tagline: "Birthplace of Lord Rama",
    region: "North",
    duration: "3 Days / 2 Nights",
    date: "Multiple Departures Available",
    desc: "Ayodhya, the birthplace of Lord Rama, is one of the seven Mokshapuris of Hinduism. The newly built grand Ram Mandir stands as a symbol of faith, devotion, and civilizational continuity. The sacred Sarayu river flows through this ancient city, and every ghat and temple resonates with the stories of the Ramayana. Walking in Ayodhya is walking in the footsteps of Maryada Purushottam.",
    img: "https://samyam.co/images/aayodhya.jpg",
    triplePrice: "Rs. 16,000 per Head",
    doublePrice: "Rs. 20,000 per Head",
    slogan: "RAMA | DHARMA | DEVOTION | MARYADA",
    staysHeading: "Stay Near Ram Janmabhoomi",
    staysDesc:
      "Stay in comfortable accommodations near the Ram Mandir, letting the sacred energy of Lord Rama's birthplace permeate your experience. Every morning brings the sound of devotional chanting and temple bells.",
    itinerary: [
      {
        day: 1,
        points: [
          "Arrive at Ayodhya Airport / Railway Station with a warm welcome",
          "Check-in at premium accommodation near Ram Mandir",
          "Evening visit to the serene Sarayu Ghat for sunset aarti",
          "Walk along the decorated ghats and explore the sacred city",
          "Welcome dinner and orientation on Ramayana heritage",
        ],
      },
      {
        day: 2,
        points: [
          "Early morning visit to the grand Sri Ram Janmabhoomi Temple",
          "VIP Darshan of Ram Lalla",
          "Visit Hanuman Garhi, the fortress temple of Hanuman",
          "Explore Dashrath Mahal and Kanak Bhawan",
          "Afternoon Ramayana discourse and satsang",
          "Evening Sarayu Aarti and free time for exploration",
        ],
      },
      {
        day: 3,
        points: [
          "Morning Sarayu snan and final prayers",
          "Visit Nageshwarnath Temple and other ancient temples",
          "Collect sacred prasad from Ram Mandir",
          "Closing reflections and sharing circle",
          "Departure with the blessings of Lord Rama",
        ],
      },
    ],
    darshans: [
      {
        title: "Ayodhya Temples",
        items: ["Sri Ram Janmabhoomi Mandir", "Hanuman Garhi", "Dashrath Mahal", "Kanak Bhawan"],
      },
      {
        title: "Sacred Sites",
        items: ["Sarayu Ghat", "Nageshwarnath Temple", "Ram Ki Paidi", "Treta Ke Thakur"],
      },
      {
        title: "Divine Experiences",
        items: ["Ram Lalla VIP Darshan", "Sarayu Aarti", "Ramayana Discourse", "Sacred City Walk"],
      },
    ],
    inclusions: [
      "Premium accommodation near Ram Mandir with all meals",
      "VIP Darshan at Sri Ram Janmabhoomi Temple",
      "Guided temple circuit of all major Ayodhya temples",
      "Ramayana discourse by Vedic scholars",
      "Sarayu Aarti experience",
      "All local transportation in private vehicle",
      "Sacred prasad from Ram Mandir to carry home",
    ],
    highlights: [
      "VIP Darshan of Ram Lalla",
      "Grand Ram Janmabhoomi Mandir",
      "Hanuman Garhi fortress temple",
      "Sarayu Ghat sunset aarti",
      "Ramayana heritage walk",
    ],
  },
  "mathura-vrindavan": {
    slug: "mathura-vrindavan",
    name: "Mathura-Vrindavan",
    tagline: "Land of Krishna's Divine Leelas",
    region: "North",
    duration: "4 Days / 3 Nights",
    date: "Multiple Departures Available",
    desc: "Mathura, the birthplace of Lord Krishna, and Vrindavan, the playground of his childhood leelas, together form one of the most devotionally charged sacred circuits in India. Every lane of Vrindavan echoes with Krishna's flute, every ghat remembers the Gopis' devotion, and every temple celebrates the eternal love between Radha and Krishna.",
    img: "https://samyam.co/images/mathura-vrindavan.jpg",
    triplePrice: "Rs. 22,000 per Head",
    doublePrice: "Rs. 26,000 per Head",
    slogan: "KRISHNA | RADHA | BHAKTI | LEELA",
    staysHeading: "Stay in the Land of Devotion",
    staysDesc:
      "Stay in a peaceful ashram-style accommodation in Vrindavan, surrounded by ancient temples and the sound of devotional kirtans that fill the air throughout the day.",
    itinerary: [
      {
        day: 1,
        points: [
          "Arrive at Delhi/Agra and transfer to Mathura (2-3 hrs drive)",
          "Check-in and evening visit to Vishram Ghat on the Yamuna",
          "Explore the vibrant lanes and temples of Mathura",
          "Evening Yamuna Aarti at Vishram Ghat",
          "Welcome dinner and introduction to Krishna's Mathura",
        ],
      },
      {
        day: 2,
        points: [
          "Early morning visit to Krishna Janmabhoomi Temple",
          "VIP Darshan at Sri Krishna Janmasthan",
          "Visit Dwarkadhish Temple, the grandest temple of Mathura",
          "Transfer to Vrindavan and check-in at ashram stay",
          "Evening kirtan and darshan at Banke Bihari Temple",
          "Explore the magical evening atmosphere of Vrindavan",
        ],
      },
      {
        day: 3,
        points: [
          "Morning Parikrama (circumambulation) of sacred Vrindavan",
          "Visit ISKCON Temple, Prem Mandir (light & sound show)",
          "Darshan at Radha Vallabh Temple and Govind Dev Temple",
          "Visit Seva Kunj, where Radha and Krishna performed Raas Leela",
          "Evening discourse on Bhagavata Purana and Krishna's leelas",
          "Musical kirtan evening",
        ],
      },
      {
        day: 4,
        points: [
          "Final morning prayers at Banke Bihari Temple",
          "Visit Goverdhana Hill for Parikrama (if time permits)",
          "Collect sacred prasad from temples",
          "Checkout and transfer to Delhi/Agra",
          "Departure with Krishna's blessings",
        ],
      },
    ],
    darshans: [
      {
        title: "Mathura Temples",
        items: [
          "Krishna Janmabhoomi Temple",
          "Dwarkadhish Temple",
          "Vishram Ghat",
          "Kusum Sarovar",
        ],
      },
      {
        title: "Vrindavan Temples",
        items: [
          "Banke Bihari Temple",
          "ISKCON Temple",
          "Prem Mandir",
          "Radha Vallabh Temple",
          "Govind Dev Temple",
        ],
      },
      {
        title: "Divine Experiences",
        items: [
          "Yamuna Aarti",
          "Vrindavan Parikrama",
          "Seva Kunj Darshan",
          "Devotional Kirtan Evening",
          "Goverdhana Parikrama",
        ],
      },
    ],
    inclusions: [
      "Ashram-style accommodation in Vrindavan with all sattvik meals",
      "VIP Darshan at Krishna Janmabhoomi",
      "Guided Vrindavan Parikrama",
      "Kirtan and devotional music sessions",
      "Discourse on Bhagavata Purana by scholars",
      "Prem Mandir light & sound show",
      "All transportation in private AC vehicle",
      "Sacred prasad from major temples",
    ],
    highlights: [
      "Krishna Janmabhoomi VIP Darshan",
      "Banke Bihari Temple kirtan",
      "Vrindavan sacred Parikrama",
      "Prem Mandir light & sound show",
      "Seva Kunj: Raas Leela spot",
    ],
  },
  "shaktipeethas-himachal": {
    slug: "shaktipeethas-himachal",
    name: "Shaktipeethas of Himachal",
    tagline: "Sacred Abodes of the Divine Mother",
    region: "North",
    duration: "5 Days / 4 Nights",
    date: "17 Jun - 21 Jun",
    desc: "Journey to the sacred abodes of the Divine Mother in the pristine Himalayas. These Shaktipeethas (Jwala Ji with its eternal flames, Chintpurni the dispeller of worries, Vajreshwari at Kangra, and Chamunda Devi) form a powerful circuit of Shakti worship. The energy of the Goddess is palpable in the mountain air, in the ancient rituals, and in the hearts of every devotee who walks this path.",
    img: "https://samyam.co/images/haridwar.jpg",
    triplePrice: "On Request",
    doublePrice: "On Request",
    slogan: "SHAKTI | DEVOTION | HIMALAYAS | DIVINE MOTHER",
    staysHeading: "Mountain Heritage Retreat",
    staysDesc:
      "Stay in a quiet, traditional pine-forested retreat in Kangra and Dharamshala that reflects Himalayan heritage. Wake up to the sound of birdsong and mountain streams.",
    itinerary: [
      {
        day: 1,
        points: [
          "Arrive at Dharamshala Airport / Pathankot Station",
          "Transfer to heritage resort in Dharamshala",
          "Evening visit to the miraculous Jwala Ji Temple (the eternal flame)",
          "Witness the natural eternal flames, a divine mystery",
          "Devotional prayers & orientation talk",
        ],
      },
      {
        day: 2,
        points: [
          "Morning meditation and Yoga in Kangra Valley",
          "Visit Chintpurni Devi Temple (dispeller of worries)",
          "Visit Kangra Devi Temple (Vajreshwari Temple)",
          "Explore the ancient Kangra Fort",
          "Evening discourse on Devi Mahatmya",
        ],
      },
      {
        day: 3,
        points: [
          "Morning sadhana and breathing sessions",
          "Visit Chamunda Devi Temple on the banks of Baner river",
          "Explore the spiritual town of Dharamshala and local monasteries",
          "Afternoon visit to tea gardens of Kangra",
          "Satsang and group meditation",
        ],
      },
      {
        day: 4,
        points: [
          "Exclusive trip to the holy Maa Baglamukhi Temple",
          "Participate in a special Puja & Havan performed by local pandits",
          "Visit Baijnath Shiva Temple (ancient Nagara-style architecture)",
          "Evening closing reflection circle",
          "Devotional musical baithak and dinner",
        ],
      },
      {
        day: 5,
        points: [
          "Morning final prayers and meditation",
          "Collect sacred prasad and checkout from stay",
          "Drop off at Dharamshala Airport / Pathankot Station",
          "Departure with divine Shakti blessings",
        ],
      },
    ],
    darshans: [
      {
        title: "Shakti Peetha Shrines",
        items: [
          "Jwala Ji Temple (Eternal Flame)",
          "Chintpurni Devi Temple",
          "Vajreshwari Kangra Temple",
          "Chamunda Devi Temple",
        ],
      },
      {
        title: "Power Seats",
        items: [
          "Maa Baglamukhi Temple",
          "Baijnath Shiva Temple",
          "Kangra Fort",
          "Dharamshala Spiritual Circle",
        ],
      },
      {
        title: "Divine Experiences",
        items: [
          "Devi Saptashati Havan at Baglamukhi",
          "Eternal Flame Darshan at Jwala Ji",
          "Himalayan Valley Yoga",
          "Traditional Devotional Baithak",
        ],
      },
    ],
    inclusions: [
      "Heritage accommodations in Kangra/Dharamshala with all meals",
      "VIP Darshan passes at all Shakti Peethas",
      "Special group Pujas and Havan at Jwala Ji and Baglamukhi",
      "Discourses on Devi Mahatmya by Vedic scholars",
      "Daily Yoga & Meditation in mountain settings",
      "Private AC transport across mountain routes",
      "Visit to Kangra Fort and tea gardens",
      "Sacred prasad from all temples",
    ],
    highlights: [
      "Eternal Flame at Jwala Ji",
      "Devi Saptashati Havan",
      "Kangra Valley meditation",
      "Four Shakti Peethas circuit",
      "Mountain heritage experience",
    ],
  },
};
