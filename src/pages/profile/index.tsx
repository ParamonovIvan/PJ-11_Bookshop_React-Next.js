import styles from './Profile.module.scss'
import Image from 'next/image'
import Img from '../../../assets/images/imgProf.png'
import { useSelector } from 'react-redux'
import { RootState } from '../../store/index'

const Profile = () => {
  const user = useSelector((state: RootState) => state.profile.user);

  return (
    <div className={styles.profile}>
      <div className={styles.profile__main}>
        <h1 className={styles.profile__header}>Profile</h1>
        <div className={styles.profile__data}>
          <div>
            <Image src={Img} alt={"avatar"} width={235} height={235} />
          </div>
          <div className={styles.data__group__wrapper}>
            <div className={styles.data__group}>
              <label className={styles.data__group__label}>YOUR NAME</label>
              <p className={styles.data__group__text}>{user.name}</p>
            </div>
            <div className={styles.data__group}>
              <label className={styles.data__group__label}>YOUR EMAIL</label>
              <p className={styles.data__group__text}>{user.email}</p>
            </div>
            <button className={styles.btn}>Edit profile</button>
          </div>
        </div>
      </div>
      <div className={styles.profile__description}>
        <h2 className={styles.profile__description__header}>ABOUT ME</h2>
        <p className={styles.profile__description__text}>{user.about}</p>
      </div>
    </div>
  )
}

export default Profile
