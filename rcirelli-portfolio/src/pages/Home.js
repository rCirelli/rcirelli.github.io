import { useEffect } from 'react';
import About from '../components/About';
import BasicInfo from '../components/BasicInfo';
import DevIcons from '../components/DevIcons';
import OpenFileBtn from '../components/OpenFileBtn';
import Hero from '../components/Hero';
import ProfilePicture from '../components/ProfilePicture';
import Wrapper from '../components/Wrapper';
import useFetch from '../hooks/useFetch';

function Home() {
  const [gitHubInfo, setEndpoint] = useFetch();
  useEffect(() => {
    setEndpoint('https://api.github.com/users/rcirelli');
  }, [setEndpoint]);

  const skills = ['bash', 'html', 'css', 'js', 'git', 'github', 'react', 'tailwind'];
  const learningSkills = ['docker', 'node', 'mysql', 'ts', 'express', 'next'];

  return (
    <>
      <div id="profile-div" />
      <Wrapper column>
        <section className="py-10 w-5/12">
          <div className="flex justify-between mb-10">
            <ProfilePicture
              src={gitHubInfo?.avatar_url || '/assets/profile-picture.jpeg'}
              alt={'Raphael Cirelli'}
              isOpenToWork={true}
            />
            <BasicInfo />
          </div>
          <About />
        </section>
      </Wrapper>
      <Hero>
        <div className="w-5/12 mx-auto">
          <h1 className="mb-5 text-2xl text-slate-900 font-bold">Skills:</h1>
          <ul class="w-full grid grid-rows-2 grid-cols-5 gap-x-5 gap-y-5 mb-16">
            {skills.map((skill, i, arr) => (
              <li className="flex justify-center">
                <DevIcons key={skill} iconName={skill} />
              </li>
            ))}
          </ul>
        </div>
        <div className="w-5/12 mx-auto">
          <h1 className="mb-5 text-2xl text-slate-900 font-bold">Currently Learning:</h1>
          <ul class="w-full grid grid-rows-1 grid-cols-5 gap-x-5 gap-y-5">
            {learningSkills.map((skill, i, arr) => (
              <li className="flex justify-center">
                <DevIcons key={skill} iconName={skill} />
              </li>
            ))}
          </ul>
        </div>
      </Hero>
      <Wrapper>
        <section className="py-10 w-5/12">
          <OpenFileBtn file="/assets/Resume-Raphael_Cirelli_Garrido.pdf" />
        </section>
      </Wrapper>
    </>
  );
}

export default Home;
