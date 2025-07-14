### Builder Dashboard – Full Stack Web Application

A functional, full-stack dashboard showcasing builder and property data with interactive tables, maps, and navigation.

## Tech Stack Used
-> Frontend: React.js, Vite, Tailwind CSS, React Router, React Leaflet, Leaflet Draw

-> Backend: Node.js, Express.js

-> Deployment:
               
  Frontend: Netlify

  Backend: Render
               
-> Map Data: OpenStreetMap

## Live Project Links

Frontend (Netlify): https://builder-dashboard-ui.netlify.app/

Backend (Render): https://builder-dashboard-ui-1.onrender.com/

## Setup Instructions

Backend (API Server)

# Navigate to backend folder:

cd backend_api

npm install

node server.js

# API Endpoints:

/login – POST route for login

/data – GET route serving dataset

Frontend (React Dashboard)

# Navigate to frontend folder:

cd react_dashboard_client

npm install

npm run dev

# Local Access:
http://localhost:5173

## Key Features
-> Responsive dashboard with sidebar and top navbar

-> Filterable/searchable table using real JSON dataset

-> Interactive map view with:

-> Dynamic markers based on data

-> Polygon drawing via Leaflet Draw

-> Static chatbot widget (UI only)

-> Sidebar toggle for improved UX

-> Backend APIs for login and data endpoints

## Personal Contribution (Bonus Feature)

-> Sidebar open/close toggle

-> Floating chatbot widget

-> Smooth responsive UI using Tailwind CSS

-> Clean layout despite missing original wireframes

## Challenges Faced

-> Missing wireframes: Solved using industry-standard dashboard layouts

-> Leaflet markers not rendering (fixed via data parsing)

-> React Router causing 404 on Netlify (fixed via _redirects file)

-> Netlify deployment from nested React project (resolved via correct base directory)
