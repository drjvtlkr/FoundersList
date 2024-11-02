'use server';
import { auth } from "@/auth";
import Image from "next/image";

const Home = async()=> {
  const session = await auth();
  if  (!session){
    return (
      <>
        <div>you are not logged in</div>
      </>
    );
  }

  const user = session.user;
  const userInfo ={
    name: user?.name,
    email: user?.email,
  }
  return (
    <>
      <div className="flex justify-center text-4xl">Home</div>
      <p>
        {JSON.stringify(userInfo)}
      </p>
    </>
  );
}

export default Home;