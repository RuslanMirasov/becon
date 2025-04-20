ymaps.ready(init);

function init() {
  const map = new ymaps.Map('map', {
    center: [54.989347, 73.368221],
    zoom: 12,
    controls: ['zoomControl'],
  });

  const addressElements = document.querySelectorAll('[data-adress]');
  const placemarks = [];

  addressElements.forEach(el => {
    const lat = el.dataset.lat;
    const lng = el.dataset.lng;

    if (lat && lng) {
      const coords = [parseFloat(lat), parseFloat(lng)];

      const placemark = new ymaps.Placemark(
        coords,
        {
          balloonContent: el.textContent.trim(),
        },
        {
          iconLayout: 'default#image',
          iconImageHref: '../assets/img/svg/pin.svg',
          iconImageSize: [30, 40],
          iconImageOffset: [-15, -40],
        }
      );

      map.geoObjects.add(placemark);
      placemarks.push({ el, placemark });

      el.addEventListener('click', () => {
        map.setCenter(coords, 16, { duration: 0 });
      });
    }
  });

  // ==============================
  // Покраска карты в серый (оставляя пины цветными)
  // ==============================

  setTimeout(() => {
    const mapContainer = document.getElementById('map');
    console.log('===== Содержимое #map: =====');
    console.dir(mapContainer);

    const allChildren = mapContainer.querySelectorAll('*');
    allChildren.forEach((el, i) => {
      const classList = el.className ? el.className.toString() : '';
      console.log(`${i + 1}: <${el.tagName.toLowerCase()}>.${classList}`);
    });
  }, 1500);

  // ==============================
}
