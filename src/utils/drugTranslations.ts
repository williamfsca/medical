export const translateDrugName = (drug: string): string => {
  const translations: { [key: string]: string } = {
    'aspirina': 'aspirin',
    'ibuprofeno': 'ibuprofen',
    'paracetamol': 'acetaminophen',
    'dipirona': 'metamizole',
    'omeprazol': 'omeprazole',
    'amoxicilina': 'amoxicillin',
    'dexametasona': 'dexamethasone',
    'fluoxetina': 'fluoxetine',
    'sinvastatina': 'simvastatin',
    'losartana': 'losartan',
    'atenolol': 'atenolol',
    'metformina': 'metformin',
    'ranitidina': 'ranitidine',
    'diazepam': 'diazepam',
    'captopril': 'captopril',
    'enalapril': 'enalapril',
    'anlodipino': 'amlodipine',
    'sertralina': 'sertraline',
    'metronidazol': 'metronidazole',
    'prednisona': 'prednisone'
  };

  // Procura pela tradução exata (case insensitive)
  const drugLower = drug.toLowerCase();
  if (translations[drugLower]) {
    return translations[drugLower];
  }

  // Se não encontrar tradução, retorna o texto original
  return drug;
};