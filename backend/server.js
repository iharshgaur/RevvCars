const express = require("express");

const mongoose = require("mongoose");
var cors = require('cors')
const dotenv = require("dotenv");

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());
const port = process.env.PORT || 1234;
const connect = () => {
  return mongoose.connect(process.env.DATABASE_ACCESS, {
    useCreateIndex: true,
    useFindAndModify: false,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};

let usersSchema = new mongoose.Schema({
  username : {
    type : String,
    required : true
  },
  email : {
    type : String,
    required : true
  },
  password : {
    type : String,
    required : true
  },
  cars_booked : {
    type : Array,
  }, 
  cars_subscribed : {
    type : Array,
  }
})
const users = mongoose.model("users", usersSchema);

app.get("/users", async (req, res) => {
  const data = await users.find({}).lean().exec();
  res.status(200).json(data);
});

app.post("/users", async (req, res) => {
  const data = await users.create(req.body);
  res.status(201).json(data);
});

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
});

app.get("/rental/:id", async (req, res) => {
  const id = req.params.id;
  const data = await rental_cars.findById(id).lean().exec();
  res.status(200).json(data);
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

const subscriptionSchema = mongoose.Schema({
    car_name:{
        type: String,
        required:true   
     },
    car_images:{
        type: String,
        required:true
    },
    car_type:{
        type:String,
        required:true
    },
    car_specs:{
        type:Array,
        required:true
    },
    car_subscription_price:{
        type:Number,
        required:true
    },
    car_discount:{
        type:Number,
        required:true
    }
})

const sub = mongoose.model("subscription",subscriptionSchema)

app.get("/subscription",async(req,res)=>{
    const data = await sub.find({}).lean().exec()
    res.status(200).json(data)
})

app.get("/subscription/:location",async(req,res)=>{
  const data = await sub.find({}).lean().exec()

  const locationCars =data.filter((cars)=> cars.rental_location === req.params.location)
res.status(200).json(locationCars)
})

app.get("/subpay/:id",async(req,res)=>{
  const data = await sub.findById(req.params.id).lean().exec()
  res.status(200).json(data)
})

app.get("/payment/:id/",async(req,res)=>{
  const data = await sub.findById(req.params.id).lean().exec()
  res.status(200).json(data)
})



app.post("/subscription",async(req,res)=>{
    const data = await sub.create(req.body)  
    res.status(201).json(data)
})

app.delete("/subscription/:id",async(req,res)=>{
    const data = await sub.findByIdAndDelete(req.params.id)
res.status(200).json(data)
})

//get request for price

app.get("/price/btw10-15/:location",async(req,res)=>{
  const data = await sub.find({$and:[{car_subscription_price:{$gt:10000}},{car_subscription_price:{$lt:15000}},{rental_location : {$eq : req.params.location}}]})
  console.log("here",data)
    res.status(200).json(data)
})


app.get("/price/btw15-20/:location",async(req,res)=>{
    const data = await sub.find({$and:[{car_subscription_price:{$gt:15000}},{car_subscription_price:{$lt:20000}},{rental_location : {$eq : req.params.location}}]})
    res.status(200).json(data)
})

app.get("/price/btw20-25/:location",async(req,res)=>{
    const data = await sub.find({$and:[{car_subscription_price:{$gt:20000}},{car_subscription_price:{$lt:25000}},{rental_location : {$eq : req.params.location}}]})
    res.status(200).json(data)
})

app.get("/price/btw25-30/:location",async(req,res)=>{
    const data = await sub.find({$and:[{car_subscription_price:{$gt:25000}},{car_subscription_price:{$lt:40000}},{rental_location : {$eq : req.params.location}}]})
    res.status(200).json(data)
})



// filtering the segment
app.get("/hatch/:location",async(req,res)=>{
  console.log("here")
    const data = await sub.find({$and :[{car_type:{$eq:"Hatch Back"}},{rental_location :{$eq: req.params.location}}]})

    res.status(200).json(data)
})

app.get("/sedan/:location",async(req,res)=>{
  const data = await sub.find({$and :[{car_type:{$eq:"Sedan"}},{rental_location :{$eq: req.params.location}}]})
    res.status(200).json(data)
})

app.get("/suv/:location",async(req,res)=>{
  const data = await sub.find({$and :[{car_type:{$eq:"SUV"}},{rental_location :{$eq: req.params.location}}]})

    res.status(200).json(data)
})

app.get("/hatch&sedan/:location",async(req,res)=>{
    const data =  await sub.find({$and :[{car_type:{$eq:"Hatch Back"}},{rental_location :{$eq: req.params.location}}]})
    const data2 = await sub.find({$and :[{car_type:{$eq:"Sedan"}},{rental_location :{$eq: req.params.location}}]})

    const updateData = [...data,...data2]
    res.status(200).json(updateData)
})

app.get("/hatch&suv/:location",async(req,res)=>{
    const data =  await sub.find({$and :[{car_type:{$eq:"Hatch Back"}},{rental_location :{$eq: req.params.location}}]})
    const data2 =await sub.find({$and :[{car_type:{$eq:"SUV"}},{rental_location :{$eq: req.params.location}}]})

    const updateData = [...data,...data2]
    res.status(200).json(updateData)
})
app.get("/sedan&suv/:location",async(req,res)=>{
    const data = await sub.find({$and :[{car_type:{$eq:"Sedan"}},{rental_location :{$eq: req.params.location}}]})
    const data2 = await sub.find({$and :[{car_type:{$eq:"SUV"}},{rental_location :{$eq: req.params.location}}]})
    const updateData = [...data,...data2]
    res.status(200).json(updateData)
})

//filtering the petrol
app.get("/petrol/:location",async(req,res)=>{
    const data = await sub.find({$and : [{car_specs:{$eq:"petrol"}},{rental_location :{$eq: req.params.location}}]})
    res.status(200).json(data)
})
app.get("/diesel/:location",async(req,res)=>{
  const data = await sub.find({$and : [{car_specs:{$eq:"diesel"}},{rental_location :{$eq: req.params.location}}]})
    res.status(200).json(data)
})

//filtering with transistion
app.get("/manual/:location",async(req,res)=>{
  
  const data = await sub.find({$and : [{car_specs:"Manual"},{rental_location :{$eq: req.params.location}}]})
    res.status(200).json(data)
})
app.get("/automatic/:location",async(req,res)=>{
  const data = await sub.find({$and : [{car_specs:"Automatic"},{rental_location :{$eq: req.params.location}}]})
    res.status(200).json(data)
})


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
