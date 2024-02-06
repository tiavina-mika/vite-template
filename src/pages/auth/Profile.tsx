import React from "react";

import { getCurrentUser } from "../../actions/auth.actions";

const Profile = () => {
  const user = getCurrentUser();

  return (
    <div className="space-y-2">
      <div className="space-x-2">
        <span>Name:</span>
        <span className="font-bold">{user?.lastName}</span>
      </div>
    </div>
  );
};

export default Profile;
