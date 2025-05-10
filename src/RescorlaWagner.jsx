import { useState } from "react";
import { ResponsiveLine } from '@nivo/line';

const RescorlaWagner = () => {
    const [V, setV] = useState([0]);
    const [lambdaHistory, setLambdaHistory] = useState([0]);
    const [t, setT] = useState(0);

    const [alpha, setAlpha] = useState(0.8)
    const [beta, setBeta] = useState(0.8)
    const [nextLambda, setNextLambda] = useState([0])

    const nextTrial = () => {
        const currentV = V[t];
        const deltaV = alpha * beta * (nextLambda - currentV)
        const newV = currentV + deltaV

        //Actualizar historicos
        setV([...V, newV]);
        setLambdaHistory([...lambdaHistory, nextLambda]);
        setT(t + 1);
    }

    const reset = () => {
        setV([0]);
        setLambdaHistory([0]);
        setT(0);
    }

    const chartData = [
        {
            id: "V (Expectativa)",
            color: "hsl(120, 99.20%, 49.60%)",
            data: V.map((value, index) => ({ x: index, y: value })),
        },
        {
            id: "Lambda (Realidad)",
            color: "hsl(0, 100.00%, 50.00%)",
            data: lambdaHistory.map((value, index) => ({ x: index, y: value })),
        },
    ];

    <div className="current-trial">
        <h3>Ensayo Actual: {t}</h3>
        <p>Valor de V: {V[t]?.toFixed(2) || 0}</p>
    </div>

    return (
        <div className="controls-container">
            <div className="input-group">
                <label >
                    <span>Seleccion la intensidad del estímulo condicionado</span>
                    <input
                        type="number"
                        min="0"
                        max="1"
                        step="0.1"
                        value={alpha}
                        onChange={(e) => setAlpha(parseFloat(e.target.value))}
                    />
                </label>

                <label className="input-group">
                    <span>Seleccion la intensidad del estímulo incondicionado</span>
                    <input
                        type="number"
                        step="0.1"
                        min="0"
                        max="1"
                        value={beta}
                        onChange={(e) => setBeta(parseFloat(e.target.value))}
                    />
                </label>

                <label className="input-group">
                    <span>¿Ocurrira el EI?</span>
                    <select
                        value={nextLambda}
                        onChange={(e) => setNextLambda(parseInt(e.target.value))}>

                        <option value={0}>NO</option>
                        <option value={1}>SI</option>
                    </select>
                </label>
            </div>
            <div className="buttons-container">
                <button className="reset-btn" onClick={reset}>Reiniciar</button>
                <button className="next-btn" onClick={nextTrial}>Proximo Ensayo</button>
            </div>


            <div>
                <h2>Resultados</h2>

                <div style={{ height: "400px" }}>
                    <ResponsiveLine
                        data={chartData}
                        margin={{ top: 20, right: 30, bottom: 60, left: 60 }}
                        xScale={{ type: "linear" }}
                        yScale={{
                            type: "linear",
                            min: 0,
                            max: 1,
                        }}
                        axisBottom={{
                            legend: "Ensayo (t)",
                            legendOffset: 40,
                        }}
                        axisLeft={{
                            legend: "Valor",
                            legendOffset: -40,
                        }}
                        pointSize={8}
                        enableSlices="x"
                        legends={[
                            {
                                anchor: "bottom-right",
                                direction: "column",
                                itemTextColor: "#999",
                            },
                        ]}
                    />
                </div>
            </div>
        </div>
    )
}

export default RescorlaWagner