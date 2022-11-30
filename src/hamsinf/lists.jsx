import React, { Component } from 'react'
import My_users from '../api/list_hamsinf.json';
import { AiOutlinePhone } from 'react-icons/ai';
import { AiOutlineHome } from 'react-icons/ai';
import { AiOutlineUser } from 'react-icons/ai';
import { AiFillHome } from 'react-icons/ai';
import { AiOutlineMail } from 'react-icons/ai';


export default class HamSinf extends Component {
    state = {
        users: My_users
    }
  render() {
    return (
      <>
        <Navbar />
        <div className="container md:mt-5 mt-3 overflow-y-auto md:mb-5 mb-3">
           <table className='table table-bordered cursor-pointer slide-table p-5'>
            <thead className="thead table-dark">
                <tr>
                    <th>ID</th>
                    <th>Насаб</th>
                    <th>Ном</th>
                    <th>Миллат</th>
                    <th>Ч.Истикомат</th>
                    <th>Телефон</th>
                    <th>Email</th>
                </tr>
            </thead>
            <tbody>
                { this.state.users.map((user) => (
                    <tr>
                        <td className='md:text-2xl font-bold text-center'>{user.id}</td>
                        <td className='transition md:hover:scale-105 hover:bg-zinc-400 hover:text-white md:text-1xl'> <AiOutlineUser className='inline-block md:text-2xl text-sm' /> {user.surname}</td>
                        <td className='transition md:hover:scale-105 hover:bg-zinc-400 hover:text-white md:text-1xl'>{user.name}</td>
                        <td className='transition md:hover:scale-105 hover:bg-zinc-400 hover:text-white md:text-1xl'>{user.national}</td>
                        <td className='transition md:hover:scale-105 hover:bg-zinc-400 hover:text-white md:text-1xl'><AiFillHome className='pr-1 inline-block text-green-700 md:text-2xl' />{user.live}</td>
                        <td className='transition md:hover:scale-105 hover:bg-zinc-400 hover:text-white md:text-1xl'><AiOutlinePhone className='inline-block text-blue-700  md:text-1xl hover:scale-110' /> (+992) {user.phone}</td>
                        <td className='transition md:hover:scale-105 hover:bg-zinc-400 hover:text-white md:text-1xl'><AiOutlineMail className='inline-block text-red-700  md:text-1xl' /> {user.email}</td>
                    </tr>
                ))}
            </tbody>
           </table>
        </div>
      </>
    )
  }
}
