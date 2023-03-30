// {
//     name: { type: String, required: true },
//     category: { type: String, required: true },
//     price: { type: Number, required: true },
//     design: { type: String, required: true },
//     image: { type: String, required: true },
//     type: { type: String, required: true },
//     offer: { type: String, required: true },
//     brand: { type: String, required: true },
//     discount: { type: String, required: true },
//     tags: {
//       type: Array,
//       default: [
//         {
//           type: "fit",
//           label: "OVERSIZED FIT",
//           bgColor: "rgba(82, 82, 82, 0.8)",
//           textColor: "#fff",
//         },
//       ],
//     }
const prodValidation = (req, res, next) => {
  next();
};

module.exports = {
  prodValidation,
};
