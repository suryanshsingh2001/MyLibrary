# MyLibrary 📚

MyLibrary is a modern and user-friendly library management web application built with React.js, Vite, Tailwind CSS, and powered by the Google API for fetching book data. It also incorporates Auth0 for secure authentication and session management, Font Awesome icons for styling, Axios for API calls, React Infinite Scroll for lazy loading, Toastify for notification messages, and `react-autocomplete` for search suggestions.



https://github.com/suryanshsingh2001/MyLibrary/assets/80690023/175a25aa-e719-4210-abef-6f1f119b8d11


🔗 [Live Link](https://mylibrary01.vercel.app/)

## Table of Contents
- [MyLibrary 📚](#mylibrary-)
  - [Table of Contents](#table-of-contents)
  - [Tech Stack 🛠️](#tech-stack-️)
  - [Features ✅](#features-)
  - [📦 Project Dockerization](#-project-dockerization)
  - [Getting Started 🚀](#getting-started-)
  - [Contributing 🤝](#contributing-)
  - [Code of Conduct 📜](#code-of-conduct-)
  - [Hacktoberfest Contribution 🎃](#hacktoberfest-contribution-)
  - [Security 🔒](#security-)
  - [Feedback 💬](#feedback-)
  - [License 📝](#license-)

## Tech Stack 🛠️

- [Vite](https://vitejs.dev/) - Fast React.js build tool.
- [React.js](https://reactjs.org/) - JavaScript library for building user interfaces.
- [Tailwind CSS](https://tailwindcss.com/) - A utility-first CSS framework for fast and customizable styling.
- [Google Books API](https://developers.google.com/books/docs/overview) - Used as the endpoint for book data.
- [Auth0](https://auth0.com/) - Authentication and session management.
- [Font Awesome](https://fontawesome.com/) - Icon library for styling.
- [Axios](https://axios-http.com/) - Promise-based HTTP client for API calls.
- [React Infinite Scroll](https://github.com/ankeetmaini/react-infinite-scroll-component) - Infinite scrolling component for efficient pagination.
- [Toastify](https://fkhadra.github.io/react-toastify/introduction/) - React notification library for user feedback.
- [react-autocomplete](https://github.com/reactjs/react-autocomplete) - React component for search suggestions.
- [Vercel](https://vercel.com/) - Deployment platform for hosting web applications.

---

## Features ✅
   - [x] An aesthetically pleasing and optimized loading animation.
   - [x] New user signup and login, using Proper authentication and sessions (Sign in with social media, Email and mobile number verification gets extra brownie points).
   - [x] Users can see the list of books, preferably using an actual endpoint (API) as a data source for books.
   - [x] Instead of loading all the results on the page, perform an optimized pagination (infinite scrolling with lazy loading).
   - [x] A well-built search bar, with suggestions (like Google Search, YouTube) that suggests and searches based on all the fields like Book name, Author name, Genre, Year of publishing, etc.
   - [x] An exclusive way of indicating the availability of the books, and the number of available copies, along with the previously mentioned fields.
   - [x] Users can filter and sort the list of books based on Title, Author, Subject, and Publish - date.
   - [x] Show the count of books upon every search results and upon every filtering.
   - [x] Implement a cart feature, upon adding books to the cart, the user will be able to check out and rent them. This should reflect in the availability and number of copies fields.
   
---
## 📦 Project Dockerization

To run RepoSavant in a Docker container, follow these steps:

1. Clone this repository.
2. Build the Docker image:
```bash[]
docker build --pull --rm -f "client\Dockerfile" -t mylibrary:latest "client" 
```
3. Run the Docker container:
```bash[]
docker run --rm -d  -p 8080:8080/tcp mylibrary:latest
```

## Getting Started 🚀

Follow these steps to set up, run, and deploy MyLibrary on Vercel:

1. Clone the repository:

```bash
git clone https://github.com/suryanshsingh2001/MyLibrary.git
cd client
```
2. Install Dependencies when in `client` Directory

```
npm install
```
3. Configure environment variables: Create a `.env` file and provide the necessary API keys and Auth0 credentials.

```
VITE_REACT_APP_GOOGLEBOOK_API_KEY=YOUR_GOOGLEBOOK_API_KEY

VITE_REACT_APP_AUTH0_DOMAIN=YOUR_AUTH0_DOMAIN
VITE_REACT_APP_AUTH0_CLIENT_ID=YOUR_AUTH0_CLIENT_ID

```

4. Start the development server:

```
npm run dev
```
5. Open your browser and access `http://localhost:5173`.

6. Deploy on Vercel:
- Sign up for an account on [Vercel](https://vercel.com/).
- Follow Vercel's deployment instructions to connect your GitHub repository and deploy your app.


## Contributing 🤝
We welcome contributions from the community! Whether you are a developer, designer, writer, or enthusiast, there are many ways to get involved. Check out our [**Contributing Guidelines**](https://github.com/suryanshsingh2001/MyLibrary/blob/main/CONTRIBUTING.md) to learn more about how you can contribute.

## Code of Conduct 📜
Please review our [**Code of Conduct**](https://github.com/suryanshsingh2001/MyLibrary/blob/main/CODE_OF_CONDUCT.md) to understand the expectations for behavior within our community.

## Hacktoberfest Contribution 🎃
MyLibrary actively participates in Hacktoberfest, an annual celebration of open-source contributions. Here's how you can join the Hacktoberfest fun with us:

1. Look for issues labeled as `Hacktoberfest` in our GitHub issue tracker. These are specially curated issues for Hacktoberfest contributors.
2. Contribute to these issues by following the guidelines mentioned in each issue. You can work on bug fixes, features, or enhancements.

3. Submit your pull request (PR) with your contribution. Our team will review your PR and provide feedback.

4. Once your PR is merged, it will count towards your participation in Hacktoberfest. Plus, you'll be helping us improve MyLibrary!

## Security 🔒
The security of MyLibrary is important to us. If you discover any security vulnerabilities, please review our [**Security Policy**](https://github.com/suryanshsingh2001/MyLibrary/blob/main/SECURITY.md) for reporting guidelines.

## Feedback 💬
We value your feedback and suggestions. Whether you have ideas for new features, bug reports, or general feedback, please visit our Feedback Section to share your thoughts.

## License 📝
MyLibrary is open-source software licensed under the MIT License.

---

>"Let's write the next chapter together!" 📝🌟
Happy coding and happy reading! 📚🚀
