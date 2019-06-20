const { gql } = require('apollo-server-express');

const Spot = gql`
    type Spot {
        county_name: String
        latitude: Float
        longitude: Float
        spot_id: Int
        spot_name: String
    }
`;

module.exports = () => [
    Spot
]
