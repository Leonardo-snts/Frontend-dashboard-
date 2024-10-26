import Grafico1 from '../Graficos/Grafico1';
import Grafico2 from '../Graficos/Grafico2';
import Grafico3 from '../Graficos/Grafico3';
import Grafico4 from '../Graficos/Grafico4';
import Grafico5 from '../Graficos/Grafico5';
import Grafico6 from '../Graficos/Grafico6';
import SideNav from '../Dashboard/SideNav';

const Cliente = () => {
  return (
    <div>
      <SideNav />
      <div>
        <section id="cliente">
          <Grafico1 />
          <Grafico2 />
          <Grafico3 />
          <Grafico4 />
          <Grafico5 />
          <Grafico6 />
        </section>
      </div>
    </div>
  );
};

export default Cliente;
