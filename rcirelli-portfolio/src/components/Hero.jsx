function Hero({ children, heading }) {
  return (
    <div className="w-11/12 mx-auto">
      <h1 className="pb-5 text-2xl font-bold">{heading}</h1>
      {children}
    </div>
  );
}

export default Hero;
