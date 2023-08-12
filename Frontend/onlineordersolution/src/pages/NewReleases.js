import React, { useEffect , useState} from 'react'
import '../components/Main.css'
import GameCard from '../components/GameCard';
import API_KEY from '../models/ApiConfig';
import api from '../models/ApiURL';
import GameCardSkeleton from '../components/SkeletonComponents/GameCardSkeleton';



function NewReleases() {
  const [GameData, setGameData] = useState(null);
  const [isLoading , setIsLoading] = useState(true);

  useEffect(() => {
    api.get(`/games?ordering=released&&key=${API_KEY}`)
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

export default NewReleases
