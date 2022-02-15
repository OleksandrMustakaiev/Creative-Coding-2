class dataObject {
    constructor(_title, _num, _price){
        this.name = _title;
        this.total = _num;
        this.price = _price;

        this.totalPrice = calculateTotal();
    }

    calculateTotal(){
        this.totalPrice = this.total * this.price
        return this.total
    }
}
