import mongoose from "mongoose";

const keplerianDataSchema = new mongoose.Schema({
    PlanetName:{
        type: String,
        required: [true,"Provide the name of the Planet"]
    },
    Eccentricity: {
        type: Number,
        required: [true,"Provide the Eccentricity of the Orbit"],
        min: [0, "Eccentricity should be greater than 0"]
    },
    SemiMajorAxis: {
        type: Number,
        required: [true,"Provide the Semi-Major Axis of the Orbit"],
        min: [0, "Semi-Major Axis should be greater than 0"]
    },
    Inclination: {
        type: Number,
        required: [true,"Provide the Inclination of the Orbit"],
        min: [0, "Inclination should be greater than 0"]
    },
    Longitude: {
        type: Number,
        required: [true,"Provide the Longitude of the Orbit"],
        min: [0, "Longitude should be greater than 0"]
    },
    MeanAnomaly: {
        type: Number,
        required: [true,"Provide the Mean Anomaly of the Orbit"],
        min: [0, "Mean Anomaly should be greater than 0"]
    },
    TrueAnomaly: {
        type: Number,
        required: [true,"Provide the Mean Anomaly of the Orbit"],
        min: [0, "Mean Anomaly should be greater than 0"]
    },
    ArgumentOfPeriapsis:{
        type: Number,
        required: [true,"Provide the Argument of Periapsis"],
        min: [0, "Argument of Periapsis should be greater than 0"]
    }

},{
    timestamps:true
});

const KeplerianDataModel= mongoose.model("KeplerianDataModel", keplerianDataSchema);
export default KeplerianDataModel