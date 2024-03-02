"use client";

import React, { useEffect, useState } from 'react';

const Header: React.FC = () => {
  
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setActiveLink(id);
    }
  };

  const [activeLink, setActiveLink] = useState<string>('about');

  useEffect(() => {
    const handleScroll = () => {
      const aboutSection = document.getElementById('about');
      const experienceSection = document.getElementById('experience');
      const projectsSection = document.getElementById('projects');

      if (
        experienceSection &&
        experienceSection.offsetTop <= window.scrollY + 50 &&
        experienceSection.offsetTop + experienceSection.offsetHeight > window.scrollY + 50
      ) {
        setActiveLink('experience');
      } else if (
        projectsSection &&
        projectsSection.offsetTop <= window.scrollY + 50 &&
        projectsSection.offsetTop + projectsSection.offsetHeight > window.scrollY + 50
      ) {
        setActiveLink('projects');
      } else {
        setActiveLink('about');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleSetActiveLink = (link: string) => {
    setActiveLink(link);
  };

  return (
    <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/1 lg:flex-col lg:justify-between lg:py-24">
    {/* <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/1 lg:flex-col lg:justify-between lg:py-24"> */}
      <div>
        <h1 className='text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl'>
          <a href="/">Rizky Putra Junior</a>
        </h1>
        <h2 className='mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl'>
          Lead Engineer at Motiolabs
        </h2>
        <p className='mt-4 max-w-xs leading-normal text-gray-400'>
          I build pixel-perfect, engaging, and accessible digital experiences.
        </p>
        <nav className="nav hidden lg:block" aria-label="In-page jump links">
          <ul className="mt-16 w-max">
            <li>
              <a 
                className='group flex items-center py-3'
                href="#about"
                onClick={() => {
                  handleSetActiveLink('about');
                  scrollToSection('about');
                }}
              >
                <span 
                  className=
                    {`${activeLink === 'about' ? 'nav-indicator mr-4 h-px transition-all w-16 bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none' : 'nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none'}`}
                  >
                </span>
                <span 
                  className=
                  {`${activeLink === 'about' ? 'nav-text text-xs font-bold uppercase tracking-widest text-slate-200 group-focus-visible:text-slate-200' : 'nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200'}`}
                >
                  About
                </span>
              </a>
            </li>
            <li>
              <a 
                className='group flex items-center py-3'
                href="#experience"
                onClick={() => {
                  handleSetActiveLink('experience');
                  scrollToSection('experience');
                }}
              >
                <span 
                  className=
                    {`${activeLink === 'experience' ? 'nav-indicator mr-4 h-px transition-all w-16 bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none' : 'nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none'}`}
                  >
                </span>
                <span 
                  className=
                  {`${activeLink === 'experience' ? 'nav-text text-xs font-bold uppercase tracking-widest text-slate-200 group-focus-visible:text-slate-200' : 'nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200'}`}
                >
                  Experience
                </span>
              </a>
            </li>
            <li>
            <a 
                className='group flex items-center py-3'
                href="#projects"
                onClick={() => {
                  handleSetActiveLink('projects');
                  scrollToSection('projects');
                }}
              >
                <span 
                  className=
                    {`${activeLink === 'projects' ? 'nav-indicator mr-4 h-px transition-all w-16 bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none' : 'nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none'}`}
                  >
                </span>
                <span 
                  className=
                  {`${activeLink === 'projects' ? 'nav-text text-xs font-bold uppercase tracking-widest text-slate-200 group-focus-visible:text-slate-200' : 'nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200'}`}
                >
                  Projects
                </span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <ul className='ml-1 mt-8 flex items-center'>
        <li className='mr-5 text-xs shrink-0'>
          <a title='GitHub' className='text-gray-400 block hover:text-slate-200' href="https://github.com/rzpjunior" target='_blank'>
            <span className='sr-only'>GitHub</span>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 16 16'
              fill='currentColor'
              className='h-6 w-6'
              aria-hidden='true'
            >
              <path
                d='M8 0C3.58 0 0 3.58 0 8c0 3.54 
                  2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 
                  0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 
                  1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 
                  0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 
                  3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z'
              ></path>
            </svg>
          </a>
        </li>
        <li className='mr-5 text-xs shrink-0'>
          <a title='LinkedIn' className='text-gray-400 block hover:text-slate-200' href="https://www.linkedin.com/in/rzpjunior/" target='_blank'>
            <span className='sr-only'>LinkedIn</span>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 16 16'
              fill='currentColor'
              className='h-6 w-6'
              aria-hidden='true'
            >
              <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"/>
            </svg>
          </a>
        </li>
        <li className='mr-5 text-xs shrink-0'>
          <a title='Discord: itskozo.' className='text-gray-400 block hover:text-slate-200' href="https://discordapp.com/users/432989889605402635" target='_blank'>
            <span className='sr-only'>Discord</span>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 16 16'
              fill='currentColor'
              className='h-6 w-6'
              aria-hidden='true'
            >
              <path d="M13.545 2.907a13.2 13.2 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.2 12.2 0 0 0-3.658 0 8 8 0 0 0-.412-.833.05.05 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.04.04 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032q.003.022.021.037a13.3 13.3 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019q.463-.63.818-1.329a.05.05 0 0 0-.01-.059l-.018-.011a9 9 0 0 1-1.248-.595.05.05 0 0 1-.02-.066l.015-.019q.127-.095.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.05.05 0 0 1 .053.007q.121.1.248.195a.05.05 0 0 1-.004.085 8 8 0 0 1-1.249.594.05.05 0 0 0-.03.03.05.05 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.2 13.2 0 0 0 4.001-2.02.05.05 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.03.03 0 0 0-.02-.019m-8.198 7.307c-.789 0-1.438-.724-1.438-1.612s.637-1.613 1.438-1.613c.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612m5.316 0c-.788 0-1.438-.724-1.438-1.612s.637-1.613 1.438-1.613c.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612"/>
            </svg>
          </a>
        </li>
        <li className='mr-5 text-xs shrink-0'>
          <a title='Steam' className='text-gray-400 block hover:text-slate-200' href="https://steamcommunity.com/id/kozo9/" target='_blank'>
            <span className='sr-only'>Steam</span>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 16 16'
              fill='currentColor'
              className='h-6 w-6'
              aria-hidden='true'
            >
              <path d="M.329 10.333A8.01 8.01 0 0 0 7.99 16C12.414 16 16 12.418 16 8s-3.586-8-8.009-8A8.006 8.006 0 0 0 0 7.468l.003.006 4.304 1.769A2.2 2.2 0 0 1 5.62 8.88l1.96-2.844-.001-.04a3.046 3.046 0 0 1 3.042-3.043 3.046 3.046 0 0 1 3.042 3.043 3.047 3.047 0 0 1-3.111 3.044l-2.804 2a2.223 2.223 0 0 1-3.075 2.11 2.22 2.22 0 0 1-1.312-1.568L.33 10.333Z"/>
              <path d="M4.868 12.683a1.715 1.715 0 0 0 1.318-3.165 1.7 1.7 0 0 0-1.263-.02l1.023.424a1.261 1.261 0 1 1-.97 2.33l-.99-.41a1.7 1.7 0 0 0 .882.84Zm3.726-6.687a2.03 2.03 0 0 0 2.027 2.029 2.03 2.03 0 0 0 2.027-2.029 2.03 2.03 0 0 0-2.027-2.027 2.03 2.03 0 0 0-2.027 2.027m2.03-1.527a1.524 1.524 0 1 1-.002 3.048 1.524 1.524 0 0 1 .002-3.048"/>
            </svg>
          </a>
        </li>
        <li className='mr-5 text-xs shrink-0'>
          <a title='Steam' className='text-gray-400 block hover:text-slate-200' href="https://www.facebook.com/rizky.putrajunior/" target='_blank'>
            <span className='sr-only'>Facebook</span>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 16 16'
              fill='currentColor'
              className='h-6 w-6'
              aria-hidden='true'
            >
              <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951"/>
            </svg>
          </a>
        </li>
      </ul>
    </header>
  );
};

export default Header;