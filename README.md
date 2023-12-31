# yourPets-backend

 <div style="display: flex; gap: 15px;">
    <img src="/tmp/favicon.ico" alt="favicon" width="130" height="130"> 
   <div>
    <h1> YourPets-backend <a style="text-decoration: none;" href="https://team-project-backend-p0vr.onrender.com/api/docs" target="_blank" rel="noreferrer">Documentation</a></h1>
    <h2>Welcome to <a style="text-decoration: none;" href="https://github.com/Mamont777/YourPet-backend" target="_blank" rel="noreferrer">YourPets repository</a></h2>
   </div>
   </div>
   <h2 style="margin-left: 100px;">Here is an  <a style="text-decoration: none;" href="https://mamont777.github.io/YourPet/" target="_blank" rel="noreferrer">example</a> of the best use of this API
   </h2>
   <p style="font-size: 20px;">YourPets is a web application that helps people find loving families for their pets. It allows users to create notices for their pets, which can be either for sale, lost/found, or offered for free. Users can also search for pets that are available for adoption.</p>
    <h3>Installation</h3>
    <ol>
        <li style="font-size: 20px;">
            Clone the repository to your local machine: <p style="margin: 0px; font-size: 16px;">- git clone https://github.com/Mamont777/YourPet-backend.git</p> 
        </li>
        <li style="font-size: 20px;">Install the required dependencies: <p style="margin: 0px; font-size: 16px;">- cd YourPet-backend</p> <p style="margin: 0px; font-size: 16px;">- npm install </p></li>
        <li style="font-size: 20px;">Set up the MongoDB database: <p style="margin: 0px; font-size: 16px;">- Ensure you have MongoDB installed and running on your machine.</p>
        <p style="margin: 0px; font-size: 16px;">- Update the database configuration in the `config.js` file.</p></li>
        <li style="font-size: 20px;">Start the development server:<p style="margin: 0px; font-size: 16px;">-npm start</p></li>
    </ol>
    <p style="font-size: 20px;">The website will be accessible at `http://localhost:3000` in your browser.</p>
    <h3>API Endpoints</h3>
    <p style="font-size: 20px;">The backend provides the following API endpoints for the YourPets website:</p>
    <ul>
        <li><span style="font-weight: bold;">"POST /users/register"</span>: Register a new user</li>
        <li><span style="font-weight: bold;">"POST /api/users/login"</span>: Log in an existing user</li>
        <li><span style="font-weight: bold;">"PATCH /users/info/update"</span>: Update user's information</li>
        <li><span style="font-weight: bold;">"GET /users/current"</span>: Return information of current user</li>
        <li><span style="font-weight: bold;">"POST /users/logout"</span>: Log out user</li>
        <li><span style="font-weight: bold;">"GET /notices"</span>: Return object with array of all notices and sum of them</li>
        <li><span style="font-weight: bold;">"POST /notices"</span>: Add new notice</li>
        <li><span style="font-weight: bold;">"GET /notices/:id"</span>: Return notice by id</li>
        <li><span style="font-weight: bold;">"GET /notices/user/added"</span>: Return object with array of added notices by current user and sum of them</li>
        <li><span style="font-weight: bold;">"DELETE /notices/user/added/:id"</span>: Delete notice</li>
        <li><span style="font-weight: bold;">"GET /notices/user/favorite"</span>: Return object with array of user's favorite notices and sum of them</li>
        <li><span style="font-weight: bold;">"PATCH /notices/user/favorite/:id"</span>: Add notice to the array of user's favorite notices</li>
        <li><span style="font-weight: bold;">"DELETE /notices/user/favorite/:id"</span>: Delete notice from array of user's favorite notices</li>
        <li><span style="font-weight: bold;">"GET /notices/users/search"</span>: Return object with array of notices chooses by category or title and sum of them</li>
        <li><span style="font-weight: bold;">"GET /notices/users/filter"</span>: Return object with array of notices chooses by age or sex and sum of them</li>
        <li><span style="font-weight: bold;">"GET /pets"</span>: Return object with array of all user's pets</li>
        <li><span style="font-weight: bold;">"POST /pets"</span>: Add new pet</li>
        <li><span style="font-weight: bold;">"DELETE /pets/:id"</span>: Delete pet</li>
        <li><span style="font-weight: bold;">"GET /friends"</span>: Return object with array of all friends</li>
        <li><span style="font-weight: bold;">"GET /news"</span>: Return object with array of all news and sum of them</li>
    </ul>
    <h3>Authentication</h3>
    <p style="font-size: 20px;">User authentication is handled using JWT (JSON Web Tokens). Upon successful login, a token will be provided, which should be included in the `Authorization` header of subsequent requests to access protected routes.</p>
    <h3>Database Schema</h3>
    <p style="font-size: 20px;"></p>
    <ul>
        <li style="font-size: 18px;"><span style="font-weight: bold;">"User"</span>: Represents a registered user with fields like "email", "password", "name", "birthday", "phone", "city", "avatarURL", "token", "favorites" and fields with date of create and update.</li>
        <li style="font-size: 18px;"><span style="font-weight: bold;">"Notice"</span>: Represents a pet notice with fields like "title", "name", "date", "category", "type", "sex", "location", "price", "comments", "owner", "ownerEmail", "ownerPhone", "fileURL", "createdAt", and "updatedAt".</li>
        <li style="font-size: 18px;"><span style="font-weight: bold;">"Pet"</span>: Represents a pets with fields like "name", "date", "type", "comments", "owner", "fileURL", "createdAt", and "updatedAt"</li>
        <li style="font-size: 18px;"><span style="font-weight: bold;">"New"</span>: Represents a news notice with fields like "imgURL", "title", "text", "date", "url" and "id"</li>
        <li style="font-size: 18px;"><span style="font-weight: bold;">"Friend"</span>: Represents a friends notice with fields like "imageURL", "title", "addressURL", "address", "workDays", "url", "phone" and "email"</li>
    </ul>
    <h3>Error Handling</h3>
    <p style="font-size: 20px;">The backend handles errors using custom middleware. If an error occurs, the server will respond with an appropriate error message and status code.</p>
    <h3>This project was created using:</h3>
    <ul>
    <li><a style="text-decoration: none;" href="https://nodejs.org/ru" target="_blank" rel="noreferrer"><b>NodeJS</b></a></li>
    <li><a style="text-decoration: none;" href="https://www.npmjs.com/package/express" target="_blank" rel="noreferrer"><b>ExpressJS</b></a></li>
    <li><a style="text-decoration: none;" href="http://expressjs.com/en/resources/middleware/multer.html" target="_blank" rel="noreferrer"><b>Multer</b></a></li>
    <li><a style="text-decoration: none;" href="https://expressjs.com/en/resources/middleware/morgan.html" target="_blank" rel="noreferrer"><b>Morgan</b></a></li>
    <li><a style="text-decoration: none;" href="https://www.mongodb.com/" target="_blank" rel="noreferrer"><b>MongoDB</b></a></li>
    <li><a style="text-decoration: none;" href="https://cloudinary.com/" target="_blank" rel="noreferrer"><b>Cloudinary</b></a></li>
    <li><a style="text-decoration: none;" href="https://mongoosejs.com/" target="_blank" rel="noreferrer"><b>Mongoosejs</b></a></li>
    <li><a style="text-decoration: none;" href="https://www.npmjs.com/package/bcryptjs" target="_blank" rel="noreferrer"><b>Bcryptjs</b></li>
    <li><a style="text-decoration: none;" href="https://www.npmjs.com/package/jsonwebtoken" target="_blank" rel="noreferrer"><b>Jsonwebtoken</b></a></li>
    <li><a style="text-decoration: none;" href="https://www.npmjs.com/package/swagger-ui-express" target="_blank" rel="noreferrer"><b>Swagger-ui-express</b></a></li>
    </ul>
