import PropTypes from 'prop-types'
import { useInView } from 'react-intersection-observer'

const cx = {
  a: 'bg-center cover dib relative w-50 ma0 fl cv-auto'
}

async function handleClick (e, url, title) {
  if (navigator && navigator.share) {
    e.preventDefault()
    navigator.share({ title, url })
  }
}

const Gif = ({ url, title }) => {
  const { ref, inView } = useInView()
  return (
    <a
      className={cx.a}
      href={url}
      onClick={e => handleClick(e, url, title)}
      ref={ref}
      style={{
        backgroundImage: inView ? `url(${url})` : null,
        height: '0',
        paddingBottom: '33.33333%'
      }}
      title={title}
    />
  )
}

Gif.propTypes = {
  url: PropTypes.string,
  title: PropTypes.string
}

export default Gif
