// Prevents the absense of the console object from throwing errors on dumb browsers that dont have one.
if(!window['console']) { window.console = { log:function(){} } };
