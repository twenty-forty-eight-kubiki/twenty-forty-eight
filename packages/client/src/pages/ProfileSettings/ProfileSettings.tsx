import '../ProfilePage/ProfilePage.scss';
import ProfileForm from '../../components/ProfileForm/ProfileForm';
import ProfileToolbar from '../../components/ProfileToolbar/ProfileToolbar';
import { withLayout } from '../../hocs/withLayout';

const ProfileSettings = () => {
  return (
    <div className='profile-page'>
      <div className='container'>
        <div className='profile-page__wrapper'>
          <ProfileToolbar />

          <ProfileForm />
        </div>
      </div>
    </div>
  );
};

export default withLayout(ProfileSettings);
