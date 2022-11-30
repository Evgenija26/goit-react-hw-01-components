import PropTypes from 'prop-types';
import css from './Profile.module.css';

const Profile = ({ username, tag, location, avatar, stats }) => (
  <div className={css.profile}>
    <div className={css.description}>
      <img
        src={avatar}
        alt="User avatar"
        className={css.avatar}
      />
      <p className={css.username}>{username}</p>
      <p className={css.tag}>@{tag}</p>
      <p className={css.location}>{location}</p>
    </div>

    <ul className={css.stats}>
      <li>
        <span className={css.label}>Followers</span>
        <span className={css.quantity}>{stats.followers}</span>
      </li>
      <li>
        <span className={css.label}>Views</span>
        <span className={css.quantity}>{stats.views}</span>
      </li>
      <li>
        <span className={css.label}>Likes</span>
        <span className={css.quantity}>{stats.likes}</span>
      </li>
    </ul>
  </div>);
  
  Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string,
  stats: PropTypes.objectOf(PropTypes.number).isRequired,
};

export default Profile;

    /* // const Profile = ({ username, tag, location, avatar, stats }) => (
//   <div className={css.profile}>
//     <div className={css.description}>
//       <img src={avatar} alt="User avatar" className={css.avatar} />
//       <p className={css.name}>{username}</p>
//       <p className={css.tag}>@{tag}</p>
//       <p className={css.location}>{location}</p>
//     </div> */
/* //     <ul className={css.stats}>
//       <li className={css.stats__item}>
//         <span className={css.label}>Followers</span>
//         <span className={css.quantity}>{stats.followers}</span>
//       </li>
//       <li className={css.stats__item}>
//         <span className={css.label}>Views</span>
//         <span className={css.quantity}>{stats.views}</span>
//       </li>
//       <li className={css.stats__item}>
//         <span className={css.label}>Likes</span>
//         <span className={css.quantity}>{stats.likes}</span>
//       </li>
//     </ul>
//   </div>
// ); */



// const Profile = <div class="profile">
//   <div class="description">
//     <img
//       src="https://cdn-icons-png.flaticon.com/512/1077/1077012.png"
//       alt="User avatar"
//       class="avatar"
//     />
//     <p class="name">Petra Marica</p>
//     <p class="tag">@pmarica</p>
//     <p class="location">Salvador, Brasil</p>
//   </div>

//   <ul class="stats">
//     <li>
//       <span class="label">Followers</span>
//       <span class="quantity">1000</span>
//     </li>
//     <li>
//       <span class="label">Views</span>
//       <span class="quantity">2000</span>
//     </li>
//     <li>
//       <span class="label">Likes</span>
//       <span class="quantity">3000</span>
//     </li>
//   </ul>
// </div>