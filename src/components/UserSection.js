import * as React from "react";
import { UserInfo } from './UserInfo'


export const UserSection = ({ onSelect, userName }) => (
  <div>
    <div className="flex justify-center ">
      <UserInfo userName={userName} />
    </div>
  </div>
);
