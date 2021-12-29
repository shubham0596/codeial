
function deleteAllChecked() {
    console.log("shubham")
    var checks = document.querySelectorAll('#' + 'showentries' + ' input[type="checkbox"]');

    for (var i = 0; i < checks.length; i++) {
        var check = checks[i];
        if (check.checked) {
            var id = check.value;

            //console.log(check.value
            fetch('/users/delete-task?id=' + id).then(()=>{
                window.location.href='/users/profile'

            }
            
            )

        }

    }
}
