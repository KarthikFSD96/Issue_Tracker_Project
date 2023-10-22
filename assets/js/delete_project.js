{
    // Method for deleting data using AJAX
    let deleteProject = function(deleteLink){
        $(deleteLink).click(function(e){
            e.preventDefault();
            // Use AJAX to control the function
            $.ajax({
                type: "get",
                url: $(deleteLink).prop('href'),
                success: function(data){
                    $(`#project-${data.data.project_id}`).remove();

                    // Show a notification
                    new Noty({
                        theme: "relax",
                        text: "Project Deleted",
                        type: "success",
                        layout: "topRight",
                        timeout: 1500
                    }).show();
                }, error: function(error){
                    console.log("Error", error);
                }
            })
        })
    }

    // Delete the data by calling the function
    $(document).ready(function(){
        $('.delete-link').each(function(){
            deleteProject(this);
        })
    })
}
