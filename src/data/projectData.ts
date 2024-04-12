import { Project } from "../types/types";
import { Unsubby, ShiftworkBuddy, Spotify } from "../assets/index";

const Projects: Project[] =  [
    {
        id: 1,
        heading: "Unsubby",
        image: Unsubby,
        description: "Unsubby groups together unsubscribe links for Gmail, making it easy for you to identify and remove pesky subscriptions with just a few clicks.",
        challenges: "Gaining a solid comprehension of the Gmail API and configuring Supabase took some initial reading to kick-start my understanding. Another significant challenge was getting permission for the sensitive scopes I am using, I chose to not pursue this and have Unsubby as an invite only project.",
        website: "https://unsubby-ts.netlify.app/",
        github: "https://github.com/maxxjonesyy/unsubby",
        technology: [
            ["HTML"],
            ["Tailwind"],
            ["Typescript"],
            ["React.js"],
            ["Supabase"],
            ["Gmail API"]
        ]
    },
    {
        id: 2,
        heading: "Shiftwork Buddy",
        image: ShiftworkBuddy,
        description: "A finance app I made for my shiftwork colleagues that uses Firebase and React. It stores shift data (start and finish time) and from there calculates the hours you've worked, your tax, and expected income.",
        challenges: "The nature of this project was to accurately display net income, I spent a lot of time figuring out tax based on income earned... And the best way to go about writing the logic for this, while I'll admit it's not totally perfect it does come very close, and is always within about 3 percent of actual figures. I didn't want to flood users with loads of data if there was a lot of entries, to get around this I wrote a filter function that sorts by date, shifts that have passed/been completed are sub-foldered and likewise for shifts that are greater than a week away. I felt this was a better experience for the user only displaying relevent shifts within a weeks range.",
        website: "https://shiftworkbuddy-mj.netlify.app/",
        github: "https://github.com/maxxjonesyy/shiftwork_buddy",
        technology: [
            ["HTML"],
            ["Tailwind"],
            ["Javascript"],
            ["React.js"],
            ["Firebase"]
        ]
    },
    {
        id: 3,
        heading: "Spotify Dashboard",
        image: Spotify,
        description: "Spotify dashboard created using their free API. Showcasing user information such as playlists, top artists and recently played songs. As you would expect it also has search functionality.",
        challenges: "I had a lot of fun creating this one, I was very intrigued when I saw Spotify had a free API to use. Some challenges I ran into were hiding API keys, these were stored in a dotenv file and hosted using Netlify secrets to keep them out of the Frontend accessible code. User Authentication was another roadblock for a little while, learning how to store and push the bearer token within the API request to then be allowed access to data, was a great and very valuable learning.",
        website: "https://spotify-clone-mj.netlify.app/",
        github: "https://github.com/maxxjonesyy/spotify_clone",
        technology: [
            ["HTML"],
            ["Tailwind"],
            ["Javascript"],
            ["React.js"],
            ["SpotifyAPI"]
        ]
    }
];

export default Projects;