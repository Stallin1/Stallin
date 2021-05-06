import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    boxShadow: "none",
    width: "350px",
    marginRight: "auto",
  },
  tabs: {
    width: "350px",
  },
  tab: {
    marginLeft: "auto",
    width: "200px",
    alignItems: "end",
  },
  typography: {
    align: "right",
  },
});

const Categories = ({ categories, filterItems }) => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Paper className={classes.root}>
      <Tabs
        align="right"
        TabIndicatorProps={{
          style: {
            width: "3px",
          },
        }}
        className={classes.tabs}
        orientation="vertical"
        value={value}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="primary"
      >
        {categories.map((category, index) => {
          return (
            <Tab
              className={classes.tab}
              key={index}
              onClick={() => filterItems(category)}
              label={category}
            ></Tab>
          );
        })}
      </Tabs>
    </Paper>
  );
};

// const Categories = ({ categories, filterItems }) => {
//   return (
//     <div className="btn-container">
//       {categories.map((category, index) => {
//         return (
//           <button
//             type="button"
//             className="filter-btn"
//             key={index}
//             onClick={() => filterItems(category)}
//           >
//             {category}
//           </button>
//         );
//       })}
//     </div>
//   );
// };

export default Categories;
