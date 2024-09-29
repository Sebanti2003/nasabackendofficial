import mongoose from "mongoose";

const planetSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    climate: {
        type: String,
        required: true
    },
    terrain: {
        type: String,
        required: true
    },
    population: {
        type: String,
        required: true
    },
    orbital_period: {
        type: String,
        required: true
    },
    rotation_period: {
        type: String,
        required: true
    },
    diameter: {
        type: String,
    },
    gravity: {
        type: String,
        required: true
    },
    surface_water: {
        type: String,
        required: true
    },
    url: {
        type: String,
        required: true
    }
},{
    timestamps:true
});

export const Planet= mongoose.model("Planet", planetSchema);