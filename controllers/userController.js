import asyncHandler from "express-async-handler";
import User from "../models/userModel.js";

import dotenv from "dotenv";
import Sector from "../models/sectorModel.js";
dotenv.config(); // Load environment variables from .env file

// (Name, Sectors, Agree to terms)

// @desc    Add new Data
// @route   POST /api/user
// @access  Public
export const addUserData = asyncHandler(async (req, res) => {
  const { name, sector, terms } = req.body;

  // Create user
  const user = await User.create({
    name,
    sector,
    terms,
  });

  if (user) {
    res.status(201).json({
      user,
    });
  } else {
    res.status(400);
    throw new Error("Invalid user data");
  }
});

// @desc    get User Data
// @route   GET /api/user
// @access  Public
export const getUserData = asyncHandler(async (req, res) => {
  const { id } = req.body;
  const user = await User.findById(id);

  res.status(201).json({
    user,
  });
});

// @desc    Update User Data
// @route   PUT /api/user
// @access  Public
export const updateUserData = asyncHandler(async (req, res) => {
  // const { userData } = req.body;
  const { id, name, sector, terms } = req.body;

  const user = await User.findByIdAndUpdate(
    id,
    { name, sector, terms },
    { new: true }
  );
  if (user) {
    res.status(201).json({
      user,
    });
  } else {
    res.status(400);
    throw new Error("Invalid user data");
  }
});

// @desc    Update User Data
// @route   DELETE /api/user
// @access  Public
export const deleteUserData = asyncHandler(async (req, res) => {
  // const { id } = req.body;
  const { id } = req.params;

  const user = await User.findByIdAndRemove(id);

  res.status(201).json({
    user,
  });
});

// @desc    Update User Data
// @route   get /api/user
// @access  Public
export const getSectorData = asyncHandler(async (req, res) => {
  // const { id } = req.body;
  const sectors = await Sector.find();

  res.status(201).json({
    sectors,
  });
});

// export const addSectorData = asyncHandler(async (req, res) => {
//   const sectorsData = [
//     {
//       category: "Manufacturing",
//       subcategories: [
//         { category: "Construction materials" },
//         { category: "Electronics and Optics" },
//         {
//           category: "Food and Beverage",
//           subcategories: [
//             { category: "Bakery & confectionery products" },
//             { category: "Beverages" },
//             { category: "Fish & fish products" },
//             { category: "Meat & meat products" },
//             { category: "Milk & dairy products" },
//             { category: "Sweets & snack food" },
//             { category: "Other (Fod and Beverage" },
//           ],
//         },
//         {
//           category: "Furniture",
//           subcategories: [
//             { category: "Bathroom/sauna" },
//             { category: "Bedroom" },
//             { category: "Children’s room" },
//             { category: "Kitchen" },
//             { category: "Living room" },
//             { category: "Office" },
//             { category: "Other (Furniture)" },
//             { category: "Outdoor" },
//             { category: "Project furniture" },
//           ],
//         },
//         {
//           category: "Machinery",
//           subcategories: [
//             { category: "Machinery components" },
//             { category: "Machinery equipment/tools" },
//             { category: "Manufacture of machinery" },
//             { category: "Maritime" },
//             {
//               category: "Aluminium and steel workboats",
//               subcategories: [
//                 { category: "Boat/Yacht building" },
//                 { category: "Ship repair and conversion" },
//               ],
//             },
//             { category: "Metal structures" },
//             { category: "Other" },
//             { category: "Repair and maintenance service" },
//           ],
//         },
//         {
//           category: "Metalworking",
//           subcategories: [
//             { category: "Construction of metal structures" },
//             { category: "Houses and buildings" },
//             { category: "Metal products" },
//             { category: "Metal works" },
//             {
//               category: "CNC-machining",
//               subcategories: [
//                 { category: "Forgings, Fasteners" },
//                 { category: "Gas, Plasma, Laser cutting" },
//                 { category: "MIG, TIG, Aluminum welding" },
//               ],
//             },
//           ],
//         },
//         {
//           category: "Plastic and Rubber",
//           subcategories: [
//             { category: "Packaging" },
//             { category: "Plastic goods" },
//             { category: "Plastic processing technology" },
//             { category: "Blowing" },
//             { category: "Moulding" },
//             { category: "Plastics welding and processing" },
//             { category: "Plastic profiles" },
//           ],
//         },
//         {
//           category: "Printing",
//           subcategories: [
//             { category: "Advertising" },
//             { category: "Book/Periodicals printing" },
//             { category: "Labelling and packaging printing" },
//           ],
//         },
//         {
//           category: "Textile and Clothing",
//           subcategories: ["Clothing", "Textile"],
//         },
//         {
//           category: "Wood",
//           subcategories: [
//             { category: "Other (Wood)" },
//             { category: "Wooden building materials" },
//             { category: "Wooden houses" },
//           ],
//         },
//       ],
//     },
//     {
//       category: "Other",
//       subcategories: [
//         { category: "Creative industries" },
//         { category: "Energy technology" },
//         { category: "Environment" },
//         {
//           category: "Service",
//           subcategories: [
//             { category: "Business services" },
//             { category: "Engineering" },
//             { category: "Information Technology and Telecommunications" },
//             {
//               category: "Data processing, Web portals, E-marketing",
//               subcategories: [
//                 { category: "Programming, Consultancy" },
//                 { category: "Software, Hardware" },
//                 { category: "Telecommunications" },
//               ],
//             },
//           ],
//         },
//         { category: "Tourism" },
//         { category: "Translation services" },
//         { category: "Transport and Logistics" },
//         {
//           category: "Air",
//           subcategories: [
//             { category: "Rail" },
//             { category: "Road" },
//             { category: "Water" },
//           ],
//         },
//       ],
//     },
//   ];

//   // Create user
//   const sector = await Sector.create({ sectors: sectorsData });

//   if (sector) {
//     res.status(201).json({
//       sector,
//     });
//   }
// });
