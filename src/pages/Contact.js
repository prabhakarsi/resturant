import React from 'react'
import Layout from '../component/layout/Layout'
import { Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import MailIcon from '@mui/icons-material/Mail';
import CallIcon from '@mui/icons-material/Call';
const Contact = () => {
  return (
    <Layout>
        <Box sx={{my:2,ml:10,"& h4":{fontWeight:"bold",mb:2}}}>
          <Typography variant='h4'>
            Contact My Resturant
          </Typography>
          <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          </p>
        </Box>
        <Box sx={{ m:3,width:"600px",ml:10,"@media(max-width:600px)":{
         width:"300px" 
        }}}>
          <TableContainer component={Paper}>
<Table aria-label='contact table'>
  <TableHead>
    <TableRow>
      <TableCell sx={{bgcolor:"black",color:"white",}} align='center'>
        Contact Details
      </TableCell>
    </TableRow>
  </TableHead>
  <TableBody>
    <TableRow>
      <TableCell>
<SupportAgentIcon sx={{color:"red",pt:1}}/> 1234567890 (tollfree)
      </TableCell>
    </TableRow>
    <TableRow>
    <TableCell>
<MailIcon sx={{color:"skyBlue",pt:1}}/> prabhakar@gmail.com 
      </TableCell>
    </TableRow>
    <TableRow>
    <TableCell>
< CallIcon sx={{color:"green",pt:1}}/> 97500000 (tollfree)
      </TableCell>
    </TableRow>
  </TableBody>
</Table>
          </TableContainer>
        </Box>
    </Layout>
  )
}

export default Contact