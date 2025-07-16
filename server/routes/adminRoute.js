import express from 'express'
import { adminLogin, approveCommentById, deleteCommentById, getAllBogsAdmin, getAllComments, getDashboard } from '../controllers/adminController.js';
import auth from '../middleware/auth.js';

const adminRouter = express.Router();

adminRouter.post("/login", adminLogin)
adminRouter.get("/comments",auth, getAllComments)
adminRouter.get("/blogs",auth, getAllBogsAdmin)
adminRouter.post("/delete-comment",auth, deleteCommentById);
adminRouter.post("/approve-comment",auth, approveCommentById);
adminRouter.get("/dashboard",auth, getDashboard);


export default adminRouter