import React from 'react'
import { Card, CardContent, Typography,Divider } from '@mui/material';
import WishAnimation from './TypingAnimations'

function CustomCard() {
  return (
    <Card variant='outlined' 
    sx={{
      border: "2px solid rgb(94, 94, 184)",
      boxShadow: "inset 0 -3em 3em rgb(26 26 255 / 30%), 0 0 0 2px white,0.3em 0.9em 1em rgb(128 0 128 / 60%)",
      }}>
      <CardContent>
        <WishAnimation/>
        <Divider>&#127800;</Divider>
        <Typography sx={{alignContent:'center'}}>
          To the sweetest most cutest person know have and awesome day and stay blessed happy birthday kanna happy b-day to my best best friend💛the sunrises nd sets by uh Nd ur smile🫶🏻
        </Typography>
      </CardContent>
    </Card>
  )
}

export default CustomCard