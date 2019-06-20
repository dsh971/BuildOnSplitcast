const SchemaDefinition = `
  schema {
    query: Query
  }
`;

module.exports = {
	typeDefs: [
    SchemaDefinition,
    // query
		require('./query/root-query'),
    require('./query/spot'),
    require('./query/county'),
    require('./query/spot-details'),
	],

	resolvers: require('../resolvers/resolver-map'),

};
