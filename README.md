# SpotifyAPI-SPA (Node-with-angular)

--> I have created a Single Page Application (SPA) that allows a user to search for an artist and display album details using the Spotify API.

--> AngularJS as your front-end and Node.js as your back-end. All API calls has routed through the Node.js application. the front-end has not directly connect to any external APIs.

Spotify API

https://developer.spotify.com/web-api/endpoint-reference/

Searching

Display a search box. Upon entering a search query, the application should query the Spotify API.

the search results has include: 
- Artist Name 
- Artist Image (if no image is availble use a placeholder image) 
- Genres ( if available ) 
*When genres are availabe display them seperated by a '|' (ex Pop | Dance | Rock)

Details

--> each search result  have a details button. Upon clicking that button, the application should get album details for the artist selected. Here, results should not contain duplicates. The application has NOT navigated to a new page/new url - everything has loaded on the main localhost page.

the details display has include: 
- Artist Name (only once) 
- Artist Image (only once - if no image is availble use a placeholder image) 
- Album Name 
- Album Image ( if no image is availble use a placeholder image)

Created a custom directive to render the Details portion.
