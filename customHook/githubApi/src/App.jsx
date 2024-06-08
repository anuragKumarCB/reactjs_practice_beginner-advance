import React from "react";
import { useGetGitHubUser } from "./hooks/useGetGitHubUser";

function App() {
  const gitHubUser = "anuragKumarCB";
  const { user, loading, error } = useGetGitHubUser(gitHubUser);

  console.log(user);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div className="border p-10 rounded-lg flex flex-col gap-2 bg-teal-600 text-white">
        <h2 className="text-xl flex gap-4 items-baseline">Name: <span className="text-2xl">{user.name}</span></h2>
        <h2 className="text-xl flex gap-4 items-baseline">ID: <span className="text-2xl">{user.id}</span></h2>
        <h2 className="text-xl flex gap-4 items-baseline">Followers: <span className="text-2xl">{user.followers}</span></h2>
        <h2 className="text-xl flex gap-4 items-baseline">Following: <span className="text-2xl">{user.following}</span></h2>
        <h2 className="text-xl flex gap-4 items-baseline">Public Repos: <span className="text-2xl">{user.public_repos}</span></h2>
      </div>
    </div>
  );
}

export default App;
