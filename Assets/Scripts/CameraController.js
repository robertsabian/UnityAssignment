#pragma strict
function Start () {

}

function Update () {
	    //if(Input.GetKey(KeyCode.UpArrow))
       // transform.Translate(Vector3.forward * moveSpeed * Time.deltaTime);
         var rot = transform.rotation;
        if(Input.GetKey(KeyCode.LeftArrow)){   
       	//transform.rotation = rot * Quaternion.Euler(0, 0, 3); 
       	transform.rotation = Quaternion.Slerp(transform.rotation, Quaternion.Euler(0,0,15), Time.deltaTime * 3);		
        }
        
        if(Input.GetKey(KeyCode.RightArrow)){
        transform.rotation = Quaternion.Slerp(transform.rotation, Quaternion.Euler(0,0,-15), Time.deltaTime * 3);		
        }
        
        if(Input.GetKey(KeyCode.UpArrow)){   
       	//transform.rotation = rot * Quaternion.Euler(0, 0, 3); 
       	transform.rotation = Quaternion.Slerp(transform.rotation, Quaternion.Euler(-15,0,0), Time.deltaTime * 3);		
        }
        
        if(Input.GetKey(KeyCode.DownArrow)){
        transform.rotation = Quaternion.Slerp(transform.rotation, Quaternion.Euler(15,0,0), Time.deltaTime * 3);		
        }
        
	       
}
