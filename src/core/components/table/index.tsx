import React from 'react';
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableContainer, 
  TableHead, 
  TableRow, 
  Paper,
  Box,
  Typography
} from '@mui/material';
import './table.css';

interface ColumnDefinition {
  key: string;
  label: string;
  width?: string;
}

interface ActionDefinition {
  label: string;
  onClick: (row: any) => void;
  variant?: 'primary' | 'secondary';
}

interface GenericTableProps {
  columns: ColumnDefinition[];
  rows: any[];
  actions?: ActionDefinition[];
  title?: string;
}

export const ReTable: React.FC<GenericTableProps> = ({
  columns,
  rows,
  actions = [],
  title
}) => {
  return (
    <TableContainer component={Paper} className="generic-table-container">
      {title && (
        <Box className="table-header">
          <Typography variant="h6" className="table-title">
            {title}
          </Typography>
        </Box>
      )}
      <Table className="generic-table">
        <TableHead>
          <TableRow>
            {columns.map((column) => (
              <TableCell 
                key={column.key} 
                style={{ width: column.width }}
              >
                {column.label}
              </TableCell>
            ))}
            {actions.length > 0 && <TableCell>Accion</TableCell>}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, rowIndex) => (
            <TableRow key={rowIndex}>
              {columns.map((column) => (
                <TableCell key={column.key}>
                  {row[column.key]}
                </TableCell>
              ))}
              {actions.length > 0 && (
                <TableCell>
                  <Box className="action-buttons">
                    {actions.map((action, actionIndex) => (
                      <button
                        key={actionIndex}
                        className={`action-btn ${action.variant || 'primary'}`}
                        onClick={() => action.onClick(row)}
                      >
                        {action.label}
                      </button>
                    ))}
                  </Box>
                </TableCell>
              )}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
