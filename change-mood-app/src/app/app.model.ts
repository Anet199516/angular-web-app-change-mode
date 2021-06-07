import {TableTypes} from './types/table-types';

export interface ILogin {
  userName: string;
  uid: string;
  isLoginFailed?: boolean;
  errorMessage?: string;
}

export interface ICities {
  cities: any[];
}

export interface ITable {
  items: TableTypes[];
  selectedRow: TableTypes;
  errorMessage?: string;
  changedProperties: ModifiedProperties[];
}

export interface ModifiedProperties {
  id: string;
  fields: {[key: string]: string};
}
