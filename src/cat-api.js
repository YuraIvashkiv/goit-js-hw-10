const API_KEY = "live_aREgESGKEg14yGujzwJ7hCdukQBm1j3x2BshFCVyWS75bgzJPj3wCqqzbe0TrawT";
const BREEDS_URL = "https://api.thecatapi.com/v1/breeds";
const CAT_URL = "https://api.thecatapi.com/v1/images/search";

function fetchBreeds() {
  return fetch(`${BREEDS_URL}?api_key=${API_KEY}`)
    .then((res) => {
      if (!res.ok) {
        throw new Error("Failed to fetch breeds");
      }
      return res.json();
    })
    .then((breeds) => {
      return breeds.map((breed) => {
        return {
          id: breed.id,
          name: breed.name,
        };
      });
    }).catch(err=>console.log(err.message));
}

function fetchCatByBreed(breedId) {
  return fetch(`${CAT_URL}?api_key=${API_KEY}&breed_ids=${breedId}`)
    .then((res) => {
      if (!res.ok) {
        throw new Error("Failed to fetch cat");
      }
      return res.json();
    })
    .then((data) => {
      const catData = data[0];
      return {
        imageUrl: catData.url,
        breedName: catData.breeds[0].name,
        description: catData.breeds[0].description,
        temperament: catData.breeds[0].temperament,
      };
    }).catch(err=>console.log(err.message));
}

export { fetchBreeds, fetchCatByBreed };









