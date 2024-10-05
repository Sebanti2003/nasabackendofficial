import mongoose from "mongoose";


const asteroidSchema = new mongoose.Schema({
    name: {
        type: String,
        
    },
    designation: {
        type: String,
        
    },
    nasa_jpl_url: {
        type: String,
    },
    absolute_magnitude_h: {
        type: Number,
        
    },
    estimated_diameter: {
        kilometers: {
            estimated_diameter_min: { type: Number,  },
            estimated_diameter_max: { type: Number,  }
        }
    },
    is_potentially_hazardous_asteroid: {
        type: Boolean,
        
    },
    close_approach_data: [
        {
            close_approach_date: { type: Date,  },
            miss_distance_kilometers: { type: Number,  },
            relative_velocity_kph: { type: Number,  }
        }
    ],
    orbiting_body: {
        type: String,
        
    },
    sentry_risk: {
        impact_probability: { type: Number },
        potential_impact_date: { type: Date }
    },
    orbital_data: {
        eccentricity: { type: Number },
        semi_major_axis_km: { type: Number },
        orbital_period_days: { type: Number }
    },
    neo_reference_id: {
        type: String,
        
    },
    first_observation_date: {
        type: Date,
        
    },
    last_observation_date: {
        type: Date,
        
    }
}, {
    timestamps: true
});

export const Asteroid= mongoose.model("Asteroid", asteroidSchema);
// [
//     {
//       "name": "Apophis",
//       "designation": "99942",
//       "nasa_jpl_url": "http://ssd.jpl.nasa.gov/sbdb.cgi?sstr=99942",
//       "absolute_magnitude_h": 19.7,
//       "estimated_diameter": {
//         "kilometers": {
//           "estimated_diameter_min": 0.340,
//           "estimated_diameter_max": 0.370
//         }
//       },
//       "is_potentially_hazardous_asteroid": true,
//       "close_approach_data": [
//         {
//           "close_approach_date": "2029-04-13",
//           "miss_distance_kilometers": 31000,
//           "relative_velocity_kph": 30700
//         }
//       ],
//       "orbiting_body": "Earth",
//       "sentry_risk": {
//         "impact_probability": 0.000001,
//         "potential_impact_date": null
//       },
//       "orbital_data": {
//         "eccentricity": 0.191,
//         "semi_major_axis_km": 113338600,
//         "orbital_period_days": 323
//       },
//       "neo_reference_id": "2020346",
//       "first_observation_date": "2004-06-19",
//       "last_observation_date": "2020-01-09"
//     },
//     {
//       "name": "Bennu",
//       "designation": "101955",
//       "nasa_jpl_url": "http://ssd.jpl.nasa.gov/sbdb.cgi?sstr=101955",
//       "absolute_magnitude_h": 20.0,
//       "estimated_diameter": {
//         "kilometers": {
//           "estimated_diameter_min": 0.492,
//           "estimated_diameter_max": 0.508
//         }
//       },
//       "is_potentially_hazardous_asteroid": true,
//       "close_approach_data": [
//         {
//           "close_approach_date": "2135-09-25",
//           "miss_distance_kilometers": 750000,
//           "relative_velocity_kph": 28500
//         }
//       ],
//       "orbiting_body": "Earth",
//       "sentry_risk": {
//         "impact_probability": 0.00003,
//         "potential_impact_date": "2135-09-25"
//       },
//       "orbital_data": {
//         "eccentricity": 0.203,
//         "semi_major_axis_km": 121415000,
//         "orbital_period_days": 436
//       },
//       "neo_reference_id": "2010019",
//       "first_observation_date": "1999-09-11",
//       "last_observation_date": "2019-10-10"
//     },
//     {
//       "name": "2010 RF12",
//       "designation": "2010 RF12",
//       "nasa_jpl_url": "http://ssd.jpl.nasa.gov/sbdb.cgi?sstr=2010RF12",
//       "absolute_magnitude_h": 27.1,
//       "estimated_diameter": {
//         "kilometers": {
//           "estimated_diameter_min": 0.008,
//           "estimated_diameter_max": 0.018
//         }
//       },
//       "is_potentially_hazardous_asteroid": false,
//       "close_approach_data": [
//         {
//           "close_approach_date": "2095-09-05",
//           "miss_distance_kilometers": 7900000,
//           "relative_velocity_kph": 14560
//         }
//       ],
//       "orbiting_body": "Earth",
//       "sentry_risk": {
//         "impact_probability": 0.000013,
//         "potential_impact_date": null
//       },
//       "orbital_data": {
//         "eccentricity": 0.227,
//         "semi_major_axis_km": 14193000,
//         "orbital_period_days": 363
//       },
//       "neo_reference_id": "3416057",
//       "first_observation_date": "2010-09-05",
//       "last_observation_date": "2015-12-31"
//     },
//     {
//       "name": "Florence",
//       "designation": "3122",
//       "nasa_jpl_url": "http://ssd.jpl.nasa.gov/sbdb.cgi?sstr=3122",
//       "absolute_magnitude_h": 14.4,
//       "estimated_diameter": {
//         "kilometers": {
//           "estimated_diameter_min": 4.9,
//           "estimated_diameter_max": 5.0
//         }
//       },
//       "is_potentially_hazardous_asteroid": true,
//       "close_approach_data": [
//         {
//           "close_approach_date": "2017-09-01",
//           "miss_distance_kilometers": 7000000,
//           "relative_velocity_kph": 48500
//         }
//       ],
//       "orbiting_body": "Earth",
//       "sentry_risk": {
//         "impact_probability": 0.0,
//         "potential_impact_date": null
//       },
//       "orbital_data": {
//         "eccentricity": 0.422,
//         "semi_major_axis_km": 228182000,
//         "orbital_period_days": 859
//       },
//       "neo_reference_id": "2002401",
//       "first_observation_date": "1979-03-28",
//       "last_observation_date": "2019-06-10"
//     },
//     {
//       "name": "Toutatis",
//       "designation": "4179",
//       "nasa_jpl_url": "http://ssd.jpl.nasa.gov/sbdb.cgi?sstr=4179",
//       "absolute_magnitude_h": 15.3,
//       "estimated_diameter": {
//         "kilometers": {
//           "estimated_diameter_min": 2.3,
//           "estimated_diameter_max": 2.5
//         }
//       },
//       "is_potentially_hazardous_asteroid": true,
//       "close_approach_data": [
//         {
//           "close_approach_date": "2004-09-29",
//           "miss_distance_kilometers": 1544000,
//           "relative_velocity_kph": 39000
//         }
//       ],
//       "orbiting_body": "Earth",
//       "sentry_risk": {
//         "impact_probability": 0.0,
//         "potential_impact_date": null
//       },
//       "orbital_data": {
//         "eccentricity": 0.630,
//         "semi_major_axis_km": 383602000,
//         "orbital_period_days": 1464
//       },
//       "neo_reference_id": "417902",
//       "first_observation_date": "1934-02-10",
//       "last_observation_date": "2018-07-01"
//     }
//   ]