# Pagination Project

## Overview
This project demonstrates how to fetch, display, and paginate data from an API using JavaScript, with a focus on tech-themed content and a command prompt (cmd) inspired UI.

## Features
- **Paginated API Fetching:** Uses the JSONPlaceholder API to fetch posts, displaying 10 per page.
- **Rate Limiting Simulation:** Enforces a 2-second delay between API requests. If the user clicks too quickly, a rate limit message is logged.
- **Tech-Themed Content:** All post titles and bodies are replaced with technology-related topics and descriptions.
- **Simulated Flair and Feature APIs:** Each post is assigned a random tech-themed flair and feature, simulating additional API calls.
- **Command Prompt UI:** The site is styled to look like a Windows command prompt, with neon green text, hot pink accents, monospace font, and a blinking cursor.
- **Responsive Pagination Controls:** Previous/Next buttons allow navigation between pages, with the Previous button disabled on the first page.
- **Error Handling:** API errors are caught and logged to the console.

## File Structure
- `index.html` — Main HTML file, includes:
  - A styled container mimicking a command prompt.
  - Posts display area and pagination buttons.
- `pagination.js` — JavaScript logic for:
  - Fetching and paginating posts.
  - Simulating flair and feature APIs.
  - Replacing post content with tech topics.
  - Rendering posts and handling rate limits.
- `README.md` — Project documentation.

## How It Works
1. **Initial Load:**
   - The first page of posts is fetched and displayed with tech content, flair, and feature.
2. **Pagination:**
   - Clicking Next/Previous fetches the next/previous set of posts (10 per page).
   - If a request is made within 2 seconds of the last, a rate limit message is shown in the console.
3. **Tech Content:**
   - Each post is given a tech-related title and body, a random flair (e.g., "💻 Dev Pick"), and a random feature (e.g., "🤖 AI Powered").
4. **UI:**
   - The UI uses a black background, neon green text, hot pink accents, and a blinking cursor for a cmd effect.

## Customization
- To change tech topics, edit the `techTitles` and `techBodies` arrays in `pagination.js`.
- To change flairs or features, edit the `flairs` and `features` arrays in `pagination.js`.
- To adjust rate limiting, modify the timeout in `fetchPosts`.

## Running the Project
1. Open `index.html` in your browser.
2. Use the Previous/Next buttons to navigate pages.
3. View the console for API responses and rate limit messages.

## Dependencies
- No external dependencies. Uses only vanilla JavaScript and HTML.

## Credits
- [JSONPlaceholder](https://jsonplaceholder.typicode.com/) for the sample API.

---
Enjoy exploring tech topics with a retro command prompt vibe!