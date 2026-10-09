import React, { useEffect, useState } from 'react'
import TableData from '../utilties/TableData'
import BoxGrid from '../utilties/BoxGrid'
import api from '../Api/Api'

function Products() {

    const [products, setProducts] = useState([])

    const fetchProducts = async () => {
        const res = await api.get("/Products/getAllProducts")
        console.log(res.data.data)
        setProducts(res.data.data)
    }

    useEffect(() => {
        fetchProducts()
    }, [])


    return (
        <>
            <div className="min-h-screen bg-slate-50 p-4 sm:p-6 lg:p-8">
                <div className="mx-auto max-w-7xl">
                    <BoxGrid  />
                    <TableData Productdata={products} />
                </div>
            </div>
        </>
    )
}

export default Products
