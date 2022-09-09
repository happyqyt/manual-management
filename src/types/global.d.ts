declare var $store: any;
declare var PAGECONF: any;

declare namespace GlobalType {
  interface DesignCompItemDataItem {
    id: number;
    cont: string;
  }
  export interface DesignCompItem {
    type: number;
    data: DesignCompItemDataItem[];
    classes: string[];
  }
}