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