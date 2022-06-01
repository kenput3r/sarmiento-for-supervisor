import React from 'react'
import PropTypes from 'prop-types'

function Videos({ videos }) {
  return (
    <div>
      <div className="flex flex-row flex-wrap w-full px-4 phones:px-2 phones:py-2">
        {videos.map((video) => (
          <div key={video} className="max-w-full w-full notPhones:max-w-[50%] notPhones:w-[50%]">
            <div className="relative h-0 m-4 pb-fluid-video phones:m-2">
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                width="560"
                height="315"
                src={`${video}?rel=0`}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Videos

Videos.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  videos: PropTypes.array.isRequired,
}
