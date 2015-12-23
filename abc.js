function Menu (parent,name,link){
this.parent = parent;
this.name = name;
this.link = link;
this.child = [];
this.mark = 0;
//tambahkan object ini ke parent
if (parent){parent.child.push(this);}

this.show = function(){

    if(this.parent){
	this.mark = 1;
	parent.show();
    }
    else{
        this.expand();
    }
};

this.expand = function(padding){
    if(!padding){
        padding = 8;
    }
    var i = 0;
    do {
            this.child[i].collapse(padding);
            if(this.child[i].mark == 1){
                if(this.child[i].child.length > 0){ this.child[i].expand(padding+40)}
            }
            i++;
        }
    while (i < this.child.length);
    
};

this.collapse = function(padding){
console.log("show "+this.name);
$("#foto").append("<tr><td style='padding-left: "+padding+"px;'><a href='"+this.link+"'>"+this.name+"</></td></tr>");
};

this.hide = function(){

};
}