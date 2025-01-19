import React from 'react'
import Header from '../layout/Header'
import Footer from '../layout/Footer'
import SupplierShow from '../components/students/SupplierShow'
import CreateSupplier from '../components/students/CreateSupplier'

const Home = () => {
  return (
    <>
    {/* <Header/> */}

    <SupplierShow/>
    <CreateSupplier/>

    {/* <Footer/> */}
    
    </>
  )
}

export default Home