// $(document).ready(function() {
//     $("#showPassword").click(function() {
//         var passwordInput = $("#password");
//         var fieldType = passwordInput.attr("type");
        
//         if (fieldType === "password") {
//             passwordInput.attr("type", "text");
//             $(this).text("Hide");
//         } else {
//             passwordInput.attr("type", "password");
//             $(this).text("Show");
//         }
//     });

//     $("#loginForm").submit(function(e) {
//         e.preventDefault();
//         // Perform login authentication
//         alert("Login form submitted!");
//     });
// });
$(document).ready(function() {
    $("#showPassword").click(function() {
        var passwordInput = $("#password");
        var fieldType = passwordInput.attr("type");
        
        if (fieldType === "password") {
            passwordInput.attr("type", "text");
            $(this).text("Hide");
        } else {
            passwordInput.attr("type", "password");
            $(this).text("Show");
        }
    });

    $("#loginForm").submit(function(e) {
        e.preventDefault();
        var formData = $(this).serialize();
        $.post("authenticate.php", formData, function(response) {
            alert(response); // Alert response from PHP
            if(response.trim() === "success") {
                window.location.href = "dashboard.html";
            } else {
                alert("Invalid username or password.");
            }
        });
    });
});
