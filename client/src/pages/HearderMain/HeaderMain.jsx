import React from 'react'
import HeaderMainComponent from '@components/HeaderMainComponent'
function HeaderMain({roomState}) {
  
  const title = roomState.room?.title || "No Names";
  
  return (
    <HeaderMainComponent title={title}/>
  )
}

export default HeaderMain