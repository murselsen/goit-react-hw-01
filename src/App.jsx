// @murselsen
import React from 'react'
// Css
import './App.css'
// Components
import Profile from './components/Profile'
import FriendList from './components/FriendList'
// Data
import userData from './userData.json'
import friends from './friends.json'
function App() {

  return (
    // @murselsen
    <div className='App'>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      <FriendList friends={friends} />
    </div>
  )
}

export default App
