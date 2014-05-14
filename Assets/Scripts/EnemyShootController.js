#pragma strict
	
var projectile : Rigidbody;
var barrel : Transform;
var ship : Transform;

function Start () {
}

function Update () {		
	shoot();
}

function shoot()
{		//var pos = GameObject.Find("Main Camera").transform;
		barrel.transform.LookAt(ship);
		var clone : Rigidbody;
		clone = Instantiate(projectile, barrel.position , barrel.rotation);
			
			// Give the cloned object an initial velocity along the current 
			// object's Z axis
			//clone.velocity = transform.Translate(mousePos * 10);
		clone.AddForce(barrel.forward * 5000);
		Destroy(clone,3.0f);
}

function OnBecameInvisible()
{
	Destroy(this.gameObject);
}