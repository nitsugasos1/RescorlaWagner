import './Tutorial.css';

const Tutorial = () => {
  return (
    <div className="tutorial-text">
      <h2>¿Cómo funciona el modelo Rescorla-Wagner?</h2>
      
      <div className="explanation-section">
        <h3>Concepto básico</h3>
        <p>
          Este modelo explica cómo aprendemos asociaciones entre estímulos. Cuando un estímulo condicionado (EC)
          predice consistentemente un estímulo incondicionado (EI), desarrollamos una expectativa (V).
        </p>
        <div className="formula">
          ΔV = α · β · (λ - V)
        </div>
      </div>

      <div className="explanation-section">
        <h3>Parámetros a configurar:</h3>
        
        <div className="parameter">
          <h4>α (Alpha): Saliencia del EC</h4>
          <ul>
            <li><strong>Valor alto (0.7-1.0):</strong> EC muy notable (ej: sonido fuerte)</li>
            <li><strong>Valor bajo (0.1-0.3):</strong> EC discreto (ej: luz tenue)</li>
          </ul>
        </div>

        <div className="parameter">
          <h4>β (Beta): Saliencia del EI</h4>
          <ul>
            <li><strong>Valor alto (0.7-1.0):</strong> EI biológicamente importante (ej: comida sabrosa)</li>
            <li><strong>Valor bajo (0.1-0.4):</strong> EI poco relevante (ej: comida normal)</li>
          </ul>
        </div>

        <div className="parameter">
          <h4>λ (Lambda): Ocurrencia del EI</h4>
          <ul>
            <li><strong>1:</strong> EI presente (ej: se da comida)</li>
            <li><strong>0:</strong> EI ausente (ej: no se da comida)</li>
          </ul>
        </div>
      </div>

      <div className="explanation-section">
        <h3>Interpretando los resultados</h3>
        <p>
          El gráfico muestra cómo evoluciona la fuerza de asociación (V) entre ensayos:
        </p>
        <ul>
          <li><strong>Línea verde:</strong> Expectativa (V) de que el EC predice el EI</li>
          <li><strong>Línea roja:</strong> Indica cuándo realmente ocurrió el EI</li>
        </ul>
        <p>
          Durante la <strong>adquisición</strong> (λ=1), V debería aumentar. Durante la <strong>extinción</strong> (λ=0), V debería disminuir.
        </p>
      </div>
    </div>
  );
};

export default Tutorial;