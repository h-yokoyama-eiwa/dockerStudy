import { useState } from "react";
import "./Counter.css";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import { Spacer } from "./Spacer";
import Display from "./Display";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <Grid container justifyContent={"center"}>
      <Grid item xs={6}>
        <Card
          className="card"
          sx={{
            minWidth: "200px",
            maxWidth: "600px",
            width: "100%",
            height: "300px",
            backgroundColor: "#ffff00",
          }}
        >
          <Spacer width="100%" height="15%" />
          <Grid container justifyContent={"center"}>
            <Grid item xs={10}>
              <Display count={count} width="100%" height="50px" />
            </Grid>
          </Grid>
          <Spacer width="100%" height="20%" />
          <Grid
            container
            justifyContent={"center"}
            alignItems={"end"}
            rowSpacing={1}
            columnSpacing={{ xs: 7 }}
          >
            <Grid item xs="auto">
              <Button
                variant="contained"
                onClick={() => setCount(count + 1)}
                sx={{
                  width: "100%",
                }}
              >
                カウント
              </Button>
            </Grid>
            <Grid item xs="auto">
              <Button
                variant="contained"
                onClick={() => setCount(0)}
                sx={{
                  width: "100%",
                }}
              >
                リセット
              </Button>
            </Grid>
            <Grid item xs="auto">
              <Button
                variant="contained"
                sx={{
                  width: "100%",
                }}
              >
                保存
              </Button>
            </Grid>
          </Grid>
        </Card>
      </Grid>
    </Grid>
  );
}

export default Counter;
