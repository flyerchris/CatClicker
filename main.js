var model={
	catlis:[],//cat collection
	opcat:-1,//the cat you are counting click time now
	catnum:0,//total cat you have
	addCatList:function(cn,src){
			var nc={name:cn,img:src,ctime:0};//cat name,cat image URL,click time
			this.catlis.push(nc);
			this.catnum++;
		}
}

var view={
	addList:function(tname){
		var nli=document.createElement('li');
		nli.innerHTML=tname;
		var cn=control.getCatNum();
		nli.addEventListener("click",(function(n){
			return function(){
				view.changeCat(n);
			};
		})(cn));
		document.getElementById('clist').appendChild(nli);
	},
	changeCat:function(n){
		var selcat=control.getCat(n);
		document.getElementById('cimg').src=selcat.img;
		document.getElementById('name').innerHTML=selcat.name;
		document.getElementById('ctime').innerHTML="Click time: "+selcat.ctime;
		control.setCat(n);
	},
	init:function(){
		var cimg=document.getElementById('cimg');
		cimg.addEventListener("click",function(){
			control.addCtime();
		});
		this.changeCat(0);
	}
}

var control={
	getCatNum:function(){
		return model.catnum;
	},
	getCat:function(n){
		return model.catlis[n];
	},
	setCat:function(n){
		model.opcat=n;
	},
	addCat:function(cn,src){
		view.addList(cn);
		model.addCatList(cn,src);
	},
	addCtime:function(){
		var opcat=model.opcat;
		model.catlis[opcat].ctime++;
		document.getElementById('ctime').innerHTML="Click time: "+model.catlis[opcat].ctime;
	},
	init:function(){
		this.addCat("normal cat","img/cat.jpg");
		this.addCat("angry cat","img/c2.jpg");
		this.addCat("lover cat","img/c3.jpg");
		this.addCat("shy cat","img/c4.jpg");
		view.init();
	}
}

window.onload=function(){
	control.init();
}