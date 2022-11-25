const clientId = "58482e5f3d5c441e9288469eb713ca2e";
const clientSecret = "62fbf749e5794b4db12665b3342926ac";
const redirectUri = "https://www.jaden-hoenes.github.io/spotifyEmbed/";

console.log('loaded');

const formData = new FormData();
formData.append("grant_type", "client_credentials")

const apiToken = fetch("https://accounts.spotify.com/api/token", {
  method: "POST",
  headers: {
    Authorization: `Basic ${btoa(`${clientId}:${clientSecret}`)}`,
    Content-Type: "application/x-www-form-urlencoded"
  },
  body: formData,
}).then(res => res.json());

console.log(apiToken);
