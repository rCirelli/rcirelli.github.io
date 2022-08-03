function Hero({ children }) {
  return (
    <section className="bg-slate-300 text-slate-700 p-10 w-screen border-y-4 border-cyan-400/80">
        {children}
    </section>
  );
}

export default Hero;
