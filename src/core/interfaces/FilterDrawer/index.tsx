export interface FilterField {
  id: string;
  label: string;
  type: 'text' | 'date' | 'select';
  placeholder?: string;
  options?: Array<{ value: string; label: string }>;
}

export interface RangeField {
  startId: string;
  endId: string;
  startLabel: string;
  endLabel: string;
}

export interface FilterDrawerProps {
  open: boolean;
  onClose: () => void;
  title: string;
  fields: FilterField[];
  rangeFields?: RangeField[];
  initialData: any[];
  onFilteredDataChange: (filteredData: any[]) => void;
  filterFunctions: {
    [key: string]: (item: any, filterValue: any) => boolean;
  };
}