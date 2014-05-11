#pragma strict
	
var projectile : Rigidbody;
var barrel : Transform;
var ship : Transform;

public var moveSpeed : float = 10f;

function Start () {
	
}

function Update () {
	transform.Translate(Vector3.back * moveSpeed * Time.deltaTime);

	
			//transform.LookAt(ship);
		
			var clone : Rigidbody;
			clone = Instantiate(projectile, barrel.position , barrel.rotation);
			
			// Give the cloned object an initial velocity along the current 
			// object's Z axis
			//clone.velocity = transform.Translate(mousePos * 10);
		
	        clone.AddForce(barrel.forward * 5000);

}



function OnBecameInvisible()
{
	Destroy(this.gameObject);
}