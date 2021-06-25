// const axios = require('axios');
// const { 
//     GraphQLObjectType, 
//     GraphQLInt, 
//     GraphQLList, 
//     GraphQLString, 
//     GraphQLBoolean,
//     GraphQLSchema 
// } = require('graphql');


// // Launch Type 
// const LaunchType = new GraphQLObjectType({
//     name: 'Launch',
//     fields: () => ({
//         id: { type: GraphQLString},
//         flight_number: { type: GraphQLInt },
//         name: { type: GraphQLString },
//         date_local: { type: GraphQLString },
//         upcoming: { type: GraphQLBoolean },
//         success: { type: GraphQLBoolean },
//         rocket: { type: GraphQLString }
//     })
// });

// // Rocket Type
// const RocketType = new GraphQLObjectType({
//     name: 'Rocket',
//     fields: () => ({
//         id: { type: GraphQLString},
//         name: { type: GraphQLString },
//         first_flight: { type: GraphQLString },
//         active: { type: GraphQLBoolean },
//         type: { type: GraphQLString },
//         description: { type: GraphQLString }
//     })
// });

// const RootQuery = new GraphQLObjectType({
//     name: 'RootQueryType',
//     fields: {
//         launches: {
//             type: new GraphQLList(LaunchType),
//             resolve(parent, args) {
//                 return axios
//                 .get('https://api.spacexdata.com/v4/launches')
//                 .then(res => res.data);   
//             }
//         },
//         launch: {
//             type: LaunchType,
//             args: {
//               id: { type: GraphQLString }
//             },
//             resolve(parent, args) {
//                 return axios
//                 .get(`https://api.spacexdata.com/v4/launches/${args.id}`)
//                 .then(res => res.data);
//             }
//         },
//         rockets: {
//             type: new GraphQLList(RocketType),
//             resolve(parent, args) {
//                 return axios
//                 .get('https://api.spacexdata.com/v4/rockets')
//                 .then(res => res.data);   
//             }
//         },
//         rocket: {
//             type: RocketType,
//             args: {
//               id: { type: GraphQLString }
//             },
//             resolve(parent, args) {
//                 return axios
//                 .get(`https://api.spacexdata.com/v4/rockets/${args.id}`)
//                 .then(res => res.data);
//             }
//         }
//     }
// });

// module.exports = new GraphQLSchema({
//     query: RootQuery
// });