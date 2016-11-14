
module.exports = {

    getCall : function(_url) {
     var token =  "JWT "+localStorage.getItem('roadshow_token')
        var result = $.ajax({
        type: "GET",
        url: _url,
        headers: { 'Authorization': token },
        contentType : 'application/json'
        })
        return result;
    },

    postCall : function(_url, data) {
    var token =  "JWT "+localStorage.getItem('roadshow_token')
     var result = $.ajax({
            type: "POST",
            url: _url,
            data: JSON.stringify(data),
            contentType : 'application/json',
            headers: { 'Authorization': token }
        });
    return result
    },

    putCall : function(_url, data) {
    var token =  "JWT "+localStorage.getItem('roadshow_token')
     var result = $.ajax({
            type: "PUT",
            url: _url,
            data: JSON.stringify(data),
            contentType : 'application/json',
            headers: { 'Authorization': token }
        });
    return result
    },

    deleteCall : function(_url) {
    var token =  "JWT "+localStorage.getItem('roadshow_token')
     var result = $.ajax({
            type: "DELETE",
            url: _url,
            contentType : 'application/json',
            headers: { 'Authorization': token }
        });
    return result
    },

    login : function(_url, data) {
         var result = $.ajax({
            type: "POST",
            url: _url,
            data: JSON.stringify(data),
            contentType : 'application/json',
            dataType: "json"
        })
        return result;
    },

    getToken : function() {
        return localStorage.getItem('roadshow_token');
    },

    logout : function() {
        localStorage.removeItem('roadshow_token');
        localStorage.removeItem('/g60up_$1');
    },

    loggedIn : function() {
         return !!localStorage.getItem('roadshow_token');
    },

    isAuthorisedToAdd : function() {
         var user = JSON.parse(localStorage.getItem('/g60up_$1'));
         var style;
         if(!user.user_group.includes(1)) {
           style = {
             visibility: 'hidden',display:'none'
            };
        }
        return style
    },

    closeModal : function(id) {
        $('#'+id).on('hidden.bs.modal', function () {
            $(this).find("input,textarea,select").val('').end();
        });
    }
}
