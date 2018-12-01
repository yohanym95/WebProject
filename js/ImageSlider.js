	/*var imgcount =1;
    var total = 7; 
    function slide(x){
	var image = document.getElementById('imge');
	imgcount = imgcount +x;
	image.src = "img"+ imgcount + ".JPG"; 
 
} */ 
      
	 var images = ["img1.JPG","img2.JPG","img3.JPG","img4.JPG","img5.JPG","img6.JPG","img7.JPG"];
      var num=0;
     function next(){
	 
	  var slider = document.getElementById("imge");
	  num++;
	  if(num>=images.length){
	   num=0;
	  }
	  slider.src = images[num];
	 }
	  function prev(){
	 
	  var slider = document.getElementById("imge");
	  num--;
	  if(num<0){
	   num= images.length-1;
	  }
	  slider.src = images[num];
	 }