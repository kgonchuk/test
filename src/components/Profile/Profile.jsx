import css from './Profile.module.css'
import PropTypes from "prop-types";

export const Profile = ({username, tag, location, avatar, stats, })  => {
    return (<div className={css.profile}>
    <div className="description">
      <img
        src={avatar}
        alt="User avatar"
        className={css.avatar}
      />
      <p className={css.name}>{username}</p>
      <p className={css.tag}>{tag}</p>
      <p className={css.location}>{location}</p>
    </div>
  
    <ul className={css.stats}>
      <li className={css.list}>
        <span className={css.lable}>Followers</span>
        <span className={css.quantity}>{stats.followers}</span>
      </li>
      <li className={css.list}>
        <span className={css.lable}>Views</span>
        <span className={css.quantity}>{stats.views}</span>
      </li>
      <li className={css.list}>
        <span className={css.lable}>Likes</span>
        <span className={css.quantity}>{stats.likes}</span>
      </li>
    </ul>
  </div>)
}

Profile.prototype = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
  followers: PropTypes.number.isRequired,
views: PropTypes.number.isRequired,
likes : PropTypes.number.isRequired
})
}