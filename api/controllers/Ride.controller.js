import Ride from "../models/Ride.js";
import Ticket from "../models/Ticket.js";
export const getAllRides = async (req, res) => {
  try {
    const rides = await Ride.find();
    res.status(200).json(rides);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateSeatEmpty = async (req, res) => {
  console.log(req.body);
  const query = {
    "seat.number": parseInt(req.body.seat),
    _id: req.body.RideId,
  };

  const updateDoc = {
    $set: {
      "seat.$.empty": false,
    },
  };

  try {
    const result = await Ride.updateOne(query, updateDoc);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getRidesById = async (req, res, next) => {
  try {
    const ride = await Ride.findById(req.body.id);
    res.status(200).json(ride);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getRides = async (req, res, next) => {
  const { min, max, ...others } = req.query;
  console.log("ride route");
  try {
    const hotels = await Ride.find({
      ...others,
      cheapestPrice: { $gte: min || 1, $lte: max || 1000000 },
    }).limit(req.query.limit);
    // if no minimum then 1 value
    res.status(200).json(hotels);
  } catch (error) {
    next(error);
  }
};

export const createRide = async (req, res, next) => {
  const newHotel = new Ride(req.body); //enter by user

  try {
    const savedHotel = await newHotel.save();
    res.status(200).json(savedHotel);
  } catch (error) {
    // res.status(500).json(error);
    next(error);
  }
};

export const updateRide = async (req, res, next) => {
  try {
    const updateHotel = await Ride.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updateHotel);
  } catch (error) {
    next(error);
  }
};

export const deleteRide = async (req, res, next) => {
  try {
    await Hotel.findByIdAndDelete(req.params.id);
    res.status(200).json("Hotel has been Deleted");
  } catch (error) {
    next(error);
  }
};

export const getRide = async (req, res, next) => {
  try {
    const hotel = await Ride.findById(req.params.id);
    res.status(200).json(hotel);
  } catch (error) {
    next(error);
  }
};

// export const countByCity = async (req, res, next)=>{
//     const cities = req.query.cities.split(",")              //split is use to tranform data into array on the basis of ','
//     try{
//         const list = await Promise.all(cities.map(city=>{  //Promise is used because we have to get data of more than 1 cities
//             // return Hotel.find({city:city}).length    // comparatively more expensive operation - fetch all data and thier properties after that count
//             return Hotel.countDocuments({city:city})   // mongodbDocument only does the count operation without fetchings
//         }))
//         res.status(200).json(list);
//     }catch(error){
//         next(error);
//     }
// }

// export const countByType = async (req, res, next)=>{

//     try{
//         const hotelCount = await Hotel.countDocuments({type:"hotel"});
//         const AppartmentCount = await Hotel.countDocuments({type:"appartment"});
//         const resortCount = await Hotel.countDocuments({type:"resort"});
//         const villaCount = await Hotel.countDocuments({type:"villa"});
//         const cabinCount = await Hotel.countDocuments({type:"cabin"});

//         res.status(200).json([
//             {type:"hotel",count:hotelCount},
//             {type:"appartment",count:AppartmentCount},
//             {type:"resort",count:resortCount},
//             {type:"villa",count:villaCount},
//             {type:"cabin",count:cabinCount},
//         ]);
//     }catch(error){
//         next(error);
//     }
// }

export const getRideTickets = async (req, res, next) => {
  try {
    const ride = await Ride.findById(req.params.id);
    const list = await Promise.all(
      ride.tickets.map((ticket) => {
        return Ticket.findById(ticket);
      })
    );
    console.log(list);
    res.status(200).json(list);
  } catch (err) {
    next(err);
  }
};

export const searchRides = async (req, res, next) => {
  try {
    // const cities = req.query.id;
    const destination = req.query.to;
    const city = req.query.from;
    console.log(destination)
    const listRide = await Ride.find({
      from:city,
      to: destination,
      // selectedDestination: selectedDestinationx
    })
    res.status(200).json(listRide);
  } catch (error) {
    next(error);
  }
};
