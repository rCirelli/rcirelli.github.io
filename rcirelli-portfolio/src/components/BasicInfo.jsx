import Translate from './Translate';

function BasicInfo() {
  return (
    <div>
      <span className="h-full flex flex-col justify-center">
        <p className="text-base text-cyan-400 font-mono font-thin">
          <Translate>Hello, my name is</Translate>
        </p>
        <h1 className="text-5xl tracking-wider mt-2 mb-4 font-semibold">
          Raphael Cirelli
        </h1>
        <p className="text-xl text-cyan-400 font-mono font-thin w-full">
          <Translate>Front-End Web Developer</Translate>
        </p>
      </span>
    </div>
  );
}

export default BasicInfo;
