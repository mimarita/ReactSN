import React from 'react';
import Preloader from '../../common/Preloader/Preloader';
import s from './ProfileInfo.module.css';
import ProfileStatus from './ProfileStatus';


const ProfileInfo = (props) => {
  if (!props.profile) {
    return <div><Preloader /></div>
  }

  return <div>
{/* <div>
      <img src="https://p.bigstockphoto.com/eIdTXLbqQilMs9xbjvcs_bigstock-Aerial-View-Of-Sandy-Beach-Wit-256330393.jpg"></img>
</div> */}
    <div className={s.descriptionBlock}>
      <img src={props.profile.photos.large} />
           </div>
           <div> <ProfileStatus status={props.status} updateStatus={props.updateStatus}/></div>
  </div>
}

export default ProfileInfo;