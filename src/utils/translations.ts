export const translateSideEffect = (effect: string): string => {
    const translations: { [key: string]: string } = {
      'headache': 'dor de cabeça',
      'nausea': 'náusea',
      'vomiting': 'vômito',
      'dizziness': 'tontura',
      'fatigue': 'fadiga',
      'diarrhoea': 'diarreia',
      'pain': 'dor',
      'anxiety': 'ansiedade',
      'depression': 'depressão',
      'insomnia': 'insônia',
      'rash': 'erupção cutânea',
      'fever': 'febre',
      'cough': 'tosse',
      'dyspnoea': 'falta de ar',
      'chest pain': 'dor no peito',
      'abdominal pain': 'dor abdominal',
      'back pain': 'dor nas costas',
      'arthralgia': 'dor nas articulações',
      'myalgia': 'dor muscular',
      'asthenia': 'fraqueza',
      'malaise': 'mal-estar',
      'weight increased': 'aumento de peso',
      'weight decreased': 'perda de peso',
      'loss of appetite': 'perda de apetite',
      'constipation': 'constipação',
      'dry mouth': 'boca seca',
      'tremor': 'tremor',
      'confusion': 'confusão',
      'dizziness postural': 'tontura postural',
      'somnolence': 'sonolência',
      'hypertension': 'hipertensão',
      'hypotension': 'hipotensão',
      'tachycardia': 'taquicardia',
      'palpitations': 'palpitações',
      'hot flush': 'ondas de calor',
      'dyspepsia': 'má digestão',
      'gastritis': 'gastrite',
      'pruritus': 'coceira',
      'hyperhidrosis': 'suor excessivo',
      'muscle spasms': 'espasmos musculares'
    };
  
    // Tenta encontrar uma tradução exata
    if (translations[effect.toLowerCase()]) {
      return translations[effect.toLowerCase()];
    }
  
    // Se não encontrar, tenta encontrar palavras-chave no texto
    for (const [eng, pt] of Object.entries(translations)) {
      if (effect.toLowerCase().includes(eng.toLowerCase())) {
        return pt;
      }
    }
  
    // Se não encontrar tradução, retorna o texto original
    return effect;
  };