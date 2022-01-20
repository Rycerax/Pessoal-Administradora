import Image from "next/image";

export default function Header() {
  return (
    <div>
      <div>
        <Image
          src={"/logo.png"}
          width={100}
          height={60}
          layout="fixed"
          alt="Logo"
        />
      </div>
    </div>
  );
}
