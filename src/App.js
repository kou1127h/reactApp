import React from 'react';
import PropTypes from 'prop-types'

function App() {
  const profiles = [
    {name: 'taro', age: 10},
    {name: 'hanako', age: 10},
    {}
  ]
  return (
    <React.Fragment>
      {
        profiles.map((profile, index) => {
          return <User name={ profile.name } age={ profile.age } key={ index } />
        })
      }
    </React.Fragment>
    )
  }

  const User = (props) => {
    return <div>Hi, I am {props.name}, and {props.age} years old!</div>
  }

  User.defaultProps = {
    name: '名無し',
    age: 100
  }
  User.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number.isRequired

  }
export default App;
