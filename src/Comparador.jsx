// DevLeo - Comparador com imagens das motos

import React, { useState } from 'react';
import { Check, X } from 'lucide-react';

const bancoDeMotos = [
  {
    id: 1,
    marca: "Honda",
    modelo: "CG 160",
    ano: 2024,
    preco: "R$ 13.490",
    imagem: "https://motos.honda.com.br/storage/images/CG160Fan_vermelha.png",
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
    id: 2,
    marca: "Yamaha",
    modelo: "Fazer 250",
    ano: 2024,
    preco: "R$ 19.990",
    imagem: "https://yamaha-motor.com.br/storage/motorcycles/250-fazer-abs/gallery/foto6.png",
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
  {
    id: 3,
    marca: "Honda",
    modelo: "XRE 190",
    ano: 2024,
    preco: "R$ 21.790",
    imagem: "https://motos.honda.com.br/storage/images/XRE190_preta.png",
    performance: {
      cilindrada: "184cc",
      potencia: "16,4 cv",
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
      abs: true,
      cbs: false,
    },
    pneus: {
      ligaLeve: false,
    },
    suspensao: {
      dianteira: "Telescópica",
      traseira: "Mono Shock",
    },
  },
  {
    id: 4,
    marca: "Honda",
    modelo: "CB 300F Twister",
    ano: 2024,
    preco: "R$ 21.990",
    imagem: "https://motos.honda.com.br/storage/images/CB300FTwister_vermelha.png",
    performance: {
      cilindrada: "293cc",
      potencia: "24,5 cv",
    },
    tecnologias: {
      carregamentoUSB: false,
      painelDigital: true,
    },
    transmissao: {
      embreagemAssistida: true,
      embreagemDeslizante: false,
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
      traseira: "Mono Shock",
    },
  },
  {
    id: 5,
    marca: "Yamaha",
    modelo: "MT-03",
    ano: 2024,
    preco: "R$ 28.990",
    imagem: "https://yamaha-motor.com.br/storage/motorcycles/mt-03/gallery/foto6.png",
    performance: {
      cilindrada: "321cc",
      potencia: "42 cv",
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
      dianteira: "Invertida",
      traseira: "Mono Shock",
    },
  },
  {
    id: 6,
    marca: "Royal Enfield",
    modelo: "Hunter 350",
    ano: 2024,
    preco: "R$ 18.990",
    imagem: "https://royalenfield.com.br/wp-content/uploads/2023/07/RE-Hunter-350-Dapper-Grey.png",
    performance: {
      cilindrada: "349cc",
      potencia: "20,4 cv",
    },
    tecnologias: {
      carregamentoUSB: false,
      painelDigital: false,
    },
    transmissao: {
      embreagemAssistida: false,
      embreagemDeslizante: false,
    },
    freios: {
      abs: true,
      cbs: false,
    },
    pneus: {
      ligaLeve: false,
    },
    suspensao: {
      dianteira: "Telescópica",
      traseira: "Duplo Amortecedor",
    },
  },
  {
    id: 7,
    marca: "Shineray",
    modelo: "Jet 125",
    ano: 2024,
    preco: "R$ 7.590",
    imagem: "https://shineray.com.br/wp-content/uploads/2021/06/Jet-125-vermelha.png",
    performance: {
      cilindrada: "123cc",
      potencia: "7,2 cv",
    },
    tecnologias: {
      carregamentoUSB: false,
      painelDigital: false,
    },
    transmissao: {
      embreagemAssistida: false,
      embreagemDeslizante: false,
    },
    freios: {
      abs: false,
      cbs: false,
    },
    pneus: {
      ligaLeve: false,
    },
    suspensao: {
      dianteira: "Telescópica",
      traseira: "Convencional",
    },
  }
];

// DevLeo: atualizado para exibir imagens ao lado dos dados

const Comparador = () => {
  const [idMoto1, setIdMoto1] = useState(1);
  const [idMoto2, setIdMoto2] = useState(2);

  const moto1 = bancoDeMotos.find(m => m.id === Number(idMoto1));
  const moto2 = bancoDeMotos.find(m => m.id === Number(idMoto2));
  const motos = [moto1, moto2];

  const renderCheck = (value) => value ? <Check className="text-green-500" /> : <X className="text-red-500" />;

  if (idMoto1 === idMoto2) {
    return (
      <div className="p-4 max-w-3xl mx-auto text-center">
        <h1 className="text-2xl font-bold mb-4">Comparador de Motos</h1>
        <p className="text-red-600 font-semibold text-lg">⚠️ Por favor, selecione duas motos diferentes para comparar.</p>
      </div>
    );
  }

  return (
    <div className="p-4 max-w-5xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Comparador de Motos</h1>

      {/* Seletor de motos */}
      <div className="flex gap-4 mb-6">
        {[1, 2].map((num, idx) => (
          <div key={idx} className="flex flex-col gap-2">
            <label className="font-semibold">Moto {num}</label>
            <select
              className="border p-2 rounded"
              value={num === 1 ? idMoto1 : idMoto2}
              onChange={(e) => (num === 1 ? setIdMoto1(e.target.value) : setIdMoto2(e.target.value))}
            >
              {bancoDeMotos.map((m) => (
                <option key={m.id} value={m.id}>{m.marca} {m.modelo}</option>
              ))}
            </select>
          </div>
        ))}
      </div>

      {/* Comparação com imagem */}
      <div className="grid grid-cols-3 gap-4 items-start">
        <div></div>
        {motos.map((moto, index) => (
          <div key={index} className="bg-white p-4 rounded shadow text-center">
            <img src={moto.imagem} alt={moto.modelo} className="w-40 h-28 object-contain mx-auto mb-2" />
            <p className="font-bold text-lg">{moto.marca} {moto.modelo}</p>
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
