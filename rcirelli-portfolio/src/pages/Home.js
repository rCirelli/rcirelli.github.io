import { useEffect } from 'react';
import About from '../components/About';
import BasicInfo from '../components/BasicInfo';
import Hero from '../components/Hero';
import ProfilePicture from '../components/ProfilePicture';
import Wrapper from '../components/Wrapper';
import useFetch from '../hooks/useFetch';

function Home() {
  const [gitHubInfo, setEndpoint] = useFetch();
  useEffect(() => {
    setEndpoint('https://api.github.com/users/rcirelli');
  }, [setEndpoint]);

  return (
    <>
      <div id="profile-div" />
      <Wrapper column>
        <section className="p-10 w-7/12">
          <div className="flex justify-around mb-10">
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
      <Hero heading={'Skills:'}>TESTE</Hero>
    </>
  );
}

export default Home;
