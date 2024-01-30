import { db } from "../config/firebase";
import { getDocs, collection } from "firebase/firestore";
import { DataGrid } from "@mui/x-data-grid";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  tableCellClasses,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { useState, useEffect } from "react";
import { Fade } from "@mui/material";
import GameButton from "./gameButton";
import "../screens/healthQuiz.css";

// const healthyHabitCols = [
//   { field: "id", headerName: "#", width: 30 },
//   {
//     field: "healthyHabit",
//     headerName: "Healthy habit",
//     width: 200,
//   },
//   { field: "healthyHabitReason", headerName: "Reason", width: 400 },
//   { field: "result", headerName: "Result", width: 50 },
// ];

// const unhealthyHabitCols = [
//   { field: "id", headerName: "#", width: 30 },
//   {
//     field: "unhealthyHabit",
//     headerName: "Unhealthy habit",
//     width: 200,
//   },
//   { field: "unhealthyHabitReason", headerName: "Reason", width: 800 },
//   { field: "result", headerName: "Result", width: 200 },
// ];

const StyledTableCell = styled(TableCell)(({ theme, isCorrect }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#d0d0d0",
    color: theme.palette.common.black,
    fontSize: 18,
    padding: "20px",
    fontWeight: 700,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 20,
    "&:last-child": {
      color: isCorrect ? "#74b72e" : "#d2122e",
      fontWeight: 700,
    },
    "&:nth-child(2)": {
      padding: "20px",
    },
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: "#f7f7f7",
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const HealthQuizSummaryTable = ({ shuffledContent }) => {
  const [healthyHabitRows, setHealthyHabitRows] = useState(null);
  const [unhealthyHabitRows, setUnhealthyHabitRows] = useState(null);
  const [fadedIn, setFadedIn] = useState(false);

  useEffect(() => {
    const shuffleHealthyContent = shuffledContent.filter(
      (item) => item.isHealthy
    );
    const shuffleUnhealthyContent = shuffledContent.filter(
      (item) => !item.isHealthy
    );
    setHealthyHabitRows(
      shuffleHealthyContent.map((item, index) => {
        return {
          healthyHabit: item.habit,
          healthyHabitReason: item.desc,
          result: item.isCorrect ? "Correct" : "Wrong",
        };
      })
    );
    setUnhealthyHabitRows(
      shuffleUnhealthyContent.map((item, index) => {
        return {
          unhealthyHabit: item.habit,
          unhealthyHabitReason: item.desc,
          result: item.isCorrect ? "Correct" : "Wrong",
        };
      })
    );
    setFadedIn(true);
  }, []);

  if (healthyHabitRows && unhealthyHabitRows) {
    return (
      <div>
        <Fade in={fadedIn} timeout={1000}>
          <p
            style={{
              textAlign: "center",
              fontSize: "25px",
              marginTop: "10px",
            }}
          >
            Summary
          </p>
        </Fade>
        <Fade in={fadedIn} timeout={1000}>
          <div
            style={{ padding: "50px 30px", overflow: "auto", height: "350px" }}
          >
            <TableContainer component={Paper}>
              <Table
                sx={{ minWidth: 650 }}
                size="small"
                aria-label="a dense table"
              >
                <TableHead>
                  <TableRow>
                    <StyledTableCell align="center">
                      Healthy Habit
                    </StyledTableCell>
                    <StyledTableCell align="center">Reason</StyledTableCell>
                    <StyledTableCell align="center">Result</StyledTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {healthyHabitRows.map((item) => (
                    <StyledTableRow
                      key={item.healthyHabit}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <StyledTableCell component="th" scope="row">
                        {item.healthyHabit}
                      </StyledTableCell>
                      <StyledTableCell align="right">
                        {item.healthyHabitReason}
                      </StyledTableCell>
                      <StyledTableCell
                        align="right"
                        isCorrect={item.result === "Correct"}
                      >
                        {item.result}
                      </StyledTableCell>
                    </StyledTableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
            <div style={{ height: "50px" }}></div>
            <TableContainer component={Paper}>
              <Table
                sx={{ minWidth: 650 }}
                size="small"
                aria-label="a dense table"
              >
                <TableHead>
                  <TableRow>
                    <StyledTableCell align="center">
                      Unhealthy Habit
                    </StyledTableCell>
                    <StyledTableCell align="center">Reason</StyledTableCell>
                    <StyledTableCell align="center">Result</StyledTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {unhealthyHabitRows.map((item) => (
                    <StyledTableRow
                      key={item.unhealthyHabit}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <StyledTableCell component="th" scope="row">
                        {item.unhealthyHabit}
                      </StyledTableCell>
                      <StyledTableCell align="right">
                        {item.unhealthyHabitReason}
                      </StyledTableCell>
                      <StyledTableCell
                        align="right"
                        isCorrect={item.result === "Correct"}
                      >
                        {item.result}
                      </StyledTableCell>
                    </StyledTableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </div>
        </Fade>
        <div className="flex-container" style={{ marginTop: "30px" }}>
          <GameButton
            onClick={() => {
              window.location.reload();
            }}
          >
            Play again!
          </GameButton>
        </div>
      </div>
    );
  }

  return <></>;
};

export default HealthQuizSummaryTable;
