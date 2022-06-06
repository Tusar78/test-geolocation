const displayPosition = document.querySelector(".card__body");

const getLocation = () => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition, showError);
  } else {
    displayPosition.innerHTML = `
      <p class="text-red-500">Geolocation is not supported by this browser.</p>
    `;
  }
};

const showPosition = (position) => {
  displayPosition.innerHTML = `
    <p class="card__text">latitude : <span class="card__text--display">${position.coords.latitude}</span></p>
    <p class="card__text">longitude : <span class="card__text--display">${position.coords.longitude}</span></p>
  `;
};

const showError = (error) => {
  switch (error.code) {
    case error.PERMISSION_DENIED:
      displayPosition.innerHTML = `
        <p class="text-red-500">User denied the request for Geolocation.</p>
      `;
      break;
    case error.POSITION_UNAVAILABLE:
      displayPosition.innerHTML = `
      <p class="text-red-500">Location information is unavailable.</p>
    `;
      break;
    case error.TIMEOUT:
      displayPosition.innerHTML = `
      <p class="text-red-500">The request to get user location timed out.</p>
    `;
      break;
    case error.UNKNOWN_ERROR:
      displayPosition.innerHTML = `
      <p class="text-red-500">An unknown error occurred.</p>
    `;
      break;
  }
};
