#pragma strict

function Start () {

}

function Update () {

}

function OnGUI () {
	if (GUI.Button (Rect (300,228,228,70), "")) {
		Application.LoadLevel("Game");
	}
	if (GUI.Button (Rect (302,480,224,60), "")) {
		 Application.Quit();
	}
}