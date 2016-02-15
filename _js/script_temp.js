var memberID = $_GET()["{{ links.scouts }}"];

$(document).ready(
    function () {
        if(memberID !== undefined){
            selectMember(memberID);
        }
    }
);

$('.select-member').click(
    function (clickE) {
        var memberID = this.getAttribute('member');
        selectMember(memberID);
    }
);

function selectMember(_id) {
    $('.board').hide(0,
        function () {
            showMember(_id);
        }
    );
}

function showMember(_id){
    $('.board-member-'+_id).show();
}
