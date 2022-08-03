function Wrapper({children, column = false}) {
  return (
    <div className={`flex ${column && 'flex-col'} items-center justify-center`}>
      {children}
    </div>
  );
}

export default Wrapper;
