import React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { styled } from "@mui/material/styles";
import "./Cards.css";
import { makeStyles } from "@material-ui/core/styles";
const dayjs = require("dayjs");

const useStyles = makeStyles({
  cardRed: {
    "& .MuiCardHeader-subheader": {
      color: "red",
    },
  },
  cardGreen: {
    "& .MuiCardHeader-subheader": {
      color: "green",
    },
  },
});

const MyCards = ({ content }) => {
  const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
  })(({ theme, expand }) => ({
    transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  }));
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  let cardStyle = {
    minHeight: "100px",
  };

  function currentDay() {
    let now = new Date();
    //console.log(now);
    // now.format("DD-MM-YYYY");
    // console.log(now);
    // console.log(now.format("DD-MM-YYYY"));
    // return now.format("DD-MM-YYYY");
  }
  currentDay();
  return (
    <div>
      <Card sx={{ maxWidth: 482, borderRadius: "25px" }} className="card">
        <CardHeader
          className={classes.cardGreen}
          title={content.name}
          subheader="Deadline:14-09-2016"
        />

        <CardActions disableSpacing>
          <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </ExpandMore>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent sx={{ Width: 482 }}>
            <Typography paragraph>{content.text}</Typography>
            <Typography paragraph>
              <p>
                <b>Project</b>: {content.project}
              </p>
            </Typography>
            <Typography paragraph>
              <p>
                <b>Supervisor</b>: {content.supervisor}
              </p>
            </Typography>
          </CardContent>
        </Collapse>
      </Card>
    </div>
  );
};

export default MyCards;
