const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3000;

// Enable CORS
app.use(cors());

// API Route
app.get("/", (req, res) => {
  res.json({
    email: "abdullateefdauda01@gmail.com",
    current_datetime: new Date().toISOString(),
    github_url: "https://github.com/abdul-o/hng12-stage0-basic-api"
  });
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
