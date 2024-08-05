const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const { MongoClient } = require("mongodb");

const app = express();
const port = process.env.PORT || 5000; // Use the PORT environment variable or default to 5000

const uri =
  process.env.MONGODB_URI ||
  "mongodb+srv://naweed123:naweed123@cluster0.oiruxyt.mongodb.net/"; // Use environment variable or default URI

const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  tls: true,
  tlsAllowInvalidCertificates: false,
});

app.use(cors());
app.use(bodyParser.json());

client
  .connect()
  .then(() => {
    const db = client.db("MSAEvents");
    const eventsCollection = db.collection("Events");
    const emailsCollection = db.collection("Emails"); // New collection for emails

    app.post("/events", async (req, res) => {
      const event = req.body;
      try {
        await eventsCollection.insertOne(event);
        res.status(201).send("Event added successfully");
      } catch (error) {
        console.error("Error adding event:", error);
        res.status(500).send("Error adding event");
      }
    });

    app.get("/events", async (req, res) => {
      try {
        const events = await eventsCollection.find({}).toArray();
        res.status(200).json(events);
      } catch (error) {
        console.error("Error fetching events:", error);
        res.status(500).send("Error fetching events");
      }
    });

    app.post("/emails", async (req, res) => {
      const { email } = req.body;
      if (email.endsWith("@dukes.jmu.edu")) {
        try {
          await emailsCollection.insertOne({ email });
          res.status(201).send("Email added successfully");
        } catch (error) {
          console.error("Error adding email:", error);
          res.status(500).send("Error adding email");
        }
      } else {
        res.status(400).send("Invalid Dukes email address");
      }
    });

    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  })
  .catch((error) => console.error("Error connecting to MongoDB:", error));
