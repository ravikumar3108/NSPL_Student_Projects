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

    let propsdata = {
        pagename: "Products",
        description : "Manage your products and inventory.",
        buttonname: "Add Products",
        box1: "Total Products",
        box2: "In Stock",
        box3: "Out Of Stock"
    }


    return (
        <>
            <div className="min-h-screen bg-slate-50 p-4 sm:p-6 lg:p-8">
                <div className="mx-auto max-w-7xl">
                    <BoxGrid data={propsdata} />
                    <TableData Productdata={products} />
                </div>
            </div>
        </>
    )
}

export default Products
