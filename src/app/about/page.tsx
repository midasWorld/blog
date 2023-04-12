import Profile from "@/components/Profile";

const TITLE_CLASS = "text-2xl font-bold text-gray-800 my-2";
export default function AboutPage() {
  return (
    <>
      <Profile />
      <section className="bg-gray-100 p-8 m-8 text-center">
        <h2 className={TITLE_CLASS}>Who am I?</h2>
        <p>
          성장하는 백엔드 개발자 <br />
          비지니스 성장에 기여하는 일을 우선으로 합니다.
        </p>
        <h2 className={TITLE_CLASS}>Work Experience</h2>
        <p>위저드 정보 시스템(2019.07-2022.04)</p>
        <h2 className={TITLE_CLASS}>Other Experience</h2>
        <p>[프로그래머스] 백엔드 데브코스 2기(2022.03-2022.08)</p>
        <h2 className={TITLE_CLASS}>Skills</h2>
        <p>Java, Spring Boot, C#, AWS</p>
        <p>Javascript, NextJS</p>
        <p>MS-SQL, MySQL</p>
        <p>Jira, Git</p>
      </section>
    </>
  );
}
