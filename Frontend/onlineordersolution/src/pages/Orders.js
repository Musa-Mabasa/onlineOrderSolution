import React, { useEffect , useState} from 'react'
import '../components/Main.css'
import GameCard from '../components/Card';
import api from '../models/ApiURL';
import GameCardSkeleton from '../components/SkeletonComponents/CardSkeleton';



function Orders() {
  const [GameData, setGameData] = useState(null);
  const [isLoading , setIsLoading] = useState(true);

  useEffect(() => {
    api.get(`/orders`)
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
    <div className='page-title'>My orders</div>
    <br></br>
    <br></br>
    <div className='card-grid'>
        {isLoading ? (
            Array.from({ length: 8 }).map((_, index) => (
              <GameCardSkeleton key={index} />
            ))
          ) : (
            GameData.slice(1).map((game, index) => (
              <GameCard key={index} game={game} />
            ))
          )}
      </div>
      </>
  )
}

export default Orders
