
function recordOutboundLink(link, category, action, opt_label) { 
try { 
var pageTracker=_gat._getTracker("UA-20670912-1");
pageTracker._trackEvent(category, action, opt_label);
setTimeout(window.open(link.href), 100);
}catch(err){} 
}