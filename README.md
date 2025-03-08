# Recipe Management App

## Live Demo
[Recipe Management App](https://bhargavirecipemanagementapp.netlify.app/)

## Tech Stack
- **Frontend:** React.js
- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **State Management:** React Context API
- **Drag & Drop:** react-beautiful-dnd

## Features
- Create, Read, Update, and Delete (CRUD) recipes
- Recipe categories with drag-and-drop sorting
- "Surprise Me" button for random recipe selection
- Responsive design
- Form validation

## Folder Structure
```
recipe-management/
├── client/               # Frontend React app
├── server/               # Backend Express app
├── .gitignore
└── README.md
```

### Server (Backend)
```
server/
├── config/
│   └── db.js             # Database connection
├── controllers/
│   └── recipeController.js  # Recipe CRUD logic
├── middleware/
│   └── logger.js         # Custom request logger
├── models/
│   └── Recipe.js         # Recipe schema
├── routes/
│   └── recipeRoutes.js   # API routes
├── .env                  # Environment variables
├── server.js             # Main server file
└── package.json          # Dependencies
```

### Client (Frontend)
```
client/
├── public/
├── src/
│   ├── components/
│   │   ├── CategoryList.js
│   │   ├── DraggableRecipe.js
│   │   ├── Header.js
│   │   ├── RecipeCard.js
│   │   ├── RecipeDetail.js
│   │   ├── RecipeForm.js
│   │   └── RecipeList.js
│   ├── context/
│   │   └── RecipeContext.js
│   ├── pages/
│   │   ├── Dashboard.js
│   │   ├── RecipeDetailPage.js
│   │   └── RecipeFormPage.js
│   ├── utils/
│   │   ├── api.js
│   │   └── validation.js
│   ├── App.js
│   ├── index.js
│   └── index.css
└── package.json
```

## Setup & Installation
### Backend
```sh
cd server
npm install
npm start
```

### Frontend
```sh
cd client
npm install
npm start
```

## API Endpoints
| Method | Endpoint       | Description         |
|--------|--------------|-----------------------|
| GET    | /recipes     | Get all recipes       |
| POST   | /recipes     | Add a new recipe      |
| PUT    | /recipes/:id | Update a recipe       |
| DELETE | /recipes/:id | Delete a recipe       |

## Deployment
- **Frontend:** Deployed on Netlify
- **Backend:** Deployed on Render/Heroku

## License
This project is licensed under the MIT License.

