module.exports = {
  apps: [{
    name: "vite react frontend",
    script: "cd frontend && npm run build && npm run start",
    env: {
      REACT_APP_API_PORT: "4000",
      REACT_APP_API_URL: "http://localhost"
    }
  },
  {
    name: "express backend",
    script: "cd backend/crud_api_v1 && npm run start",
    env: {
      PORT_BACKEND: "3001",
    },
  }]
}
