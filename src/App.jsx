// @murselsen
import React from 'react'
// Css
import './App.css'
// Components
import Profile from './components/Profile/Profile'
import FriendList from './components/FriendList/FriendList'
// Data
import userData from './data/userData.json'
import friends from './data/friends.json'
function App() {

  return (
    // @murselsen
    <div className='App'>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        // @murselsen
        stats={userData.stats}
      />
      <FriendList friends={friends} />
    </div>
  )
}

export default App
