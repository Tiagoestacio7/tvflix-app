import { useParams } from 'react-router-dom'
import { Navbar } from '../components/Navbar';

export const MovieDetail = () => {
  const { id } = useParams();
  return (
    <div>

      MovieDetail: {id}

    </div>

  )
}
