function watchForm() {
    let generalForm = document.getElementById('formComment');
    let addCommentButton = document.getElementById('submit');
    let deleteCommentButton = document.getElementById('deleteButton');
    let commentSection = document.querySelector('.seccionComments');
    let userNameInput = document.getElementById('userNameInput');
    let commentInput = document.getElementById('userComment');

    console.log(commentSection);
    //console.log(addCommentButton);
    addCommentButton.addEventListener('click', (event) => {
        event.preventDefault();
        
        if (userNameInput.innerText != '' && commentInput != '') {
            commentSection.innerHTML +=
                `<div>
                    <h2> ${userNameInput.innerText} </h2>
                    <input type=submit value="Delete" id="deleteButton"\>
                    <div> ${commentInput.innerText} </div>
                </div>
                `;
        }     
        
    });

    deleteCommentButton.addEventListener('click', (event) => {
        //Delete the comment
    });


};






watchForm();