import mongoose from "mongoose";

const satelliteSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    launch_date: {
        type: Date,
    },
    orbit_type: {
        type: String,
        required: true
    },
    operator: {
        type: String,
        required: true
    },
    mission_type: {
        type: String,
        required: true
    },
    mass_kg: {
        type: Number,
        required: true
    },
    operational_status: {
        type: Boolean,
        required: true
    },
    lifespan_years: {
        type: Number,
        required: false
    },
})

export const Satellite= mongoose.model("Satellite", satelliteSchema);