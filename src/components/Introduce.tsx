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
          <h1 className="md:text-xl lg:text-2xl">
            <span className="font-bold">
              새로운 것을 배우고, 꾸준한 성장을 추구하는
            </span>{" "}
            <br />
            프론트엔드 개발자 강승훈입니다.
          </h1>
        </div>
      </div>
    </>
  );
}
