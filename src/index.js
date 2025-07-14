const express = require("express");
const { exec } = require("child_process");
const app = express();
const port = 3000;
const fs = require("fs");
const path = require("path");
const cors = require("cors");
const { baseUrl } = require("./config/config");

app.use(express.static(__dirname)); // Serve static files like your HTML
app.use(cors())

app.post("/run-signup-test", (req, res) => {
  console.log("🔁 Received request to run Cypress signup test...");

  const command = "npx cypress run --headless --browser chrome --spec cypress/e2e/Signup.cy.js";
  const logFilePath = path.join(__dirname, "cypress-signup-log.txt");

  exec(command, { timeout: 300000 }, (err, stdout, stderr) => {
    const logContent = `
========= Cypress Signup Test Log =========
Timestamp: ${new Date().toLocaleString()}

Command:
${command}

======== STDOUT ========
${stdout}

======== STDERR ========
${stderr}

======== STATUS ========
${err ? "❌ FAILED" : "✅ SUCCESS"}
`;

    // Write to log file
    fs.writeFileSync(logFilePath, logContent, "utf-8");

    if (err) {
      console.error("❌ Cypress test run failed:", err.message);
      return res.status(500).json({
        status: "error",
        message: "Test failed or timeout occurred",
        error: err.message,
        logFile: `${baseUrl}cypress-signup-log.txt`,
      });
    }

    console.log("✅ Cypress test completed successfully.");
    res.status(200).json({
      status: "success",
      message: "Signup test completed successfully",
      logFile: `${baseUrl}cypress-signup-log.txt`,
    });
  });
});


app.listen(port, () => {
  console.log(`🚀 Server listening at ${port}`);
});
