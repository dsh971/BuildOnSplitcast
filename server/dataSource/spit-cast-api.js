const { RESTDataSource } = require('apollo-datasource-rest');

class SpitCastApi extends RESTDataSource {
    constructor(){
        super();
        this.baseURL = "http://api.spitcast.com/api"
    }

    async getAllSpots() {
        return this.get(`/spot/all`);
    }

    async getSpotForcast(id) {
        return this.get(`/spot/forecast/${id}/`);
    }

    async getRegionSpotsData(countyName) {
        return this.get(`/county/spots/${countyName}/`);
    }

    async getNeighborsSpotsData(id) {
        // Not used at the moment
        return this.get(`/spot/neighbors/${id}/`);
    }

    async getRegionWaterTempData(countyName){
        return this.get(`/county/water-temperature/${countyName}/`);
    }

    async getRegionWindData(countyName) {
        return this.get(`/county/wind/${countyName}/`);
    }

    async getRegionTideData(countyName) {
        return this.get(`/county/tide/${countyName}/`);
    }
}

module.exports = SpitCastApi;