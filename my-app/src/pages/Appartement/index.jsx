import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchAppartmentById } from '../../datas/api';
import Error from '../../pages/Error';
import Carousel from '../../components/Carousel';
import Title from '../../components/Title';
import Host from '../../components/Host';
import Rate from '../../components/Rate';
import Collapse from '../../components/Collapse';
import '../../styles/appartement.css';

export default function Appartment() {
  const id = useParams().id;
  const [appartment, setAppartment] = useState(null);

  useEffect(() => {
    const getAppartment = async () => {
      try {
        const data = await fetchAppartmentById(id);
        setAppartment(data);
      } catch (error) {
        console.error('Error fetching appartment:', error);
        setAppartment(null);
      }
    };

    getAppartment();
  }, [id]);

  if (appartment === null) {
    return <Error />;
  }

  return (
    <>
      <Carousel pictures={appartment.pictures} />
      <div className="appart-div">
        <div className="appart-title-tag">
          <Title title={appartment.title} location={appartment.location} />
          <div className="tags">
            {appartment.tags?.map((tag, index) => (
              <div className="tag-text" key={index}>
                {tag}
              </div>
            ))}
          </div>
        </div>
        <div className="appart-rate-host">
          <Host host={appartment.host} />
          <Rate rating={appartment.rating} />
        </div>
      </div>
      <div className="appart-collapse">
        <ul>
          <li>
            <Collapse title="Description" description={appartment.description} />
          </li>
          <li>
            <Collapse
              title="Equipements"
              description={appartment.equipments?.map((item, index) => (
                <div key={index}>{item}</div>
              ))}
            />
          </li>
        </ul>
      </div>
    </>
  );
}