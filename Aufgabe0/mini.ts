function Eingabefeld(): void {
  var eingabe: string = prompt("Hey, wie heißt du?", "");
  if (eingabe != null) {
    document.getElementById("Type").innerHTML =
      "cooler Name, " + eingabe + ". vielleicht nenne ich mein Kind auch mal so.";
  }
}