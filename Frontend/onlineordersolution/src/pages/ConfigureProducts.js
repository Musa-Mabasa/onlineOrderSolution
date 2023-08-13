import React, { useEffect , useState} from 'react'
import '../components/Main.css'
import api from '../models/ApiURL';
import CardSkeleton from '../components/SkeletonComponents/CardSkeleton';
import EditCard from '../components/EditCard';



function ConfigureProducts() {
  const [GameData, setGameData] = useState(null);
  const [isLoading , setIsLoading] = useState(true);

  useEffect(() => {
    api.get(`/games?key=53acb6f79186422ebd37a4aa3851861b`)
    .then(res => {
      setGameData(res.data['results']);
      setIsLoading(false);
    })
    .catch(err => {
      console.log(err);
    })
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
            GameData.slice(1).map((game, index) => (
              <EditCard key={index} game={game} />
            ))
          )}
      </div>
      </>
  )
}

export default ConfigureProducts
