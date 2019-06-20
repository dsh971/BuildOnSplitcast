const express = require('express');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const rateLimit = require("express-rate-limit");
const { ApolloServer } = require('apollo-server-express');
const {typeDefs, resolvers} =  require('./graphql/schema/schema');
const SpitCastApi = require('./dataSource/spit-cast-api');

const app = express();
const port = process.env.PORT || 5001;

app.disable('x-powered-by');


// TODO: /ping & /healthcheck
// TODO: Add Loging stuff 

app.use(helmet());
app.use(rateLimit({
    windowMs: 60 * 60 * 1000,
    max: 100
}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const server = new ApolloServer({
    typeDefs,
    resolvers,
    dataSources: () => {
        return {
            spitCastApi: new SpitCastApi()
        }
    },
    context: ({req}) => {
        return req;
    }
});
server.applyMiddleware({ app });

app.listen(port, () => console.log(`Listening on port ${port}`)); // eslint-disable-line no-console