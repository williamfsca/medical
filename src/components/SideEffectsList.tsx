import React from 'react';
import { Activity } from 'lucide-react';
import { translateSideEffect } from '../utils/translations';

interface SideEffectsListProps {
  data: any;
}

const SideEffectsList: React.FC<SideEffectsListProps> = ({ data }) => {
  const sideEffects = new Map();

  // Conta a frequência dos efeitos colaterais
  data.results.forEach((report: any) => {
    report.patient.reaction.forEach((reaction: any) => {
      const effect = reaction.reactionmeddrapt;
      sideEffects.set(effect, (sideEffects.get(effect) || 0) + 1);
    });
  });

  // Converte para array e ordena por frequência
  const sortedEffects = Array.from(sideEffects.entries())
    .sort((a, b) => b[1] - a[1])
    .slice(0, 15);

  const maxCount = Math.max(...sortedEffects.map(([_, count]) => count));

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <div className="flex items-center space-x-2 mb-4">
        <Activity className="h-5 w-5 text-indigo-600" />
        <h3 className="text-xl font-bold text-gray-800">Efeitos Colaterais Comuns</h3>
      </div>

      <div className="space-y-3">
        {sortedEffects.map(([effect, count]) => (
          <div key={effect} className="relative">
            <div className="flex justify-between items-center mb-1">
              <span className="text-gray-700">{translateSideEffect(effect)}</span>
              <span className="text-sm text-gray-500">
                {((count / data.results.length) * 100).toFixed(1)}% dos relatos
              </span>
            </div>
            <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
              <div
                className="h-full bg-indigo-600 rounded-full"
                style={{
                  width: `${(count / maxCount) * 100}%`,
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SideEffectsList;