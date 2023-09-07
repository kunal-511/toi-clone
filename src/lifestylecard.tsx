import React from 'react';
import img from "./assets/news.png";
import News from './news';
interface LifestyleCardProps {
lifestyleCardHeading:string;


}
const LifestyleCard: React.FC<LifestyleCardProps> = ({lifestyleCardHeading}) => {
 
  return (
    <div className='health'>     
    <p>{lifestyleCardHeading}</p>
    <img src={img} className='healthImg' alt="" />
    <div className='healthNews' >
    <News text="Lorem ipsum  dolor sit consectetur." imageUrl={img} />
    <News text="Lorem ipsum  dolor sit consectetur." imageUrl={img} />
    </div>
</div>
  );
};

export default LifestyleCard;
