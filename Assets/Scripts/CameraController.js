#pragma strict

private var m_MaxAngle :float = 25.0f;
private var m_Angle:float = 0.0f;
private var m_SmoothValue:float = 3.0f;

function Start () {

}

function Update () {
	    //if(Input.GetKey(KeyCode.UpArrow))
       // transform.Translate(Vector3.forward * moveSpeed * Time.deltaTime);
         var rot = transform.rotation;
        if(Input.GetKey(KeyCode.LeftArrow)){   
       	//transform.rotation = rot * Quaternion.Euler(0, 0, 3); 
       	transform.rotation = Quaternion.Slerp(transform.rotation, Quaternion.Euler(0,0,15), Time.deltaTime * 7);		
        }
        
        if(Input.GetKey(KeyCode.RightArrow)){
        transform.rotation = Quaternion.Slerp(transform.rotation, Quaternion.Euler(0,0,-15), Time.deltaTime * 7);		
        }
        
	       
}
