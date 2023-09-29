import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
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
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell align="right">Dribble</TableCell>
                <TableCell align="right">Speed</TableCell>
                <TableCell align="right">Power</TableCell>
                <TableCell align="right">Stamina</TableCell>
                <TableCell align="right">Average</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow
                key={ronaldoData.name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {ronaldoData.name}
                </TableCell>
                <TableCell align="right">
                  <input className="border h-full p-2 w-20 text-right" defaultValue={0} placeholder="0" name="dribble" value={ronaldoData.dribble} onChange={handleRonaldoChange}></input>
                </TableCell>
                <TableCell align="right">
                  <input className="border h-full p-2 w-20 text-right" defaultValue={0} placeholder="0" name="speed" value={ronaldoData.speed} onChange={handleRonaldoChange}></input>
                </TableCell>
                <TableCell align="right">
                  <input className="border h-full p-2 w-20 text-right" defaultValue={0} placeholder="0" name="power" value={ronaldoData.power} onChange={handleRonaldoChange}></input>
                </TableCell>
                <TableCell align="right">
                  <input className="border h-full p-2 w-20 text-right" defaultValue={0} placeholder="0" name="stamina" value={ronaldoData.stamina} onChange={handleRonaldoChange}></input>
                </TableCell>
                <TableCell align="right">
                  <input className="border h-full p-2 w-20 text-right" defaultValue={0} placeholder="0" name="avg" value={ronaldoData.avg} disabled onChange={handleRonaldoChange}></input>
                </TableCell>
              </TableRow>
              <TableRow
                key={messiData.name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {messiData.name}
                </TableCell>
                <TableCell align="right">
                  <input className="border h-full p-2 w-20 text-right" defaultValue={0} placeholder="0" name="dribble" value={messiData.dribble} onChange={handleMessiChange}></input>
                </TableCell>
                <TableCell align="right">
                  <input className="border h-full p-2 w-20 text-right" defaultValue={0} placeholder="0" name="speed" value={messiData.speed} onChange={handleMessiChange}></input>
                </TableCell>
                <TableCell align="right">
                  <input className="border h-full p-2 w-20 text-right" defaultValue={0} placeholder="0" name="power" value={messiData.power} onChange={handleMessiChange}></input>
                </TableCell>
                <TableCell align="right">
                  <input className="border h-full p-2 w-20 text-right" defaultValue={0} placeholder="0" name="stamina" value={messiData.stamina} onChange={handleMessiChange}></input>
                </TableCell>
                <TableCell align="right">
                  <input className="border h-full p-2 w-20 text-right" defaultValue={0} placeholder="0" name="avg" value={messiData.avg} disabled onChange={handleMessiChange}></input>
                </TableCell>
              </TableRow>
              <TableRow
                key={benzemaData.name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {benzemaData.name}
                </TableCell>
                <TableCell align="right">
                  <input className="border h-full p-2 w-20 text-right" defaultValue={0} placeholder="0" name="dribble" value={benzemaData.dribble} onChange={handleBenzemaChange}></input>
                </TableCell>
                <TableCell align="right">
                  <input className="border h-full p-2 w-20 text-right" defaultValue={0} placeholder="0" name="speed" value={benzemaData.speed} onChange={handleBenzemaChange}></input>
                </TableCell>
                <TableCell align="right">
                  <input className="border h-full p-2 w-20 text-right" defaultValue={0} placeholder="0" name="power" value={benzemaData.power} onChange={handleBenzemaChange}></input>
                </TableCell>
                <TableCell align="right">
                  <input className="border h-full p-2 w-20 text-right" defaultValue={0} placeholder="0" name="stamina" value={benzemaData.stamina} onChange={handleBenzemaChange}></input>
                </TableCell>
                <TableCell align="right">
                  <input className="border h-full p-2 w-20 text-right" defaultValue={0} placeholder="0" name="avg" value={benzemaData.avg} disabled onChange={handleBenzemaChange}></input>
                </TableCell>
              </TableRow>
              <TableRow
                key={baleData.name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {baleData.name}
                </TableCell>
                <TableCell align="right">
                  <input className="border h-full p-2 w-20 text-right" defaultValue={0} placeholder="0" name="dribble" value={baleData.dribble} onChange={handleBaleChange}></input>
                </TableCell>
                <TableCell align="right">
                  <input className="border h-full p-2 w-20 text-right" defaultValue={0} placeholder="0" name="speed" value={baleData.speed} onChange={handleBaleChange}></input>
                </TableCell>
                <TableCell align="right">
                  <input className="border h-full p-2 w-20 text-right" defaultValue={0} placeholder="0" name="power" value={baleData.power} onChange={handleBaleChange}></input>
                </TableCell>
                <TableCell align="right">
                  <input className="border h-full p-2 w-20 text-right" defaultValue={0} placeholder="0" name="stamina" value={baleData.stamina} onChange={handleBaleChange}></input>
                </TableCell>
                <TableCell align="right">
                  <input className="border h-full p-2 w-20 text-right" defaultValue={0} placeholder="0" name="avg" value={baleData.avg} disabled onChange={handleBaleChange}></input>
                </TableCell>
              </TableRow>
              <TableRow
                key={avgData.name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {avgData.name}
                </TableCell>
                <TableCell align="right">
                  <input className="border h-full p-2 w-20 text-right" disabled defaultValue={0} placeholder="0" value={(parseInt(ronaldoData.dribble) + parseInt(messiData.dribble) + parseInt(benzemaData.dribble) + parseInt(baleData.dribble)) / 4}></input>
                </TableCell>
                <TableCell align="right">
                  <input className="border h-full p-2 w-20 text-right" disabled defaultValue={0} placeholder="0" value={(parseInt(ronaldoData.speed) + parseInt(messiData.speed) + parseInt(benzemaData.speed) + parseInt(baleData.speed)) / 4}></input>
                </TableCell>
                <TableCell align="right">
                  <input className="border h-full p-2 w-20 text-right" disabled defaultValue={0} placeholder="0" value={(parseInt(ronaldoData.power) + parseInt(messiData.power) + parseInt(benzemaData.power) + parseInt(baleData.power)) / 4}></input>
                </TableCell>
                <TableCell align="right">
                  <input className="border h-full p-2 w-20 text-right" disabled defaultValue={0} placeholder="0" value={(parseInt(ronaldoData.stamina) + parseInt(messiData.stamina) + parseInt(benzemaData.stamina) + parseInt(baleData.stamina)) / 4}></input>
                </TableCell>
                <TableCell align="right">
                  <input className="border h-full p-2 w-20 text-right" disabled defaultValue={0} placeholder="0" value={(parseInt(ronaldoData.avg) + parseInt(messiData.avg) + parseInt(benzemaData.avg) + parseInt(baleData.avg)) / 4}></input>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </Layout>
  );
}
