import About from './components/About';
import BasicInfo from './components/BasicInfo';
import ProfilePicture from './components/ProfilePicture';
import './index.css';

export default function App() {
  return (
    <main className="bg-slate-900 text-slate-300 w-screen h-screen p-10">
      <div className="flex justify-around mb-10">
        <ProfilePicture
          src={'/assets/profile-picture.jpeg'}
          alt={'Raphael Cirelli'}
          isOpenToWork={true}
        />
        <BasicInfo />
      </div>
      <About />
    </main>
  );
}
