const { gql } = require('apollo-server-express');

const SpotDetails = gql`
    type SpotDetails {
        date: String
        day: String
        gmt: String
        latitude: Float
        live: Int
        longitude: Float
        shape: String
        shape_detail: ShapeDetails
        shape_full: String
        size: Int
        size_ft: Float
        spot_id: ID
        spot_name: String
        warnings: [String]
    }
`;

const ShapeDetails = gql`
    type ShapeDetails {
        swell: String
        tide: String
        wind: String
    }
`;

const SpotOverview = gql`
    type SpotOverview {
        spotDetails: [SpotDetails]
        waterTemperature: WaterTemperature
        wind: [Wind]
        tide: [Tide]
    }
`;

module.exports = () => [
    SpotDetails,
    ShapeDetails,
    SpotOverview,
]
