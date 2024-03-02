const About: React.FC = () => {
    return (
      <section id="about" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
        <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
            <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
                About
            </h2>
        </div>
        <div>
            <p className="mb-4 text-gray-400">
                Back in 2016, I decided to try my hand at creating an android game and tumbled head first into the rabbit hole of coding and software development. Fast-forward to today, 
                and I’ve had the privilege of building software for a
                <a className="font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300" target="_blank" href="https://www.mercedes-benz.co.id/"> car company</a>, a 
                <a className="font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300" target="_blank" href="https://moonlay.com/"> consultant</a>, a
                <a className="font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300" target="_blank" href="https://www.instagram.com/edenfarm_id/"> start-up</a>, and a
                <a className="font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300" target="_blank" href="https://www.idx.co.id/id"> huge corporation</a>.
            </p>
            <p className="mb-4 text-gray-400">
                My main focus these days is building frameworks, libraries, products and leading projects for our clients at <a className="font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300" target="_blank" href="https://www.motiolabs.com/"> Motiolabs</a>. I most enjoy building software in the sweet spot where design and engineering meet — 
                things that look good but are also built well under the hood.
            </p>
            <p className="mb-4 text-gray-400">
            When I’m not at coding, I’m usually play games, reading, hanging out with my friends and family, or studying about anything
            </p>
        </div>
      </section>
    );
  };
  
  export default About;