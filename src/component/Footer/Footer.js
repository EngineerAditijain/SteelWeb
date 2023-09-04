import React from 'react'
import './footer.css'
import { Stack, Typography } from '@mui/material'
import { FaHeadset } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { FaMapMarkedAlt } from "react-icons/fa";
function footer() {
  return (
    <div className='footer'>
      <Stack direction={'row'} gap={3} style={{margin:"3rem"}}>
        <Stack direction={'column'} gap={3}>
          <Typography>About</Typography>
          <Typography>Metal Craft Studio (MCS), a Narela Delhi-based company,<br/> Provides high-quality metal job work services

          </Typography>

        </Stack>
        <Stack direction={'column'} gap={3}>
          <Typography>Quicks Links</Typography>
          <Stack direction={'column'} gap={1}>
            <Typography>Home</Typography>
            <Typography>About</Typography>
            <Typography>Contact Us</Typography>
            <Typography>Infrastructure</Typography>
          </Stack>

        </Stack>
        <Stack direction={'column'} gap={3}>
          <Typography>Products</Typography>
          <Stack direction={'column'} gap={1}>
            <Typography>PVD Louver Panels</Typography>
            <Typography>PVD Metal Sheets</Typography>
            <Typography>Stainless Steel Decorative Profiles</Typography>
            <Typography>Texture Sheets</Typography>
          </Stack>

        </Stack>
       
        <Stack direction={'column'} gap={3}>
          <Typography>Contact Us</Typography>
          <Stack direction={'column'} gap={1}>
            <div className='contact'>
              <FaHeadset/>
              <Typography>+91 87509 99128</Typography>
            </div>
            <div className='contact'>
              <AiOutlineMail/>
              <Typography>info@metalcraftstudio.com</Typography>
            </div>
            <div className='contact'>
              <Typography>
                D-1668, DSIDC Industrial Area, Narela, Delhi-110040</Typography>
            </div>

           
          </Stack>

        </Stack>

      </Stack>
      <div className='lastSection'>
        <Typography>Proudly powered | Metal Craft Studio .</Typography>
      </div>
    </div>
  )
}

export default footer