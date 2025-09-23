import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import type { Student } from '../utils/types';
import { addStudent } from "../store/slices/studentSlice"

export default function StudentManager() {
    const [user, setUser] = useState<Student>({
        id: Math.floor(Math.random() * 99999),
        name: ""
    })
    const result = useSelector((data: any) => {
        return data.students.students;
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUser({ ...user, name: e.target.value });
    }

    const disPatch = useDispatch();
    const addStudent = () => {
        disPatch(addStudent(user))
    }
    return (
        <div>
            <h1>Quản lý sinh viên!</h1>
            <input type="text" onChange={handleChange} />
            <button onClick={addStudent}></button>
            <ul>
                {result.map((item: Student, index: number) => {
                    return <li key={item.id}>{item.name}</li>
                })}
            </ul>
        </div>
    )
}
