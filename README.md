<div align="center">


<h3 align="center">MERN AI Image Generator</h3>

  <p align="center">
    A full-stack web application for generating and sharing AI images using DALL-E.
    <br />
     <a href="https://github.com/shaun-ahuja/mern_ai_image_generator">github.com/shaun-ahuja/mern_ai_image_generator</a>
  </p>
</div>



## Table of Contents

<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#key-features">Key Features</a></li>
      </ul>
    </li>
    <li><a href="#architecture">Architecture</a></li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
  </ol>
</details>

## About The Project

This project is a MERN (MongoDB, Express.js, React.js, Node.js) stack application that allows users to generate images using the DALL-E AI model, and share them with a community. Users can enter a text prompt, which is sent to the DALL-E API to generate an image. The generated image can then be saved and shared with other users. The application also allows users to browse images created by others.

### Key Features

- **AI Image Generation:** Uses the DALL-E API to generate images from text prompts.
- **Community Sharing:** Allows users to share their generated images with others.
- **Image Browsing:** Enables users to browse a collection of images created by the community.
- **User Authentication:** (Not explicitly implemented in the provided code, but can be added for enhanced functionality)
- **Responsive Design:** Utilizes Tailwind CSS for a responsive and visually appealing user interface.
- **Prompt Suggestions:** Offers a "Surprise Me" feature to generate random prompts.

## Architecture

![Architecture Diagram](https://github.com/shaun-ahuja/MERN_AI_image_generator/blob/main/aiGenDiagram.png)

The application follows a MERN stack architecture:

- **Frontend (client):**  Built with React and Vite.  It handles user interaction, displays images, and communicates with the backend API. Tailwind CSS is used for styling.
- **Backend (server):** Built with Node.js and Express.js. It provides API endpoints for image generation (DALL-E integration) and managing image posts.
- **Database (MongoDB):** Stores image post data, including the image URL, prompt, and author.
- **DALL-E API:**  Used to generate images based on user-provided prompts. The server interacts with the OpenAI API.

Key technologies used:

- **React:**  For building the user interface.
- **Vite:**  For fast development and building of the React application.
- **Tailwind CSS:**  For styling the application.
- **Node.js:**  For running the backend server.
- **Express.js:**  For creating the backend API.
- **MongoDB:**  For storing image post data.
- **Mongoose:**  For interacting with the MongoDB database.
- **OpenAI API (DALL-E):**  For generating images from text prompts.
- **Cloudinary:** For storing images in the cloud.

## Getting Started

### Prerequisites

- Node.js (version >= 18)
- npm or yarn
- MongoDB account and connection string
- OpenAI API key
- Cloudinary account and API keys

### Installation

1. **Clone the repository:**
   ```sh
   git clone https://github.com/shaun-ahuja/mern_ai_image_generator.git
   cd shaun-ahuja-mern_ai_image_generator
   ```

2. **Install dependencies for the client:**
   ```sh
   cd client
   npm install
   ```

3. **Install dependencies for the server:**
   ```sh
   cd ../server
   npm install
   ```

4. **Configure environment variables:**

   - Create a `.env` file in the `server` directory.
   - Add the following environment variables, replacing the placeholders with your actual values:

     ```
     MONGODB_URL=<your_mongodb_connection_string>
     OPENAI_API_KEY=<your_openai_api_key>
     CLOUDINARY_CLOUD_NAME=<your_cloudinary_cloud_name>
     CLOUDINARY_API_KEY=<your_cloudinary_api_key>
     CLOUDINARY_API_SECRET=<your_cloudinary_api_secret>
     ```

5. **Start the backend server:**
   ```sh
   cd server
   npm start
   ```

6. **Start the frontend development server:**
   ```sh
   cd ../client
   npm run dev
   ```

7.  **Access the application:** Open your browser and navigate to the address where the frontend development server is running (usually `http://localhost:5173`).

