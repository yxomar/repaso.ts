export class Mobile{
    private name :string
    private trademark :string
    private model :string
    private color :string
    private price :number
    constructor(name:string, trademark:string, model:string, color:string, price:number){
      this.name = name;
      this.trademark = trademark;
      this.model = model;
      this.color = color;
      this.price = price;
    }
     getName(){
       return this.name
    }
     setName(newName:string):void{
        this.name = newName
    }
     printName():string{
        return this.name
    }
     getTrademark():string{
      return this.trademark
    }
     setTrademark(newTrademark:string):void{
        this.trademark = newTrademark
    }
     printTrademark(){
        return this.trademark
    }
     getModel():string{
       return this.model
    }
     setModel(newModel:string):void{
       this.model = newModel
    }
     printModel(){
        return this.model
    }
     getColor():string{
        return this.color
    }
     setColor(newColor:string):void{
        this.color = newColor
    }
     printColor(){
        return this.color
    }
     getPrice(){
        return this.price
    }
     setPrice(newPrice:number):void{
        this.price = newPrice
    }
     printPrice(){
        return this.price
    }
    public printClass():string{
        return`
        The characteritics of the mobile name are:
                Name: ${this.name},
                Trademark: ${this.trademark},
                Model: ${this.model},
                Color: ${this.color},
                Price: ${this.price}`
    }
}