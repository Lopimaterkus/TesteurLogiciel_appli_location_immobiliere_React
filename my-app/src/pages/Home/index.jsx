import React, { useState, useEffect } from 'react'; // Ajout de useEffect et useState
import Banner from '../../components/Banner';
import banner from '../../assets/images/banner-home.png';
import Card from '../../components/Card';
import { fetchProperties } from '../../datas/api'; // Correction de l'importation

export default function Home() {
  const [properties, setProperties] = useState([]); // Utilisation de useState pour gérer l'état des propriétés

  // Utilisation de useEffect pour charger les données des propriétés une fois que le composant est monté
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchProperties();
        setProperties(data); // Mise à jour de l'état avec les données récupérées
      } catch (error) {
        console.error('Error fetching properties:', error);
        setProperties([]); // Gestion des erreurs en mettant l'état à un tableau vide
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <Banner image={banner} title="Chez vous, partout et ailleurs" />
      <section className="card-container">
        {properties.map((property) => (
          <Card key={property.id} data={property} />
        ))}
      </section>
    </>
  );
}
