document.addEventListener('DOMContentLoaded', () => {
  const pageId = document.body.id;
  if (pageId === 'home') {
    initHomePage();
  } else if (pageId === 'mapPage') {
    initMapPage();
  } else if (pageId === 'favoritesPage') {
    initFavoritesPage();
  } else if (pageId === 'placeDetail') {
    initPlaceDetail();
  } else if (pageId === 'aboutPage') {
    // nothing dynamic needed
  } else if (pageId === 'tripsPage') {
    // nothing dynamic needed
  }
});

function createOption(value, text) {
  const opt = document.createElement('option');
  opt.value = value;
  opt.textContent = text;
  return opt;
}

function initHomePage() {
  // Populate filters
  const regionSelect = document.getElementById('region-filter');
  const categorySelect = document.getElementById('category-filter');
  const uniqueRegions = Array.from(new Set(places.map(p => p.region))).sort();
  uniqueRegions.forEach(region => regionSelect.appendChild(createOption(region, region)));
  const uniqueCategories = Array.from(new Set(places.flatMap(p => p.categories))).sort();
  uniqueCategories.forEach(cat => categorySelect.appendChild(createOption(cat, cat)));

  // Render all places initially
  renderPlacesList(document.getElementById('places-container'), places);

  // Listen to filters
  regionSelect.addEventListener('change', applyFilters);
  categorySelect.addEventListener('change', applyFilters);

  function applyFilters() {
    const selectedRegion = regionSelect.value;
    const selectedCategory = categorySelect.value;
    const filtered = filterPlaces(selectedRegion, selectedCategory);
    renderPlacesList(document.getElementById('places-container'), filtered);
  }
}

function renderPlacesList(container, list) {
  container.innerHTML = '';
  if (list.length === 0) {
    container.innerHTML = '<p>No places match your filters.</p>';
    return;
  }
  list.forEach(place => {
    const card = document.createElement('div');
    card.className = 'card';

    const img = document.createElement('img');
    img.src = place.image;
    img.alt = place.name;

    const body = document.createElement('div');
    body.className = 'card-body';

    const title = document.createElement('h3');
    title.textContent = place.name;

    const tagsDiv = document.createElement('div');
    tagsDiv.className = 'tags';
    const regionTag = document.createElement('span');
    regionTag.className = 'tag';
    regionTag.textContent = place.region;
    tagsDiv.appendChild(regionTag);
    place.categories.forEach(cat => {
      const tag = document.createElement('span');
      tag.className = 'tag';
      tag.textContent = cat;
      tagsDiv.appendChild(tag);
    });

    const desc = document.createElement('p');
    desc.textContent = place.description;

    const actions = document.createElement('div');
    actions.className = 'card-actions';

    const detailLink = document.createElement('a');
    detailLink.href = 'place.html?id=' + place.id;
    detailLink.textContent = 'Details';

    const favButton = document.createElement('button');
    favButton.textContent = isFavorite(place.id) ? 'Saved' : 'Save';
    if (isFavorite(place.id)) {
      favButton.classList.add('saved');
    }
    favButton.addEventListener('click', () => {
      toggleFavorite(place.id);
      favButton.textContent = isFavorite(place.id) ? 'Saved' : 'Save';
      if (isFavorite(place.id)) {
        favButton.classList.add('saved');
      } else {
        favButton.classList.remove('saved');
      }
    });

    actions.appendChild(detailLink);
    actions.appendChild(favButton);

    body.appendChild(title);
    body.appendChild(tagsDiv);
    body.appendChild(desc);
    body.appendChild(actions);

    card.appendChild(img);
    card.appendChild(body);
    container.appendChild(card);
  });
}

function initMapPage() {
  // Populate filters on map page
  const regionSelect = document.getElementById('map-region-filter');
  const categorySelect = document.getElementById('map-category-filter');
  const uniqueRegions = Array.from(new Set(places.map(p => p.region))).sort();
  uniqueRegions.forEach(region => regionSelect.appendChild(createOption(region, region)));
  const uniqueCategories = Array.from(new Set(places.flatMap(p => p.categories))).sort();
  uniqueCategories.forEach(cat => categorySelect.appendChild(createOption(cat, cat)));

  const map = L.map('map').setView([40.409264, 49.867092], 6);

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 18,
    attribution: '&copy; <a href="https://www.openstreetmap.org">OpenStreetMap</a>'
  }).addTo(map);

  let markers = [];

  function addMarkers(list) {
    markers.forEach(m => map.removeLayer(m));
    markers = [];
    list.forEach(place => {
      const marker = L.marker([place.lat, place.lng]).addTo(map);
      marker.on('click', () => {
        // Create popup content
        const popup = document.createElement('div');
        popup.style.maxWidth = '250px';
        const img = document.createElement('img');
        img.src = place.image;
        img.alt = place.name;
        img.style.width = '100%';
        img.style.height = '120px';
        img.style.objectFit = 'cover';
        const title = document.createElement('h4');
        title.textContent = place.name;
        title.style.margin = '5px 0';
        const desc = document.createElement('p');
        desc.textContent = place.description;
        desc.style.margin = '5px 0';
        const link = document.createElement('a');
        link.href = 'place.html?id=' + place.id;
        link.textContent = 'Details';
        link.style.color = '#0083C9';
        link.style.display = 'block';
        link.style.marginTop = '5px';
        const favButton = document.createElement('button');
        favButton.textContent = isFavorite(place.id) ? 'Saved' : 'Save';
        favButton.style.padding = '5px 10px';
        favButton.style.marginTop = '5px';
        favButton.style.border = 'none';
        favButton.style.borderRadius = '4px';
        favButton.style.color = '#fff';
        favButton.style.cursor = 'pointer';
        favButton.style.backgroundColor = isFavorite(place.id) ? '#00A651' : '#E4002B';
        favButton.addEventListener('click', (e) => {
          e.preventDefault();
          toggleFavorite(place.id);
          favButton.textContent = isFavorite(place.id) ? 'Saved' : 'Save';
          favButton.style.backgroundColor = isFavorite(place.id) ? '#00A651' : '#E4002B';
        });
        popup.appendChild(img);
        popup.appendChild(title);
        popup.appendChild(desc);
        popup.appendChild(link);
        popup.appendChild(favButton);
        marker.bindPopup(popup);
        marker.openPopup();
      });
      markers.push(marker);
    });
  }

  // Initial markers
  addMarkers(places);

  // Filter markers on change
  regionSelect.addEventListener('change', applyFilters);
  categorySelect.addEventListener('change', applyFilters);

  function applyFilters() {
    const selectedRegion = regionSelect.value;
    const selectedCategory = categorySelect.value;
    const filtered = filterPlaces(selectedRegion, selectedCategory);
    addMarkers(filtered);
  }
}

