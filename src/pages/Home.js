import React from 'react'
import Layout from '../component/layout/Layout'
import { Link } from "react-router-dom"
import Banner from '../component/layout/images/banner.jpeg'
import"../styles/HomeStyleMain.css"
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';


const Home = () => {
  return (
    <Layout>
<div className='home'style={{backgroundImage:`URL(${Banner})`}}>
  
  <div className='headerContainer'> 
    <h1 style={{color:'#fff'}}>Food Website </h1>
    <p> Best Food In India</p>
    
    <Link to="/menu">
    
    <Stack  className ="hederStack"spacing={2} direction="row">
      
      <Button className='hederButton' variant="contained"color="success" >Oder now</Button>
      
    </Stack>
      
      
  
    </Link>
  </div>
</div>
        
    </Layout>
  )
}

export default Home