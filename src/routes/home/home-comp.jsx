import React from 'react'
import { Outlet } from 'react-router-dom';
import DirectMenu from '../../components/category-directory/Directory';
import Raj from '../../assets/raj.jpg';
import Vfilm from '../../assets/filmvic.jpg';
import Vic from '../../assets/vfilm2.jpg';
import Vicrop from '../../assets/pan.jpg';
import Vframe from '../../assets/vframe.jpg';
import Vj from '../../assets/vj.jpg';

const Home = () => {
  const categories = [
    {
      id: 1,
      title: 'hats',
      imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
    },
    {
      id: 2,
      title: 'jackets',
      imageUrl: Raj,
    },
    {
      id: 3,
      title: 'sneakers',
      imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
    },
    {
      id: 4,
      title: 'womens',
      imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
    },
    {
      id: 5,
      title: 'mens',
      imageUrl: Vframe,
    },
  ];
  
  return(
    <div>
      <Outlet/>
      <DirectMenu categories={categories} />
      
    </div>
    

  ); 
};

export default Home;