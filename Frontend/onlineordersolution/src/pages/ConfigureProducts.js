import React, { useEffect , useState} from 'react'
import '../components/Main.css'
import Card from '../components/Card';
import api from '../models/ApiURL';
import CardSkeleton from '../components/SkeletonComponents/CardSkeleton';
import { ShopData } from '../components/ShopData';
import { products } from '../components/Products';
import EditCard from '../components/EditCard';



function ConfigureProducts() {
  const [data, setdata] = useState(null);
  const [isLoading , setIsLoading] = useState(true);

  useEffect(() => {
    api.get(`/shop`)
    .then(res => {
      setdata(res.data['results']);
      setIsLoading(false);
    })
    .catch(err => {
      console.log(err);
    })
    setTimeout(async() => {
    setIsLoading(false);
    }, 1500);
  }, [])

  return (
    <>
    <div className='page-title'>My Products</div>
    <br></br>
    <br></br>
    <div className='card-grid'>
        {isLoading ? (
            Array.from({ length: 8 }).map((_, index) => (
              <CardSkeleton key={index} />
            ))
          ) : (
            products.map((card, index) => (
              <EditCard key={index} data={card} />
            ))
          )}
      </div>
      </>
  )
}

export default ConfigureProducts
