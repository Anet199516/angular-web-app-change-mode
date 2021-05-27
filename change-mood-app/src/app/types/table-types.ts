// tslint:disable-next-line:interface-name
export interface TableTypes {
  name: string;
  children: ISmartImages[];
  percentage: string;
  dateCreated: string;
  createdBy: string;
  lastUpdatedBy: string;
  visible: string;
  modeIcon: IModeIcon[];
}

export interface IModeIcon {
  name: string;
  checked: boolean;
}

export interface ISmartImages {
  bannerName: string;
  images: [
    {pc: string},
    {tablet: string},
    {mobile: string},
  ];
}
