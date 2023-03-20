import './ProfilePage.scss';
import ProfileList from '../../components/ProfileList/ProfileList';

import { withLayout } from '../../hocs/withLayout';

const ProfilePage = () => {
  return (
    <div className='profile-page'>
      <div className='container'>
        <div className='profile-page__wrapper'>
          <ProfileList />
        </div>
      </div>
    </div>
  );
};

export default withLayout(ProfilePage);
