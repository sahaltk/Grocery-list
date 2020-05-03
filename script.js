 
function getdata(){

var xhttp = new XMLHttpRequest();

xhttp.onreadystatechange = function(){
    if(this.readyState==4&&this.status==200){
        var output =JSON.parse(this.responseText);
        var datalist = '';
        var headname= '';
    for(var i = 0; i < output.length; i++) {
        datalist += '<tr>';
        datalist += '<td >' + output[i].SLNo + '</td>';
        datalist += '<td >' + output[i].Name + '</td>';
        datalist += '<td >' + output[i].Quantity + '</td>';
        datalist += '<td >' + output[i].Unit + '</td>';
        datalist += '<td >' + output[i].Department+ '</td>';
        datalist += '<td >' + output[i].Note+ '</td>';
        datalist += '</tr>';
    }
    
      headname += '<tr>';
      headname += '<th >Sn</th>';
      headname += '<th >Name</th>';
      headname += '<th >Quantity</th>';
      headname += '<th >Unit</th>';
      headname += '<th >Department</th>';
      headname += '<th >Note</th>';
      headname += '</tr>';

    document.querySelector('.datalist thead').innerHTML = headname; 
    document.querySelector('.datalist tbody').innerHTML = datalist;      
    }
}

xhttp.open("GET","data.json",true);
xhttp.send();

}