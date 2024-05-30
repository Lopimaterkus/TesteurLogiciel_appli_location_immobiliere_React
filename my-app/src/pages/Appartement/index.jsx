import { useParams } from 'react-router-dom'
import accomodations from '../../datas/data.json'
import Error from '../../pages/Error'
import Carousel from '../../components/Carousel'
import Title from '../../components/Title'
import Host from '../../components/Host'
import Rate from '../../components/Rate'
import Collapse from '../../components/Collapse'
import '../../styles/appartement.css'

export default function Appartment() {
  const { id } = useParams()
  const getAppartment = accomodations.find((appart) => {
    return appart.id === id
  })

  if (getAppartment === undefined) {
    return <Error />
  }

  return (
    <>
      <Carousel pictures={getAppartment.pictures}></Carousel>
      <div className="appart-div">
        <div className="appart-title-tag">
          <Title title={getAppartment.title} location={getAppartment.location} />
          <div className="tags">
            {getAppartment.tags?.map((tag, index) => (
              <div className="tag-text" key={index}>
                {tag}
              </div>
            ))}
          </div>
        </div>
        <div className="appart-rate-host">
          <Host host={getAppartment.host} />
          <Rate rating={getAppartment.rating} />
        </div>
      </div>
      <div className="appart-collapse">
        <ul>
          <li>
            <Collapse
              title="Description"
              description={getAppartment.description}
            />
          </li>
          <li>
            <Collapse
              title="Équipements"
              description={getAppartment.equipments?.map((item, index) => (
                <div key={index}>{item}</div>
              ))}
            />
          </li>
        </ul>
      </div>
    </>
  )
}