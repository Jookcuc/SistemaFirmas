

export interface ColumnDefinition {
    key: string;
    label: string;
    width?: string;
  }

  
export interface ActionDefinition {
    label: string;
    onClick: (row: any) => void;
    variant?: 'contained' | 'outlined' | 'text' | undefined; 
  }
  
export interface GenericTableProps {
    columns: ColumnDefinition[];
    rows: any[];
    actions?: ActionDefinition[];
    title?: string;
  }

 
  
