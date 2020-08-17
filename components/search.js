import React from 'react'
import PropTypes from 'prop-types'

const cx = {
  input: 'input-reset sans-serif border-box bn br0 pv2 fw1 w-100'
}

const PLACEHOLDER = 'MY HOT. PICS'

const Search = ({ defaultValue }) => (
  <form method='get' action='/'>
    <style global jsx>
      {`
        input {
          font-size: 9vw;
          color: #fff;
          background-color: #000;
          padding-right env(safe-area-inset-right + 0.5rem , 0.5rem);
          padding-left: env(safe-area-inset-left + 0.5rem , 0.5rem);
        }

        @media (prefers-color-scheme: light) {
          input {
            color: #242424;
            background: #fff;
          }
        }
      `}
    </style>
    <label
      htmlFor='q'
      style={{
        color: 'transparent',
        fontSize: 0
      }}
    >
      {'Search for a gif'}
    </label>
    <input
      autoFocus
      className={cx.input}
      defaultValue={defaultValue}
      id='q'
      name='q'
      placeholder={PLACEHOLDER}
      type='text'
      style={{
        appearance: 'none'
      }}
    />
  </form>
)

Search.propTypes = {
  defaultValue: PropTypes.string
}

Search.defaultProps = {
  defaultValue: ''
}

export default Search
