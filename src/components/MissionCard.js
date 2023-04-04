import React from 'react';
import PropTypes from 'prop-types';

class MissionCard extends React.Component {
  render() {
    const { name, year, country, destination } = this.props;
    return (
      <div data-testid="mission-card" className="missions-list">
        <span data-testid="mission-name" className="mission-card">{name}</span>
        <span data-testid="mission-year" className="mission-card">{year}</span>
        <span data-testid="mission-country" className="mission-card">{country}</span>
        <span
          data-testid="mission-destination"
          className="mission-card"
        >
          {destination}
        </span>
      </div>
    );
  }
}

MissionCard.propTypes = {
  name: PropTypes.string,
  year: PropTypes.string,
  country: PropTypes.string,
  destination: PropTypes.string,
};

MissionCard.defaultProps = {
  name: 'Default Mission Name',
  year: 'Default Mission Year',
  country: 'Default Mission Country',
  destination: 'Default Mission Destination',
};

export default MissionCard;
