import React from "react";
import * as Css from "./FriendListItem.module.css";



const FriendListItem = ({
    avatar,
    name,
    isOnline
}) => {

    const statusValue = isOnline ? "Online" : "Offline";
    const statusColor = isOnline ? "green" : "red";

    return (
        <div className={Css.friendListItem}>
            <img src={avatar} alt={name} width="48" />
            <p>{name}</p>
            <p style={{ color: statusColor }}>{statusValue}</p>
        </div>

    )
};

export default FriendListItem;
// @murselsen