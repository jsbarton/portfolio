import Image from "next/image";

export default function Home() {
  return (
    <div className="flex">
      <div className="w-1/3 h-full">
        <div>Picture</div>
        <div>NavContent</div>
      </div>
      <div className="w-2/3 h-full">Content</div>
    </div>
  );
}
