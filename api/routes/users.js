import  express  from "express";
import { deleteUser, getallUser, getUser, updateUser } from "../controllers/user.js";
import { verifyAdmin, verifyToken, verifyUser } from "../utils/verifyToken.js";
const router = express.Router();


// router.get("/checkauthentication",verifyToken,(req,res,next)=>{
// res.send("Hello user, You are logged in")
// })

// router.get("/checkuser/:id",verifyUser,(req,res,next)=>{
//     res.send("Hello user, You cant delete your account")
//     })

//     router.get("/checkadmin/:id",verifyAdmin,(req,res,next)=>{
//         res.send("Hello admin,You are allowed to delete accounts")
//         })
    

//update
router.put("/:id",verifyUser, updateUser)
//delete
router.delete("/:id",verifyUser, deleteUser)
//get
router.get("/:id",verifyUser, getUser)
//getall
router.get("/",verifyAdmin, getallUser)


export default router