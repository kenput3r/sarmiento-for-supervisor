import React from 'react'

function Countdown() {
  // const date = new Date();
  // const day = date.getUTCDate();
  return (
    <div className="flex flex-row justify-between bg-orange-500 text-white text-2xl p-4 uppercase font-bold relative max-w-[100%] mt-[99px] phones:mt-[73px] phones:flex-col">
      <div>
        Election Day is Today
      </div>
      <div>
        <a href="https://ocvote.gov/elections/2022-statewide-primary-election/ballot-drop-box-locations" className="underline phones:text-xl" target="_blank" rel="noreferrer">Voting Centers</a>
        <span className="px-2"> | </span>
        <a href="https://ocvote.maps.arcgis.com/apps/webappviewer/index.html?id=269b2204a2744d7d8aa279f81743baf0" className="underline phones:text-xl" target="_blank" rel="noreferrer">Drop Boxes</a>
      </div>
    </div>
  )
}

export default Countdown
