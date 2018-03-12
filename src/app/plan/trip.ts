

  export class Trip {
    constructor(
      public id:number,
      public source :string ,
      public destination: string,
      public fromdate: string,
      public todate: string,
      public lone:boolean,
      public group:boolean
    ) {  }
  }