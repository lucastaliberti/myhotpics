import PropTypes from 'prop-types'
import LogoSvg from '../public/mask-icon.svg'

const Logo = ({ className }) => (
  <>
    <style global jsx>
      {`
        svg {
          width: 3rem;
          transition: all .15s ease-in-out;
        }
        svg > path {
          stroke: #fff;
          stroke-width: .4;
          user-select: none;
          pointer-events: none;
          animation: rainbow 15s ease-in infinite;
        }
        @media (prefers-color-scheme: light) {
          svg > path {
            stroke: #000;
          }
        }
        @keyframes rainbow {
          0% { stroke: #f20e0e; }
          12.5% { stroke: #f25d0c; }
          25% { stroke: #e4f20c; }
          37.5% { stroke: #42f20c; }
          50% { stroke: #0cf2c9; }
          62.5% { stroke: #0c28f2; }
          75% { stroke: #930cf2; }
          87.5% { stroke: #930cf2; }
          100% { stroke: #f20e0e; }
        }
      `}
    </style>
    <LogoSvg className={className} />
  </>
)

Logo.propTypes = {
  className: PropTypes.string
}

Logo.defaultProps = {
  className: ''
}

export default Logo
