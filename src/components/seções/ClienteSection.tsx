import Grafico2 from '../Graficos/Grafico2';
import Grafico5 from '../Graficos/Grafico5';
import Grafico6 from '../Graficos/Grafico6';
import Grafico7 from '../Graficos/Grafico7';
import Grafico10 from '../Graficos/Grafico10';
import './css/clientes.css'

const ClienteSection = () => {
  return (
    <div className="dashboard-container">
      <div className="top-graphs">
        <div className="graph"><Grafico6 /></div>
        <div className="graph"><Grafico10 /></div>
      </div>
      <div className="bottom-graphs">
        <div className="graph"><Grafico2 /></div>
        <div className="graph"><Grafico5 /></div>
        <div className="graph"><Grafico7 /></div>
      </div>
    </div>
  );
};

export default ClienteSection;
