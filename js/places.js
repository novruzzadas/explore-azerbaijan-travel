const places = [
  {
    "id": 1,
    "name": "Old City (Icherisheher)",
    "region": "Baku",
    "categories": [
      "Historical places",
      "Views"
    ],
    "description": "The walled old town of Baku with narrow alleys, mosques and the Shirvanshah's Palace.",
    "highlights": [
      "Maiden Tower",
      "Shirvanshah's Palace",
      "Narrow cobbled streets"
    ],
    "address": "Icherisheher, Baku",
    "openingHours": "Open 24/7",
    "priceLevel": "Free",
    "lat": 40.409264,
    "lng": 49.867092,
    "image": "https://source.unsplash.com/600x400/?baku,old-city"
  },
  {
    "id": 2,
    "name": "Flame Towers",
    "region": "Baku",
    "categories": [
      "Views"
    ],
    "description": "Modern skyscrapers resembling flames dominate the Baku skyline.",
    "highlights": [
      "LED displays at night",
      "Panoramic city views"
    ],
    "address": "Flame Towers, Baku",
    "openingHours": "Open 24/7",
    "priceLevel": "Free (exterior)",
    "lat": 40.3595,
    "lng": 49.8306,
    "image": "https://source.unsplash.com/600x400/?baku,flame-towers"
  },
  {
    "id": 3,
    "name": "Nizami Street",
    "region": "Baku",
    "categories": [
      "Cafes",
      "Restaurants"
    ],
    "description": "Popular pedestrian street lined with boutiques, cafés and restaurants.",
    "highlights": [
      "Shopping",
      "Street cafés",
      "People watching"
    ],
    "address": "Nizami Street, Baku",
    "openingHours": "Open 24/7",
    "priceLevel": "Varies",
    "lat": 40.3723,
    "lng": 49.8458,
    "image": "https://source.unsplash.com/600x400/?baku,street"
  },
  {
    "id": 4,
    "name": "Dolma Restaurant",
    "region": "Baku",
    "categories": [
      "Restaurants"
    ],
    "description": "Traditional Azerbaijani cuisine served in a cozy setting.",
    "highlights": [
      "Plov",
      "Dolma",
      "Warm atmosphere"
    ],
    "address": "Fountains Square, Baku",
    "openingHours": "10:00 - 23:00",
    "priceLevel": "$$",
    "lat": 40.3756,
    "lng": 49.8397,
    "image": "https://source.unsplash.com/600x400/?azerbaijan,food"
  },
  {
    "id": 5,
    "name": "Tufandag Mountain Resort",
    "region": "Gabala",
    "categories": [
      "Nature",
      "Views",
      "Hotels"
    ],
    "description": "A mountain resort offering cable car rides and skiing in winter.",
    "highlights": [
      "Cable car ride",
      "Skiing (winter)",
      "Mountain scenery"
    ],
    "address": "Tufandag, Gabala",
    "openingHours": "08:00 - 20:00",
    "priceLevel": "$$",
    "lat": 40.98139,
    "lng": 47.84583,
    "image": "https://source.unsplash.com/600x400/?gabala,mountains"
  },
  {
    "id": 6,
    "name": "Nohur Lake",
    "region": "Gabala",
    "categories": [
      "Nature"
    ],
    "description": "A serene lake with stunning mountain backdrop, ideal for boat rides and picnics.",
    "highlights": [
      "Boat rides",
      "Mountain backdrop",
      "Picnic spots"
    ],
    "address": "Nohur Lake, Gabala",
    "openingHours": "08:00 - 19:00",
    "priceLevel": "Free",
    "lat": 40.8929,
    "lng": 47.8531,
    "image": "https://source.unsplash.com/600x400/?lake,gabala"
  },
  {
    "id": 7,
    "name": "Palace of Sheki Khans",
    "region": "Sheki",
    "categories": [
      "Historical places",
      "Museums"
    ],
    "description": "An 18th-century palace renowned for its stained glass windows and frescoes.",
    "highlights": [
      "Stained glass windows",
      "Frescoes",
      "UNESCO World Heritage Site"
    ],
    "address": "Sheki Khans Palace, Sheki",
    "openingHours": "09:00 - 18:00",
    "priceLevel": "$",
    "lat": 41.2038,
    "lng": 47.175,
    "image": "https://source.unsplash.com/600x400/?sheki,palace"
  },
  {
    "id": 8,
    "name": "Sheki Caravanserai",
    "region": "Sheki",
    "categories": [
      "Hotels",
      "Historical places"
    ],
    "description": "Historic inn from the Silk Road era featuring stone courtyards and craft shops.",
    "highlights": [
      "Historic architecture",
      "Courtyard",
      "Local crafts"
    ],
    "address": "Sheki Caravanserai, Sheki",
    "openingHours": "10:00 - 22:00",
    "priceLevel": "$$",
    "lat": 41.205,
    "lng": 47.17,
    "image": "https://source.unsplash.com/600x400/?sheki,caravanserai"
  },
  {
    "id": 9,
    "name": "Nizami Mausoleum",
    "region": "Ganja",
    "categories": [
      "Historical places"
    ],
    "description": "Mausoleum dedicated to the great poet Nizami Ganjavi.",
    "highlights": [
      "Mausoleum",
      "Garden",
      "Poetic heritage"
    ],
    "address": "Nizami Mausoleum, Ganja",
    "openingHours": "09:00 - 19:00",
    "priceLevel": "Free",
    "lat": 40.7151,
    "lng": 46.348,
    "image": "https://source.unsplash.com/600x400/?ganja,mausoleum"
  },
  {
    "id": 10,
    "name": "Lake Goygol",
    "region": "Ganja",
    "categories": [
      "Nature"
    ],
    "description": "A breathtaking mountain lake known for its clear blue water and surrounding forest.",
    "highlights": [
      "Clear blue water",
      "Hiking trails",
      "Picnicking"
    ],
    "address": "Goygol National Park",
    "openingHours": "08:00 - 20:00",
    "priceLevel": "$",
    "lat": 40.5583,
    "lng": 46.331,
    "image": "https://source.unsplash.com/600x400/?goygol,lake"
  },
  {
    "id": 11,
    "name": "Lankaran Lighthouse",
    "region": "Lankaran",
    "categories": [
      "Historical places",
      "Views"
    ],
    "description": "A lighthouse on the Caspian Sea coast offering scenic views.",
    "highlights": [
      "Sea views",
      "Historical site"
    ],
    "address": "Lankaran Lighthouse, Lankaran",
    "openingHours": "08:00 - 19:00",
    "priceLevel": "Free",
    "lat": 38.7543,
    "lng": 48.8506,
    "image": "https://source.unsplash.com/600x400/?lankaran,sea"
  },
  {
    "id": 12,
    "name": "Momine Khatun Mausoleum",
    "region": "Nakhchivan",
    "categories": [
      "Historical places",
      "Museums"
    ],
    "description": "A 12th-century mausoleum and landmark of Islamic architecture.",
    "highlights": [
      "Seljuk architecture",
      "Brick patterns",
      "Historical significance"
    ],
    "address": "Momine Khatun Mausoleum, Nakhchivan",
    "openingHours": "09:00 - 18:00",
    "priceLevel": "$",
    "lat": 39.2089,
    "lng": 45.4122,
    "image": "https://source.unsplash.com/600x400/?nakhchivan,mausoleum"
  },
  {
    "id": 13,
    "name": "Shusha Fortress",
    "region": "Karabakh",
    "categories": [
      "Historical places",
      "Views"
    ],
    "description": "Ancient fortress walls overlooking the town of Shusha.",
    "highlights": [
      "Fortress walls",
      "Panoramic views",
      "Historical significance"
    ],
    "address": "Shusha, Karabakh",
    "openingHours": "09:00 - 18:00",
    "priceLevel": "Free",
    "lat": 39.758,
    "lng": 46.7485,
    "image": "https://source.unsplash.com/600x400/?shusha,fortress"
  },
  {
    "id": 14,
    "name": "Shahdag National Park",
    "region": "Quba",
    "categories": [
      "Nature"
    ],
    "description": "A national park in the Greater Caucasus with diverse wildlife and hiking trails.",
    "highlights": [
      "Hiking",
      "Wildlife",
      "Mountain views"
    ],
    "address": "Shahdag National Park, Quba",
    "openingHours": "08:00 - 20:00",
    "priceLevel": "$",
    "lat": 41.2143,
    "lng": 48.278,
    "image": "https://source.unsplash.com/600x400/?shahdag,park"
  },
  {
    "id": 15,
    "name": "Shahdag Mountain Resort",
    "region": "Gusar",
    "categories": [
      "Nature",
      "Hotels"
    ],
    "description": "A year-round mountain resort offering skiing, snowboarding and summer hikes.",
    "highlights": [
      "Skiing & snowboarding",
      "Cable car",
      "Mountain resort"
    ],
    "address": "Shahdag, Gusar",
    "openingHours": "08:00 - 21:00",
    "priceLevel": "$$$",
    "lat": 41.248,
    "lng": 48.167,
    "image": "https://source.unsplash.com/600x400/?shahdag,resort"
  },
  {
    "id": 16,
    "name": "Khinaliq Village",
    "region": "Khinaliq",
    "categories": [
      "Nature",
      "Historical places"
    ],
    "description": "One of the highest and most ancient mountain villages in the Caucasus.",
    "highlights": [
      "Stone houses",
      "Ancient culture",
      "Mountain scenery"
    ],
    "address": "Khinaliq, Quba District",
    "openingHours": "Open 24/7",
    "priceLevel": "Free",
    "lat": 41.17806,
    "lng": 48.12667,
    "image": "https://source.unsplash.com/600x400/?khinaliq,village"
  },
  {
    "id": 17,
    "name": "Ateshgah Fire Temple",
    "region": "Absheron",
    "categories": [
      "Historical places",
      "Museums"
    ],
    "description": "An ancient temple of fire worship built over natural gas vents.",
    "highlights": [
      "Eternal flames",
      "Zoroastrian temple",
      "Museum displays"
    ],
    "address": "Ateshgah of Baku, Surakhani, Absheron",
    "openingHours": "09:00 - 18:00",
    "priceLevel": "$",
    "lat": 40.4037,
    "lng": 49.9213,
    "image": "https://source.unsplash.com/600x400/?ateshgah,fire-temple"
  }
];

function getFavorites() {
  try {
    return JSON.parse(localStorage.getItem('favorites')) || [];
  } catch (e) {
    return [];
  }
}

function saveFavorites(favs) {
  localStorage.setItem('favorites', JSON.stringify(favs));
}

function toggleFavorite(id) {
  let favs = getFavorites();
  const index = favs.indexOf(id);
  if (index >= 0) {
    favs.splice(index, 1);
  } else {
    favs.push(id);
  }
  saveFavorites(favs);
}

function isFavorite(id) {
  return getFavorites().includes(id);
}

function getPlaceById(id) {
  return places.find(p => p.id === id);
}

// Filter places by region and category
function filterPlaces(region, category) {
  return places.filter(p => {
    const regionMatch = !region || region === 'all' || p.region === region;
    const categoryMatch = !category || category === 'all' || p.categories.includes(category);
    return regionMatch && categoryMatch;
  });
}
