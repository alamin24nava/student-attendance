import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

function App() {
    const [studentName, setStudentName] = useState('');
    const [studentLists, setStudentLists] = useState([]);
    const [editMode, setEditMode] = useState(false);
    const [editableStudent, setEditableStudent] = useState(null)
    const [error, setError] = useState('')

    // handleStudentName
    const handleStudentName = (e)=>{
        setStudentName(e.target.value)
    }
    const handleSubmit = (e)=>{
        e.preventDefault()
        if(studentName.trim() === ''){
            return setError('Please Provide Student Name')
        }else{
            setError('')
        }
        editMode === true? updateStudent() : createStudent()
        
    }

    // createStudent
    const createStudent = ()=>{
        const newstudent = {
            id: Date.now() + '',
            name: studentName,
            isPresent:undefined,
        }
        setStudentLists([...studentLists, newstudent])
        setStudentName('')
    }
    // handleEdit
    const handleEdit = (student)=>{
        setEditMode(true)
        setStudentName(student.name)
        setEditableStudent(student)
    }
    // updateStudent
    const updateStudent = ()=>{
        console.log('Update')
    }
    // handleRemove
    const handleRemove = (studentId)=>{
        const updateStudent = studentLists.filter((item)=> item.id !== studentId.id)
        setStudentLists(updateStudent)
    }
    console.log(editableStudent)
    return (
        <div className=" m-5">
            <form onSubmit={handleSubmit} className="w-25 mx-auto mb-5">
                <input onChange={handleStudentName} value={studentName} type="text" className="form-control mb-2" placeholder="Enter Name"/>
                <p className="text-danger">{error}</p>
                <button className="btn btn-primary w-100" type="submit">{editMode === true ? 'Update Student':'Add Student'}</button>
            </form>  
            <div className="row">
                <div className="col-6">
                    <div className="border rounded-3 p-4">
                        <div className="d-flex justify-content-between gap-3">
                            <h3 className="pb-2">All Students</h3>
                            <p>100</p>
                        </div>
                        <table className="table">
                            <thead>
                                <tr>
                                <th scope="col">Name</th>
                                <th scope="col">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    studentLists.map((student)=> (
                                        <tr key={student.id}>
                                            <td>
                                                <div>{student.name}</div>
                                            </td>
                                            <td>
                                                <div className="d-flex gap-2">
                                                    <button onClick={()=>handleEdit(student)} className="btn btn-sm btn-secondary">Edit</button>
                                                    <button onClick={()=>handleRemove(student)} className="btn btn-sm btn-danger">Remove</button>
                                                    <button className="btn btn-sm btn-primary">Make Present</button>
                                                    <button className="btn btn-sm btn-danger">Make Absent</button>
                                                </div>
                                            </td>
                                        </tr>
                                    ))
                                }
                                
                            </tbody>
                        </table>
                    </div>
                </div>    
                <div className="col-3">
                    <div className="border rounded-3 p-4">
                        <div className="d-flex justify-content-between gap-3">
                            <h3 className="pb-2">Students Present</h3>
                        </div>
                        <table className="table">
                            <thead>
                                <tr>
                                <th scope="col">Name</th>
                                <th scope="col">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        <div className="d-flex gap-2 align-items-center">
                                            <div>tamim</div>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="d-flex gap-2">
                                            <button className="btn btn-sm btn-secondary">Accidentally Added</button>
                                        </div>
                                    </td>
                                </tr>                              
                            </tbody>
                        </table>
                    </div>
                </div>    
                <div className="col-3">
                    <div className="border rounded-3 p-4">
                        <h3 className="pb-2">Students Absent</h3>
                        <table className="table">
                            <thead>
                                <tr>
                                <th scope="col">Name</th>
                                <th scope="col">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        <div className="d-flex gap-2 align-items-center">
                                            <div>Tamim</div>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="d-flex gap-2">
                                            <button className="btn btn-sm btn-secondary">Accidentally Added</button>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>    
            </div>
        </div>
    )
}

export default App
