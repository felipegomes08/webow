export interface CustomTabsProps {
  listTabs: ListTabsProps[];
  mainRoute: string;
}

export interface ListTabsProps {
  value: string;
  label: string;
  children?: React.ReactNode;
}
