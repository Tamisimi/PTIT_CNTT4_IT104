import React, { Component } from 'react'

export default class Exercise05 extends Component {
    render() {
        return (
            <div>
                <div>
                    <h3>Quản lý sinh viên</h3>
                    <button id='intel'>Thêm sinh viên mới</button>
                </div>
                <br />
                <div>
                    <select name="" id="">
                        <option value="">Sắp xếp theo tuổi</option>
                    </select>
                    <input type="text" placeholder='Tìm kiếm từ khóa theo tên và email' />
                </div>
                <table>
                    <th>STT</th>
                    <th>Mã sinh viên</th>
                    <th>Tên sinh viên</th>
                    <th>Ngày sinh</th>
                    <th>Email</th>
                    <th>Trạng</th>
                    <th>Chức năng</th>
                </table><br />
            </div>
        )
    }
}