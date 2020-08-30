/* globals File */
import React from 'react'
import PropTypes from 'prop-types'
import fetch from 'isomorphic-unfetch'

const cx = {
  a: 'bg-center cover dib relative w-50 ma0 fl cv-auto'
}

async function handleClick (url, title) {
  if (navigator.share) {
    const res = await fetch(url).catch(err => window.alert(err))
    const blob = await res.blob()
    const file = new File([blob], `${title}.gif`, { type: blob.type })
    const data = {
      url,
      files: [file]
    }
    await navigator.share(data).catch(err => window.alert(err))
  } else {
    window.alert('no share')
    window.location.push(url)
  }
}

const Gif = ({ url, title }) => (
  <a
    className={cx.a}
    href={url}
    onClick={e => {
      e.preventDefault()
      if (typeof window !== 'undefined') {
        handleClick(url, title)
      }
    }}
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
