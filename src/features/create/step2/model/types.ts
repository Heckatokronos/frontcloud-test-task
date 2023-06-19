export interface Advantage {
  id: string;
  text: string;
}

export interface Checkbox {
  id: string;
  name: string;
  label: string;
  checked?: boolean;
}

export interface Radio {
  id: string;
  name: string;
  label: string;
  value: string;
}
