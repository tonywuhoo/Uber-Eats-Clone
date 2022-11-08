import React from 'react'
import "./map.css"

export default function map() {
  return (
    <section>
      <h2 className="map-title">We Deliver All Around The States!</h2>
      <iframe
        width="100%"
        height="400"
        frameborder="0"
        scrolling="no"
        marginheight="0"
        marginwidth="0"
        id="gmap_canvas"
        src="https://maps.google.com/maps?width=520&amp;height=400&amp;hl=en&amp;q=United%20States%20of%20America%20+(Where%20do%20we%20deliver?)&amp;t=&amp;z=4&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
      ></iframe>
  </section>
  )
}
