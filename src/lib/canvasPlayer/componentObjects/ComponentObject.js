//@ts-nocheck

// The itemData that i have used here allow me to use the same class (interface) with different data . itemData is the data and for each different data type i will have to write my own implementation of it.
export default class ComponentObject {

 constructor(itemData,fnList){
   
        this.itemData = itemData;
        this.fnList = fnList;
        this.handleObjects = [];
        this.loadHandles(); 
 }
 loadHandles(){} //child objects will use it
//****************************************************************** */

isVisible(currentTime){
   if(!this.itemData.itemExtra.showAt){
      // this.itemData.itemExtra.showAt = 0; //no need to edit data here this function is just for checking showAt
      return true;
   }else {
      if( currentTime >= this.itemData.itemExtra.showAt ){
         return true;
      }else {
         return false;
      }
   }
}
// eslint-disable-next-line no-unused-vars
draw(drawLib,currentTime){
   console.log("ComponentObject draw");
}
 update(mouseX, mouseY) {
   // debugger;
    for (let i = 0; i < this.handleObjects.length; i++) {
        const obj = this.handleObjects[i];
        obj.update(this.itemData, mouseX, mouseY);
    }
}

 drawHandles(ctx){
    for (let i = 0; i < this.handleObjects.length; i++) {
        const obj = this.handleObjects[i];
        obj.draw(ctx);
        
    }
 }

 deselect(){

    for (let i = 0; i < this.handleObjects.length; i++) {
        const handleObject = this.handleObjects[i];
            handleObject.deselect();
    }
 }
 selectHandlesIfHit(mouseX, mouseY){

    for (let i = 0; i < this.handleObjects.length; i++) {
        const handleObject = this.handleObjects[i];
        handleObject.selectIfHit(mouseX, mouseY);
    }

 }
 //comp object also has width height x,y for its on isHit
 width(){
    return this.itemData.itemExtra.width.initialValue;
 }
 height(){
    return this.itemData.itemExtra.height.initialValue;
 }
 getX(){
    return this.itemData.itemExtra.x.initialValue;
 }
 
 getY(){
    return this.itemData.itemExtra.y.initialValue;
 }

 isHit(mouseX , mouseY){

      return (
          mouseX  >= this.getX() &&
          mouseX  <= this.getX() + this.width() &&
          mouseY  >= this.getY() &&
          mouseY  <= this.getY() + this.height()
      );
  
 }

}//componentn class
