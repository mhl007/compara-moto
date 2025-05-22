import { Check, X } from 'lucide-react';

const motos = [
  {
    marca: "Honda",
    modelo: "CG 160",
    ano: 2024,
    preco: "R$ 13.490",
    performance: {
      cilindrada: "162cc",
      potencia: "15,1 cv",
    },
    tecnologias: {
      carregamentoUSB: true,
      painelDigital: true,
    },
    transmissao: {
      embreagemAssistida: false,
      embreagemDeslizante: false,
    },
    freios: {
      abs: false,
      cbs: true,
    },
    pneus: {
      ligaLeve: true,
    },
    suspensao: {
      dianteira: "Telescópica",
      traseira: "Monoshock",
    },
  },
  {
    marca: "Yamaha",
    modelo: "Fazer 250",
    ano: 2024,
    preco: "R$ 19.990",
    performance: {
      cilindrada: "249cc",
      potencia: "21,5 cv",
    },
    tecnologias: {
      carregamentoUSB: false,
      painelDigital: true,
    },
    transmissao: {
      embreagemAssistida: true,
      embreagemDeslizante: true,
    },
    freios: {
      abs: true,
      cbs: false,
    },
    pneus: {
      ligaLeve: true,
    },
    suspensao: {
      dianteira: "Telescópica",
      traseira: "Monoshock",
    },
  },
];

const Comparador = () => {
  const renderCheck = (value) => value ? <Check className="text-green-500" /> : <X className="text-red-500" />;

  return (
    <div className="p-4 max-w-5xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Comparador de Motos</h1>
      <div className="grid grid-cols-3 gap-4">
        <div></div>
        {motos.map((moto, index) => (
          <div key={index} className="bg-white p-2 rounded shadow">
            <p className="font-bold">{moto.marca} {moto.modelo}</p>
            <p>{moto.ano}</p>
            <p className="text-green-700 font-bold">{moto.preco}</p>
          </div>
        ))}
      </div>

      <h2 className="mt-6 font-semibold">Performance</h2>
      <div className="grid grid-cols-3 gap-4 mt-2">
        <p>Cilindrada</p>
        {motos.map((m, i) => <p key={i}>{m.performance.cilindrada}</p>)}
        <p>Potência</p>
        {motos.map((m, i) => <p key={i}>{m.performance.potencia}</p>)}
      </div>

      <h2 className="mt-6 font-semibold">Tecnologias</h2>
      <div className="grid grid-cols-3 gap-4 mt-2">
        <p>Carregamento USB</p>
        {motos.map((m, i) => <div key={i}>{renderCheck(m.tecnologias.carregamentoUSB)}</div>)}
        <p>Painel Digital</p>
        {motos.map((m, i) => <div key={i}>{renderCheck(m.tecnologias.painelDigital)}</div>)}
      </div>

      <h2 className="mt-6 font-semibold">Transmissão</h2>
      <div className="grid grid-cols-3 gap-4 mt-2">
        <p>Embreagem Assistida</p>
        {motos.map((m, i) => <div key={i}>{renderCheck(m.transmissao.embreagemAssistida)}</div>)}
        <p>Embreagem Deslizante</p>
        {motos.map((m, i) => <div key={i}>{renderCheck(m.transmissao.embreagemDeslizante)}</div>)}
      </div>

      <h2 className="mt-6 font-semibold">Freios</h2>
      <div className="grid grid-cols-3 gap-4 mt-2">
        <p>ABS</p>
        {motos.map((m, i) => <div key={i}>{renderCheck(m.freios.abs)}</div>)}
        <p>CBS</p>
        {motos.map((m, i) => <div key={i}>{renderCheck(m.freios.cbs)}</div>)}
      </div>

      <h2 className="mt-6 font-semibold">Pneus</h2>
      <div className="grid grid-cols-3 gap-4 mt-2">
        <p>Liga Leve</p>
        {motos.map((m, i) => <div key={i}>{renderCheck(m.pneus.ligaLeve)}</div>)}
      </div>

      <h2 className="mt-6 font-semibold">Suspensão</h2>
      <div className="grid grid-cols-3 gap-4 mt-2">
        <p>Dianteira</p>
        {motos.map((m, i) => <p key={i}>{m.suspensao.dianteira}</p>)}
        <p>Traseira</p>
        {motos.map((m, i) => <p key={i}>{m.suspensao.traseira}</p>)}
      </div>
    </div>
  );
};

export default Comparador;
