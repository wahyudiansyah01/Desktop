function Menu (parent,nodes){
this.parent = parent;
this.node = nodes;
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

this.expand = function(){
    
    var i = 0;
    do {
            this.child[i].collapse();
            if(this.child[i].mark == 1){
                if(this.child[i].child.length > 0){ this.child[i].expand()}
            }
            i++;
        }
    while (i < this.child.length);
    
};

this.collapse = function(){
this.node.classList.remove("hidden");
};
}