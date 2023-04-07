import express from 'express';
import { createStudent, getAllStudents ,editStudent, deleteStudentById , updateStudentById } from '../controllers/studentController.js';


const router = express.Router();

// GET: /student call: getAllStudents
// POST: /student call: createStudent

router.get('/' , getAllStudents);
router.post('/' , createStudent);
router.get('/edit/:id' , editStudent);
router.post('/update/:id' , updateStudentById);
router.post('/delete/:id' , deleteStudentById);

export default router;
