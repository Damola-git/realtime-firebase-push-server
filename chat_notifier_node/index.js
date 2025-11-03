import express from "express";
import admin from "firebase-admin";
import serviceAccount from "./serviceAccountKey.json" assert { type: "json" };

// Initialize Firebase Admin
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

// Initialize Express
const app = express();
app.use(express.json()); // allows JSON body parsing

// Example route
app.get("/", (req, res) => {
  res.send("🚀 Server is running and connected to Firebase!");
});

// Example endpoint Flutter can call to send a notification
app.post("/sendNotification", async (req, res) => {
  try {
    const { title, body, token } = req.body; // sent from Flutter

    const message = {
      notification: { title, body },
      token,
    };

    const response = await admin.messaging().send(message);
    res.status(200).send({ success: true, response });
  } catch (error) {
    console.error("Error sending message:", error);
    res.status(500).send({ success: false, error: error.message });
  }
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
