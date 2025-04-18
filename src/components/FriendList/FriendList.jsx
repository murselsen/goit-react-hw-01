import React from 'react';
import FriendListCss from './FriendList.module.css';


const FriendListItem = ({
    avatar,
    // @murselsen
    name,
    isOnline
}) => {
    const statusValue = isOnline ? "Online" : "Offline";
    const statusColor = isOnline ? "green" : "red";
    return (
        <div className={FriendListCss.FriendList__card}>
            <img className={FriendListCss.FriendList__card_image} src={avatar} alt={name} />
            {/* @murselsen */}
            <p className={FriendListCss.FriendList__card_name}>{name}</p>
            <p className={FriendListCss.FriendList__card_state} style={{ color: statusColor }}>{statusValue}</p>
        </div>

    )
};

const FriendList = ({ friends }) => {
    const mapFriends = friends.map((friend, index) => <li key={index} className={FriendListCss.FriendList__item}> <FriendListItem avatar={friend.avatar} name={friend.name} isOnline={friend.isOnline} /> </li>)
    return (
        <ul className={FriendListCss.FriendList}>
            {/* @murselsen */}
            {mapFriends}
        </ul>
    );
};

export default FriendList;