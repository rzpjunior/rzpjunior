const Footer: React.FC = () => {
    return (
      <footer className="max-w-md pb-16 text-sm text-slate-500 sm:pb-0">
        <p>
            Loosely designed in 
            {/* -- -- */}
            <a 
                href="https://figma.com"
                className="font-medium text-slate-400 hover:text-teal-300 focus-visible:text-teal-300"
                target="_blank"
                rel="noreferrer noopener"
            >
                &nbsp;Figma&nbsp;
            </a>
            {/* -- -- */}
            and coded in
            <a 
                href="https://code.visualstudio.com/"
                className="font-medium text-slate-400 hover:text-teal-300 focus-visible:text-teal-300"
                target="_blank"
                rel="noreferrer noopener"
            >
                &nbsp;Visual Studio Code&nbsp;
            </a>
            by yours truly. Built with
            {/* -- -- */}
            <a 
                href="https://code.visualstudio.com/"
                className="font-medium text-slate-400 hover:text-teal-300 focus-visible:text-teal-300"
                target="_blank"
                rel="noreferrer noopener"
            >
                &nbsp;Next.js&nbsp;
            </a>
            and
            {/* -- -- */}
            <a 
                href="https://tailwindcss.com/"
                className="font-medium text-slate-400 hover:text-teal-300 focus-visible:text-teal-300"
                target="_blank"
                rel="noreferrer noopener"
            >
                &nbsp;Tailwind CSS
            </a>
            , deployed with
            {/* -- -- */}
            <a 
                href="https://vercel.com/"
                className="font-medium text-slate-400 hover:text-teal-300 focus-visible:text-teal-300"
                target="_blank"
                rel="noreferrer noopener"
            >
                &nbsp;Vercel.&nbsp;
            </a>
            All text is set in the
            {/* -- -- */}
            <a 
                href="https://fonts.google.com/"
                className="font-medium text-slate-400 hover:text-teal-300 focus-visible:text-teal-300"
                target="_blank"
                rel="noreferrer noopener"
            >
                &nbsp;Inter&nbsp;
            </a>
            typeface.
        </p>
      </footer>
    );
  };
  
  export default Footer;