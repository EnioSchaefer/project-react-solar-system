import React from 'react';
import Planets from '../data/planets';
import PlanetCard from './PlanetCard';
import Title from './Title';

class SolarSystem extends React.Component {
  render() {
    return (
      <div data-testid="solar-system" className="solar-system">
        <Title headline="Planetas" />
        <ul className="planet-list">
          {Planets.map((planet) => (
            <li key={ planet.name }>
              <PlanetCard
                planetName={ planet.name }
                planetImage={ planet.image }
              />
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default SolarSystem;
