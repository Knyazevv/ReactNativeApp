class Place {
    constructor(title, imageUrl, address, loaction){
        this.id = new Date().toString() + Math.random().toString();
        this.title = title;
        this.imageUrl = imageUrl;
        this.address =address;
        this.loaction = loaction;
    }
}