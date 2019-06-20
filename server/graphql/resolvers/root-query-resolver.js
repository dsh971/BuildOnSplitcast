module.exports = {
    async allSpots(_, args, context) {
        return await context.dataSources.spitCastApi.getAllSpots();
    },

    async uniqueCounties(_, args, context) {
        const allSpots = await context.dataSources.spitCastApi.getAllSpots();
        const filteredSpots = await new Set(allSpots.map(item => item.county_name));
        return [...filteredSpots].map(item => ({'county_name': item}));
    },

    async spotForcast(_, args, context) {
        return await context.dataSources.spitCastApi.getSpotForcast(args.id);
    },

    async regionSpots(_, args, context) {
        return await context.dataSources.spitCastApi.getRegionSpotsData(args.countyName);
    },

    async waterTemperature(_, args, context) {
        return await context.dataSources.spitCastApi.getRegionWaterTempData(args.countyName);
    },

    async regionDataWind(_, args, context) {
        return await context.dataSources.spitCastApi.getRegionWindData(args.countyName);
    },

    async regionDataTide(_, args, context) {
        return await context.dataSources.spitCastApi.getRegionTideData(args.countyName);
    },

    async spotOverview(_, args, context) {
        const [ spotDetails, waterTemperature, wind, tide ] = await Promise.all([
            context.dataSources.spitCastApi.getSpotForcast(args.id),
            context.dataSources.spitCastApi.getRegionWaterTempData(args.countyName),
            context.dataSources.spitCastApi.getRegionWindData(args.countyName),
            context.dataSources.spitCastApi.getRegionTideData(args.countyName)
        ]);
        return {
            spotDetails,
            waterTemperature,
            wind,
            tide,
        };
    },
};