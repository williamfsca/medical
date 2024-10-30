import React from 'react';
import { Package, Calendar, AlertTriangle } from 'lucide-react';

interface DrugInfoProps {
  data: any;
}

const DrugInfo: React.FC<DrugInfoProps> = ({ data }) => {
  const totalReports = data.meta.results.total;
  const recentReport = data.results[0];

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h3 className="text-xl font-bold text-gray-800 mb-4">Visão Geral do Medicamento</h3>
      
      <div className="space-y-4">
        <div className="flex items-start space-x-3">
          <Package className="h-5 w-5 text-indigo-600 mt-1" />
          <div>
            <h4 className="font-semibold text-gray-700">Nome Genérico</h4>
            <p className="text-gray-600">
              {recentReport.patient.drug[0].medicinalproduct}
            </p>
          </div>
        </div>

        <div className="flex items-start space-x-3">
          <AlertTriangle className="h-5 w-5 text-indigo-600 mt-1" />
          <div>
            <h4 className="font-semibold text-gray-700">Total de Relatos</h4>
            <p className="text-gray-600">{totalReports.toLocaleString()} eventos adversos relatados</p>
          </div>
        </div>

        <div className="flex items-start space-x-3">
          <Calendar className="h-5 w-5 text-indigo-600 mt-1" />
          <div>
            <h4 className="font-semibold text-gray-700">Último Relato</h4>
            <p className="text-gray-600">
              {new Date(recentReport.receiptdate).toLocaleDateString('pt-BR')}
            </p>
          </div>
        </div>
      </div>

      <div className="mt-6 p-4 bg-yellow-50 rounded-md">
        <p className="text-sm text-yellow-800">
          ⚠️ Estas informações são baseadas em eventos adversos relatados e não substituem o aconselhamento médico profissional.
        </p>
      </div>
    </div>
  );
};

export default DrugInfo;