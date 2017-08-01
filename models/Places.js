var mongoose = require("mongoose");
var Schema = mongoose.Schema;

// create schema
var PlacesSchema = new Schema({
    user_search: {
        type: String
    },

    map1: {
        type: String
    },

    map2: {
        type: String
    },

    wiki1: {
        type: String
    },

    wiki2: {
        type: String
    },

    one_place: {
        type: Boolean
    }
}); // end of new Schema

// Create a model
var Places = mongoose.model("Places", PlacesSchema);

var arr = [
    // { user_search:'Computer Programming', map1: 'M. Swaminathan', map2: 'M. Swaminathan',
    //  wiki1: 'M. Swaminathan', wiki2: 'M. Swaminathan', one_place: 'true' },

    // { user_search:'my number', map1: 'gooo' , map2: 'cooooome' ,
    // wiki1: 'gooooo1', wiki2: 'cooooome', one_place: 'true' },

    {
        user_search: 'Mecca Makkah Meccah',
        map1: 'Mecca',
        map2: '',
        wiki1: 'Mecca',
        wiki2: '',
        one_place: 'true'
    },

    {
        user_search: 'Yangon Rangoon',
        map1: 'Yangon',
        map2: '',
        wiki1: 'Yangon',
        wiki2: '',
        one_place: 'true'
    },

    {
        user_search: 'Stalingrad Volgograd Volgagrad Tsaritsyn',
        map1: 'Volgograd',
        map2: '',
        wiki1: 'Volgograd',
        wiki2: '',
        one_place: 'true'
    },

    {
        user_search: 'Chennai Madras Chenai',
        map1: 'Chennai',
        map2: '',
        wiki1: 'Chennai',
        wiki2: '',
        one_place: 'true'
    },

    {
        user_search: 'Kolkata Calcutta',
        map1: 'Kolkata',
        map2: '',
        wiki1: 'Kolkata',
        wiki2: '',
        one_place: 'true'
    },

    {
        user_search: 'Republic of the Congo Democratic Republic of the Congo Congo-Brazzaville Congo-Kinshasa',
        map1: 'Republic of the Congo',
        map2: 'Democratic Republic of the Congo',
        wiki1: 'Republic of the Congo',
        wiki2: 'Democratic Republic of the Congo',
        one_place: 'false'
    },

    {
        user_search: 'Former Yugoslavian Republic of Macedonia Makedonia Greece',
        map1: 'Republic of Macedonia',
        map2: 'Makedonia Greece',
        wiki1: 'Republic of Macedonia',
        wiki2: 'Makedonia Greece',
        one_place: 'false'
    },

    {
        user_search: 'Bangalore Bengaluru',
        map1: 'Bengaluru',
        map2: '',
        wiki1: 'Bengaluru',
        wiki2: '',
        one_place: 'true'
    },

    {
        user_search: 'New Delhi Region',
        map1: 'Delhi Region',
        map2: 'New Delhi',
        wiki1: 'Delhi Region',
        wiki2: 'New Delhi',
        one_place: 'false'
    },

    {
        user_search: 'Leningrad St Petersburg Saint Petersburg St. Petersburg Petrograd',
        map1: 'St Petersburg Russia',
        map2: '',
        wiki1: 'St Petersburg Russia',
        wiki2: '',
        one_place: 'true'
    },

    {
        user_search: 'Saigon Ho Chi Minh City hochiminh ho chi min city',
        map1: 'Ho Chi Minh City',
        map2: '',
        wiki1: 'Ho Chi Minh City',
        wiki2: '',
        one_place: 'true'
    },


    {
        user_search: 'Peking Beijing',
        map1: 'Beijing',
        map2: '',
        wiki1: 'Beijing',
        wiki2: '',
        one_place: 'true'
    },

    {
        user_search: 'Myanmar Burma Myannmar Mianmarr',
        map1: 'Myanmar',
        map2: '',
        wiki1: 'Myanmar',
        wiki2: '',
        one_place: 'true'
    },

    {
        user_search: 'washington D.C. washington DC washington state',
        map1: 'Washington DC',
        map2: 'Washington State',
        wiki1: 'Washington DC',
        wiki2: 'Washington State',
        one_place: 'false'
    }
];

//      Places.insertMany(arr, function(err) {
// if (err) throw err;

// console.log('Multiple subjects created!');});
module.exports = Places;