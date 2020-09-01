import React from 'react'
import PropTypes from 'prop-types'

const cx = {
  a: 'bg-center cover dib relative w-50 ma0 fl cv-auto'
}

async function handleClick (e, url, title) {
  if (navigator && navigator.share) {
    e.preventDefault()
    navigator.share({ title, url })
  }
}

const Gif = ({ url, title }) => (
  <a
    className={cx.a}
    href={url}
    onClick={e => handleClick(e, url, title)}
    title={title}
    style={{
      backgroundImage: `url(${url})`,
      height: '0',
      paddingBottom: '33.33333%'
    }}
  />
)

Gif.propTypes = {
  url: PropTypes.string,
  title: PropTypes.string
}

export default Gif
