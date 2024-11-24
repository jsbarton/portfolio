import Image from "next/image";
import ProfilePic from "./i/profile_pic.jpg";

export default function Home() {
  return (
    <div className="flex h-screen">
      <div className="flex flex-col justify-center items-center w-1/3">
        <Image
          alt="my face"
          className="max-w-12 max-h-12 rounded-full"
          src={ProfilePic}
        />
        <div>About</div>
        <div>Projects</div>
      </div>
      <div className="w-1 bg-red-500" />
      <div className="flex flex-col justify-center w-2/3 px-8">Content</div>
    </div>
  );
}
