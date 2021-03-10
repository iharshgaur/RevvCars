import { Input, InputLabel, MenuItem, Select,FormControl,makeStyles,useTheme,FormControlLabel,Checkbox  } from '@material-ui/core'
import React from 'react'
import style from "./Filter.module.css"

const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 200,
      maxWidth: 400,
      marginTop:25
    },
    chips: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    chip: {
      margin: 2,
    },
    noLabel: {
      marginTop: theme.spacing(3),
    },
    label:{
        fontSize:"20px",
        marginBottom:"20px",
    },
    color:{
        "&:after":{
            borderColor:"#1caba2"
        },
    },
    checkbox:{
        marginLeft:"15px",
        color:"grey",
        "&$checked": {
            color: "#1caba2",
          },
        },
 
    
  }));
  
  const ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 8;
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
      },
    },
  };
  
  const names = [
        "Bangalore",
        "Hyderabad",
        "Mumbai",
        "Chennai",
        "Delhi-NCR",
        "Pune",
        "Kolkata"

  ];
 

  function getStyles(name, personName, theme) {
    return {
      fontWeight:
        personName.indexOf(name) === -1
          ? theme.typography.fontWeightRegular
          : theme.typography.fontWeightMedium,
    }}


export const FilterPart = () => {
    const classes = useStyles();
  const theme = useTheme();
  const [personName, setPersonName] = React.useState([]);
 
  const [price, setPrice] = React.useState({
        price: '',
        name: '0',
      });
const [segment, setSegment] = React.useState({
HatchBack: false,
Sedan: false,
Suv:false
});

const [fuel,setFuel] = React.useState({
    Petrol:false,
    Diesel:false
})
    
const [trans,setTrans] = React.useState({
    Auto:false,
    Manual:false
})

const [brand,setBrands] = React.useState({
    Maruthi:false,
    Hyundai:false,
    Tata:false,
    Honda:false,
    Nissan:false,
    Ford:false,
    Mahindra:false,
    Toyota:false
})
    
    const handleChangePrice = (event) => {
    const name = event.target.name;
    setPrice({
        ...price,
        [name]: event.target.value,
    });
    };
    React.useEffect(()=>{
        setPersonName(["Bangalore"])
    },[])

  const handleChange = (event) => {
    setPersonName(event.target.value);
  };


  const handleChangeSegment = (event) => {
    setSegment({ ...segment, [event.target.name]: event.target.checked });
  
  };

  const handleChangeFuel = (event) => {
    setFuel({ ...fuel, [event.target.name]: event.target.checked });
   
  };
  const handleChangeTrans = (event) => {
    setTrans({ ...trans, [event.target.name]: event.target.checked });
   
  };

  const handleChangeBrands = (event) => {
    setBrands({ ...brand, [event.target.name]: event.target.checked });
   
  };

    return (
        <div className={style.container}>
            <p className={style.heading}>Filter by</p>
            <FormControl className={classes.formControl}>
                <InputLabel id="demo-mutiple-name-label" className={classes.label}>City</InputLabel>
                <Select
                    labelId="demo-mutiple-name-label"
                    id="demo-mutiple-name"
                    multiple
                    value={personName}
                    onChange={handleChange}
                    input={<Input />}
                    MenuProps={MenuProps}
                    className={classes.color}
                >
                    {names.map((name) => (
                        <MenuItem key={name} value={name} style={getStyles(name, personName, theme)}>
                            {name}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        
        <FormControl className={classes.formControl}>
        <InputLabel htmlFor="age-native-simple">Price Range</InputLabel>
        <Select
          native
          value={price.price}
          onChange={handleChangePrice}
          inputProps={{
            name: 'price',
            id: 'age-native-simple',
          }}
          className={classes.color}
        >
          <option aria-label="None" value="" />
          <option value={10000 && 15000}> 10000 - 15000</option>
          <option value={15000 && 20000}> 15000 - 20000</option>
          <option value={20000 && 25000}> 20000 - 25000</option>
          <option value={25000 && 30000}> 25000 - 30000</option>
          <option value={30000 && 35000}> 30000 - 35000</option>
      
        </Select>
        {/* cehckbox for the car segment */}
      </FormControl>
          <p className={style.pricingHead}>Segment</p>
          <FormControlLabel
        control={
          <Checkbox
            checked={segment.HatchBack}
            onChange={handleChangeSegment}
            name="HatchBack"
            className={classes.checkbox}
            style={{color:"#1caba2"}}
          />
        }
        label="HatchBack"
      />
      <br/>
      <FormControlLabel
        control={
          <Checkbox
          style={{color:"#1caba2"}}
            checked={segment.Sedan}
            onChange={handleChangeSegment}
            name="Sedan"
            className={classes.checkbox}
          />
        }
        label="Sedan"
      />
    <br/>
<FormControlLabel
        control={
          <Checkbox
            checked={segment.SUV}
            onChange={handleChangeSegment}
            name="SUV"
            className={classes.checkbox}
            style={{color:"#1caba2"}}
          />
        }
        label="SUV / MUV"
      />

        {/* cehckbox for the car segment */}

          <p className={style.pricingHead}>Fuel</p>
          <FormControlLabel
        control={
          <Checkbox
            checked={fuel.Petrol}
            onChange={handleChangeFuel}
            name="Petrol"
            className={classes.checkbox}
            style={{color:"#1caba2"}}
          />
        }
        label="Petrol"
      />
      <br/>
      <FormControlLabel
        control={
          <Checkbox
          style={{color:"#1caba2"}}
            checked={fuel.Diesel}
            onChange={handleChangeFuel}
            name="Diesel"
            className={classes.checkbox}
          />
        }
        label="Diesel"
      />
      {/* cehckbox for the car segment */}

      <p className={style.pricingHead}>Transistion</p>
          <FormControlLabel
        control={
          <Checkbox
            checked={trans.Auto}
            onChange={handleChangeTrans}
            name="Auto"
            className={classes.checkbox}
            style={{color:"#1caba2"}}
          />
        }
        label="Automatic"
      />
      <br/>
      <FormControlLabel
        control={
          <Checkbox
          style={{color:"#1caba2"}}
            checked={trans.Manual}
            onChange={handleChangeTrans}
            name="Manual"
            className={classes.checkbox}
          />
        }
        label="Manual"
      />

<p className={style.pricingHead}>Car Brand</p>
          <FormControlLabel
        control={
          <Checkbox
            checked={brand.Maruthi}
            onChange={handleChangeBrands}
            name="Maruthi"
            className={classes.checkbox}
            style={{color:"#1caba2"}}
          />
        }
        label="Maruthi"
      />
      <br/>
      <FormControlLabel
        control={
          <Checkbox
            checked={brand.Hyundai}
            onChange={handleChangeBrands}
            name="Hyundai"
            className={classes.checkbox}
            style={{color:"#1caba2"}}
          />
        }
        label="Hyundai"
      />
       <br/>
      <FormControlLabel
        control={
          <Checkbox
            checked={brand.Tata}
            onChange={handleChangeBrands}
            name="Tata"
            className={classes.checkbox}
            style={{color:"#1caba2"}}
          />
        }
        label="Tata"
      />
    <br/>
      <FormControlLabel
        control={
          <Checkbox
            checked={brand.Honda}
            onChange={handleChangeBrands}
            name="Honda"
            className={classes.checkbox}
            style={{color:"#1caba2"}}
          />
        }
        label="Honda"
        />
          <br/>
      <FormControlLabel
        control={
          <Checkbox
            checked={brand.Nissan}
            onChange={handleChangeBrands}
            name="Nissan"
            className={classes.checkbox}
            style={{color:"#1caba2"}}
          />
        }
        label="Nissan"
        />
         <br/>
      <FormControlLabel
        control={
          <Checkbox
            checked={brand.Ford}
            onChange={handleChangeBrands}
            name="Ford"
            className={classes.checkbox}
            style={{color:"#1caba2"}}
          />
        }
        label="Ford"
        />
        <br/>
      <FormControlLabel
        control={
          <Checkbox
            checked={brand.Mahindra}
            onChange={handleChangeBrands}
            name="Mahindra"
            className={classes.checkbox}
            style={{color:"#1caba2"}}
          />
        }
        label="Mahindra"
        />
         <br/>
      <FormControlLabel
        control={
          <Checkbox
            checked={brand.Toyota}
            onChange={handleChangeBrands}
            name="Toyota"
            className={classes.checkbox}
            style={{color:"#1caba2"}}
          />
        }
        label="Toyota"
        />

        </div>
    )
}
