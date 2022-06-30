// import React from "react";
// import {
//   Grid,
//   Paper,
//   Avatar,
//   Typography,
//   TextField,
//   Button,
// } from "@material-ui/core";
// import AddCircleOutlineOutlinedIcon from "@material-ui/icons/AddCircleOutlineOutlined";
// import Radio from '@material-ui/core/Radio';
// import RadioGroup from '@material-ui/core/RadioGroup';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import FormControl from '@material-ui/core/FormControl';
// import FormLabel from '@material-ui/core/FormLabel';
// import InputLabel from '@mui/material/InputLabel';
// import MenuItem from '@mui/material/MenuItem';

// import Select from '@mui/material/Select';

// import Checkbox from "@material-ui/core/Checkbox";

// const Payment = () => {
//   return (
//     <Grid container spacing={3}>
//       <Paper
//         elevation={20}
//         style={{ padding: "30px 20px", width: 600, margin: "20px auto" }}
//       >
//         <Grid align="center">

//           <h2 style={{ margin: 0 }}>Payment Detail</h2>
//           <Typography variant="caption" gutterBottom>
//             <i style={{fontSize:"1.0em", color:"rgb(62,62,62)"}}>Digitizing Manufacturing & Trading SMEs</i>
//           </Typography>

//             <Button
//               href="#text-buttons"
//               style={{
//                 color: "rgb(22, 99, 127)",
//                 fontSize: "16px",
//                 fontWeight: "bold",
//               }}
//             >

//             </Button>{" "}

//         </Grid>
//         <form style={{ paddingLeft:"40px ",paddingRight:"40px "}}>

//             <TextField
//               style={{ fontSize:"2px", marginTop:30}}
//               placeholder="Customer Name"
//               fullWidth
//               required
//             />

//          <TextField
//             style={{ marginTop: 20 }}
//             placeholder="Address"
//             fullWidth
//             required
//           />

//           <div style={{display:"flex"}}>

//           <TextField

//              style={{ marginTop: 20 }}
//              placeholder="Email"
//              fullWidth
//              required
//            />
//             <TextField

//               style={{ marginTop: 20,marginLeft:20 }}
//               placeholder="Mobile Number"
//               fullWidth
//               required
//             />

//          </div>
//          <div style={{display:"flex"}}>
//          <TextField
//             style={{ marginTop: 30 }}

//             fullWidth
//             placeholder="Product"

//             required
//           />
//           <TextField
//             style={{ marginTop: 30,marginLeft:30 }}

//             fullWidth
//             placeholder="Rate"

//             required
//           />

//     </div>
//          <div style={{display:"flex"}} >

//          <Button style={{width:"5px"}} variant="outlined">+</Button>
//          <Typography variant="caption" component="div" gutterBottom>
//         h6. Heading
//       </Typography>
//          <Button variant="outlined">-</Button>
//          </div>

//           <TextField
//             style={{ marginTop: 30,marginLeft:30 }}

//             fullWidth
//             placeholder="Discount"

//             required
//           />

//            <TextField
//             style={{ marginTop: 30 }}

//             placeholder="Quantity"

//             required
//           />

// <FormControl component="fieldset" style={{marginTop:30}}>
//                         <FormLabel component="legend">Amount</FormLabel>
//                         <RadioGroup aria-label="gender" name="gender" style={{ display: 'initial' }}>
//                             <FormControlLabel value=" " control={<Radio />} label="Paid" />
//                             <FormControlLabel value=" " control={<Radio />} label="UnPaid" />
//                         </RadioGroup>
//                     </FormControl>
//           <TextField
//             style={{ marginTop: 30 }}

//             placeholder="Order Total"

//             required
//           />
//           <FormControlLabel
//             style={{ marginTop: 30 }}
//             control={<Checkbox name="checkedA" />}
//             label="I accept the terms and conditions."
//           />
//           <Button  type="submit" variant="contained" color="primary">
//             Total
//           </Button>
//         </form>
//       </Paper>
//     </Grid>
//   );
// };

// export default Payment;

import React from "react";
import Box from "@mui/material/Box";
// import image from "../Components/images/b.png";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
const Home = () => {
  return (
    <>
      <Stack spacing={"80%"} sx={{ p: 3 }} direction="row">
        <Button variant="contained">Login</Button>
        <Button variant="contained">SignUp</Button>
      </Stack>
      <Paper elevation={12}>
        <Box
          component="img"
          sx={{
            height: "40%",
            width: "70%",
            maxHeight: { xs: "500px", md: "500px" },
            maxWidth: { xs: "700px", md: "700px" }
          }}
          alt="Inventry Managemenent"
          src="https://www.google.com/search?q=inventory+image&rlz=1C1CHZL_enIN747IN748&sxsrf=ALiCzsarRchd8iUjrdG4Io7azpV9X7uxPQ:1656515604483&tbm=isch&source=iu&ictx=1&vet=1&fir=CCrY_H65HWuyBM%252CEnL4EZ3vHi1ooM%252C_%253BUwS5WPkWMDAieM%252CW6A4hZZcnbZpzM%252C_%253BqobWG1RFVqF_eM%252CtcBrLhWnMD76dM%252C_%253Bla60hw0HvnqTVM%252CvoI4DRQV37NMKM%252C_%253BqHtanAiGvY1G7M%252CGBU6RKBU0QtSDM%252C_%253Bfkw2jIBv09wacM%252C6U_BClf1ZqQYFM%252C_%253BAtJWCIcGmX1LoM%252CRBUZfWEjdvNLuM%252C_%253BzLgzlervFd0BHM%252C65CEwFUZccFKiM%252C_%253B1z4xC3zTv9skPM%252CGuXrTUBQinQ6jM%252C_%253B2OFMX2iL9tQL4M%252CYLSoKsh4s2myjM%252C_%253Blzr3B1R7LAgZTM%252CH5gPX8otcoWpbM%252C_%253BfZnsXh-d0sZdnM%252CN7fH6fCPUnVTpM%252C_%253BDXxRJb_88zMRlM%252CvbUwfDRHYR3ZkM%252C_&usg=AI4_-kQxFxLRLZ2Wb9a36MMwcdDZ4O-Y4g&sa=X&ved=2ahUKEwi_863B-dL4AhWJTWwGHWw6DNgQ9QF6BAgNEAE#imgrc=la60hw0HvnqTVM"
        />
      </Paper>

      <Typography sx={{ p: 4 }}>
        An inventory management system is the process by which you track your
        goods throughout your entire supply chain, from purchasing to production
        to end sales. It governs how you approach inventory management for your
        business.
      </Typography>
    </>
  );
};
export default Home;
