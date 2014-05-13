#pragma strict
	
var projectile : Rigidbody;
var barrel : Transform;

public var moveSpeed : float = 10f;

function Start () {
}

function Update () {

	transform.Translate(Vector3.back * moveSpeed * Time.deltaTime);		
}

function OnBecameInvisible()
{
	Destroy(this.gameObject);
}