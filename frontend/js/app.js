// app.js
// dashboard.cccouncilpublicwebsite.tk

$(document).ready(function(){
  refreshStatCounts();
});

var get_stats_endpoint = "https://s0h0atnj44.execute-api.ap-southeast-2.amazonaws.com/dev/stats/"

function setStats(statName, statValue) {
  // Get div containing stat count and set the new statValue
  document.getElementsByClassName(statName)[0].innerHTML = statValue;
}

async function refreshStatCounts() {  
  // Get the stat counts
  const response = await fetch(get_stats_endpoint);
  const stats = await response.json();
  // Iterate over all three featured stats and update the values
  var i;
  for (i = 0; i < stats.length; i++){
    var tracked_stats = ["deaths", "accidents", "injuries"];
    var stat = stats[i]
    if (tracked_stats.includes(stat["statName"])){
      setStats(stat["statName"], stat["statValue"])
    }
  }
}