function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6DmLY4bhkke":
        Script1();
        break;
  }
}

function Script1()
{
  var player = GetPlayer();
var x = player.GetVar("rfinal");
var prom = (x*10)/60
player.SetVar("prom",prom);
}

