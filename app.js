const redirectUri = "https://www.jaden-hoenes.github.io/spotifyEmbed/";

console.log('loaded');

const apiToken = fetch("https://accounts.spotify.com/api/token", {
  method: "POST",
  headers: {
    Authorization: `Basic ${btoa(`${clientId}:${clientSecret}`)}`,
    "Content-Type": "application/x-www-form-urlencoded"
  },
  body: JSON.stringify({
    grant_type: "client_credentials"
  }),
}).then(res => res.json());

console.log(apiToken);
