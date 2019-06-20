const { gql } = require('apollo-server-express');

const UniqueCounty = gql`
    type UniqueCounty {
        county_name: String
    }
`;

const WaterTemperature = gql`
    type WaterTemperature {
        buoy_id: ID
        celcius: Float
        county: String
        fahrenheit: Int
        recorded: String
        wetsuit: String
    }
`;

const Wind = gql`
    type Wind {
        date: String
        day: String
        direction_degrees: Int
        direction_text: String
        gmt: String
        hour: String
        name: String
        speed_kts: Int
        speed_mph: Float
    }
`;

const Tide = gql`
    type Tide {
        date: String
        day: String
        gmt: String
        hour: String
        name: String
        tide: Float
        tide_meters: Float
    }
`;

module.exports = () => [
    UniqueCounty,
    WaterTemperature,
    Wind,
    Tide,
]
