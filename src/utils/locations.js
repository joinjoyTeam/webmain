

export const GROUP_COLORS = {
  Beach: '#0ea5e9',
  //Sunset: '#f97316',
  Shows : '#fb002aff',
  Adventure: '#10b981',//
  Snorkel: '#3b82f6',
  Viewpoint: '#fb7185',
  Island: '#10b981',
  //ThaiBoxing: '#FFD700',     // โทนทองไทย
  Kayaking: '#06b6d4',           // แนวสปอร์ต น้ำทะเล
  NightMarket: '#8b5cf6',     // โทนนีออนกลางคืน
  cafeAndRestaurant: '#7C9A6D',

};

export const SPECIAL_TAGS = ['Iconic','Solo', 'Couple', 'Family', 'Friend','4 Islands','FireShow','ThaiBoxing','Sunset','Ao-Nang Area'];

export const LOCATIONS = [
  {
    id: 'nopparat',
    name: 'Nopparat Thara Beach',
    group: 'Beach',
    tags: ['Family', 'Easy Walk','Sunset','Ao-Nang Area'],
    recommended: false,
    score: 96,
    coordinates: [8.042996646771988, 98.80915062374889],
    highlightTag: 'Sunset Point',
    shortDescription: 'Quiet sunset spot near the Landmark night market.',
  },
   {
    id: 'railay-west-sunset',
    name: 'Railay West Beach',
    group: 'Beach',  
    tags: ['Iconic','Couple','Romantic', 'Solo','Sunset'], 
    recommended: true,  
    score: 100,
    coordinates: [8.011867631403003, 98.83779902910392],
    highlightTag: 'Sunset Point',
    shortDescription: 'Magical sunsets surrounded by dramatic limestone cliffs.',
  },
  {
    id: 'Thap-Island',
    name: 'Thap Island And Mor Island ',
    group: 'Island',
    tags: ['Iconic',  '4 Islands', '7 Islands', 'Solo', 'Couple', 'Family', 'Friend'],
    recommended: false,  
    score: 100,
    coordinates: [7.960749334245738, 98.81188600481],
    highlightTag: 'Sandbar',
    shortDescription: 'Thap Island is connected with Mor Island and make the sand bank when the water is lowtide which we called Separated Sea.',
    facebook: 'https://www.facebook.com/share/r/1H278RodX6/',
    tiktok: 'https://vt.tiktok.com/ZSPBXPGWL/',
    instagram: 'https://www.instagram.com/reel/DP7u2ffjxAO/?igsh=M3R3a2V4OGFra3Jk',
    youtube: 'https://youtube.com/shorts/mIDeJtAXmJM?feature=shared'
  },
 {
    id: 'Hong-Island-view',
    name: 'Hong Island Viewpoint',
    group: 'Viewpoint',
    tags: ['Iconic','Swimming',  'Unseen', 'Romantic', 'Solo', 'Couple', 'Family', 'Friend'],
    recommended: true,  
    score: 100,
    coordinates: [8.078533049633542, 98.67452166336074], 
    highlightTag: 'Viewpoint',
    shortDescription: 'One of the most beautiful Island in Krabi with clear water and white sand beach.'
  },
  {
    id: 'Ao-Nang-Landmark-night-market',
    name: 'Ao Nang Landmark night market',
    group: 'NightMarket',
    tags: [ 'Foodie', 'Thai Food','Cheap Food','Solo', 'Peace', 'Couple', 'Family', 'Friend','Ao-Nang Area'], 
    recommended: false, 
    score: 82,
    coordinates: [8.042759856818227, 98.81174709797625],
    highlightTag: 'Starting Point',
    shortDescription: 'Local Foods and souvenirs.',
    facebook: 'https://www.facebook.com/share/p/1KikJzUVjw/',
    instagram: 'https://www.instagram.com/p/DSWfbxAGAv3/?utm_source=ig_web_copy_link&igsh=NTc4MTIwNjQ2YQ=='
  },
  {
    id: 'Phranang-Cave',
    name: 'Phranang Beach',
    group: 'Beach',
    tags: [ 'Unseen',  '4 Islands', '7 Islands', 'Sunset', 'Rock climbing', 'Romantic', 'Kayak','Solo','Couple'],
    recommended: false, //'Iconic','Solo', 'Peace', 'Couple', 'Family', 'Friendly'
    score: 95,
    coordinates: [8.00618929910943, 98.83830842932949],
    highlightTag: 'Cliff & Sunset',
    shortDescription: 'One of the best spot in Aonang and so many activities to do, Best for sunset.'
  },
   {
    id: 'Phranang-Cave',
    name: 'Phranang Cave',
    group: 'Viewpoint',
    tags: [ 'Unseen',  '4 Islands', '7 Islands',  'Romantic', 'Kayak','Solo','Couple'],
    recommended: false, //'Iconic','Solo', 'Peace', 'Couple', 'Family', 'Friendly'
    score: 94,
    coordinates: [8.004652849100607, 98.84025614456091],
    highlightTag: 'Worship for safe journeys',
    shortDescription: 'Phra Nang Cave is a place where locals and tourists come to worship for safe journeys, and it has a unique symbol.'
  },
  {
    id: 'Poda-Island',
    name: 'Poda Island',
    group: 'Island',
    tags: ['Swimming',   '4 Islands', '7 Islands','Couple', 'Family', 'Friend','Sunset'],
    recommended: false,
    score: 81, 
    coordinates: [7.974786505695185, 98.81199963655986],
    highlightTag: 'Island Hopping',
    shortDescription: 'White sand beach, Cleared water and good for swimming.'
  },
  {
    id: 'Chicken-Island',
    name: 'Chicken Island',
    group: 'Island',
    tags: [ 'Unseen','Iconic',  '4 Islands', '7 Islands', 'Skockeling','Family', 'Friend'],
    recommended: false,
    score: 86, 
    coordinates: [7.9493382326792075, 98.80909355605431],
    highlightTag: 'Island Hopping',
    shortDescription: 'An Island that look like a chicken that is very rare to see from nature creation.'
  },
  {
    id: 'thale-waek',
    name: 'Thale Waek',
    group: 'Beach',
    tags: ['Iconic','Sandbar',  '4 Islands', '7 Islands','Solo', 'Peace', 'Couple', 'Family', 'Friend'],
    recommended: true,   
    score: 100,
    coordinates: [7.9609338,98.8108289],
    highlightTag: 'Sandbar',
    shortDescription: 'Famous sandbar that appears at low tide.',
    facebook: 'https://www.facebook.com/share/r/1H278RodX6/',
    tiktok: 'https://vt.tiktok.com/ZSPBXPGWL/',
    instagram: 'https://www.instagram.com/reel/DP7u2ffjxAO/?igsh=M3R3a2V4OGFra3Jk',
    youtube: 'https://youtube.com/shorts/mIDeJtAXmJM?feature=shared'
  },
  {
    id: 'Hong-Island',
    name: 'Hong Island',
    group: 'Island',
    tags: ['Iconic','Swimming',  'Unseen', 'Romantic', 'Solo', 'Couple', 'Family', 'Friend'],
    recommended: true,  
    score: 100,
    coordinates: [8.078533049633542, 98.67452166336074], 
    highlightTag: 'Lagoon',
    shortDescription: 'One of the most beautiful Island in Krabi with clear water and white sand beach.'
  },

   {
    id: 'phi-phi',
    name: 'Phi Phi Islands',
    group: 'Island',
    tags: ['Iconic', 'Solo', 'Peace', 'Couple', 'Family', 'Friend','Party',],
    recommended: false,
    score: 92, 
    coordinates: [7.7407, 98.7765],
    highlightTag: 'Island Hopping',
    shortDescription: 'Iconic islands with turquoise water and snorkeling.',
  },
  {
    id: 'Maya-Bay',
    name: 'Maya Bay',
    group: 'Beach',
    tags: ['Iconic','Swimming', 'Unseen'
      , 'Sea Animal', 'Outstanding', 'Snorkeling','Solo', 'Peace', 'Couple', 'Family', 'Friend'], 
    recommended: true,
    score: 91,
    coordinates: [7.676756680821906, 98.76556276184752],
    highlightTag: 'Island Hopping',
    shortDescription: 'One of the most beautiful bay in the world from The Beach movie.'
  },
  {
    id: 'Centara-Fire-Show',
    name: 'Centara Fire Show',
    group: 'Shows',  
    tags: ['Exciting',  'Fun', 'Night activity','Solo','Friend','FireShow'],
    recommended: false,   
    score: 89, 
    coordinates: [8.028574742666587, 98.8246180041217],
    highlightTag: 'Starting Point',
    shortDescription: 'One of the best Fire show in Ao nang with great performers.'
  },
  {
    id: 'Aonang-Fire-show',
    name: 'Ao nang Fire show',
    group: 'Shows',
    tags: ['Exciting',  'Fun', 'Night activity','Solo','Friend','FireShow','Ao-Nang Area'],
    recommended: false,
    score: 87,   
    coordinates: [8.031154039226333, 98.82230946213717],
    highlightTag: 'Starting Point',
    shortDescription: 'Fire show on Ao nang beach that is very fun to watch at night.'
  },
  {
    id: 'Aonang-Fire-show-2',
    name: 'Ao nang Fire show 2',
    group: 'Shows',
    tags: ['Exciting',  'Fun', 'Night activity','Solo','Friend','FireShow'],
    recommended: false,
    score: 88, 
    coordinates: [8.0317472106498, 98.82147600026569],
    highlightTag: 'Starting Point',
    shortDescription: 'Another famous fire show on Ao nang beach.'
  },
  {
    id: 'Ao-Nang-Landmark-Fire-Show',
    name: 'Ao Nang Landmark Fire Show',
    group: 'Shows',
    tags: ['Exciting',  'Fun', 'Night activity','Solo','Friend','FireShow','Ao-Nang Area'],
    recommended: false,  
    score: 82,
    coordinates: [8.042507, 98.811847],
    highlightTag: 'Starting Point',
    shortDescription: 'Free exciting,One of the best Fire Show in Ao Nang Landmark.\nShow Time:  9:00–9:30 PM',
    facebook:'https://www.facebook.com/share/p/17aU2R93P9/',
    instagram:'https://www.instagram.com/p/DSXA85fGG7i/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=='
  },
  {
    id: 'Ao-Nang-Landmark-Stadium',
    name: 'Ao Nang Landmark Stadium',
    group: 'Shows',
    tags: ['Exciting','Solo','Friend','ThaiBoxing'],
    recommended: false,
    score: 79, 
    coordinates: [8.04291741147765, 98.81260362536653],
    highlightTag: ['Adventure Spot'],
    shortDescription: 'One of the best Muay Thai Boxing Show in Krabi.'
  },
{
    id: 'Boxing Stadium',
    name: 'Krabi International Boxing Stadium',
    group: 'Shows',
    tags: ['Exciting','Solo','Friend','ThaiBoxing'],
    recommended: false,
    score: 78, 
    coordinates: [8.0463938,98.8475367],
    highlightTag: ['Adventure Spot'],
    shortDescription: 'One of the best Muay Thai Boxing Show in Krabi.'
  },

  {
    id: 'Ao-nang-krabi-Stadium',
    name: 'Ao nang krabi Stadium',
    group: 'Shows',
    tags: ['Exciting','Solo','Friend','ThaiBoxing',],
    recommended: false,
    score: 85, 
    coordinates: [8.046512790919532, 98.81373330764366],
    highlightTag: ['Adventure Spot'],
    shortDescription: 'One of the best Muay Thai Boxing Show in Krabi.'
  },
  // {
  //   id: 'Monkey-Trail-Kayaking-(GRACE-kayaking-Ao-Nang)',
  //   name: 'Monkey Trail Kayaking (GRACE kayaking Ao-Nang)',
  //   group: 'Adventure',
  //   tags: ['Adventure', 'Fun', 'kayaking','Solo','Couple', 'Family', 'Friendly'],
  //   recommended: false,
  //   score: 68,  
  //   coordinates: [8.027181545649889, 98.82668066322935],
  //   highlightTag: 'Adventure Spot',
  //   shortDescription: 'Fun Kayaking explore the sea near Ao nang.'
  // },
  {
    id: 'Pranang-Cave-Kayaking',
    name: 'Pranang Cave Kayaking',
    group: 'Kayaking',
    tags: ['Adventure', 'Fun', 'kayaking' ,'Solo','Family', 'Friend'],
    recommended: false,
    score: 76,    
    coordinates: [8.006219, 98.837293],
    highlightTag: ['Adventure Spot','Kayaking'],
    shortDescription: 'Fun Kayaking explore the sea near Railay and surrounding area.'
  },
  {
    id: 'Ao-Thalane-Kayak-Krabi',
    name: 'Ao Thalane Kayak Krabi',
    group: 'Kayaking',
    tags: ['Adventure','Unsen', 'Fun','Solo','Couple', 'Family', 'Friend'],
    recommended: true,
    score: 94,  
    coordinates: [8.143337775348652, 98.7476565086452],
    highlightTag: ['Adventure Spot'],
    shortDescription: 'Explore the mangrove in Krabi by the adventure kayak.'
  },
  {
    id: 'Klong-Root-Kayaking',
    name: 'Klong Root Kayaking',
    group: 'Kayaking',
    tags: ['Adventure',  'Jurassic World','Fun','Solo','Couple', 'Family', 'Friend'],
    recommended: true,
    score: 92,    
    coordinates: [8.096931015324097, 98.80975731135209],
    highlightTag: ['Adventure Spot'],
    shortDescription: 'Exciting kayaking where they was filming Jurassic Park.'
  },
  {
    id: 'Khaothong-Hill',
    name: 'Khaothong Hill',
    group: 'cafeAndRestaurant',
    tags: ['Dinner', 'Sunset','Romatic','Couple', 'Family', 'Friend','Sunset'],
    recommended: false,
    score: 85,  
    coordinates: [8.17303796762973, 98.75299009230848],
    highlightTag: 'Sunset Point',
    shortDescription: 'One of the best place for romantic dinner and sunset.'
  },
  {
    id: 'Ao-Nang-Beach',
    name: 'Ao Nang Beach',
    group: 'Beach',
    tags:'Sunset',
    //tags: ['Sunset', 'Swimming', 'Activities','Solo', 'Peace', 'Couple', 'Family', 'Friend'],
    recommended: false,
    score: 95,  
    coordinates: [8.029270233730031, 98.8240309893113],
    highlightTag: 'Sunset Point',
    shortDescription: 'So many fun activities to do.',
    //******************************************** */
    // facebook: 'https://www.facebook.com/Joinjoytravel',
    // tiktok: 'https://www.tiktok.com/@joinjoytravel?lang=en',
    // instagram: 'https://www.instagram.com/joinjoytravel/',
    // youtube: 'https://www.youtube.com/@joinjoytravel'
    //googleMapUrl: 'https://www.google.com/maps/search/?api=1&query=8.029270233730031,98.8240309893113',
  },
  {
    id: 'Klong-Muang-Beach',
    name: 'Klong Muang Beach',
    group: 'Beach',
    tags: ['Sunset',  'Activities','Solo','Couple', 'Family', 'Friend' ],  
    recommended: false,
    score: 86,  
    coordinates: [8.049013241643939, 98.75915683225],
    highlightTag: 'Sunset Point',
    shortDescription: 'Very calm and beautiful beach for sunset.'
  },
  {
    id: 'Cafe',
    name: 'Andalay Beach Bar & Cafe',
    group: 'cafeAndRestaurant',
    tags: ['Dinner','Sunset','Romatic', 'Couple', 'Family', 'Friend'], 
    recommended: false,
    score: 78,   
    coordinates: [8.05330930603848, 98.75242703330115],
    highlightTag: 'Viewpoint Café',
    shortDescription: 'One of the best place for romantic dinner and sunset.'
  },
  {
    id: 'Tiger-Cave-Temple',
    name: 'Tiger Cave Temple',
    group: 'Viewpoint',
    tags: ['Adventure','Iconic', 'Sun rise', 'Sun Set', 'Krabi view', 'Temple', 'Family', 'Friend'],
    recommended: false, 
    score: 78,  
    coordinates: [8.124202021372135, 98.92592490156702],
    highlightTag: 'Viewpoint',
    shortDescription: '1260 Stairs to the heaven and see the 360° of Krabi.'
  },
  {
    id: 'phi-phi-view',
    name: 'Phi Phi Viewpoint',
    group: 'Viewpoint',
    tags: ['Iconic', 'Solo', 'Peace', 'Couple', 'Family', 'Friend','Party'],
    recommended: false,
    score: 83, 
    coordinates: [7.7407, 98.7765],
    highlightTag: 'Viewpoint',
    shortDescription: 'Iconic islands with turquoise water and snorkeling.',
  },

  {
    id: 'Dragons-Crest',
    name: 'Dragon is Crest',
    group: 'Viewpoint',
    tags: ['Adventure', 'Hiking', 'Sun rise', 'Sea of fog','Solo','Friend'],
    recommended: false,
    score: 79,    
    coordinates: [8.097502651214272, 98.74985901980978],
    highlightTag: ['Viewpoint'],
    shortDescription: 'A good hiking trail for the sunrise and sea view.'
  },
  
 {
    id: 'Krabi-Town-Night-Market',
    name: 'Krabi Town Night Market',
    group: 'NightMarket',
    tags: ['Night market', 'Foodie', 'Thai Food','Cheap Food','Solo', 'Peace', 'Couple', 'Family', 'Friend'],
    recommended: false,  
    score: 78,
    coordinates: [8.064555978499241, 98.91725998489127],
    highlightTag: 'Starting Point',
    shortDescription: 'Cheap Local Foods and souvenirs in Krabi city.'
  },
  {
    id: 'Black-Crab-Night-Market',
    name: ' Black Crab Night Market',
    group: 'NightMarket',
    tags: ['Night market', 'Foodie', 'Thai Food','Cheap Food','Solo', 'Peace', 'Couple', 'Family', 'Friend'],
    recommended: false,  
    score: 69,  
    coordinates: [8.067168136030764, 98.91707266584214],
    highlightTag: 'Starting Point',
    shortDescription: 'Cheap Local Foods and souvenirs in Krabi city.'
  },
  {
    id: 'Khao-Khanab-Nam',
    name: 'Khao Khanab Nam',
    group: 'Local',
    tags: ['Couple', 'Family', 'Friend'],
    recommended: false, 
    score: 63,
    coordinates: [8.077547305488666, 98.92107677748173],
    highlightTag: 'Viewpoint',
    shortDescription: 'Discover the history of Krabi and enter the cave.'
  },
  {
    id: 'Ko-Klang',
    name: 'Ko Klang',
    group: 'Local',
    tags: ['Island','Couple', 'Family', 'Friend'],
    recommended: false,
    score: 64,  //'Iconic','Solo', 'Peace', 'Couple', 'Family', 'Friendly'
    coordinates: [8.041235216666491, 98.93971121317364], 
    highlightTag: 'Adventure Spot',
    shortDescription: 'Local village and thai food.'
  },
  {
    id: 'Ko-Poda-Beach',
    name: 'Ko Poda Beach',
    group: 'Beach',
    tags: ['Island','Couple', 'Family', 'Friend','Couple','4 Islands','Sunset'],
    recommended: false,
    score: 74,  //'Iconic','Solo', 'Peace', 'Couple', 'Family', 'Friendly'
    coordinates: [7.9722381,98.809101], 
    highlightTag: 'Adventure Spot',
    shortDescription: 'Local village and thai food.'
  },
];

export const GROUPS = ['All', ...new Set(LOCATIONS.map((location) => location.group))];
