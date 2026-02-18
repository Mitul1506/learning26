import axios from 'axios'
import React, { useState } from 'react'

export const ApiDemo3 = () => {

    const [products, setProducts] = useState([])

    const getProducts = async () => {
        try {
            const response = await axios.get("https://dummyjson.com/products")
            setProducts(response.data.products)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div style={{ textAlign: "center", padding: 30 }}>
            <h1>API DEMO 3 - PRODUCTS TABLE</h1>

            <button onClick={getProducts}>GET PRODUCTS</button>

            <table border="1" cellPadding="10"style={{
                    margin: "20px auto",
                    borderCollapse: "collapse",
                    width: "90%"
                }}
            >
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Category</th>
                    </tr>
                </thead>

                <tbody>
                    {
                        products.map((product) => (
                            <tr key={product.id}>
                                <td>{product.id}</td>
                                <td>{product.title}</td>
                                <td>{product.description}</td>
                                <td>{product.category}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}
