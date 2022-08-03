function Hero({ children, heading }) {
  return (
    <section className="bg-slate-300 text-slate-700 p-10 w-screen">
      <div className="w-11/12 mx-auto border">
        <h1 className="pb-5 text-2xl font-bold">{heading}</h1>
        {children}
      </div>
    </section>
  );
}

export default Hero;
