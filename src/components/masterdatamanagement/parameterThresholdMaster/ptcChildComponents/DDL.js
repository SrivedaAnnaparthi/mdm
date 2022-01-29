import React, { useState } from "react";
import Select from "react-select";
import data from "../../../../resources/data.json";
import { Box } from "@mui/material";
import { Grid } from "@mui/material";

const style1 = {
  width: 400,
  pt: 2,
};

const DDL = () => {

  const [country, setCountry] = useState(null);
  const [lang, setLang] = useState(null);
  const [langList, setLangList] = useState([]);
 
  // handle change event of the country dropdown
  const handleCategoryChange = (obj) => {
    setCountry(obj);
    setLangList(obj.languages);
    setLang(null);
  };
  
  // handle change event of the language dropdown
  const handlePhaseChange = (obj) => {
    setLang(obj);
  };

  // generate the link when both dropdowns are selected

  return (
    <div>
      <Box sx={style1}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
      <Grid item xs={6}>
        <b>Meter Subcategory</b>
        <Select
          placeholder="Select Category"
          value={country}
          options={data}
          onChange={handleCategoryChange}
          getOptionLabel={x => x.region}
          getOptionValue={x => x.country_code}
          
        />
        </Grid>
        <Grid item xs={6}>
        <b>Meter Phase</b>
        <Select
          placeholder="Select Phase"
          value={lang}
          options={langList}
          onChange={handlePhaseChange}
          getOptionLabel={x => x.name}
          getOptionValue={x => x.code}
        />
        </Grid>
        
      </Grid>
      </Box>
    </div>
  );
}

export default DDL;
