import { Satellite, Satellite, Satellite } from "../models/satellite.model";

export const createSatellite = async (req, res) => {
    try {
    const { name,
        launch_date,
        orbit_type,
        operator,
        mission_type,
        mass_kg,
        operational_status,
        lifespan_years

    } = req.body;
    console.log(
        name,
        launch_date,
        orbit_type,
        operator,
        mission_type,
        mass_kg,
        operational_status,
        lifespan_years
    );
    if (
        !name ||
        !launch_date ||
        !orbit_type||
        ! operator ||
        !mission_type ||
        ! mass_kg ||
        !operational_status||
        !lifespan_years 

      ){
        return res.status(400).json({
          success: false,
          message: "All fields are required",
  
        });
    }
    const Satellite = await Satellite.create({
        name,
        launch_date,
        orbit_type,
        operator,
        mission_type,
        mass_kg,
        operational_status,
        lifespan_years

        
      });
      return res.status(201).json({
        success: true,
        message: "Satallite data accessed successfully",
        data: Satellite,
      });
    }
    catch (error) {
      return res.status(500).json({
        success: false,
        message: "An error occurred while accessing Satallite data",
        error: error.message,
      });
    }
}
  export const getsatdataAll = async (req, res, next) => {
    try {
      const data = await Satellite.find({});
      return res.status(200).json({
        success: true,
        message: "Satellite data fetched successfully",
        datalength:data.length,
        data: data,
        
      });
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: "An error occurred while fetching Satellite data",
        error: error.message,
      });
    }
  };
  export const getSatellitedataforEarth=async(req,res,next)=>{
      try {
          const {name}=req.params;
          const data=await Satellite.find({PlanetName:Earth});
          return res.status(200).json({
              success:true,
              message:"Satellite data fetched successfully",
              data
          });
  
      } catch (error) {
          return res.status(500).json({
              success: false,
              message: "An error occurred while fetching Satellite data",
              error: error.message,
            });
      }
  }