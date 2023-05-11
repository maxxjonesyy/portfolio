const projectData = [
  {
    heading: "Finance WebApp",
    subheading: "Shiftwork Buddy",
    src: "/projects/shiftworkbuddy.jpg",
    alt: "shiftworkbuddy project",
    description:
      "A finance app I made for my shiftwork colleagues that uses Firebase and React. It stores shift data (start and finish time) and from there calculates the hours you've worked, your tax, and expected income.",
    challenges:
      "The nature of this project was to accurately display net income, I spent a lot of time figuring out tax based on income earned... And the best way to go about writing the logic for this, while I'll admit it's not totally perfect it does come very close, and is always within about 3 percent of actual figures. I didn't want to flood users with loads of data if there was a lot of entries, to get around this I wrote a filter function that sorts by date, shifts that have passed/been completed are sub-foldered and likewise for shifts that are greater than a week away. I felt this was a better experience for the user only displaying relevent shifts within a weeks range.",
    website: "https://shiftworkbuddy-mj.netlify.app/",
    github: "https://github.com/maxxjonesyy/shiftwork_buddy",
    technology: [
      ["HTML"],
      ["Tailwind"],
      ["Javascript"],
      ["React.js"],
      ["Firebase"],
    ],
  },
  {
    heading: "Ecommerce Store",
    subheading: "Fuji Apparel",
    src: "/projects/ecommerce.jpg",
    alt: "ecommerce project",
    description:
      "An Ecommerce store with complete cart functionality minus payment implementation. React State and local storage were used for the cart system. This project taught me a lot about React, some things include - State, custom Hooks and React-Router.",
    challenges:
      "Given the project, I decided to learn some Redux and try Contentful (a headless CMS) given there would be lots of product images for this website. Lots of document reading for the intial setup but after that it was relatively smooth sailing. I later realised my cart was emptying on refresh, I used a persistedReducer in Redux to keep the cart stored upon refreshing... Another way I would usually do this without Redux is on state change, store items in either local or session storage.",
    website: "https://ecommercestore-mj.netlify.app/",
    github: "https://github.com/maxxjonesyy/fuji_apparel_ecommerce",
    technology: [
      ["HTML"],
      ["Tailwind"],
      ["Javascript"],
      ["React.js"],
      ["Firebase"],
      ["React Router"],
      ["Redux"],
      ["Contentful"],
      ["SweetAlert2"],
      ["Emailjs"],
    ],
  },
  {
    heading: "Chat app",
    subheading: "Maxcord",
    src: "/projects/maxcord.jpg",
    alt: "maxcord project",
    description:
      "With inspiration from an app I use all the time, Discord. I wanted to create a similar thing in React, I used contextAPI to pass around global state, react state to store and loop over channels and messages in realtime, and firebase for the database and user authentication.",
    challenges:
      "This was one of my first larger projects using Firebase, It was right as v9 came out so there was lots of conflicting information on how to do things, I spent a very long time reading up on best practices and initial setup. I learned in depth how to properly use 'useEffect' to my advantage as well as Firebase's 'OnSnapshot' being that it was a live messaging app and needed to function as so.",
    website: "https://maxcord-mj.netlify.app/",
    github: "https://github.com/maxxjonesyy/chat_app",
    technology: [
      ["HTML"],
      ["SASS"],
      ["Javascript"],
      ["React.js"],
      ["Firebase"],
      ["ContextAPI"],
    ],
  },
  {
    heading: "Spotify Clone",
    subheading: "Spotify",
    src: "/projects/spotifyclone.jpg",
    alt: "spotify clone project",
    description:
      "Small web app I created with the Spotify API. It's a very simple application that displays some of the users information [Playlists, Top artists, Recently played]. A search feature has also been incorporated displaying [Top search, Songs, Recommended artists, Top search albums], TailwindCSS and ReactJS were used on this project.",
    challenges:
      "I had a lot of fun creating this one, I was very intrigued when I saw Spotify had a free API to use. Some challenges I ran into were hiding API keys, these were stored in a dotenv file and hosted using Netlify secrets to keep them out of the Frontend accessible code. User Authentication was another roadblock for a little while, learning how to store and push the bearer token within the API request to then be allowed access to data, was a great and very valuable learning.",
    website: "https://spotify-clone-mj.netlify.app/",
    github: "https://github.com/maxxjonesyy/spotify_clone",
    technology: [
      ["HTML"],
      ["Tailwind"],
      ["Javascript"],
      ["React.js"],
      ["SpotifyAPI"],
    ],
  },
  {
    heading: "Interior Design Site",
    subheading: "Farrugia Design",
    src: "/projects/farrugiadesign.jpg",
    alt: "farrugia design project",
    description:
      "An interior design website i created for a family member. This project was my introductory to React and showed me the world of NPM modules, some i used on this project were, Material UI, React Router DOM, SweetAlert, EmailJS, SlickCarousel.",
    challenges:
      "I originally was using an Instagram API to display the clients Instagram feed within the news page but it stopped working. After countless hours of reading around I realised they've revoked the public API and I couldn't seem to get a work-around that I was completely happy with. I got a third party program to display it but I will revisit it one day and aim for a cleaner solution.",
    website: "https://farrugiadesign.netlify.app/",
    github: "https://github.com/maxxjonesyy/farrugia_design_react",
    technology: [
      ["HTML"],
      ["CSS"],
      ["Javascript"],
      ["React.js"],
      ["SlickCarousel"],
      ["Emailjs"],
      ["MaterialUI"],
      ["SweetAlert"],
    ],
  },
];

export default projectData;
