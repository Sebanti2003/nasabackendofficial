import mongoose from "mongoose";

const cometSchema = new mongoose.Schema({ 
   object:{
        type: String,
        required: true
    },
    epoch_tdb: {
        type: String,
        required: true
    },
    tp_tdb: {
        type: String,
        required: true
    },
    e: {
        type: String,
        required: true
    },
    i_deg: {
        type: String,
        required: true
    },
    w_deg: {
        type: String,
        required: true
    },
    node_deg: {
        type: String,
        required: true
    },
    q_au_1: {
        type: String,
        required: true
    },
    q_au_2: {
        type: String,
        required: true
    },
    p_yr: {
        type: String,
        required: true
    },
    moid_au: {
        type: String,
        required: true
    },
    a1_au_d_2: {
        type: String,
        required: false
    },
    a2_au_d_2: {
        type: String,
        required: false
    },
    a3_au_d_2: {
        type: String,
        required: false
    },
    ref: {
        type: String,
        required: true
    },
    object_name: {
        type: String,
        required: true
    }
},{
    timestamps:true
})
export const Comet= mongoose.model("Comet", cometSchema);