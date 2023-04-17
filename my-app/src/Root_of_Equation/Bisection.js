import { useState, useEffect } from "react"
import { Button, Container, Form, Table } from "react-bootstrap";
import { evaluate } from 'mathjs'
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
// import { Line } from 'react-chartjs-2';
// import axios from 'axios';
//register components chartjs
import { Calbisection } from "./Cal_Bisection";
ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

const Bisection = () => {
    async function fetchData() {
        // try {
        //     axios.get('http://localhost:8800/EquationsTable', {headers:{Authorization:`A ${token}`}}).then((res)=>{
        //         console.log(res);
        //         var rand = Math.floor(Math.random() * ((res.data.length - 1) + 1)) //random number of api
        //         setEquation(res.data[rand].FX)
        //     })
        // } catch (err) {
        //     console.log("Error!!!" + err);
        // }
    }

    const print = () => {
        const datanew1 = data.map((e) => { return e.iteration });
        const datanew2 = data.map((e) => { return e.Xl });
        const datanew3 = data.map((e) => { return e.Xm });
        const datanew4 = data.map((e) => { return e.Xr });

        const data_plot = {
            labels: datanew1,
            datasets: [
                {
                    label: "Xl",
                    data: datanew2,
                    fill: true,
                    borderColor: 'rgb(253, 135, 255)',
                    backgroundColor: 'rgba(253, 135, 255, 0.5)'
                },
                {
                    label: "Xm",
                    data: datanew3,
                    fill: true,
                    borderColor: 'rgb(1, 255, 179)',
                    backgroundColor: 'rgba(1, 255, 179, 0.5)'
                },
                {
                    label: "Xr",
                    data: datanew4,
                    fill: true,
                    borderColor: 'rgb(110, 217, 249)',
                    backgroundColor: 'rgba(110, 217, 249, 0.5)'
                },
            ]
        };

        ChartJS.defaults.font.size = 20;
        const options = {
            responsive: true,
            plugins: {
                legend: {
                    position: 'top',
                    labels: {
                        font: {
                            size: 16,
                        },
                    },
                },
                title: {
                    display: true,
                    text: 'Bisection Line Chart',
                }
            },
        };
        return (
            <Container>
                <Table striped bordered hover variant="dark">
                    <thead>
                        <tr>
                            <th width="10%"><center>Iteration</center></th>
                            <th width="30%"><center>XL</center></th>
                            <th width="30%"><center>XM</center></th>
                            <th width="30%"><center>XR</center></th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((element, index) => {
                            return (
                                <tr key={index}>
                                    <td><center>{element.iteration}</center></td>
                                    <td>{element.Xl}</td>
                                    <td>{element.Xm}</td>
                                    <td>{element.Xr}</td>
                                </tr>)
                        })}
                    </tbody>
                </Table>
                <div ><br /><br /><br /><br />
                    {/* <Line data={data_plot} options={options} /> */}
                    <br /><br /><br />
                </div>
            </Container>
        );
    }

    // const error = (xold, xnew) => Math.abs((xnew - xold) / xnew) * 100;

    // const check_bisection = (xl, xr) => {
    //     let scope;
    //     scope = {
    //         x: xl,
    //     }
    //     var a = evaluate(new_Equation, scope);
    //     scope = {
    //         x: xr,
    //     }
    //     let b = evaluate(new_Equation, scope);
    //     return (a * b);
    // }

    // const Calbisection = (xl, xr) => {
    //     var xm, fXm, fXr, ea, scope;
    //     var iter = 0; //number of interation
    //     var x_old = 0;
    //     var MAX = 50; // max number of iteration
    //     const e = 0.00001;
    //     var obj = {};

    //     if (check_bisection(xl, xr) < 0) { //check bisection can use 
    //         do {
    //             if (iter !== 0) //ถ้าไม่ใส่ไว้ในรอบที่ 0 จะทำให้ค่าที่อยู๋ใน x0 เป็น undefined เพราะรอบแรกยังไม่มีค่า x ใหม่
    //                 x_old = xm + 0;
    //             xm = (xl + xr) / 2.0;
    //             scope = { //it is a obj to convert xm to x!!
    //                 x: xr,
    //             }
    //             fXr = evaluate(new_Equation, scope) //pass scope to equation -> x
    //             scope = {
    //                 x: xm,
    //             }
    //             fXm = evaluate(new_Equation, scope)

    //             iter++;
    //             if (fXm * fXr < 0) { //check cuting R or L
    //                 obj = {
    //                     iteration: iter,
    //                     Xl: xl,
    //                     Xm: xm,
    //                     Xr: xr
    //                 }
    //                 data.push(obj)
    //                 xl = xm;
    //             } else {
    //                 obj = {
    //                     iteration: iter,
    //                     Xl: xl,
    //                     Xm: xm,
    //                     Xr: xr
    //                 }
    //                 data.push(obj)
    //                 xr = xm;
    //             }
    //             ea = error(x_old, xm);
    //         } while (ea > e && iter < MAX); //check error % 
    //         setX(xm);
    //     }
    // }


    var new_Equation;
    let data = [];
    const [html, setHtml] = useState(null);
    const [Equation, setEquation] = useState("2x^3-2x-5")
    const [X, setX] = useState(0)
    const [XL, setXL] = useState(1)
    const [XR, setXR] = useState(2)
    const [adminname , setAdminname] = useState('');
    const [token , setToken] = useState('');

    const inputEquation = (event) => {
        setEquation(event.target.value)
    }

    const inputXL = (event) => {
        setXL(event.target.value)
    }

    const inputXR = (event) => {
        setXR(event.target.value)
    }

    const calculateRoot = () => {
        const xlnum = parseFloat(XL)
        const xrnum = parseFloat(XR)

        const choose = Equation.match(/[a-z]/i)[0];
        new_Equation = Equation.replace(new RegExp(choose, "g"), "x");
        const {datanew, xnew} = Calbisection(xlnum, xrnum, new_Equation);
        data = datanew;
        setX(xnew)
        setHtml(print());

    }

    const handlechange=(e)=>{
        setAdminname(e.target.value);
    }
    const getToken =()=>{
        // axios.get(`http://localhost:8800/gettoken/${adminname}`).then((res)=>{
        //     setToken(res.data)
        //     console.log("token "+res.data);
        // })
    }

    return (
        <Container>
            <Form >
                <br />
                <center><h3><b>Solving systems root of an equation using<br />
                    Bisection method</b></h3>
                    <Form.Group className="mb-3">
                        <br />
                        <Form.Label>Input f(x)</Form.Label>
                        <br />
                        <div className="d-inline-flex p-2">
                            <input type="text" id="equation" onChange={handlechange} style={{ width: "65%", margin: "0 auto" }} className="form-control"></input>
                            <Button type="button" variant="outline-secondary" onClick={getToken}>
                                token
                            </Button>
                        </div>
                        <br />
                        <div className="d-inline-flex p-2">
                            <input type="text" id="equation" value={Equation} onChange={inputEquation} style={{ width: "65%", margin: "0 auto" }} className="form-control" data-testid="Equation"></input>
                            <Button type="button" variant="outline-secondary" onClick={fetchData}>
                                Random
                            </Button>
                        </div>
                        <br /><Form.Label>Input x(left)</Form.Label>
                        <input type="number" id="XL" onChange={inputXL} style={{ width: "20%", margin: "0 auto" }} className="form-control" data-testid="XL"></input>
                        <br /><Form.Label>Input x(right)</Form.Label>
                        <input type="number" id="XR" onChange={inputXR} style={{ width: "20%", margin: "0 auto" }} className="form-control" data-testid="XR"></input>
                    </Form.Group>
                    <Button variant="dark" onClick={calculateRoot} data-testid="myBtn">
                        Calculate
                    </Button>

                </center>
            </Form>
            <br></br>
            <pre><h5 data-testid="ans"><b>Answer = {X.toPrecision(7)}</b></h5></pre>
            <Container>
                {html}
            </Container>
        </Container>
    )
}

export default Bisection