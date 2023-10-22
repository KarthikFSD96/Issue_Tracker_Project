// Method for deleting issue data using AJAX
{
    let deleteIssue = function (deleteLink) {
        // Use AJAX to control the function
        $.ajax({
            type: "get",
            url: $(deleteLink).prop('href'),
            success: function (data) {
                $(deleteLink).closest('.card').remove();

                // Show a notification
                new Noty({
                    theme: "relax",
                    text: data.message,
                    type: "success",
                    layout: "topRight",
                    timeout: 1500
                }).show();

            }, error: function (error) {
                console.log("Error", error);
            }
        })
    }

    // Delete the data by calling the function on click
    $(document).ready(function () {
        $('.delete-link-issue').click(function (e) {
            e.preventDefault();
            deleteIssue(this);
        });
    });
}
