import { Asteroid } from "../models/asteroid.model.js";

// Controller to create a new asteroid data entry
export const createAsteroidData = async (req, res) => {
  try {
    const {
      name,
      designation,
      nasa_jpl_url,
      absolute_magnitude_h,
      estimated_diameter,
      is_potentially_hazardous_asteroid,
      close_approach_data,
      orbiting_body,
      sentry_risk,
      orbital_data,
      neo_reference_id,
      first_observation_date,
      last_observation_date,
    } = req.body;

    if (
      !name ||
      !designation ||
      !nasa_jpl_url ||
      !absolute_magnitude_h ||
      !estimated_diameter ||
      !close_approach_data ||
      !orbiting_body ||
      !sentry_risk ||
      !orbital_data ||
      !neo_reference_id ||
      !first_observation_date ||
      !last_observation_date
    ) {
      return res.status(400).json({
        success: false,
        message: "All required fields are mandatory",
      });
    }

    const newAsteroidData = await Asteroid.create({
      name,
      designation,
      nasa_jpl_url,
      absolute_magnitude_h,
      estimated_diameter,
      is_potentially_hazardous_asteroid,
      close_approach_data,
      orbiting_body,
      sentry_risk,
      orbital_data,
      neo_reference_id,
      first_observation_date,
      last_observation_date,
    });

    return res.status(201).json({
      success: true,
      message: "Asteroid data created successfully",
      data: newAsteroidData,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "An error occurred while creating asteroid data",
      error: error.message,
    });
  }
};

export const getAsteroidDataAll = async (req, res, next) => {
  try {
    const data = await Asteroid.find({});
    return res.status(200).json({
      success: true,
      message: "Asteroid data fetched successfully",
      datalength: data.length,
      data: data,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "An error occurred while fetching asteroid data",
      error: error.message,
    });
  }
};

export const getAsteroidDataByName = async (req, res, next) => {
  try {
    const { name } = req.params;
    const data = await Asteroid.findOne({ name });

    if (!data) {
      return res.status(404).json({
        success: false,
        message: `Asteroid data for '${name}' not found`,
      });
    }

    return res.status(200).json({
      success: true,
      message: `Asteroid data for '${name}' fetched successfully`,
      data,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "An error occurred while fetching asteroid data",
      error: error.message,
    });
  }
};
