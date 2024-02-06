import React, { useEffect, useState } from "react";

import { getCurrentUser } from "../../actions/auth.actions";
import { IUser } from "../../types/auth.types";

const Profile = () => {
  const [user, setUser] = useState<IUser | null>(null);

  useEffect(() => {
    const init = async () => {
      const currentUser = await getCurrentUser();
      if (!currentUser) return;
      setUser(currentUser);
    }

    init();
  }, []);

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
