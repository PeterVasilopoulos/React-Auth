// option 1
// const Destination = require("../models/destination.model")

// option2
const {Destination} = require("../models/destination.model")

// test api
module.exports.apiTest = (req, res)=>{
    res.json({message: "ok"})
}

// all destinaions
module.exports.allDest = (req, res)=>{
    Destination.find() // array of objects
        .then(destList => res.json(destList))
        .catch(err=>res.status(400).json(err))
}

// one destination
module.exports.oneDest = (req, res)=>{
    Destination.findOne({_id: req.params.id}) // return the found object
        .then(foundDest => res.json(foundDest))
        .catch(err=>res.status(400).json(err))
}

// create dest
module.exports.addDest = (req, res)=>{
    Destination.create(req.body) // will return the created object
        .then(newDest => res.json(newDest))
        .catch(err=>res.status(400).json(err)) // res.json --> status 200
}


// update dest -- create & getOne
module.exports.updateDest = (req, res)=>{
    Destination.findOneAndUpdate(
        {_id: req.params.id},       // criteria
        req.body, // partial formData 
        {new: true, runValidators:true}
        // new: true -- return the updated object
        // runValidator -- to perform validation specified in model
    )
        .then(updatedDest =>res.json(updatedDest)) 
        .catch(err=>res.status(400).json(err))
}


// delete dest
module.exports.deleteDest = (req, res)=>{
    Destination.deleteOne({_id: req.params.id})
        .then(status=> res.json(status))
        .catch(err=>res.status(400).json(err))
}
