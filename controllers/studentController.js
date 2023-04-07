import Student from "../models/studentModel.js";

// * GET: /student

const getAllStudents = async (req , res , next) => {
    try{
        const students = await Student.find();
        res.render('index' , {students ,error: null});
    } catch(err){
        res.render('edit' , {error: 'Unable to fetch data'});
    }
};

// * POST: /student
// * REDIRECTS TO GET: /student

const createStudent = async (req , res , next) => {
    try{
        const { name , age , fees} = req.body;
        await Student.create({name , age , fees}); 
        res.redirect('/student');
    } catch(err){
        console.log(err);
    }
};


const editStudent = async (req , res , next) => {
    try{
        const student = await Student.findById(req.params.id);
        res.render('edit' , {student , error: null});
    } catch(err) {
        res.redirect('/student');
    }
};

const updateStudentById = async (req , res , next) => {
    try{
        const newStudent = await Student.findByIdAndUpdate(req.params.id , req.body , {
            new: true,
            runValidators: true,
        });
        res.redirect('/student');
    } catch(err){
        res.send('<h1 class="alert alert-success mt-5 text-center">Unable to Update data</h1>');
    }
};

const deleteStudentById = async (req , res , next) => {
    try{
        await Student.findByIdAndDelete(req.params.id);
        res.redirect('/student');
    } catch(err){
        res.send('<h1 class="alert alert-success mt-5 text-center">Unable to Update data</h1>');
    }
};

export { getAllStudents , createStudent , editStudent , updateStudentById , deleteStudentById };
