import { GlobalStyle } from 'GlobalStyle';
import user from '../data/user.json';

import { Profile } from './Profile/Profile';

import { Profile } from '../components/profile/Profile';
import { GlobalStyle } from 'GlobalStyle';


export const App = () => {
  return (
    <div>
      <GlobalStyle />
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
    </div>
  );
};
