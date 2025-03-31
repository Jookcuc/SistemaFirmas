import React, { useState } from 'react';
import { Container, Box, Typography, IconButton } from '@mui/material';
import FilterListIcon from '@mui/icons-material/FilterList';
import { Header } from '../../../../core/components/header';
import { ReTable } from '../../../../core/components/table';
import './HistorialDocumentos.css';
import { ActionDefinition } from '../../../../core/interfaces';

export const HistorialDocumentos: React.FC = () => {
  const [documents] = useState([
    {
      documentName: 'Documento06.pdf',
      uploadDate: '13 de marzo de 2025',
      signatureDate: '13 de marzo de 2025',
      downloadUrl: 'https://drive.google.com/uc?export=download&id=18eWDey9nZc2RTDNtQS-3TGuowVGTTHq4'
    },
    {
      documentName: 'Documento06.pdf',
      uploadDate: '13 de marzo de 2025',
      signatureDate: '13 de marzo de 2025',
      downloadUrl: '/api/documents/download/2'
    },
    {
      documentName: 'Documento06.pdf',
      uploadDate: '13 de marzo de 2025',
      signatureDate: '13 de marzo de 2025',
      downloadUrl: '/api/documents/download/3'
    },
    {
      documentName: 'Documento06.pdf',
      uploadDate: '13 de marzo de 2025',
      signatureDate: '13 de marzo de 2025',
      downloadUrl: '/api/documents/download/4'
    },
    {
      documentName: 'Documento06.pdf',
      uploadDate: '13 de marzo de 2025',
      signatureDate: '13 de marzo de 2025',
      downloadUrl: 'https://drive.google.com/uc?export=download&id=18eWDey9nZc2RTDNtQS-3TGuowVGTTHq4'
    },
    {
      documentName: 'Documento06.pdf',
      uploadDate: '13 de marzo de 2025',
      signatureDate: '13 de marzo de 2025',
      downloadUrl: '/api/documents/download/2'
    },
    {
      documentName: 'Documento06.pdf',
      uploadDate: '13 de marzo de 2025',
      signatureDate: '13 de marzo de 2025',
      downloadUrl: '/api/documents/download/3'
    },
    {
      documentName: 'Documento06.pdf',
      uploadDate: '13 de marzo de 2025',
      signatureDate: '13 de marzo de 2025',
      downloadUrl: '/api/documents/download/4'
    },
    {
      documentName: 'Documento06.pdf',
      uploadDate: '13 de marzo de 2025',
      signatureDate: '13 de marzo de 2025',
      downloadUrl: '/api/documents/download/4'
    },
    {
      documentName: 'Documento06.pdf',
      uploadDate: '13 de marzo de 2025',
      signatureDate: '13 de marzo de 2025',
      downloadUrl: 'https://drive.google.com/uc?export=download&id=18eWDey9nZc2RTDNtQS-3TGuowVGTTHq4'
    },
    {
      documentName: 'Documento06.pdf',
      uploadDate: '13 de marzo de 2025',
      signatureDate: '13 de marzo de 2025',
      downloadUrl: '/api/documents/download/2'
    },
    {
      documentName: 'Documento06.pdf',
      uploadDate: '13 de marzo de 2025',
      signatureDate: '13 de marzo de 2025',
      downloadUrl: '/api/documents/download/3'
    },
    {
      documentName: 'Documento06.pdf',
      uploadDate: '13 de marzo de 2025',
      signatureDate: '13 de marzo de 2025',
      downloadUrl: '/api/documents/download/4'
    }
  ]);

  const columns = [
    { key: 'documentName', label: 'Nombre del Documento' },
    { key: 'uploadDate', label: 'Fecha de Subida' },
    { key: 'signatureDate', label: 'Fecha de Firma' }
  ];

  const actions: ActionDefinition[] = [
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
  ];  

  return (
    <Box className="document-history-page">
      <Header />
      <Container maxWidth="lg" className="page-content">
        <Box display="flex" alignItems="center" justifyContent="space-between" mb={2}>
          <Typography variant="h5" className="page-title">
            Historial de Documentos
          </Typography>
          <IconButton className="filter-icon">
            <FilterListIcon />
          </IconButton>
        </Box>
        <ReTable 
          columns={columns}
          rows={documents}
          actions={actions}
        />
      </Container>
    </Box>
  );
};