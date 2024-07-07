// will implement later

// // src/fetchAlbums.js
// const fetch = require('node-fetch');

// async function getSpotifyAccessToken() {
//   const clientId = '6457eb332a3e45a4b52f4f0db0db0b47';
//   const clientSecret = '8062a3d10df04572a7be217c65899b9f';
//   const authString = Buffer.from(`${clientId}:${clientSecret}`).toString('base64');

//   const response = await fetch('https://accounts.spotify.com/api/token', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/x-www-form-urlencoded',
//       'Authorization': `Basic ${authString}`,
//     },
//     body: 'grant_type=client_credentials',
//   });

//   const data = await response.json();
//   return data.access_token;
// }

// async function fetchAlbums() {
//   const accessToken = await getSpotifyAccessToken();

//   const response = await fetch('https://api.spotify.com/v1/me/albums', {
//     headers: {
//       'Authorization': `Bearer ${accessToken}`,
//     },
//   });

//   const data = await response.json();
//   return data.items.map(item => item.album);
// }

// module.exports = fetchAlbums;
