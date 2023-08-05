import { FriendListItem } from "./FriendListItem"
import css from './FriendList.module.css'
import PropTypes from "prop-types";


export const FriendList = ({friends}) => {
return (
        <ul className={css.friendList}>
  {friends.map(({avatar, name, isOnline, id})=>(
<FriendListItem
key={id}
avatar={avatar}
name={name}
isOnline={isOnline}
/>
  ))}
</ul>
    )
}

FriendList.prototype = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      isOnline: PropTypes.bool,
      avatar: PropTypes.string,
      name: PropTypes.string,
    })
  ).isRequired,
};