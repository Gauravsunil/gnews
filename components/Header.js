import {Appbar} from 'react-native-paper';

import React from 'react'
const Header=()=>{
return(
      <Appbar.Header>
      
      <Appbar.Content
        title="Weather App"
        subtitle="Select City"
      /> 
      </Appbar.Header>
      )
}

export default Header;