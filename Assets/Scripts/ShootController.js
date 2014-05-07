#pragma strict

var projectile : Rigidbody;
var barrel : Rigidbody;

function Start () {

}

function Update () {
	
	//if I click the left mouse button once
	if (Input.GetMouseButtonDown(0))
	{
		var mousePos = Input.mousePosition;
		
		//create a virtual 'plane' 10 further in from the camera
		mousePos.z = 10;
		
		//translate from pixels to world coordinates 
		var point = Camera.main.ScreenToWorldPoint(mousePos);
		
		//set the position of the cursor
		transform.position = barrel.position;
		//transform.position.x = 0;
		//transform.position.y = 0;
		//transform.position.z = 0.72824420;
		
		
	
		// Instantiate the projectile at the position and rotation of this transform
			var clone : Rigidbody;
			clone = Instantiate(projectile, transform.position , transform.rotation);
			
			// Give the cloned object an initial velocity along the current 
			// object's Z axis
			clone.velocity = transform.TransformDirection (mousePos * 10);
	}
}