function initFavoritesPage() {
  const container = document.getElementById('favorites-container');
  renderFavorites(container);
}

function renderFavorites(container) {
  container.innerHTML = '';
  const favs = getFavorites();
  if (favs.length === 0) {
    container.innerHTML = '<p>You haven\'t saved any places yet. Use the save buttons on map or lists to add favorites.</p>';
    return;
  }
  const favPlaces = places.filter(p => favs.includes(p.id));
  favPlaces.forEach(place => {
    const card = document.createElement('div');
    card.className = 'card';
    const img = document.createElement('img');
    img.src = place.image;
    img.alt = place.name;
    const body = document.createElement('div');
    body.className = 'card-body';
    const title = document.createElement('h3');
    title.textContent = place.name;
    const tagsDiv = document.createElement('div');
    tagsDiv.className = 'tags';
    const regionTag = document.createElement('span');
    regionTag.className = 'tag';
    regionTag.textContent = place.region;
    tagsDiv.appendChild(regionTag);
    place.categories.forEach(cat => {
      const tag = document.createElement('span');
      tag.className = 'tag';
      tag.textContent = cat;
      tagsDiv.appendChild(tag);
    });
    const desc = document.createElement('p');
    desc.textContent = place.description;
    const actions = document.createElement('div');
    actions.className = 'card-actions';
    const detailLink = document.createElement('a');
    detailLink.href = 'place.html?id=' + place.id;
    detailLink.textContent = 'Details';
    const removeButton = document.createElement('button');
    removeButton.textContent = 'Remove';
    removeButton.addEventListener('click', () => {
      toggleFavorite(place.id);
      renderFavorites(container);
    });
    actions.appendChild(detailLink);
    actions.appendChild(removeButton);
    body.appendChild(title);
    body.appendChild(tagsDiv);
    body.appendChild(desc);
    body.appendChild(actions);
    card.appendChild(img);
    card.appendChild(body);
    container.appendChild(card);
  });
}

function initPlaceDetail() {
  const params = new URLSearchParams(window.location.search);
  const id = parseInt(params.get('id'));
  const place = getPlaceById(id);
  if (!place) return;
  const imgEl = document.getElementById('detail-img');
  const titleEl = document.getElementById('detail-title');
  const regionEl = document.getElementById('detail-region');
  const catsEl = document.getElementById('detail-categories');
  const descEl = document.getElementById('detail-description');
  const highlightsEl = document.getElementById('detail-highlights');
  const infoEl = document.getElementById('detail-info');
  const favBtn = document.getElementById('favorite-btn');
  // Populate
  imgEl.src = place.image;
  imgEl.alt = place.name;
  titleEl.textContent = place.name;
  regionEl.textContent = place.region;
  catsEl.innerHTML = '';
  place.categories.forEach(cat => {
    const span = document.createElement('span');
    span.className = 'tag';
    span.textContent = cat;
    catsEl.appendChild(span);
  });
  descEl.textContent = place.description;
  highlightsEl.innerHTML = '';
  place.highlights.forEach(h => {
    const li = document.createElement('li');
    li.textContent = h;
    highlightsEl.appendChild(li);
  });
  infoEl.innerHTML = `
    <li><strong>Address:</strong> ${place.address}</li>
    <li><strong>Opening Hours:</strong> ${place.openingHours}</li>
    <li><strong>Price Level:</strong> ${place.priceLevel}</li>
  `;
  favBtn.textContent = isFavorite(place.id) ? 'Saved' : 'Save to Favorites';
  if (isFavorite(place.id)) {
    favBtn.classList.add('saved');
  }
  favBtn.addEventListener('click', () => {
  toggleFavorite(place.id);
    favBtn.textContent = isFavorite(place.id) ? 'Saved' : 'Save to Favorites';
    if (isFavorite(place.id)) {
      favBtn.classList.add('saved');
    } else {
      favBtn.classList.remove('saved');
    }
  });
}
