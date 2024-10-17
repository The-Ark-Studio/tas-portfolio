import LoadingScreen from '@/components/common/LoadingScreen';
import {ProjectDetailPage} from '@/screens';
import {Suspense} from 'react';

const IndexPage = () => {
  return (
    <Suspense key={'project-details key'} fallback={<LoadingScreen />}>
      <ProjectDetailPage />
    </Suspense>
  );
};

export default IndexPage;
