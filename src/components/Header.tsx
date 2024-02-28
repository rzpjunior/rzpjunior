const Header: React.FC = () => {
  return (
    <header className="lg:top-0 lg:flex lg:max-h-screen lg:w-1/1 lg:flex-col lg:justify-between lg:py-24">
    {/* <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/1 lg:flex-col lg:justify-between lg:py-24"> */}
      <h1 className='text-4xl font-bold tracking-tight text-slate-200 sm:text-4xl'>
        <a href="/">Rizky Putra Junior</a>
      </h1>
      <h2 className='mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl'>
        Lead Engineer at Motiolabs
      </h2>
      <p className='mt-4 max-w-xs leading-normal text-gray-400'>
        I am a software engineer specializing in building high performance web applications.
      </p>
    </header>
  );
};

export default Header;