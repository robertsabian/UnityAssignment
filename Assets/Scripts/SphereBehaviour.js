#pragma strict

public var moveSpeed : float = 10f;

function Start () {
}

function Update () {
transform.Translate(Vector3.back * moveSpeed * 1.5 * Time.deltaTime);
}

