import { GlobalStyle } from 'GlobalStyle';
import user from '../data/user.json';
import data from '../data/data.json';

import { Statistics } from './Statistics/Statistics';
import { Profile } from './Profile/Profile';

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
      <Statistics title="Upload stats" stats={data} />
    </div>
  );
};
