import Image from "next/image";

 const Home =() =>{
  return (
    <div className=" m-auto">
      <Image
        className="dark:invert m-auto"
        src="/next.svg"
        alt="Next.js logo"
        width={100}
        height={100}
        priority
      />
    </div>
  );
}
export default Home