const DestController = require("../controllers/destionation.controller")

// localhost:8000
module.exports = (app)=>{
    app.get("/api/testing", DestController.apiTest);
    app.get("/api/destinations", DestController.allDest);
    app.get("/api/destinations/:id" , DestController.oneDest);
    app.post("/api/destinations", DestController.addDest);
    app.patch("/api/destinations/:id", DestController.updateDest);
    app.delete("/api/destinations/:id", DestController.deleteDest);
}
