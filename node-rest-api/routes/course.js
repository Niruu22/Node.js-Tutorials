const ex = require("express");
//const { route } = require("express/lib/application");
const Course = require("../models/course");
const router = ex.Router();



///creating the routers


//get all the course

router.get("/", async (req,res)=>{

  try{
    const cousre= await Course.find();
    res.json(cousre);
  }catch(err){
      res.json(err);
  }
});


//get single cousre

router.get("/:courseId", async (req,res)=>{

    const  courseId = req.params.courseId

    try{
        const c = await Course.findById(courseId);
        res.json(c);
    }catch(error){
        res.json(error);
    }
});


//create course 

router.post("/", async (req,res)=>{
    const course = await Course.create(req.body);
    res.json(course);
});



//delete course 

router.delete("/:courseId", async (req,res)=>{
    
    try{
       await Course.remove({ "_id": req.params.courseId});
       res.status(200).json({
           message:"done",
       });
    }catch (error) {
        res.json(error)
    }
});


//update course 

router.put("/:courseId",async (req,res)=>{

    const courseId = req.params.courseId;

    try{

       const Upcourse= await Course.updateOne(
            {
                "_id":courseId
            },
            req.body
       );
       req.json(Upcourse);

    }catch(error){
        res.json(error);
    }
});

module.exports=router;