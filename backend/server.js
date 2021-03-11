const express = require("express");

const mongoose = require("mongoose");

const dotenv = require("dotenv");

dotenv.config();

const app = express();
app.use(express.json());
const port = process.env.PORT || 1234;
const connect = () => {
  return mongoose.connect(process.env.DATABASE_ACCESS, {
    useCreateIndex: true,
    useFindAndModify: false,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};

let rentalCarSchema = new mongoose.Schema(
  {
    car_name: {
      type: String,
      required: true,
    },
    car_images: {
      type: String,
      required: true,
    },
    car_rental_price: {
      type: Array,
      required: true,
    },
    car_is_booked: {
      type: Boolean,
      required: true,
    },
    car_type: {
      type: String,
      required: true,
    },
    car_specs: {
      type: Array,
      required: true,
    },
    car_subscription_price: {
      type: Number,
      required: true,
    },
    car_discount: {
      type: Number,
      required: true,
    },
    extra_price: {
      type: Number,
      required: true,
    },
  },
  {
    versionKey: false,
  }
);

const rental_cars = mongoose.model("rental_cars", rentalCarSchema);

app.get("/rental", async (req, res) => {
  const data = await rental_cars.find({}).lean().exec();
  res.status(200).json(data);
  console.log(data.length);
});

app.get("/rental/:id", async (req, res) => {
  const id = req.params.id;
  const data = await rental_cars.findById(id).lean().exec();
  res.status(200).json(data);
  console.log(data.length);
});
app.post("/revv_cars", async (req, res) => {
  const data = await rental_cars.create(req.body);

  res.status(201).json(data);
});

app.patch("/revv_cars/:id", async (req, res) => {
  const data = await rental_cars.findByIdAndUpdate(req.params.id, req.body);
  res.status(200).json(data);
});

app.delete("/revv_cars/:id", async (req, res) => {
  const data = await rental_cars.findByIdAndDelete(req.params.id);
  res.status(200).json(data);
});

// filtering the segment
app.get("/rentalCar/hatch", async (req, res) => {
  const data = await rental_cars.find({ car_type: { $eq: "Hatch Back" } });
  res.status(200).json(data);
});

app.get("/rentalCar/sedan", async (req, res) => {
  const data = await rental_cars.find({ car_type: { $eq: "Sedan" } });
  res.status(200).json(data);
});

app.get("/rentalCar/suv", async (req, res) => {
  const data = await rental_cars.find({ car_type: { $eq: "SUV" } });
  res.status(200).json(data);
});
app.get("/rentalCar/muv", async (req, res) => {
  const data = await rental_cars.find({ car_type: { $eq: "MUV" } });
  res.status(200).json(data);
});

app.get("/rentalCar/hatch&sedan", async (req, res) => {
  const data = await rental_cars.find({ car_type: { $eq: "Hatch Back" } });
  const data2 = await rental_cars.find({ car_type: { $eq: "Sedan" } });

  const updateData = [...data, ...data2];

  res.status(200).json(updateData);
});

app.get("/rentalCar/hatch&suv", async (req, res) => {
  const data = await rental_cars.find({ car_type: { $eq: "Hatch Back" } });
  const data2 = await rental_cars.find({ car_type: { $eq: "SUV" } });

  const updateData = [...data, ...data2];

  res.status(200).json(updateData);
});
app.get("/rentalCar/sedan&suv", async (req, res) => {
  const data = await rental_cars.find({ car_type: { $eq: "Sedan" } });
  const data2 = await rental_cars.find({ car_type: { $eq: "SUV" } });

  const updateData = [...data, ...data2];

  res.status(200).json(updateData);
});

//filtering the petrol
app.get("/rentalCar/petrol", async (req, res) => {
  const data = await rental_cars.find({ car_specs: { $eq: "petrol" } });
  res.status(200).json(data);
});
app.get("/rentalCar/diesel", async (req, res) => {
  const data = await rental_cars.find({ car_specs: { $eq: "diesel" } });
  res.status(200).json(data);
});

//filtering with transistion
app.get("/rentalCar/manual", async (req, res) => {
  const data = await rental_cars.find({ car_specs: { $eq: "Manual" } });
  res.status(200).json(data);
});
app.get("/rentalCar/automatic", async (req, res) => {
  const data = await rental_cars.find({ car_specs: { $eq: "Automatic" } });
  res.status(200).json(data);
});
//filtering with Seats
app.get("/rentalCar/FSeat", async (req, res) => {
  const data = await rental_cars.find({ car_specs: { $eq: 5 } });
  res.status(200).json(data);
});
app.get("/rentalCar/SSeat", async (req, res) => {
  const data = await rental_cars.find({ car_specs: { $eq: 7 } });
  res.status(200).json(data);
});
//filtering with Brands
app.get("/rentalCar/Toyota", async (req, res) => {
  const data = await rental_cars.find({
    car_name: { $eq: "Toyota Innova Crysta" },
  });
  res.status(200).json(data);
});
const start = async () => {
  await connect();
  app.listen(port, () => {
    console.log(`listening to the port ${port}`);
  });
};

start();
