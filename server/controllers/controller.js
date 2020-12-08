const Model = require("../models/models");

// setup functions
module.exports = {

    // index/list all operation
    index:(req, res) => {

        // select all
        Model.find().sort({type:'asc'}).then((data) => {

            // send out data
            res.json({results:data})

        }).catch((err) => {

            // send out err msg
            res.json({errors:err.errors})

        })

    },
    // show one operation
    show:(req, res) => {
        
        // get user id
        const id = req.params._id;

        // select one
        Model.findOne({_id:id}).then((data) => {

            // send out data
            res.json({results:data})

        }).catch((err) => {

            // send out err msg
            res.json({errors:err.errors})

        })

    },
    // create operation
    create:(req, res) => {
        
        // get data from user
        const userData = req.body;
        const regName =  "^" + userData.name + "$";
        
        //force uppercase on type for sorting
        userData.type = userData.type.charAt(0).toUpperCase() + userData.type.slice(1);
         
        // check for unique name
        Model.find({name:{'$regex': regName, $options:'i'}}).then((data) => {
            
            // match found
            if(data.length > 0){
               
                // show custom error
                res.json({errors:{
                    "name": {
                        "name": userData.name,
                        "message": "That pet's name exists already.",
                        "properties":{
                        "message": "That pet's name exists already.",
                        "type": "Duplicate",
                        "path": "name",
                        "value": ""
                        },
                        "kind": "Duplicate",
                        "path": "name",
                        "value": ""
                    }
                }})
            
            // no match continue to add to collection
            }else{

                // add data to table/collection
                Model.create(req.body).then((data) => {
                    
                    // send data data
                    res.json({results:data, success:`${userData.name} was successfully added.`})
                    
                // catch errors
                }).catch((err) => {

                    // send out err msg
                    res.json({errors:err.errors})
                    
                })

            }

        //catch errors 
        }).catch((err) => {

            // send out err msg
            res.json({errors:err.errors})

        })



    },
    // update operation
    update:(req, res) => {
        
        // get id
        const id = req.params._id;
        
        // get user data
        let userData = req.body;

        //force uppercase on type for sorting
        userData.type = userData.type.charAt(0).toUpperCase() + userData.type.slice(1);
        
        // find and update our product
        Model.findOneAndUpdate({_id:id}, userData, {
            useFindAndModify:false,
            runValidators:true, 
            new:true
        // success
        }).then((data) => {

            // pass data to results 
            res.json({results:data, success: `${data.name} was successfully updated.`});

        // catch errors
        }).catch((err) => {

            // pass err to errors 
            res.json({errors:err.errors}); 

        }); 

    },
    // delete operation
    destroy:(req, res) =>{

        // get id
        const id = req.params._id;

        // delete document based on id
        Model.deleteOne({_id:id}).then((data) => {
            
            // pass data to results 
            res.json({success:"Delete was successful."});
            
        // catch errors
        }).catch((err) => {

            // pass err to errors 
            res.json({errors:err.errors}); 

        });

    }

}