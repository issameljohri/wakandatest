
  
    
    var url = 'http://rest.learncode.academy/api/issam/friends/57600d0c1fd5200100cadfc1',
        data = {name: 'tarik', age: 30},
        res = null,
        client = new XMLHttpRequest();
    var myBlob = new Blob( ["This is my blob content"], {type : "text/plain"} );
    client.open('PUT', url); 
    client.send(myBlob);
    
    var state = client.readyState;
    if(state == 4){
        res = client.status;
        console.log('Friend Updated Successfully!');
    }    
    res;




