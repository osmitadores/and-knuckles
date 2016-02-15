
$(document).ready(
    function () {
        var hash = $_GET();
        var memberID = hash["{{ links.scouts }}"];
        if(memberID !== undefined){
            selectMember(memberID);
        }else if("{{ links.badges }}" in hash){
            var atual = document.querySelector('.active.nav-bar');
            $(atual).removeClass('active');
            $('.nav-bar.show-badges').addClass('active');
            selectBoard('badge', 'scout');
        }
    }
);

$('.select-member').click(
    function (clickE) {
        var memberID = this.getAttribute('member');
        selectMember(memberID);
    }
);

$('.nav-bar').click(
    function (clickE) {
        var atual = document.querySelector('.active.nav-bar');
        $(atual).removeClass('active');
        $(this).addClass('active');
        selectBoard(this.getAttribute('data-rel'), atual.getAttribute('data-rel'));
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

function selectBoard(_board, _hide){
    hideBoard(_hide);
    showBoard(_board);
}

function showBoard(_board){
    if(_board == 'scout'){
        $('.board').show();
    }
    $('#'+_board+'-board').removeClass('hide-board');
}

function hideBoard(_board) {
    $('#'+_board+'-board').addClass('hide-board');
}
