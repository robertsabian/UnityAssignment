#pragma strict
	
var projectile : Rigidbody;
var barrel : Transform;
function Start () {
}

function Update () {		
	shoot();
}

function shoot()
{
		barrel.transform.LookAt(GameObject.Find("Main Camera").transform);
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