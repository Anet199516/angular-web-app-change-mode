// tslint:disable-next-line:interface-name
export interface TableTypes {
  name: string;
  description: IEntitiesData[];
  percentage: string;
  dateCreated: string;
  createdBy: string;
  lastUpdatedBy: string;
  visible: string;
  modeIcon: IModeIcon[];
  id: string;
}

export interface IModeIcon {
  name: string;
  checked: boolean;
}

export interface IEntitiesData {
  name: string;
  images: [
    {device: string, thumb: string},
  ];
}
