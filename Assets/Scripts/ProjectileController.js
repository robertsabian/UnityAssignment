#pragma strict

public var scoreHandler : ScoreScript;

function Start () {
	GameObject.Destroy(this.gameObject, 1);
}

function Update () {

}

function OnTriggerEnter(other: Collider)
{
    if (other.tag == "Enemy")
    {
          GameObject.Destroy(this.gameObject);
          GameObject.Destroy(other.gameObject);
          scoreHandler.UpdateScore(10.0f);
    }
}