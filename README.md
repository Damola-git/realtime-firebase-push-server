Chat App Node.js Server
This is the backend server for a real-time chat application.
It handles user messaging, stores chat data, and delivers push notifications using Firebase Cloud Messaging (FCM).
Built with Node.js and Express.js, it provides RESTful API endpoints that integrate seamlessly with the mobile or web frontend.
Features
RESTful API endpoints for message handling
Firebase Cloud Messaging (FCM) integration for push notifications
Real-time message delivery structure
Secure and configurable environment variables
Modular and maintainable project structure
Logging and error handling included
Tech Stack
Node.js – JavaScript runtime
Express.js – Web framework
Firebase Admin SDK – Push notifications
dotenv – Environment variable management
nodemon – Development auto-reload
Installation
Clone the repository
git clone https://github.com/your-username/chat-app-server.git
cd chat-app-server
Install dependencies
npm install
Create a .env file in the root directory:
PORT=5000
NODE_ENV=development
FIREBASE_SERVICE_ACCOUNT=./serviceAccountKey.json
Download your Firebase Admin SDK key from the Firebase console and save it as serviceAccountKey.json in the root directory.
Run the server
npm start
Or, for development mode:
npm run dev
Example API Endpoints
Method	Endpoint	Description
GET	/api/test	Check server status
POST	/api/send	Send a chat message and trigger push notification
GET	/api/messages/:userId	Retrieve user messages
