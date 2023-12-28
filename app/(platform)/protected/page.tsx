"use client";

import { UserButton, useAuth, useUser } from "@clerk/nextjs";

// import { auth, currentUser } from "@clerk/nextjs";

const ProtectedPage = () => {
  //   const user = await currentUser();
  //   const { userId } = auth();

  //   const { userId } = useAuth();
  //   const { user } = useUser();
  return (
    <UserButton afterSignOutUrl="/" />
    // <>
    //   <div>User: {user?.firstName}</div>
    //   <div>userId: {userId}</div>
    // </>
  );
};

export default ProtectedPage;
