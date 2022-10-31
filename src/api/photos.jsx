import React, { Component } from 'react'
// import { Navbar } from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from '../navbar/Navbar'

export default class Photos extends Component {
    state = {
        fotos: [],
    }
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/comments')
        .then((res) => res.json())
        .then(res => {
            console.log(res)
            this.setState({ fotos: res})
        })
        // .then(res => {
        //     if(res.ok) {
        //         console.log('Success')
        //     } else {
        //         console.log("Not Success")
        //     }
        // })
    }
   
  render() {
   
    return (
      <>
        <Navbar />
        <div className="container mt-1">
            <table className='table table-hover text-center table-bordered'>
                <thead className='thead table-dark'>
                    <tr>
                        <th>ID</th>
                        <th>Title</th>
                        <th>Body</th>
                    </tr>
                </thead>
                <tbody>
                    { this.state.fotos.map((foto) => (
                        <tr key={foto.id}>
                            <td>{ foto.id }</td>
                            <td>{ foto.body }</td>
                            <td>{ foto.email }</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>

      </>
    )
  }
}
