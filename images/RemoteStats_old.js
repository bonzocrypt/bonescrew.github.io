  function SetRemoteStats(targetPage,tableName)
  {
    if(!getCookie("sessionID"))
    {
    	var dateObj = new Date()
    	var sid = dateObj.getTime();
  	setCookie("sessionID", sid);
    }	
  
    if(!getCookie(targetPage))
    {
    	document.write('<img border="0" height="1" width="1" src="http://h000102296078.ne.client2.attbi.com/remotestats/basic.asp?TargetPage=' + targetPage + '&TableName=' + tableName + '&SessionID=' + getCookie("sessionID") + '&HTTP_REFERER=' + escape(document.referrer) + '"');
  	setCookie(targetPage, "1");
    }
  }

  function getCookie(name) {
      var prefix = name + "="
      var cookieStartIndex = document.cookie.indexOf(prefix)
      if (cookieStartIndex == -1)
         return null
      var cookieEndIndex = document.cookie.indexOf(";", cookieStartIndex +
         prefix.length)
      if (cookieEndIndex == -1)
         cookieEndIndex = document.cookie.length
      return unescape(document.cookie.substring(cookieStartIndex +
         prefix.length,
   cookieEndIndex))
   }
   
   function setCookie(name, value) {
      var curCookie = name + "=" + escape(value)
      if ((name + "=" + escape(value)).length <= 4000)
         document.cookie = curCookie
      else
         if (confirm("Cookie exceeds 4KB and will be cut!"))
            document.cookie = curCookie
   }