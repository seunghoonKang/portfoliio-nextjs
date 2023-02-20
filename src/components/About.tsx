export default function About() {
  return (
    <section id="about">
      <div className=" my-12 pb-12 md:pt-16 md:pb-12 ">
        <h1 className="text-center font-extrabold text-4xl mb-24">
          소개
          <hr className="w-10 h-1 mx-auto my-4 bg-cyan-500 border-0 rounded"></hr>
        </h1>
        <div className="text-center flex flex-col gap-12">
          <div>
            <p className="text-2xl font-bold">
              <span className=" text-cyan-600">꾸준한 배움과 성장</span>을 통해
              발전하고자 합니다.
            </p>
            <p className=" text-base ">
              배운 것을 잊지 않기 위해 블로그, 노션 등으로 정리합니다.
            </p>
          </div>
          <div>
            <p className=" text-2xl font-bold">
              <span className=" text-cyan-600">
                기술에 얽매이지 않는 개발자
              </span>
              가 되고 싶습니다.
            </p>
            <p className=" text-base">
              기업, 사용자가 원하는 기술이라면 마다하지않고 뛰어듭니다.
            </p>
          </div>
          <div>
            <p className=" text-2xl font-bold">
              다양한 직군과{" "}
              <span className=" text-cyan-600">원활한 커뮤커니케이션</span>을 할
              수 있습니다.
            </p>
            <p className="text-base">
              개발자 이전, 3년차 물류기획 / 운영 매니저로 임했습니다.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
