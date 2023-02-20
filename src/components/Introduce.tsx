import Image from "next/image";

export default function Introduce() {
  return (
    <>
      <div className="xs:flex xs:flex-col md:flex-row gap-8 items-center justify-center">
        <div className="flex items-center justify-center">
          <Image
            src="/profile.png"
            width={300}
            height={300}
            alt="profile Image"
          />
        </div>
        <div className="flex items-center justify-center">
          <h1 className="sm:text-3xl md:text-xl lg:text-2xl text-center font-bold">
            안녕하세요! <br />
            프론트엔드 개발자 강승훈입니다.
          </h1>
        </div>
      </div>
    </>
  );
}
