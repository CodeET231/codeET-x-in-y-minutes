function insert(num){
    document.form.screen.value=document.form.screen.value+num;
}
function equal(){
    var result=document.form.screen.value;
    if(result)
    document.form.screen.value=eval(result);
}
function clean(){
    document.form.screen.value="";
}
function del(){
    var del=document.form.screen.value; document.form.screen.value=del.substring(0,del.length-1);
}
