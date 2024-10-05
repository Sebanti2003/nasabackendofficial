import { Comet } from "../models/comet.model.js";

export const createCometData = async (req, res) => {
  try {
    const {
      object,
      epoch_tdb,
      tp_tdb,
      e,
      i_deg,
      w_deg,
      node_deg,
      q_au_1,
      q_au_2,
      p_yr,
      moid_au,
      a1_au_d_2,
      a2_au_d_2,
      a3_au_d_2,
      ref,
      object_name,
    } = req.body;

    // Validation for required fields
    if (
      !object ||
      !epoch_tdb ||
      !tp_tdb ||
      !e ||
      !i_deg ||
      !w_deg ||
      !node_deg ||
      !q_au_1 ||
      !q_au_2 ||
      !p_yr ||
      !moid_au ||
      !ref ||
      !object_name
    ) {
      return res.status(400).json({
        success: false,
        message: "All required fields are mandatory",
      });
    }

    // Create new comet data
    const newCometData = await Comet.create({
      object,
      epoch_tdb,
      tp_tdb,
      e,
      i_deg,
      w_deg,
      node_deg,
      q_au_1,
      q_au_2,
      p_yr,
      moid_au,
      a1_au_d_2,
      a2_au_d_2,
      a3_au_d_2,
      ref,
      object_name,
    });

    return res.status(201).json({
      success: true,
      message: "Comet data created successfully",
      data: newCometData,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "An error occurred while creating comet data",
      error: error.message,
    });
  }
};
export const getCometDataAll = async (req, res, next) => {
  try {
    const data = await Comet.find({});
    return res.status(200).json({
      success: true,
      message: "Comet data fetched successfully",
      datalength: data.length,
      data: data,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "An error occurred while fetching comet data",
      error: error.message,
    });
  }
};
export const getCometDataByName = async (req, res, next) => {
  try {
    const { name } = req.params;
    const data = await Comet.findOne({ object_name: name });

    if (!data) {
      return res.status(404).json({
        success: false,
        message: `Comet data for '${name}' not found`,
      });
    }

    return res.status(200).json({
      success: true,
      message: `Comet data for '${name}' fetched successfully`,
      data,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "An error occurred while fetching comet data",
      error: error.message,
    });
  }
};
