import axios from 'axios'
import React, { useState } from 'react'

export const ApiDemo4 = () => {

    const [comments, setComments] = useState([])

    const getComments = async () => {
        try {
            const response = await axios.get("https://dummyjson.com/comments")
            setComments(response.data.comments)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div style={{ textAlign: "center", padding: 30 }}>
            <h1>API DEMO 4 - COMMENTS TABLE</h1>

            <button onClick={getComments}>GET COMMENTS</button>

            <table
                border="1"
                cellPadding="8"
                style={{
                    margin: "20px auto",
                    borderCollapse: "collapse",
                    width: "95%"
                }}
            >
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Body</th>
                        <th>Post ID</th>
                        <th>Likes</th>
                        <th>User ID</th>
                        <th>Username</th>
                        <th>Full Name</th>
                    </tr>
                </thead>

                <tbody>
                    {
                        comments.map((comment) => (
                            <tr key={comment.id}>
                                <td>{comment.id}</td>
                                <td>{comment.body}</td>
                                <td>{comment.postId}</td>
                                <td>{comment.likes}</td>
                                <td>{comment.user.id}</td>
                                <td>{comment.user.username}</td>
                                <td>{comment.user.fullName}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}
