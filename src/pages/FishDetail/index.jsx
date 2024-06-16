import { useParams } from 'react-router-dom';
import './style.css';
import { Header } from '../../Components/Header';
import { Footer } from '../../Components/Footer';
import { DescriptionItem } from '../../Components/DescriptionItem';
import fishData from '../../fish-data.json';
import { FunFactsItem } from '../../Components/FunFactsItem';

export const FishDetail = () => {
  const { fishSlug } = useParams();
  console.log('fishSlug', fishSlug);

  const fishItem = fishData.find((fish) => fish.fishSlug === fishSlug);

  const { name, id, latinName, description, imgUrl, funFacts } = fishItem;

  return (
    <>
      <Header />
      <div>
        <div>
          <h1>{name}</h1>
          <h2>{latinName}</h2>
        </div>
        
        <div>
          <img src={imgUrl}></img>
        </div>

        <ul>
          {funFacts.map((item) => (
            <FunFactsItem key={item} funFactsList={item} />
          ))}
        </ul>
        <div>
          {description.map((item) => (
            <DescriptionItem key={item} descriptionParagraph={item} />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};






