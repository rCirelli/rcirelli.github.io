import About from '../components/About';
import BasicInfo from '../components/BasicInfo';
import Hero from '../components/Hero';
import ProfilePicture from '../components/ProfilePicture';

function Home() {
  return (
    <>
      <div id="profile-div" />
      <section className="p-10">
        <div className="flex justify-around mb-10">
          <ProfilePicture
            src={'/assets/profile-picture.jpeg'}
            alt={'Raphael Cirelli'}
            isOpenToWork={true}
          />
          <BasicInfo />
        </div>
        <About />
      </section>
      <section className="bg-slate-300 text-slate-700 p-10">
        <Hero heading={'Skills:'}>TESTE</Hero>
        <Hero heading={'Skills:'}>TESTE</Hero>
        <Hero heading={'Skills:'}>TESTE</Hero>
        <Hero heading={'Skills:'}>TESTE</Hero>
        <Hero heading={'Skills:'}>TESTE</Hero>
        <Hero heading={'Skills:'}>TESTE</Hero>
        <Hero heading={'Skills:'}>TESTE</Hero>
        <Hero heading={'Skills:'}>TESTE</Hero>
        <Hero heading={'Skills:'}>TESTE</Hero>
        <Hero heading={'Skills:'}>TESTE</Hero>
      </section>
    </>
  );
}

export default Home;
