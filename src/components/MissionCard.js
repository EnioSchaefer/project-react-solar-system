import React from 'react';
import PropTypes from 'prop-types';

class MissionCard extends React.Component {
  render() {
    const { name, year, country, destination } = this.props;
    return (
      <div data-testid="mission-card">
        <span data-testid="mission-name">{name}</span>
        <span data-testid="mission-year">{year}</span>
        <span data-testid="mission-country">{country}</span>
        <span data-testid="mission-destination">{destination}</span>
      </div>
    );
  }
}

MissionCard.propTypes = {
  name: PropTypes.string,
  year: PropTypes.number,
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
