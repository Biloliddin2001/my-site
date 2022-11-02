import React, { Component } from 'react'
// import { Navbar } from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from '../navbar/Navbar'

export default class Api extends Component {
    state = {
        posts: [],
    }
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then((res) => res.json())
        .then(res => {
            console.log(res)
            this.setState({ posts: res})
        })
    //     // .then(res => {
    //     //     if(res.ok) {
    //     //         console.log('Success')
    //     //     } else {
    //     //         console.log("Not Success")
    //     //     }
    //     // })
    }
  render() {
    return (
      <>
        <Navbar />
        <div className="container mt-4">
            <table className='table table-hover text-center table-bordered'>
                <thead className='thead table-dark'>
                    <tr>
                        <th>ID</th>
                        <th>Title</th>
                        <th>Body</th>
                    </tr>
                </thead>
                <tbody>
                    { this.state.posts.map((post) => (
                        <tr key={post.id}>
                            <td>{ post.id }</td>
                            <td>{ post.title }</td>
                            <td>{ post.body }</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>

      </>
    )
  }
}
