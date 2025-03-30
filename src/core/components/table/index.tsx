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
  Typography,
  Button
} from '@mui/material';
import './table.css';
import { GenericTableProps} from '../../interfaces';


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
                      <Button
                        key={actionIndex}
                        variant={action.variant || 'contained'}
                        onClick={() => action.onClick(row)}
                      >
                        {action.label}
                      </Button>
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