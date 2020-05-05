import React from 'react';

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

export default App;
