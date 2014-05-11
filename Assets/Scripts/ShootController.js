#pragma strict

var projectile : Rigidbody;
var barrel : Transform;
var crosshair :Transform;

function Start () {
	Screen.showCursor = false;
}

function Update () {
	
if (Input.GetMouseButtonDown(0))
	{
		transform.LookAt(crosshair);
	
		var clone : Rigidbody;
		clone = Instantiate(projectile, barrel.position , barrel.rotation);
		
		// Give the cloned object an initial velocity along the current 
		// object's Z axis
		//clone.velocity = transform.Translate(mousePos * 10);
	
        clone.AddForce(barrel.forward * 5000);
	}
}