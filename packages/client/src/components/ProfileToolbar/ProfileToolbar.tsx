import BasicLanguages from '../BasicLanguages/BasicLanguages';
import BasicThemeModes from '../BasicThemeModes/BasicThemeModes';
import './ProfileToolbar.scss';

const ProfileToolbar = () => {
  return (
    <div className='profile-page-toolbar'>
      <BasicLanguages />

      <BasicThemeModes />
    </div>
  );
};

export default ProfileToolbar;
