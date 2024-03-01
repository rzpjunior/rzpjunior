import dynamic from 'next/dynamic';

import Layout from '../components/Layout';
import LoadingOverlay from '../components/LoadingOverlay';
const Cursor = dynamic(() => import('../components/Cursor'), { ssr: false });

const Page = () => {
  return (
    <div>
      <Cursor/>
      {/* <LoadingOverlay children={undefined}/> */}
      <Layout children={undefined}/>
    </div>
  );
};

export default Page;
