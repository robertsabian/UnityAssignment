#pragma strict

public var moveSpeed : float = 10f;

function Start () {

}

function Update () {
transform.Translate(Vector3.back * moveSpeed * Time.deltaTime);
}