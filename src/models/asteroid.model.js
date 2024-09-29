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