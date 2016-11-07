   //Document Ready
   $(function() 
   {
      firstTwo_API_IsUserLoggedIn(function(retData)
      {
         //console.log("firstTwo_API_IsUserLoggedIn RETURN");
         //console.log(retData);
         if (retData.loggedIn === "true")
         {
            $('#navbar-nav-list-home').hide();
            $('#navbar-nav-list-mission').hide();
            $('#navbar-nav-list-product').hide();
            //$('#navbar-nav-list-pricing').hide();
            $('#navbar-nav-list-signup').html("Return To FirstTwo");
            $('#navbar-nav-list-signup').attr("href", "/home")
            $('#navbar-nav-list-login').html("Sign Out");
            $('#navbar-nav-list-login').attr("href", "/logout")
            $('#button-action-signupfree').html("Return To FirstTwo");
            $('#button-action-signupfree').attr("href", "/home")
         }
      });
   });
   
  /**
   * FirstTwoDataAPI firstTwo_API_IsUserLoggedIn
   */
  function firstTwo_API_IsUserLoggedIn(callback)
  {
     $.ajax(
     {
         url: 'service/admin/user',
         type: "GET",
         data : '',
         success:function(data, textStatus, jqXHR) 
         {    
            callback(data);
         },
         error: function(jqXHR, textStatus, errorThrown) 
         {
         }
     });
  } //firstTwo_API_IsUserLoggedIn 
   
