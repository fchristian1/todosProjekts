module.exports = {
  apps: [{
    name: "vite react frontend",
    script: "cd frontend && npm install && npm run dev",
    env: {
      VITE_APP_API_PORT: "3000",
      VITE_APP_API_URL: "http://localhost"
    }


  },
  {
    name: "express backend",
    script: "cd backend/crud_api_v1 && npm install &&npm run dev",
    env: {
      PORT_BACKEND: "3000",
    },
  }]
}
