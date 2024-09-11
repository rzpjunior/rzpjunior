const Experience: React.FC = () => {
    return (
      <section id="experience" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
        <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
            <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
                Experience
            </h2>
        </div>
        <div>
            <ol className="group/list">
                <li className="mb-12">
                    <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                        <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                        <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2">
                            2023 - Present
                        </header>
                        <div className="z-10 sm:col-span-6">
                            <h3 className="font-medium leading-snug text-slate-200">
                                <div>
                                    <a 
                                        className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300  group/link text-base"
                                        href="https://www.motiolabs.com/"
                                        target="_blank"
                                        aria-label="Lead Engineer at Motiolabs"
                                    >
                                        <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                                        <span>
                                            Lead Engineer · 
                                            {/* ---- */}
                                            <span className="inline-block">
                                                &nbsp;Motiolabs
                                                <svg 
                                                    xmlns="http://www.w3.org/2000/svg" 
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                    className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px"
                                                >
                                                    <path 
                                                        fillRule="evenodd"
                                                        d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                                                        clipRule="evenodd"
                                                    ></path>
                                                </svg>
                                            </span>
                                        </span>
                                    </a>
                                </div>
                            </h3>
                            <p className="mt-2 text-sm leading-normal text-gray-400">
                                As a lead engineer at myDigiLearn Telkom Indonesia
                                and as the lead engineer for Learnhub SaaS Platform, I oversaw the entire development process 
                                and ensured smooth collaboration between teams, 
                                from initial planning to final deployment. 
                                I managed critical technical aspects such as frameworks, libraries and DevOps architecture, 
                                guaranteeing top performance and reliability. Additionally, 
                                I worked closely with stakeholders to understand their needs and 
                                documented all technical procedures thoroughly.
                            </p>
                            <ul className="mt-2 flex flex-wrap">
                                <li className="mr-4">
                                    <a 
                                        className="relative mt-2 inline-flex items-center text-sm font-medium text-slate-300 hover:text-teal-300 focus-visible:text-teal-300" 
                                        href="https://learnhub.id/"
                                        target="_blank"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                            className="mr-1 h-3 w-3"
                                            aria-hidden="true"
                                        >
                                            <path
                                                d="M12.232 4.232a2.5 2.5 0 013.536 3.536l-1.225 1.224a.75.75 0 001.061 1.06l1.224-1.224a4 4 0 00-5.656-5.656l-3 3a4 4 0 00.225 5.865.75.75 0 00.977-1.138 2.5 2.5 0 01-.142-3.667l3-3z"
                                            ></path>
                                            <path
                                                d="M11.603 7.963a.75.75 0 00-.977 1.138 2.5 2.5 0 01.142 3.667l-3 3a2.5 2.5 0 01-3.536-3.536l1.225-1.224a.75.75 0 00-1.061-1.06l-1.224 1.224a4 4 0 105.656 5.656l3-3a4 4 0 00-.225-5.865z"
                                            ></path>
                                        </svg>
                                        <span>Learnhub</span>
                                    </a>
                                </li>
                                <li className="mr-4">
                                    <a 
                                        className="relative mt-2 inline-flex items-center text-sm font-medium text-slate-300 hover:text-teal-300 focus-visible:text-teal-300" 
                                        href="https://mydigilearn.id/"
                                        target="_blank"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                            className="mr-1 h-3 w-3"
                                            aria-hidden="true"
                                        >
                                            <path
                                                d="M12.232 4.232a2.5 2.5 0 013.536 3.536l-1.225 1.224a.75.75 0 001.061 1.06l1.224-1.224a4 4 0 00-5.656-5.656l-3 3a4 4 0 00.225 5.865.75.75 0 00.977-1.138 2.5 2.5 0 01-.142-3.667l3-3z"
                                            ></path>
                                            <path
                                                d="M11.603 7.963a.75.75 0 00-.977 1.138 2.5 2.5 0 01.142 3.667l-3 3a2.5 2.5 0 01-3.536-3.536l1.225-1.224a.75.75 0 00-1.061-1.06l-1.224 1.224a4 4 0 105.656 5.656l3-3a4 4 0 00-.225-5.865z"
                                            ></path>
                                        </svg>
                                        <span>myDigiLearn</span>
                                    </a>
                                </li>
                            </ul>
                            <ul className="nt-2 flex flex-wrap" aria-label="Technologies used">
                                <li className="mr-1.5 mt-2">
                                    <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                                        Typescript
                                    </div>
                                </li>
                                <li className="mr-1.5 mt-2">
                                    <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                                        React
                                    </div>
                                </li>
                                <li className="mr-1.5 mt-2">
                                    <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                                        TailwindCSS
                                    </div>
                                </li>
                                <li className="mr-1.5 mt-2">
                                    <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                                        Next.js
                                    </div>
                                </li>
                                <li className="mr-1.5 mt-2">
                                    <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                                        Golang
                                    </div>
                                </li>
                                <li className="mr-1.5 mt-2">
                                    <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                                        Kubernetes
                                    </div>
                                </li>
                                <li className="mr-1.5 mt-2">
                                    <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                                        AWS
                                    </div>
                                </li>
                                <li className="mr-1.5 mt-2">
                                    <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                                        Docker
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </li>
                <li className="mb-12">
                    <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                        <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                        <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2">
                            2021 - 2023
                        </header>
                        <div className="z-10 sm:col-span-6">
                            <h3 className="font-medium leading-snug text-slate-200">
                                <div>
                                    <a 
                                        className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300  group/link text-base"
                                        href="https://www.instagram.com/edenfarm_id/"
                                        target="_blank"
                                        aria-label="Senior Software Engineer at Edenfarm"
                                    >
                                        <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                                        <span>
                                            Senior Software Engineer · 
                                            {/* ---- */}
                                            <span className="inline-block">
                                                &nbsp;Edenfarm
                                                <svg 
                                                    xmlns="http://www.w3.org/2000/svg" 
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                    className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px"
                                                >
                                                    <path 
                                                        fillRule="evenodd"
                                                        d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                                                        clipRule="evenodd"
                                                    ></path>
                                                </svg>
                                            </span>
                                        </span>
                                    </a>
                                </div>
                            </h3>
                            <p className="mt-2 text-sm leading-normal text-gray-400">
                                Led a team to create a Microfrontends Architecture using VueJS, 
                                ensuring it was ready for production. Managed CI/CD pipelines 
                                for seamless integration and deployment. Implemented automatic 
                                printing and weigh scaling for a Warehouse Management System using 
                                Java and Laravel. Developed coding standards and conducted testing 
                                with Cypress. Collaborated on a Dashboard system combining VueJS 
                                and Golang for Finance and Warehouse systems. Reviewed and tested 
                                prototypes to ensure user-friendliness before launch.
                            </p>
                            <ul className="nt-2 flex flex-wrap" aria-label="Technologies used">
                                <li className="mr-1.5 mt-2">
                                    <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                                        JavaScript
                                    </div>
                                </li>
                                <li className="mr-1.5 mt-2">
                                    <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                                        VueJS
                                    </div>
                                </li>
                                <li className="mr-1.5 mt-2">
                                    <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                                        Vuetify
                                    </div>
                                </li>
                                <li className="mr-1.5 mt-2">
                                    <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                                        Golang
                                    </div>
                                </li>
                                <li className="mr-1.5 mt-2">
                                    <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                                        Laravel
                                    </div>
                                </li>
                                <li className="mr-1.5 mt-2">
                                    <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                                        AWS
                                    </div>
                                </li>
                                <li className="mr-1.5 mt-2">
                                    <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                                        Kubernetes
                                    </div>
                                </li>
                                <li className="mr-1.5 mt-2">
                                    <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                                        Docker
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </li>
                <li className="mb-12">
                    <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                        <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                        <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2">
                            2019 - 2020
                        </header>
                        <div className="z-10 sm:col-span-6">
                            <h3 className="font-medium leading-snug text-slate-200">
                                <div>
                                    <a 
                                        className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300  group/link text-base"
                                        href="https://moonlay.com/"
                                        target="_blank"
                                        aria-label="Fullstack Developer at Moonlay"
                                    >
                                        <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                                        <span>
                                            Fullstack Developer · 
                                            {/* ---- */}
                                            <span className="inline-block">
                                                &nbsp;Moonlay
                                                <svg 
                                                    xmlns="http://www.w3.org/2000/svg" 
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                    className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px"
                                                >
                                                    <path 
                                                        fillRule="evenodd"
                                                        d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                                                        clipRule="evenodd"
                                                    ></path>
                                                </svg>
                                            </span>
                                        </span>
                                    </a>
                                </div>
                            </h3>
                            <p className="mt-2 text-sm leading-normal text-gray-400">
                                Implemented an internal chat system using ReactJS and collaborated with 
                                a ASP.NET Core, while also contributing to software applications
                                development with a focus on industry standards. Participated in a 
                                Data Management System project utilizing ReactJS, consulting with end-users and stakeholders to gather product
                                requirements.
                            </p>
                            <ul className="nt-2 flex flex-wrap" aria-label="Technologies used">
                                <li className="mr-1.5 mt-2">
                                    <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                                        JavaScript
                                    </div>
                                </li>
                                <li className="mr-1.5 mt-2">
                                    <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                                        React
                                    </div>
                                </li>
                                <li className="mr-1.5 mt-2">
                                    <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                                        ASP.NET Core
                                    </div>
                                </li>
                                <li className="mr-1.5 mt-2">
                                    <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                                        MySQL
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </li>
                <li className="mb-12">
                    <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                        <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                        <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2">
                            2017 - 2019
                        </header>
                        <div className="z-10 sm:col-span-6">
                            <h3 className="font-medium leading-snug text-slate-200">
                                <div>
                                    <a 
                                        className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300  group/link text-base"
                                        href="https://www.linkedin.com/in/pt-ebiz-cipta-solusi-493520194/"
                                        target="_blank"
                                        aria-label="Fullstack Developer at Ebiz"
                                    >
                                        <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                                        <span>
                                            .NET Developer · 
                                            {/* ---- */}
                                            <span className="inline-block">
                                                &nbsp;Ebiz Cipta
                                                <svg 
                                                    xmlns="http://www.w3.org/2000/svg" 
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                    className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px"
                                                >
                                                    <path 
                                                        fillRule="evenodd"
                                                        d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                                                        clipRule="evenodd"
                                                    ></path>
                                                </svg>
                                            </span>
                                        </span>
                                    </a>
                                </div>
                            </h3>
                            <p className="mt-2 text-sm leading-normal text-gray-400">
                                Participated in various development projects, including collaborating on a 
                                management system for Mercedes-Benz Indonesia using DevExpress and .NET Core,
                                developing dashboard document systems for PT Donggi Senoro, and creating 
                                dashboard data systems for PT Suzuki Indonesia. 
                                Contributed to the development of a Timesheet & Attendance System 
                                using Flutter and ASP .NET Core. Additionally, produced design mockups 
                                and prototypes to enhance user experiences and improve site interactions.
                            </p>
                            <ul className="nt-2 flex flex-wrap" aria-label="Technologies used">
                                <li className="mr-1.5 mt-2">
                                    <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                                        JavaScript
                                    </div>
                                </li>
                                <li className="mr-1.5 mt-2">
                                    <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                                        Flutter
                                    </div>
                                </li>
                                <li className="mr-1.5 mt-2">
                                    <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                                        jQuery
                                    </div>
                                </li>
                                <li className="mr-1.5 mt-2">
                                    <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                                        ASP.NET Core
                                    </div>
                                </li>
                                <li className="mr-1.5 mt-2">
                                    <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                                        MySQL
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </li>
            </ol>
            <a 
                href="https://1o9rejpe1ewqxu5l.public.blob.vercel-storage.com/RizkyPJunior_Resume-iKLCGBst9ejzlOI5QxJKXNNy9WTrJD.pdf"
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 font-semibold text-slate-200 group/link text-base"
            >
                <span>
                    View Full
                    <span className="inline-block">
                        &nbsp;Résumé
                        <svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px"
                        >
                            <path 
                                fillRule="evenodd"
                                d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                                clipRule="evenodd"
                            ></path>
                        </svg>
                    </span>
                </span>
            </a>
        </div>
      </section>
    );
  };
  
  export default Experience;
