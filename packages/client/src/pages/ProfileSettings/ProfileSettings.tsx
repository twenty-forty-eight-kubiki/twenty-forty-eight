import '../ProfilePage/ProfilePage.scss';
import { withLayout } from '../../hocs/withLayout';
import ProfileForm from '../../components/ProfileForm/ProfileForm';

const ProfileSettings = () => {
  return (
    <div className='profile-page'>
      <div className='container'>
        <div className='profile-page__wrapper profile-page__wrapper--pt'>
          <ProfileForm />
        </div>
      </div>
    </div>
  );
};

export default withLayout(ProfileSettings);
