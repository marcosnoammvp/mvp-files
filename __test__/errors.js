class ModelError extends Error {
    constructor(message,name){
    super(message);
    this.name = name;
    }
}
class ViewError extends Error {
    constructor(message,name){
    super(message);
    this.name = name;
    }
}
class ControllerError extends Error {
    constructor(message,name){
    super(message);
    this.name = name;
    }
}