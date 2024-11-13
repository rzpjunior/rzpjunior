import dynamic from 'next/dynamic';

import Layout from '../components/Layout';
const Cursor = dynamic(() => import('../components/Cursor'), { ssr: false });

const Page = () => {
  return (
    // <div>
    //   <Cursor/>
    //   <Layout children={undefined}/>
    // </div>
    <div></div>
  );
};

export default Page;
