import KeplerianDataModel from "../models/keplerianData.model.js";

export const createKeplerianData = async (req, res) => {
  try {
    const {
      PlanetName,
      Eccentricity,
      SemiMajorAxis,
      Inclination,
      Longitude,
      MeanAnomaly,
      TrueAnomaly,
      ArgumentOfPeriapsis,
    } = req.body;
    console.log(
      PlanetName,
      Eccentricity,
      SemiMajorAxis,
      Inclination,
      Longitude,
      MeanAnomaly,
      TrueAnomaly,
      ArgumentOfPeriapsis
    );
    
    if (
      !PlanetName ||
      !Eccentricity ||
      !SemiMajorAxis ||
      !Longitude ||
      !MeanAnomaly ||
      !TrueAnomaly ||
      !ArgumentOfPeriapsis
    ) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",

      });
    }
    const KeplerianData = await KeplerianDataModel.create({
      PlanetName,
      Eccentricity,
      SemiMajorAxis,
      Inclination,
      Longitude,
      MeanAnomaly,
      TrueAnomaly,
      ArgumentOfPeriapsis,
    });
    return res.status(201).json({
      success: true,
      message: "Keplerian data created successfully",
      data: KeplerianData,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "An error occurred while creating Keplerian data",
      error: error.message,
    });
  }
};
export const getkepdataAll = async (req, res, next) => {
  try {
    const data = await KeplerianDataModel.find({});
    return res.status(200).json({
      success: true,
      message: "Keplerian data fetched successfully",
      datalength:data.length,
      data: data,
      
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "An error occurred while fetching Keplerian data",
      error: error.message,
    });
  }
};
export const getkepdataforEachplanet=async(req,res,next)=>{
    try {
        const {name}=req.params;
        const data=await KeplerianDataModel.find({PlanetName:name});
        return res.status(200).json({
            success:true,
            message:"Keplerian data fetched successfully",
            data
        });

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "An error occurred while fetching Keplerian data",
            error: error.message,
          });
    }
}
