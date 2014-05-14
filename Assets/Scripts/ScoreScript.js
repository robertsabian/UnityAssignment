#pragma strict

public var score :float =  0.0f;
public var ammount : float = 0.0f;

function Start () {

}

function Update () {

}

function UpdateScore(ammount:float)
{
	score = score + ammount;
}

function OnGUI()
{	
	GUI.Label(Rect(620,10,Screen.width,Screen.height),"Score: " + score + "");
}