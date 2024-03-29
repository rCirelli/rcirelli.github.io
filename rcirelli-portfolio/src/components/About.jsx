import Translate from './Translate';

function About() {
  return (
    <div className="w-full flex justify-center py-3">
      <p className="w-full text-slate-400 text-justify leading-relaxed tracking-wider">
        <Translate>
          I've always been passionate about technology. My first contact with
          programming was in 2010 in a technical course at high school. In 2016
          I graduated in Game Design at Anhembi Morumbi University - UAM.
          Working for +5 years as an IT Analyst, I wanted a career change. And
          at the beginning of 2022, I decided to start a Web Development course
          at Trybe, which is one of the most renowned programming schools in
          Brazil.
        </Translate>
      </p>
    </div>
  );
}

export default About;
