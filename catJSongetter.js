// Goal: Print the cat breed name to console.

// importing fetch
const fetch = (...args) =>
  import("node-fetch").then(({ default: fetch }) => fetch(...args));

  // with Async Await

// const catJSONGetter = async () => {
//   try {
//     const cat = await fetch(
//       "https://api.thecatapi.com/v1/breeds/search?q=maine%20coon"
//     );
//     const catJSON = await cat.json();
//     console.log(catJSON[0].description);
//   } catch (error) {
//     console.error(error);
//   }
// };

// With .then syntax
const catJSONGetter = () => {
  try {
    return fetch("https://api.thecatapi.com/v1/breeds/search?q=maine%20coon")
      .then((cat) => cat.json())
      .then((catJSON) => console.log(catJSON[0].name));
  } catch (error) {
    console.error(error);
  }
};

catJSONGetter(); // => Main Coon
