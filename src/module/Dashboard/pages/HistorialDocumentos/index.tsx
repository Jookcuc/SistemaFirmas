import React, { useMemo, useState } from 'react';
import { Container, Box, Typography, IconButton } from '@mui/material';
import FilterListIcon from '@mui/icons-material/FilterList';
import { Header } from '../../../../core/components/header';
import { ReTable } from '../../../../core/components/table';
import { FilterDrawer } from '../../../../core/components/filterDrawer';
import './HistorialDocumentos.css';
import { ActionDefinition } from '../../../../core/interfaces';

// Mover los datos iniciales fuera del componente para mejor rendimiento
const initialDocuments = [
  {
    documentName: 'Documento06.pdf',
    uploadDate: '13 de marzo de 2025',
    signatureDate: '13 de marzo de 2025',
    downloadUrl: 'https://drive.google.com/uc?export=download&id=18eWDey9nZc2RTDNtQS-3TGuowVGTTHq4'
  },
  // ... (resto de los documentos)
];

export const HistorialDocumentos: React.FC = () => {
  const [documents, setDocuments] = useState(initialDocuments);
  const [isFilterDrawerOpen, setIsFilterDrawerOpen] = useState(false);
  const [appliedFilters, setAppliedFilters] = useState({});

  const columns = useMemo(() => [
    { key: 'documentName', label: 'Nombre del Documento' },
    { key: 'uploadDate', label: 'Fecha de Subida' },
    { key: 'signatureDate', label: 'Fecha de Firma' }
  ], []);

  const actions: ActionDefinition[] = useMemo(() => [
    {
      label: 'Descargar',
      onClick: (row: any) => window.location.href = row.downloadUrl,
      variant: 'contained'
    },
    {
      label: 'Previsualizar',
      onClick: (row: any) => {
        console.log('Previsualizar', row);
      },
      variant: 'contained'
    }
  ], []);

  const { filterFields, rangeFields } = useMemo(() => ({
    filterFields: [
      {
        id: 'documentName',
        label: 'Nombre de Documento',
        type: 'text' as const,
        placeholder: 'Buscar nombre de documento'
      },
      {
        id: 'signatureDate',
        label: 'Fecha de Firma',
        type: 'date' as const
      }
    ],
    rangeFields: [
      {
        startId: 'startDate',
        endId: 'endDate',
        startLabel: 'Fecha inicio',
        endLabel: 'Fecha fin'
      }
    ]
  }), []);

  const handleApplyFilters = (filters: any) => {
    console.log('Filtros aplicados:', filters);
    setAppliedFilters(filters);
    
    // Aplicar filtros a los documentos
    let filteredDocuments = [...initialDocuments]; // Usamos la copia original
    
    if (filters.documentName) {
      filteredDocuments = filteredDocuments.filter(doc => 
        doc.documentName.toLowerCase().includes(filters.documentName.toLowerCase())
      );
    }
    
    if (filters.signatureDate) {
      // Implementar lógica de filtrado por fecha según tu formato de fecha
      // Ejemplo básico (necesitarías adaptarlo a tu formato de fecha)
      filteredDocuments = filteredDocuments.filter(doc => 
        doc.signatureDate.includes(filters.signatureDate)
      );
    }
    
    if (filters.startDate && filters.endDate) {
      // Implementar lógica de filtrado por rango de fechas
      // Necesitarías convertir las fechas a un formato comparable
    }
    
    setDocuments(filteredDocuments);
  };

  return (
    <Box className="document-history-page">
      <Header />
      <Container maxWidth="lg" className="page-content">
        <Box display="flex" alignItems="center" justifyContent="space-between" mb={2}>
          <Typography variant="h5" className="page-title">
            Historial de Documentos
          </Typography>
          <IconButton 
            className="filter-icon" 
            onClick={() => setIsFilterDrawerOpen(true)}
          >
            <FilterListIcon />
          </IconButton>
        </Box>
        <ReTable 
          columns={columns}
          rows={documents}
          actions={actions}
        />
        
        <FilterDrawer
          open={isFilterDrawerOpen}
          onClose={() => setIsFilterDrawerOpen(false)}
          title="FILTRAR"
          fields={filterFields}
          rangeFields={rangeFields}
          onApplyFilters={handleApplyFilters}
        />
      </Container>
    </Box>
  );
};