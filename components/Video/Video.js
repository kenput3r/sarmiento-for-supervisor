import React from 'react'
import PropTypes from 'prop-types'

export default function Video({ url, classes }) {
  return (
    <section className={classes}>
      <div className="max-w-screen-lg mx-auto">
        <div className="relative h-0 mt-4 pb-fluid-video phones:my-8">
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            width="560"
            height="315"
            src={`${url}?rel=0`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  )
}

Video.propTypes = {
  url: PropTypes.string.isRequired,
  classes: PropTypes.string,
}

Video.defaultProps = {
  classes: '',
}
