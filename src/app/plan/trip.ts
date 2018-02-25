

  export class Trip {
    constructor(
      public source :string ,
      public destin: string,
      public fromdate: string,
      public todate: string,
      public lone:boolean,
      public group:boolean
    ) {  }
  }