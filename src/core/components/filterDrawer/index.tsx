import React from 'react';
import {
  Drawer,
  Box,
  Typography,
  Button,
  TextField,
  InputAdornment,
  IconButton
} from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import SearchIcon from '@mui/icons-material/Search';
import './filter.css';

interface FilterField {
  id: string;
  label: string;
  type: 'text' | 'date' | 'select';
  placeholder?: string;
  options?: Array<{ value: string; label: string }>;
}

interface RangeField {
  startId: string;
  endId: string;
  startLabel: string;
  endLabel: string;
}

interface FilterDrawerProps {
  open: boolean;
  onClose: () => void;
  title: string;
  fields: FilterField[];
  rangeFields?: RangeField[];
  onApplyFilters: (filters: any) => void;
}

export const FilterDrawer: React.FC<FilterDrawerProps> = ({
  open,
  onClose,
  title,
  fields,
  rangeFields,
  onApplyFilters
}) => {
  const [filters, setFilters] = React.useState<Record<string, any>>({});

  const handleInputChange = (id: string, value: any) => {
    setFilters((prev) => ({ ...prev, [id]: value }));
  };

  const handleApplyFilters = () => {
    onApplyFilters(filters);
    onClose();
  };

  const renderField = (field: FilterField) => {
    switch (field.type) {
      case 'text':
        return (
          <TextField
            fullWidth
            id={field.id}
            placeholder={field.placeholder || `Buscar ${field.label.toLowerCase()}`}
            value={filters[field.id] || ''}
            onChange={(e) => handleInputChange(field.id, e.target.value)}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
            margin="normal"
            variant="outlined"
            size="small"
          />
        );
      case 'date':
        return (
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              value={filters[field.id] || null}
              onChange={(newValue) => handleInputChange(field.id, newValue)}
              slotProps={{
                textField: {
                  fullWidth: true,
                  margin: "normal",
                  size: "small",
                  placeholder: "DD/MM/AA",
                  variant: "outlined"
                }
              }}
              format="DD/MM/YY"
            />
          </LocalizationProvider>
        );
      case 'select':
        return (
          <TextField
            select
            fullWidth
            id={field.id}
            value={filters[field.id] || ''}
            onChange={(e) => handleInputChange(field.id, e.target.value)}
            SelectProps={{
              native: true,
            }}
            margin="normal"
            variant="outlined"
            size="small"
          >
            <option value="">Seleccionar...</option>
            {field.options?.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </TextField>
        );
      default:
        return null;
    }
  };

  return (
    <Drawer
      anchor="right"
      open={open}
      onClose={onClose}
      PaperProps={{
        className: 'filter-drawer-paper'
      }}
    >
      <Box className="filter-drawer-container">
        <Typography variant="h6" className="filter-drawer-title">
          {title}
        </Typography>
        
        {fields.map((field) => (
          <Box key={field.id} className="filter-field-container">
            <Typography variant="subtitle2" className="filter-drawer-subtitle">
              {field.label}
            </Typography>
            {renderField(field)}
          </Box>
        ))}

        {rangeFields && rangeFields.length > 0 && (
          <Box className="filter-range-container">
            <Typography variant="h6" className="filter-range-title">
              RANGO
            </Typography>
            {rangeFields.map((range) => (
              <Box key={`${range.startId}-${range.endId}`} className="filter-range-field">
                <Typography variant="subtitle2" className="filter-range-field-label">
                  {range.startLabel}
                </Typography>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker
                    value={filters[range.startId] || null}
                    onChange={(newValue) => handleInputChange(range.startId, newValue)}
                    slotProps={{
                      textField: {
                        fullWidth: true,
                        margin: "normal",
                        size: "small",
                        placeholder: "DD/MM/AA",
                        variant: "outlined"
                      }
                    }}
                    format="DD/MM/YY"
                  />
                </LocalizationProvider>
                
                <Typography variant="subtitle2" className="filter-range-field-label">
                  {range.endLabel}
                </Typography>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker
                    value={filters[range.endId] || null}
                    onChange={(newValue) => handleInputChange(range.endId, newValue)}
                    slotProps={{
                      textField: {
                        fullWidth: true,
                        margin: "normal",
                        size: "small",
                        placeholder: "DD/MM/AA",
                        variant: "outlined"
                      }
                    }}
                    format="DD/MM/YY"
                  />
                </LocalizationProvider>
              </Box>
            ))}
          </Box>
        )}

        <Box className="filter-actions">
          <Button 
            variant="contained" 
            color="primary" 
            onClick={handleApplyFilters}
            className="filter-button"
            
          >
            Buscar
          </Button>
        </Box>
      </Box>
    </Drawer>
  );
};