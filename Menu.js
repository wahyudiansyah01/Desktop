function Menu (parent,name){
this.parent = parent;
this.name = name;
this.child = [];
this.show = function(){
$("."+this.name).css("display","grid");
console.log("."+this.name+" show");
//child
if(this.child.length == 0){
$("#topbrand"+parent.name).css("display","block");
}
if(this.child.length > 0){
var i = 0;
do {
    $("."+this.child[i].name).css("display","grid");
    console.log("."+this.child[i].name+" show");
    i++;
}
while (i < this.child.length);
}
if(parent){
    //parent
parent.show();
//sibling
if(parent.child.length > 0){
var i = 0;
do {
    $("."+parent.child[i].name).css("display","grid");
    i++;
}
while (i < parent.child.length);
}
}

};
this.hide = function(){
console.log("."+this.name+" hide");
$("."+this.name).css("display","none");
if(this.child.length > 0){
var i = 0;
do {
    this.child[i].hide();
    i++;
}
while (i < this.child.length);
}
};
if (parent){parent.child.push(this);}

}