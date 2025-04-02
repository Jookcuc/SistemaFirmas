import { useMemo, useState } from 'react';
import { Container, Box, Typography, IconButton } from '@mui/material';
import FilterListIcon from '@mui/icons-material/FilterList';
import { Header } from '../../../../core/components/header';
import { ReTable } from '../../../../core/components/table';
import { FilterDrawer } from '../../../../core/components/filterDrawer';
import './HistorialDocumentos.css';
import { ActionDefinition } from '../../../../core/interfaces';
import { useTranslation } from 'react-i18next';
import { Document } from '../../../../core/interfaces';

const initialDocuments = [
  {
    documentName: 'Documento06.pdf',
    uploadDate: '13 de marzo de 2025',
    signatureDate: '13 de marzo de 2025',
    downloadUrl: 'https://drive.google.com/uc?export=download&id=18eWDey9nZc2RTDNtQS-3TGuowVGTTHq4'
  },
];

export const HistorialDocumentos = () => {
  const { t } = useTranslation();
  const [filteredDocuments, setFilteredDocuments] = useState(() => initialDocuments);
  const [isFilterDrawerOpen, setIsFilterDrawerOpen] = useState(false);

  const columns = useMemo(() => [
    { key: 'documentName', label: t('StringsHistorial.table.columns.documentName') },
    { key: 'uploadDate', label: t('StringsHistorial.table.columns.uploadDate') },
    { key: 'signatureDate', label: t('StringsHistorial.table.columns.signatureDate') }
  ], [t]);

  const actions: ActionDefinition[] = useMemo(() => [
    {
      label: t('StringsHistorial.buttons.download'),
      onClick: (row: Document) => window.location.href = row.downloadUrl,
      variant: 'contained'
    },
    {
      label: t('StringsHistorial.buttons.preview'),
      onClick: (row: Document) => {
        console.log('Previsualizar', row);
      },
      variant: 'contained'
    }
  ], [t]);

  const { filterFields, rangeFields } = useMemo(() => ({
    filterFields: [
      {
        id: 'documentName',
        label: t('StringsHistorial.filter.documentName.label'),
        type: 'text' as const,
        placeholder: t('StringsHistorial.filter.documentName.placeholder')
      },
      {
        id: 'signatureDate',
        label: t('StringsHistorial.filter.signatureDate.label'),
        type: 'date' as const
      }
    ],
    rangeFields: [
      {
        startId: 'startDate',
        endId: 'endDate',
        startLabel: t('StringsHistorial.filter.dateRange.startLabel'),
        endLabel: t('StringsHistorial.filter.dateRange.endLabel')
      }
    ]
  }), [t]);

  const documentFilterFunctions = useMemo(() => ({
    documentName: (doc: any, filterValue: string) =>
      doc.documentName.toLowerCase().includes(filterValue.toLowerCase()),
    signatureDate: (doc: any, filterValue: string) =>
      doc.signatureDate.includes(filterValue),
  }), []);

  return (
    <Box className="document-history-page">
      <Header/>
      <Container>
        <Box className="document-history-header">
          <Typography variant="h5">
            {t('StringsHistorial.title.pageTitle')}
          </Typography>
          <IconButton
            className="filter-icon"
            onClick={() => setIsFilterDrawerOpen(true)}
            aria-label={t('StringsHistorial.buttons.filter')}
          >
            <FilterListIcon />
          </IconButton>
        </Box>
        <ReTable
          columns={columns}
          rows={filteredDocuments}
          actions={actions}
        />

        <FilterDrawer
          open={isFilterDrawerOpen}
          onClose={() => setIsFilterDrawerOpen(false)}
          title={t('StringsHistorial.title.filterTitle')}
          fields={filterFields}
          rangeFields={rangeFields}
          initialData={initialDocuments}
          onFilteredDataChange={setFilteredDocuments}
          filterFunctions={documentFilterFunctions}
        />
      </Container>
    </Box>
  );
};
