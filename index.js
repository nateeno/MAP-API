maptilersdk.config.apiKey = "aR9B5UMOAfTZ7cfnCeM6";
const map = new maptilersdk.Map({
    container: "map", // container's id or the HTML element to render the map
    style: maptilersdk.MapStyle.STREETS,
    center: [10.7522, 59.9139], // starting position [lng, lat] for Oslo, Norway
    zoom: 10, // starting zoom
});

// Load city data
const cities = [
    {
        "city": "Oslo",
        "country": "Norway",
        "pop2024": 580000,
        "latitude": 59.9127,
        "longitude": 10.7461,
        "cityDisp": "Oslo",
        "pop2024Disp": "580,000"
    },
    {
        "city": "Bergen",
        "country": "Norway",
        "pop2024": 213585,
        "latitude": 60.393,
        "longitude": 5.32415,
        "cityDisp": "Bergen",
        "pop2024Disp": "213,585"
    },
    {
        "city": "Oslo",
        "country": "Norway",
        "pop2024": 580000,
        "latitude": 59.9127,
        "longitude": 10.7461,
        "cityDisp": "Oslo",
        "pop2024Disp": "580,000"
    },
    {
        "city": "Bergen",
        "country": "Norway",
        "pop2024": 213585,
        "latitude": 60.393,
        "longitude": 5.32415,
        "cityDisp": "Bergen",
        "pop2024Disp": "213,585"
    },
    {
        "city": "Trondheim",
        "country": "Norway",
        "pop2024": 147139,
        "latitude": 63.4305,
        "longitude": 10.3951,
        "cityDisp": "Trondheim",
        "pop2024Disp": "147,139"
    },
    {
        "city": "Stavanger",
        "country": "Norway",
        "pop2024": 121610,
        "latitude": 58.9701,
        "longitude": 5.73332,
        "cityDisp": "Stavanger",
        "pop2024Disp": "121,610"
    },
    {
        "city": "Drammen",
        "country": "Norway",
        "pop2024": 90722,
        "latitude": 59.7439,
        "longitude": 10.2045,
        "cityDisp": "Drammen",
        "pop2024Disp": "90,722"
    },
    {
        "city": "Fredrikstad",
        "country": "Norway",
        "pop2024": 72760,
        "latitude": 59.2181,
        "longitude": 10.9298,
        "cityDisp": "Fredrikstad",
        "pop2024Disp": "72,760"
    },
    {
        "city": "Kristiansand",
        "country": "Norway",
        "pop2024": 63814,
        "latitude": 58.1467,
        "longitude": 7.9956,
        "cityDisp": "Kristiansand",
        "pop2024Disp": "63,814"
    },
    {
        "city": "Sandnes",
        "country": "Norway",
        "pop2024": 63032,
        "latitude": 58.8524,
        "longitude": 5.73521,
        "cityDisp": "Sandnes",
        "pop2024Disp": "63,032"
    },
    {
        "city": "Tromso",
        "country": "Norway",
        "pop2024": 52436,
        "latitude": 69.6489,
        "longitude": 18.9551,
        "cityDisp": "Tromso",
        "pop2024Disp": "52,436"
    },
    {
        "city": "Sarpsborg",
        "country": "Norway",
        "pop2024": 52159,
        "latitude": 59.2839,
        "longitude": 11.1096,
        "cityDisp": "Sarpsborg",
        "pop2024Disp": "52,159"
    },
    {
        "city": "Skien",
        "country": "Norway",
        "pop2024": 50595,
        "latitude": 59.2096,
        "longitude": 9.60897,
        "cityDisp": "Skien",
        "pop2024Disp": "50,595"
    },
    {
        "city": "Alesund",
        "country": "Norway",
        "pop2024": 44096,
        "latitude": 62.4723,
        "longitude": 6.15492,
        "cityDisp": "Alesund",
        "pop2024Disp": "44,096"
    },
    {
        "city": "Sandefjord",
        "country": "Norway",
        "pop2024": 42654,
        "latitude": 59.1312,
        "longitude": 10.2167,
        "cityDisp": "Sandefjord",
        "pop2024Disp": "42,654"
    },
    {
        "city": "Haugesund",
        "country": "Norway",
        "pop2024": 40321,
        "latitude": 59.4138,
        "longitude": 5.268,
        "cityDisp": "Haugesund",
        "pop2024Disp": "40,321"
    },
    {
        "city": "Tonsberg",
        "country": "Norway",
        "pop2024": 38914,
        "latitude": 59.2675,
        "longitude": 10.4076,
        "cityDisp": "Tonsberg",
        "pop2024Disp": "38,914"
    },
    {
        "city": "Moss",
        "country": "Norway",
        "pop2024": 34492,
        "latitude": 59.434,
        "longitude": 10.6577,
        "cityDisp": "Moss",
        "pop2024Disp": "34,492"
    },
    {
        "city": "Porsgrunn",
        "country": "Norway",
        "pop2024": 34377,
        "latitude": 59.1405,
        "longitude": 9.6561,
        "cityDisp": "Porsgrunn",
        "pop2024Disp": "34,377"
    },
    {
        "city": "Bodo",
        "country": "Norway",
        "pop2024": 34073,
        "latitude": 67.28,
        "longitude": 14.405,
        "cityDisp": "Bodo",
        "pop2024Disp": "34,073"
    },
    {
        "city": "Arendal",
        "country": "Norway",
        "pop2024": 30916,
        "latitude": 58.4615,
        "longitude": 8.77253,
        "cityDisp": "Arendal",
        "pop2024Disp": "30,916"
    },
    {
        "city": "Hamar",
        "country": "Norway",
        "pop2024": 29479,
        "latitude": 60.7945,
        "longitude": 11.068,
        "cityDisp": "Hamar",
        "pop2024Disp": "29,479"
    },
    {
        "city": "Ytrebygda",
        "country": "Norway",
        "pop2024": 24044,
        "latitude": 60.305,
        "longitude": 5.28236,
        "cityDisp": "Ytrebygda",
        "pop2024Disp": "24,044"
    },
    {
        "city": "Larvik",
        "country": "Norway",
        "pop2024": 23113,
        "latitude": 59.0533,
        "longitude": 10.0352,
        "cityDisp": "Larvik",
        "pop2024Disp": "23,113"
    },
    {
        "city": "Halden",
        "country": "Norway",
        "pop2024": 21970,
        "latitude": 59.1248,
        "longitude": 11.3875,
        "cityDisp": "Halden",
        "pop2024Disp": "21,970"
    },
    {
        "city": "Steinkjer",
        "country": "Norway",
        "pop2024": 20000,
        "latitude": 64.0149,
        "longitude": 11.4954,
        "cityDisp": "Steinkjer",
        "pop2024Disp": "20,000"
    },
    {
        "city": "Harstad",
        "country": "Norway",
        "pop2024": 19433,
        "latitude": 68.7983,
        "longitude": 16.5417,
        "cityDisp": "Harstad",
        "pop2024Disp": "19,433"
    },
    {
        "city": "Lillehammer",
        "country": "Norway",
        "pop2024": 19096,
        "latitude": 61.1151,
        "longitude": 10.4663,
        "cityDisp": "Lillehammer",
        "pop2024Disp": "19,096"
    },
    {
        "city": "Molde",
        "country": "Norway",
        "pop2024": 18594,
        "latitude": 62.7375,
        "longitude": 7.15912,
        "cityDisp": "Molde",
        "pop2024Disp": "18,594"
    },
    {
        "city": "Mo i Rana",
        "country": "Norway",
        "pop2024": 17853,
        "latitude": 66.3128,
        "longitude": 14.1428,
        "cityDisp": "Mo i Rana",
        "pop2024Disp": "17,853"
    },
    {
        "city": "Kongsberg",
        "country": "Norway",
        "pop2024": 17667,
        "latitude": 59.6686,
        "longitude": 9.65017,
        "cityDisp": "Kongsberg",
        "pop2024Disp": "17,667"
    },
    {
        "city": "Horten",
        "country": "Norway",
        "pop2024": 17660,
        "latitude": 59.4172,
        "longitude": 10.4834,
        "cityDisp": "Horten",
        "pop2024Disp": "17,660"
    },
    {
        "city": "Gjovik",
        "country": "Norway",
        "pop2024": 17596,
        "latitude": 60.7957,
        "longitude": 10.6916,
        "cityDisp": "Gjovik",
        "pop2024Disp": "17,596"
    },
    {
        "city": "Askoy",
        "country": "Norway",
        "pop2024": 17224,
        "latitude": 60.4,
        "longitude": 5.18333,
        "cityDisp": "Askoy",
        "pop2024Disp": "17,224"
    },
    {
        "city": "Kristiansund",
        "country": "Norway",
        "pop2024": 16785,
        "latitude": 63.1105,
        "longitude": 7.72795,
        "cityDisp": "Kristiansund",
        "pop2024Disp": "16,785"
    },
    {
        "city": "Narvik",
        "country": "Norway",
        "pop2024": 14114,
        "latitude": 68.4384,
        "longitude": 17.4272,
        "cityDisp": "Narvik",
        "pop2024Disp": "14,114"
    },
    {
        "city": "Lillestrom",
        "country": "Norway",
        "pop2024": 14000,
        "latitude": 59.956,
        "longitude": 11.0492,
        "cityDisp": "Lillestrom",
        "pop2024Disp": "14,000"
    },
    {
        "city": "Honefoss",
        "country": "Norway",
        "pop2024": 13678,
        "latitude": 60.168,
        "longitude": 10.2565,
        "cityDisp": "Honefoss",
        "pop2024Disp": "13,678"
    },
    {
        "city": "Ski",
        "country": "Norway",
        "pop2024": 12513,
        "latitude": 59.7195,
        "longitude": 10.8358,
        "cityDisp": "Ski",
        "pop2024Disp": "12,513"
    },
    {
        "city": "Elverum",
        "country": "Norway",
        "pop2024": 12490,
        "latitude": 60.8819,
        "longitude": 11.5623,
        "cityDisp": "Elverum",
        "pop2024Disp": "12,490"
    },
    {
        "city": "Askim",
        "country": "Norway",
        "pop2024": 12482,
        "latitude": 59.5833,
        "longitude": 11.1629,
        "cityDisp": "Askim",
        "pop2024Disp": "12,482"
    },
    {
        "city": "Jessheim",
        "country": "Norway",
        "pop2024": 12365,
        "latitude": 60.1415,
        "longitude": 11.1751,
        "cityDisp": "Jessheim",
        "pop2024Disp": "12,365"
    },
    {
        "city": "Alta",
        "country": "Norway",
        "pop2024": 12077,
        "latitude": 69.9689,
        "longitude": 23.2717,
        "cityDisp": "Alta",
        "pop2024Disp": "12,077"
    },
    {
        "city": "Stjordalshalsen",
        "country": "Norway",
        "pop2024": 11416,
        "latitude": 63.4681,
        "longitude": 10.9262,
        "cityDisp": "Stjordalshalsen",
        "pop2024Disp": "11,416"
    },
    {
        "city": "Drobak",
        "country": "Norway",
        "pop2024": 11363,
        "latitude": 59.6633,
        "longitude": 10.6298,
        "cityDisp": "Drobak",
        "pop2024Disp": "11,363"
    },
    {
        "city": "Kongsvinger",
        "country": "Norway",
        "pop2024": 11181,
        "latitude": 60.1905,
        "longitude": 11.9977,
        "cityDisp": "Kongsvinger",
        "pop2024Disp": "11,181"
    },
    {
        "city": "Leirvik",
        "country": "Norway",
        "pop2024": 11028,
        "latitude": 59.7798,
        "longitude": 5.50051,
        "cityDisp": "Leirvik",
        "pop2024Disp": "11,028"
    },
    {
        "city": "Vennesla",
        "country": "Norway",
        "pop2024": 10931,
        "latitude": 58.2686,
        "longitude": 7.97314,
        "cityDisp": "Vennesla",
        "pop2024Disp": "10,931"
    },
    {
        "city": "Nesoddtangen",
        "country": "Norway",
        "pop2024": 10911,
        "latitude": 59.8624,
        "longitude": 10.6631,
        "cityDisp": "Nesoddtangen",
        "pop2024Disp": "10,911"
    },
    {
        "city": "Mandal",
        "country": "Norway",
        "pop2024": 10143,
        "latitude": 58.0274,
        "longitude": 7.45342,
        "cityDisp": "Mandal",
        "pop2024Disp": "10,143"
    },
    {
        "city": "Mosjoen",
        "country": "Norway",
        "pop2024": 9636,
        "latitude": 65.836,
        "longitude": 13.1908,
        "cityDisp": "Mosjoen",
        "pop2024Disp": "9,636"
    },
    {
        "city": "Grimstad",
        "country": "Norway",
        "pop2024": 9561,
        "latitude": 58.3405,
        "longitude": 8.59343,
        "cityDisp": "Grimstad",
        "pop2024Disp": "9,561"
    },
    {
        "city": "Egersund",
        "country": "Norway",
        "pop2024": 9502,
        "latitude": 58.4513,
        "longitude": 5.9997,
        "cityDisp": "Egersund",
        "pop2024Disp": "9,502"
    },
    {
        "city": "Namsos",
        "country": "Norway",
        "pop2024": 9035,
        "latitude": 64.4662,
        "longitude": 11.4957,
        "cityDisp": "Namsos",
        "pop2024Disp": "9,035"
    },
    {
        "city": "Sogne",
        "country": "Norway",
        "pop2024": 9000,
        "latitude": 58.0933,
        "longitude": 7.78294,
        "cityDisp": "Sogne",
        "pop2024Disp": "9,000"
    },
    {
        "city": "Raholt",
        "country": "Norway",
        "pop2024": 8593,
        "latitude": 60.2751,
        "longitude": 11.179,
        "cityDisp": "Raholt",
        "pop2024Disp": "8,593"
    },
    {
        "city": "Forde",
        "country": "Norway",
        "pop2024": 8510,
        "latitude": 61.4522,
        "longitude": 5.85717,
        "cityDisp": "Forde",
        "pop2024Disp": "8,510"
    },
    {
        "city": "Brumunddal",
        "country": "Norway",
        "pop2024": 8441,
        "latitude": 60.881,
        "longitude": 10.9395,
        "cityDisp": "Brumunddal",
        "pop2024Disp": "8,441"
    },
    {
        "city": "Levanger",
        "country": "Norway",
        "pop2024": 8411,
        "latitude": 63.7464,
        "longitude": 11.2996,
        "cityDisp": "Levanger",
        "pop2024Disp": "8,411"
    },
    {
        "city": "Notodden",
        "country": "Norway",
        "pop2024": 8306,
        "latitude": 59.5594,
        "longitude": 9.25853,
        "cityDisp": "Notodden",
        "pop2024Disp": "8,306"
    },
    {
        "city": "Floro",
        "country": "Norway",
        "pop2024": 8230,
        "latitude": 61.5996,
        "longitude": 5.0328,
        "cityDisp": "Floro",
        "pop2024Disp": "8,230"
    },
    {
        "city": "Bryne",
        "country": "Norway",
        "pop2024": 8006,
        "latitude": 58.7354,
        "longitude": 5.64766,
        "cityDisp": "Bryne",
        "pop2024Disp": "8,006"
    },
    {
        "city": "As",
        "country": "Norway",
        "pop2024": 7961,
        "latitude": 59.6647,
        "longitude": 10.7947,
        "cityDisp": "As",
        "pop2024Disp": "7,961"
    },
    {
        "city": "Saeveland",
        "country": "Norway",
        "pop2024": 7736,
        "latitude": 59.2667,
        "longitude": 5.2,
        "cityDisp": "Saeveland",
        "pop2024Disp": "7,736"
    },
    {
        "city": "Verdal",
        "country": "Norway",
        "pop2024": 7154,
        "latitude": 63.7933,
        "longitude": 11.4817,
        "cityDisp": "Verdal",
        "pop2024Disp": "7,154"
    },
    {
        "city": "Hammerfest",
        "country": "Norway",
        "pop2024": 6788,
        "latitude": 70.6634,
        "longitude": 23.6821,
        "cityDisp": "Hammerfest",
        "pop2024Disp": "6,788"
    },
    {
        "city": "Sogndal",
        "country": "Norway",
        "pop2024": 6700,
        "latitude": 61.2291,
        "longitude": 7.09674,
        "cityDisp": "Sogndal",
        "pop2024Disp": "6,700"
    },
    {
        "city": "Kopervik",
        "country": "Norway",
        "pop2024": 6507,
        "latitude": 59.2835,
        "longitude": 5.30669,
        "cityDisp": "Kopervik",
        "pop2024Disp": "6,507"
    },
    {
        "city": "Fetsund",
        "country": "Norway",
        "pop2024": 6441,
        "latitude": 59.9246,
        "longitude": 11.1571,
        "cityDisp": "Fetsund",
        "pop2024Disp": "6,441"
    },
    {
        "city": "Malvik",
        "country": "Norway",
        "pop2024": 6419,
        "latitude": 63.4333,
        "longitude": 10.6833,
        "cityDisp": "Malvik",
        "pop2024Disp": "6,419"
    },
    {
        "city": "Orsta",
        "country": "Norway",
        "pop2024": 6337,
        "latitude": 62.1998,
        "longitude": 6.12904,
        "cityDisp": "Orsta",
        "pop2024Disp": "6,337"
    },
    {
        "city": "Holmestrand",
        "country": "Norway",
        "pop2024": 6135,
        "latitude": 59.4876,
        "longitude": 10.3176,
        "cityDisp": "Holmestrand",
        "pop2024Disp": "6,135"
    },
    {
        "city": "Indre Arna",
        "country": "Norway",
        "pop2024": 6117,
        "latitude": 60.4177,
        "longitude": 5.47087,
        "cityDisp": "Indre Arna",
        "pop2024Disp": "6,117"
    },
    {
        "city": "Lillesand",
        "country": "Norway",
        "pop2024": 6081,
        "latitude": 58.2488,
        "longitude": 8.3778,
        "cityDisp": "Lillesand",
        "pop2024Disp": "6,081"
    },
    {
        "city": "Raufoss",
        "country": "Norway",
        "pop2024": 6052,
        "latitude": 60.726,
        "longitude": 10.6133,
        "cityDisp": "Raufoss",
        "pop2024Disp": "6,052"
    },
    {
        "city": "Fauske",
        "country": "Norway",
        "pop2024": 5953,
        "latitude": 67.2588,
        "longitude": 15.3918,
        "cityDisp": "Fauske",
        "pop2024Disp": "5,953"
    },
    {
        "city": "Klofta",
        "country": "Norway",
        "pop2024": 5942,
        "latitude": 60.0741,
        "longitude": 11.1381,
        "cityDisp": "Klofta",
        "pop2024Disp": "5,942"
    },
    {
        "city": "Tananger",
        "country": "Norway",
        "pop2024": 5817,
        "latitude": 58.9362,
        "longitude": 5.5741,
        "cityDisp": "Tananger",
        "pop2024Disp": "5,817"
    },
    {
        "city": "Sandnessjoen",
        "country": "Norway",
        "pop2024": 5778,
        "latitude": 66.0217,
        "longitude": 12.6316,
        "cityDisp": "Sandnessjoen",
        "pop2024Disp": "5,778"
    },
    {
        "city": "Hommersak",
        "country": "Norway",
        "pop2024": 5692,
        "latitude": 58.9256,
        "longitude": 5.85104,
        "cityDisp": "Hommersak",
        "pop2024Disp": "5,692"
    },
    {
        "city": "Flekkefjord",
        "country": "Norway",
        "pop2024": 5615,
        "latitude": 58.2971,
        "longitude": 6.66069,
        "cityDisp": "Flekkefjord",
        "pop2024Disp": "5,615"
    },
    {
        "city": "Stavern",
        "country": "Norway",
        "pop2024": 5593,
        "latitude": 59,
        "longitude": 10.0333,
        "cityDisp": "Stavern",
        "pop2024Disp": "5,593"
    },
    {
        "city": "Voss",
        "country": "Norway",
        "pop2024": 5571,
        "latitude": 60.6287,
        "longitude": 6.41474,
        "cityDisp": "Voss",
        "pop2024Disp": "5,571"
    },
    {
        "city": "Tranby",
        "country": "Norway",
        "pop2024": 5552,
        "latitude": 59.8085,
        "longitude": 10.2611,
        "cityDisp": "Tranby",
        "pop2024Disp": "5,552"
    },
    {
        "city": "Jorpeland",
        "country": "Norway",
        "pop2024": 5537,
        "latitude": 59.0225,
        "longitude": 6.04078,
        "cityDisp": "Jorpeland",
        "pop2024Disp": "5,537"
    },
    {
        "city": "Mysen",
        "country": "Norway",
        "pop2024": 5516,
        "latitude": 59.5535,
        "longitude": 11.3258,
        "cityDisp": "Mysen",
        "pop2024Disp": "5,516"
    },
    {
        "city": "Volda",
        "country": "Norway",
        "pop2024": 5376,
        "latitude": 62.146,
        "longitude": 6.07108,
        "cityDisp": "Volda",
        "pop2024Disp": "5,376"
    },
    {
        "city": "Odda",
        "country": "Norway",
        "pop2024": 5359,
        "latitude": 60.0691,
        "longitude": 6.54565,
        "cityDisp": "Odda",
        "pop2024Disp": "5,359"
    },
    {
        "city": "Vestby",
        "country": "Norway",
        "pop2024": 5330,
        "latitude": 59.6051,
        "longitude": 10.7523,
        "cityDisp": "Vestby",
        "pop2024Disp": "5,330"
    },
    {
        "city": "Kragero",
        "country": "Norway",
        "pop2024": 5158,
        "latitude": 58.8693,
        "longitude": 9.41494,
        "cityDisp": "Kragero",
        "pop2024Disp": "5,158"
    },
    {
        "city": "Vadso",
        "country": "Norway",
        "pop2024": 5139,
        "latitude": 70.0735,
        "longitude": 29.7494,
        "cityDisp": "Vadso",
        "pop2024Disp": "5,139"
    },
    {
        "city": "Ulsteinvik",
        "country": "Norway",
        "pop2024": 5103,
        "latitude": 62.3432,
        "longitude": 5.84869,
        "cityDisp": "Ulsteinvik",
        "pop2024Disp": "5,103"
    },
    {
        "city": "Akrehamn",
        "country": "Norway",
        "pop2024": 5018,
        "latitude": 59.2605,
        "longitude": 5.18689,
        "cityDisp": "Akrehamn",
        "pop2024Disp": "5,018"
    },
    {
        "city": "Hermansverk",
        "country": "Norway",
        "pop2024": 2000,
        "latitude": 61.1846,
        "longitude": 6.85016,
        "cityDisp": "Hermansverk",
        "pop2024Disp": "2,000"
    }

];

const maxPopulation = 400000;

cities.forEach(city => {
    let populationPercentage = city.pop2024 / maxPopulation;

    // Create RGBA color
    let color = `rgba(0, 0, 255, ${populationPercentage})`;

    new maptilersdk.Marker({
        color: color
    })
        .setLngLat([city.longitude, city.latitude])
        .addTo(map);
});