import * as React from "react";
import { fetchGithubUser } from '../userService'
import { UserFalback } from './UserFallback'
import { UserView } from './UserView'
import { REQUEST_STATUS, useAsync } from '../utils'


export const UserInfo = ({ userName }) => {

  const initialRequestStatus = userName
    ? REQUEST_STATUS.PENDING
    : REQUEST_STATUS.IDLE;

  const { status, error, data: user, run } = useAsync({
    status: initialRequestStatus,
  });

  React.useEffect(() => {
    if (!userName) return;
    return run(fetchGithubUser(userName))
  }, [userName, run]);

  switch (status) {
    case REQUEST_STATUS.IDLE:
      return  'Submit user';
    case REQUEST_STATUS.PENDING:
      return  (<UserFalback userName={userName}/>);
    case REQUEST_STATUS.RESOLVED:
      return  (<UserView user={user}/>);
    case REQUEST_STATUS.REJECTED:
      return (
        <div>
          {error}
          <pre style={{ whitespace: 'normal' }} />
        </div>
      );
  }

};
