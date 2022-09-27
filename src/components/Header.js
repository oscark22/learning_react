import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({ title = 'Task Tracker' }) => {
  const onClick = () => {
    console.log('Click')
  }

  return (
    <header className='header'>
      <h1>{title}</h1>
      <Button color='green' text='Add' onClick={onClick} />
    </header>
  );
}

Header.propTypes = {
  title: PropTypes.string,
}

// CSS in JS
// const h1Style = {
//   textTransform: 'uppercase',
// }

export default Header
