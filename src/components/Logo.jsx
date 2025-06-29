import { MdCodeOff } from "react-icons/md";

export default function Logo() {
  return (
    <div className="flex items-center gap-1">
      <MdCodeOff className="text-textAccent text-2xl md:text-[35px]" />
      <h2 className="text-white text-xl md:text-2xl">LayekMiah</h2>
    </div>
  );
}
