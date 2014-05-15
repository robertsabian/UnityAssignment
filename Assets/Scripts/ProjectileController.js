#pragma strict

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
          GameObject.Find("human_warship").GetComponent(PatternControler).score += 10f;
    }
}