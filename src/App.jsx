// @murselsen
import React from 'react'
// Css
import 'modern-normalize'
// @murselsen
import './App.css'
// Components
import Profile from './components/Profile/Profile'
import FriendList from './components/FriendList/FriendList'
import TransactionHistory from './components/TransactionHistory/TransactionHistory'
// Data
import userData from './data/userData.json'
import friends from './data/friends.json'
import transactions from './data/transactions.json'
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
      <TransactionHistory items={transactions} />
    </div>
  )
}

export default App
