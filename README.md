# React Tourist Attraction Mini Project

เว็บแอปพลิเคชันค้นหาสถานที่ท่องเที่ยวในประเทศไทย พัฒนาด้วย React และ Express.js

## Tech Stack

### Frontend (Client)
- React 18
- Vite 7
- Tailwind CSS 4
- Axios

### Backend (Server)
- Express.js
- Node.js

## Project Structure

```
react-tourist-attraction-mini-project/
├── client/                     # Frontend
│   ├── src/
│   │   ├── api/
│   │   │   └── trips.js        # API service
│   │   ├── components/
│   │   │   ├── SearchBar.jsx   # Search input component
│   │   │   ├── TagList.jsx     # Tags display component
│   │   │   ├── ThumbnailGallery.jsx  # Thumbnail images component
│   │   │   ├── TripCard.jsx    # Trip card component
│   │   │   └── TripsView.jsx   # Main page component
│   │   ├── App.jsx
│   │   ├── index.css
│   │   └── main.jsx
│   └── package.json
├── server/                     # Backend
│   ├── app.js                  # Express server
│   ├── db.js                   # Trip data
│   └── package.json
└── README.md
```

## Installation

### 1. Clone the repository
```bash
git clone <repository-url>
cd react-tourist-attraction-mini-project
```

### 2. Install dependencies

**Server:**
```bash
cd server
npm install
```

**Client:**
```bash
cd client
npm install
```

## Running the Application

### 1. Start the Server
```bash
cd server
npm start
```
Server จะรันที่ `http://localhost:4001`

### 2. Start the Client
```bash
cd client
npm run dev
```
Client จะรันที่ `http://localhost:5173`

## Features

- ค้นหาสถานที่ท่องเที่ยวด้วย keyword
- แสดงรายละเอียดสถานที่ท่องเที่ยว
- แสดงรูปภาพหลักและ thumbnail
- แสดง tags ของแต่ละสถานที่
- Responsive design ด้วย Tailwind CSS

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/trips?keywords=xxx` | ค้นหาสถานที่ท่องเที่ยวด้วย keyword |

### Example
```
GET http://localhost:4001/trips?keywords=ัวัด
```

## Component Overview

| Component | Description |
|-----------|-------------|
| `TripsView` | Main page - จัดการ state และ layout |
| `SearchBar` | Input สำหรับค้นหา |
| `TripCard` | แสดงข้อมูลสถานที่ท่องเที่ยวแต่ละแห่ง |
| `TagList` | แสดง tags ของสถานที่ |
| `ThumbnailGallery` | แสดงรูป thumbnail |
