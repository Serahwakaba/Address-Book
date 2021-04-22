function contact(first, last, email, phone,location) {
    this.first = first;
    this.last = last;
    this.email = email;
    this.location =[]
}
function Location(street, city, county){
    this.street = street;
     this.city = city;
     this.state = state;
}
contact.prototype.fullName = function(){
    return this.first + " " + this.last;
}

Location.prototype.address = function(){
    return this.street + "," + this.city + "," +this.state;
}