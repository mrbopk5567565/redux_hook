import React from 'react';
import { Container, Paper, Tabs, Tab } from '@material-ui/core';
// import { PhoneAndroid, PhoneIcon } from '@material-ui/icons'
// import PhoneIcon from '@material-ui/icons/Phone'

function MaterialUI() {
  const [ value, setValue ] = React.useState(0)

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  return(
    <Container maxWidth="xl">
      <Paper>
        <Tabs
          value={value}
          textColor="secondary"
          indicatorColor="primary"
          onChange={handleChange}
          // orientation="vertical"
          // ScrollButtonComponent
          variant="scrollable"
          scrollButtons="on"
          aria-label="scrollable force tabs example"
          centered
        >
          {/* <Tab icon={<PhoneAndroid/>} label="one"/>
          <Tab icon={<PhoneIcon />} label="two"/> */}
          <Tab label="three"/>
          <Tab label="four"/>
          <Tab label="five"/>
          <Tab label="five"/>
          <Tab label="six"/>
          <Tab label="seven"/>
          <Tab label="eight"/>
          <Tab label="nine"/>
          <Tab label="ten"/>
        </Tabs>
      </Paper>
    </Container>
  )
}

export default MaterialUI