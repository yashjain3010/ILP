class Car{
    constructor(name){
        this.brand = name;
    }

    method1(){
        return "I have a " + this.brand;
    }
}

class name extends Car{
    constructor(name,model){
        super(name);
        this.mod = model;
    }

    method2(){
        return this.method1() + " i have model " + this.mod;
    }
}

const car1 = new Car("Ford","Mustang");
method2.car1();