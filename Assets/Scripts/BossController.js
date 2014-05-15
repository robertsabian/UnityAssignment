#pragma strict

public var projectile : Rigidbody;
public var barrel : Transform;

function Start () {
	shoot();
}

function Update () {

}

function shoot()
{		//var pos = GameObject.Find("Main Camera").transform;
		//barrel.transform.LookAt(ship);
		
		 while(true)
    {
		var clone : Rigidbody;
		clone = Instantiate(projectile, barrel.position , barrel.rotation);
			
			// Give the cloned object an initial velocity along the current 
			// object's Z axis
			clone.AddForce(clone.transform.forward * -5000);
		//clone.AddForce(barrel.forward * 5000);
		Destroy(clone.gameObject,3.0f);
		yield WaitForSeconds(1f);
    }
}