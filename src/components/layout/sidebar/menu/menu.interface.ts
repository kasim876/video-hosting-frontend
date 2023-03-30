import {IconType} from 'react-icons';

export interface IMenu {
  title: string;
  list: IMenuItem[];
}

export interface IMenuItem {
  link: string;
  title: string;
  icon?: IconType;
  image?: string;
}
