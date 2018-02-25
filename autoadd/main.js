var countOfPagesScrolled = 10;

function scrollDown(height, countOfPagesScrolled){
    scroll(0, document.body.clientHeight);
    setTimeout(function(){
        if(height != document.body.clientHeight && countOfPagesScrolled > 0){
            scrollDown(document.body.clientHeight, --countOfPagesScrollled);
        }else{
            return sendRequest();
        }
    }, 1500);
}

function sendRequest(){
    var contactsNum = 0;
    jQuery.each($('.buttton-secondary-small'), function(){
        contactsNum++;
        $(this).click();
        console.log($(this).attr('title') + ' ' + contactsSum);
    });
    console.log('Baru aja nambahin koneksi sebanyak:' + contactsNum);
}

scrollDown(document.body.clientHeight, countOfPagesScrolled);