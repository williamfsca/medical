import React, { useState } from 'react';
import { Pill } from 'lucide-react';
import SearchBar from './components/SearchBar';
import DrugInfo from './components/DrugInfo';
import SideEffectsList from './components/SideEffectsList';
import ErrorMessage from './components/ErrorMessage';
import { translateDrugName } from './utils/drugTranslations';

function App() {
  const [medicamento, setMedicamento] = useState('');
  const [resultados, setResultados] = useState<any>(null);
  const [carregando, setCarregando] = useState(false);
  const [erro, setErro] = useState('');

  const buscarEfeitosColaterais = async (termo: string) => {
    if (!termo.trim()) return;
    
    setCarregando(true);
    setErro('');
    setResultados(null);

    try {
      const medicamentoTraduzido = translateDrugName(termo.trim());
      const response = await fetch(
        `https://api.fda.gov/drug/event.json?search=patient.drug.medicinalproduct:${medicamentoTraduzido}&limit=100`
      );
      const data = await response.json();
      
      if (data.results && data.results.length > 0) {
        setResultados(data);
      } else {
        setErro('Não foram encontrados resultados para este medicamento.');
      }
    } catch (error) {
      setErro('Não foi possível encontrar informações para este medicamento.');
    } finally {
      setCarregando(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-8">
        <header className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <Pill className="w-12 h-12 text-indigo-600" />
          </div>
          <h1 className="text-4xl font-bold text-gray-800 mb-2">
            Efeitos Colaterais de Medicamentos
          </h1>
          <p className="text-gray-600">
            Pesquise um medicamento para ver seus possíveis efeitos colaterais
          </p>
        </header>

        <SearchBar 
          searchTerm={medicamento}
          setSearchTerm={setMedicamento}
          onSearch={buscarEfeitosColaterais}
          isLoading={carregando}
        />

        {erro && <ErrorMessage message={erro} />}

        {resultados && (
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <DrugInfo data={resultados} />
            <SideEffectsList data={resultados} />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;