#pragma strict

function Start () {

}

function Update () {

}

function OnGUI () {
	if (GUI.Button (Rect (290,309,220,60), "")) {
		Application.LoadLevel("Game");
	}
	if (GUI.Button (Rect (290,392,220,58), "")) {
		 Application.Quit();
	}
}