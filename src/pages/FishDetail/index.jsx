import { useParams } from 'react-router-dom';
import './style.css';
import { Header } from '../../Components/Header';
import { Footer } from '../../Components/Footer';
export const FishDetail = () => {
  const { fishSlug } = useParams();
  console.log('fishSlug', fishSlug);
  return (
    <>
      <Header />
      <span>ID ryby:</span>
      {fishSlug}

      <Footer />
    </>
  );
};
