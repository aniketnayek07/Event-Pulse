import React, { useState } from 'react'

const EventForm = () => {
  const [eventForm , setEventForm] = useState({
    eventname : "",
    organizerName : "",
    date : "",
    
  })
  return (
    <div>EventForm</div>
  )
}

export default EventForm