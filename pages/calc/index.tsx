import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Layout from '@/components/Layout';

interface rowData {
  name: string;
  dribble: string;
  speed: string;
  power: string;
  stamina: string;
  avg: string;
}

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

export default function Calc() {
  const ronaldoTempData: rowData = { name: 'Ronaldo', dribble: '0', speed: '0', power: '0', stamina: '0', avg: '0' };
  const messiTempData: rowData = { name: 'Messi', dribble: '0', speed: '0', power: '0', stamina: '0', avg: '0' };
  const benzemaTempData: rowData = { name: 'Benzema', dribble: '0', speed: '0', power: '0', stamina: '0', avg: '0' };
  const baleTempData: rowData = { name: 'Bale', dribble: '0', speed: '0', power: '0', stamina: '0', avg: '0' };
  const avgTempData: rowData = { name: 'Average', dribble: '0', speed: '0', power: '0', stamina: '0', avg: '0' };

  const [ronaldoData, setRonaldoData] = React.useState(ronaldoTempData);
  const [messiData, setMessiData] = React.useState(messiTempData);
  const [benzemaData, setBenzemaData] = React.useState(benzemaTempData);
  const [baleData, setBaleData] = React.useState(baleTempData);
  const [avgData, setAvgData] = React.useState(avgTempData);

  const handleRonaldoChange = (event: any) => {
    const { name, value } = event.target;
    const targetValue = value === '' ? '0' : value;

    setRonaldoData((prevState: any) => ({
      ...prevState,
      [name]: targetValue,
    }));

    const dribbleValue = name === "dribble" ? targetValue : ronaldoData.dribble;
    const speedValue = name === "speed" ? targetValue : ronaldoData.speed;
    const powerValue = name === "power" ? targetValue : ronaldoData.power;
    const staminaValue = name === "stamina" ? targetValue : ronaldoData.stamina;

    let dribble = 0, speed = 0, power = 0, stamina = 0;
    if (typeof dribbleValue === "string") dribble = parseInt(dribbleValue);
    if (typeof speedValue === "string") speed = parseInt(speedValue);
    if (typeof powerValue === "string") power = parseInt(powerValue);
    if (typeof staminaValue === "string") stamina = parseInt(staminaValue);

    const avg = ( dribble + speed + power + stamina ) / 4;

    setRonaldoData((prevState: any) => ({
      ...prevState,
      avg: avg.toFixed(2),
    }));
  };

  const handleMessiChange = (event: any) => {
    const { name, value } = event.target;
    const targetValue = value === '' ? '0' : value;

    setMessiData((prevState: any) => ({
      ...prevState,
      [name]: targetValue,
    }));

    const dribbleValue = name === "dribble" ? targetValue : messiData.dribble;
    const speedValue = name === "speed" ? targetValue : messiData.speed;
    const powerValue = name === "power" ? targetValue : messiData.power;
    const staminaValue = name === "stamina" ? targetValue : messiData.stamina;

    let dribble = 0, speed = 0, power = 0, stamina = 0;
    if (typeof dribbleValue === "string") dribble = parseInt(dribbleValue);
    if (typeof speedValue === "string") speed = parseInt(speedValue);
    if (typeof powerValue === "string") power = parseInt(powerValue);
    if (typeof staminaValue === "string") stamina = parseInt(staminaValue);

    const avg = ( dribble + speed + power + stamina ) / 4;

    setMessiData((prevState: any) => ({
      ...prevState,
      avg: avg.toFixed(2),
    }));
  };

  const handleBenzemaChange = (event: any) => {
    const { name, value } = event.target;
    const targetValue = value === '' ? '0' : value;

    setBenzemaData((prevState: any) => ({
      ...prevState,
      [name]: targetValue,
    }));

    const dribbleValue = name === "dribble" ? targetValue : benzemaData.dribble;
    const speedValue = name === "speed" ? targetValue : benzemaData.speed;
    const powerValue = name === "power" ? targetValue : benzemaData.power;
    const staminaValue = name === "stamina" ? targetValue : benzemaData.stamina;

    let dribble = 0, speed = 0, power = 0, stamina = 0;
    if (typeof dribbleValue === "string") dribble = parseInt(dribbleValue);
    if (typeof speedValue === "string") speed = parseInt(speedValue);
    if (typeof powerValue === "string") power = parseInt(powerValue);
    if (typeof staminaValue === "string") stamina = parseInt(staminaValue);

    const avg = ( dribble + speed + power + stamina ) / 4;

    setBenzemaData((prevState: any) => ({
      ...prevState,
      avg: avg.toFixed(2),
    }));
  };

  const handleBaleChange = (event: any) => {
    const { name, value } = event.target;
    const targetValue = value === '' ? '0' : value;

    setBaleData((prevState: any) => ({
      ...prevState,
      [name]: targetValue,
    }));

    const dribbleValue = name === "dribble" ? targetValue : baleData.dribble;
    const speedValue = name === "speed" ? targetValue : baleData.speed;
    const powerValue = name === "power" ? targetValue : baleData.power;
    const staminaValue = name === "stamina" ? targetValue : baleData.stamina;

    let dribble = 0, speed = 0, power = 0, stamina = 0;
    if (typeof dribbleValue === "string") dribble = parseInt(dribbleValue);
    if (typeof speedValue === "string") speed = parseInt(speedValue);
    if (typeof powerValue === "string") power = parseInt(powerValue);
    if (typeof staminaValue === "string") stamina = parseInt(staminaValue);

    const avg = ( dribble + speed + power + stamina ) / 4;

    setBaleData((prevState: any) => ({
      ...prevState,
      avg: avg.toFixed(2),
    }));
  };

  return (
    <Layout>
      <div className="max-w-5xl w-full">
        <h1 className="mb-10 text-5xl font-bold text-center">Player Ratings</h1>
        <h1 className="mb-5 text-xl">
          Please enter Dribble, Speed, Power, Stamina per players.
          You will get their average rating score.
        </h1>
        <TableContainer component={Paper} className="border">
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <StyledTableCell className="font-bold text-lg">Name</StyledTableCell>
                <StyledTableCell className="font-bold text-lg" align="right">Dribble</StyledTableCell>
                <StyledTableCell className="font-bold text-lg" align="right">Speed</StyledTableCell>
                <StyledTableCell className="font-bold text-lg" align="right">Power</StyledTableCell>
                <StyledTableCell className="font-bold text-lg" align="right">Stamina</StyledTableCell>
                <StyledTableCell className="font-bold text-lg" align="right">Average</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <StyledTableRow
                key={ronaldoData.name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <StyledTableCell component="th" scope="row">
                  {ronaldoData.name}
                </StyledTableCell>
                <StyledTableCell align="right">
                  <input className="border h-full p-2 w-20 text-right" defaultValue={0} placeholder="0" name="dribble" value={ronaldoData.dribble} onChange={handleRonaldoChange}></input>
                </StyledTableCell>
                <StyledTableCell align="right">
                  <input className="border h-full p-2 w-20 text-right" defaultValue={0} placeholder="0" name="speed" value={ronaldoData.speed} onChange={handleRonaldoChange}></input>
                </StyledTableCell>
                <StyledTableCell align="right">
                  <input className="border h-full p-2 w-20 text-right" defaultValue={0} placeholder="0" name="power" value={ronaldoData.power} onChange={handleRonaldoChange}></input>
                </StyledTableCell>
                <StyledTableCell align="right">
                  <input className="border h-full p-2 w-20 text-right" defaultValue={0} placeholder="0" name="stamina" value={ronaldoData.stamina} onChange={handleRonaldoChange}></input>
                </StyledTableCell>
                <StyledTableCell align="right">{ronaldoData.avg}</StyledTableCell>
              </StyledTableRow>
              <StyledTableRow
                key={messiData.name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <StyledTableCell component="th" scope="row">
                  {messiData.name}
                </StyledTableCell>
                <StyledTableCell align="right">
                  <input className="border h-full p-2 w-20 text-right" defaultValue={0} placeholder="0" name="dribble" value={messiData.dribble} onChange={handleMessiChange}></input>
                </StyledTableCell>
                <StyledTableCell align="right">
                  <input className="border h-full p-2 w-20 text-right" defaultValue={0} placeholder="0" name="speed" value={messiData.speed} onChange={handleMessiChange}></input>
                </StyledTableCell>
                <StyledTableCell align="right">
                  <input className="border h-full p-2 w-20 text-right" defaultValue={0} placeholder="0" name="power" value={messiData.power} onChange={handleMessiChange}></input>
                </StyledTableCell>
                <StyledTableCell align="right">
                  <input className="border h-full p-2 w-20 text-right" defaultValue={0} placeholder="0" name="stamina" value={messiData.stamina} onChange={handleMessiChange}></input>
                </StyledTableCell>
                <StyledTableCell align="right">{messiData.avg}</StyledTableCell>
              </StyledTableRow>
              <StyledTableRow
                key={benzemaData.name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <StyledTableCell component="th" scope="row">
                  {benzemaData.name}
                </StyledTableCell>
                <StyledTableCell align="right">
                  <input className="border h-full p-2 w-20 text-right" defaultValue={0} placeholder="0" name="dribble" value={benzemaData.dribble} onChange={handleBenzemaChange}></input>
                </StyledTableCell>
                <StyledTableCell align="right">
                  <input className="border h-full p-2 w-20 text-right" defaultValue={0} placeholder="0" name="speed" value={benzemaData.speed} onChange={handleBenzemaChange}></input>
                </StyledTableCell>
                <StyledTableCell align="right">
                  <input className="border h-full p-2 w-20 text-right" defaultValue={0} placeholder="0" name="power" value={benzemaData.power} onChange={handleBenzemaChange}></input>
                </StyledTableCell>
                <StyledTableCell align="right">
                  <input className="border h-full p-2 w-20 text-right" defaultValue={0} placeholder="0" name="stamina" value={benzemaData.stamina} onChange={handleBenzemaChange}></input>
                </StyledTableCell>
                <StyledTableCell align="right">{benzemaData.avg}</StyledTableCell>
              </StyledTableRow>
              <StyledTableRow
                key={baleData.name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <StyledTableCell component="th" scope="row">
                  {baleData.name}
                </StyledTableCell>
                <StyledTableCell align="right">
                  <input className="border h-full p-2 w-20 text-right" defaultValue={0} placeholder="0" name="dribble" value={baleData.dribble} onChange={handleBaleChange}></input>
                </StyledTableCell>
                <StyledTableCell align="right">
                  <input className="border h-full p-2 w-20 text-right" defaultValue={0} placeholder="0" name="speed" value={baleData.speed} onChange={handleBaleChange}></input>
                </StyledTableCell>
                <StyledTableCell align="right">
                  <input className="border h-full p-2 w-20 text-right" defaultValue={0} placeholder="0" name="power" value={baleData.power} onChange={handleBaleChange}></input>
                </StyledTableCell>
                <StyledTableCell align="right">
                  <input className="border h-full p-2 w-20 text-right" defaultValue={0} placeholder="0" name="stamina" value={baleData.stamina} onChange={handleBaleChange}></input>
                </StyledTableCell>
                <StyledTableCell align="right">{baleData.avg}</StyledTableCell>
              </StyledTableRow>
              <StyledTableRow
                key={avgData.name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <StyledTableCell component="th" scope="row" className="font-bold">{avgData.name}</StyledTableCell>
                <StyledTableCell align="right" className="font-bold">{(parseInt(ronaldoData.dribble) + parseInt(messiData.dribble) + parseInt(benzemaData.dribble) + parseInt(baleData.dribble)) / 4}</StyledTableCell>
                <StyledTableCell align="right" className="font-bold">{(parseInt(ronaldoData.speed) + parseInt(messiData.speed) + parseInt(benzemaData.speed) + parseInt(baleData.speed)) / 4}</StyledTableCell>
                <StyledTableCell align="right" className="font-bold">{(parseInt(ronaldoData.power) + parseInt(messiData.power) + parseInt(benzemaData.power) + parseInt(baleData.power)) / 4}</StyledTableCell>
                <StyledTableCell align="right" className="font-bold">{(parseInt(ronaldoData.stamina) + parseInt(messiData.stamina) + parseInt(benzemaData.stamina) + parseInt(baleData.stamina)) / 4}</StyledTableCell>
                <StyledTableCell align="right" className="font-bold">{(parseInt(ronaldoData.avg) + parseInt(messiData.avg) + parseInt(benzemaData.avg) + parseInt(baleData.avg)) / 4}</StyledTableCell>
              </StyledTableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </Layout>
  );
}
