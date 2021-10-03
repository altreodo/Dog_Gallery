function om(data){
    if(data.message.length!=0){
        $('#kli').remove();
        var sp='<div id="kli"><p>Dog Sub-breed</p> <select  id="br" name="dogs" >';
            for(let g=0;g<data.message.length;g++){
                sp+='<option value="'+data.message[g]+'">'+data.message[g]+'</option>';
            }
            $('#in').append(sp);
            $('#kli').append("</div>")
    }else{
        $('#kli').remove();
    }
}
function dom(){
   var op=$('#breed').val();
   $.ajax({
     url:'https://dog.ceo/api/breed/'+op+'/list',
     method:'GET',
     success:om
 })
}
function display(data){
    console.log(data.message);
    for(let y=0;y<data.message.length;y++){
    var sp='<img src="'+data.message[y]+'">';
    $('#out').append(sp);
    }
}
function show(){
$('#out').remove();
$('body').append(' <div id="out"></div>');
 var val=$('#breed').val();
 var k=$('#br').val();
 console.log(k);
 if(k==undefined){
 $.ajax({
  url:'https://dog.ceo/api/breed/'+val+'/images',
  method:'GET',
  success:display
 });
}else{
    $.ajax({
  url:'https://dog.ceo/api/breed/'+val+'/'+k+'/images',
  method:'GET',
  success:display
 });
}
}