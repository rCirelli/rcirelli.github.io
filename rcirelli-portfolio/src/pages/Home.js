import { useEffect } from 'react';
import About from '../components/About';
import BasicInfo from '../components/BasicInfo';
import DevIcons from '../components/DevIcons';
import Hero from '../components/Hero';
import ProfilePicture from '../components/ProfilePicture';
import Wrapper from '../components/Wrapper';
import useFetch from '../hooks/useFetch';
import Translate from '../components/Translate';

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
          <h1 className="mb-5 text-2xl text-slate-900 font-bold"><Translate>Skills:</Translate></h1>
          <ul class="w-full grid grid-rows-2 grid-cols-5 gap-x-5 gap-y-5 mb-16">
            {skills.map((skill, i, arr) => (
              <li className="flex justify-center">
                <DevIcons key={skill} iconName={skill} />
              </li>
            ))}
          </ul>
        </div>
        <div className="w-5/12 mx-auto">
          <h1 className="mb-5 text-2xl text-slate-900 font-bold"><Translate>Currently Learning:</Translate></h1>
          <ul class="w-full grid grid-rows-1 grid-cols-5 gap-x-5 gap-y-5">
            {learningSkills.map((skill, i, arr) => (
              <li className="flex justify-center">
                <DevIcons key={skill} iconName={skill} />
              </li>
            ))}
          </ul>
        </div>
      </Hero>
      <Wrapper column>
        <section className="py-10 w-5/12">
          <h3
            className="text-2xl font-bold tracking-wide my-5"
          >
            <Translate>Let's Connect!</Translate>
          </h3>
            <div className="flex gap-7 my-7">
              <a
                href='https://linkedin.com/in/raphael-cirelli'
                target="_blank"
                rel="noreferrer"
                className="text-white bg-[#0076b2] focus:ring-4 focus:outline-none focus:ring-[#0076b2]/50 w-16 h-16
                font-medium rounded-lg text-sm text-center inline-flex items-center dark:focus:ring-[#0076b2]/55 mb-2
                hover:outline outline-1 outline-offset-2 outline-sky-400"
              >
                <DevIcons iconName="linkedin" />
              </a>
              <a
                href='https://github.com/rcirelli'
                target="_blank"
                rel="noreferrer"
                className="text-white bg-[#181616] focus:ring-4 focus:outline-none focus:ring-[#181616]/50 w-16 h-16
                font-medium rounded-lg text-sm text-center inline-flex items-center dark:focus:ring-[#181616]/55 mb-2
                hover:outline outline-1 outline-offset-2 outline-sky-400"
              >
                <DevIcons iconName="github2" />
              </a>
            </div>
        <hr className="my-10 w-full border border-sky-400" />
        <p className="block font-light antialiased mb-2">
          <Translate>Made with React, Redux, Tailwind and Material UI by</Translate> <em>Raphael Cirelli Garrido</em>
        </p>
        <em className="text-sm">
          <Translate>Icons source:</Translate>
          <a
            href="https://devicon.dev"
            target="_blank"
            rel="noreferrer"
            className="text-sky-400 ml-2 hover:underline"
          >
              devicon.dev
          </a>
        </em>
        </section>
      </Wrapper>
    </>
  );
}

export default Home;
