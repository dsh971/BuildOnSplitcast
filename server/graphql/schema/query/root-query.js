const Query = `
  type Query {
    allSpots: [Spot]

    uniqueCounties: [UniqueCounty]

    regionSpots(countyName: String): [Spot]
    
    spotForcast(id: ID): [SpotDetails]
    
    waterTemperature(countyName: String): WaterTemperature

    regionDataWind(countyName: String): [Wind]

    regionDataTide(countyName: String): [Tide]

    spotOverview(
        id: ID
        countyName: String
    ): SpotOverview
  }
`;

module.exports = () => [Query];
