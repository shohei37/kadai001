


$(function(){
    $('.select').hide();  
  });

  $(function(){
    
    $('.action').on('click',function(){
    $('.action-select').hide();
    $('.'+$(this).attr('id')).show();
    });
  });

$('#musicPlay').click(function(){
  $('#audio').get(0).play();
});



// (a)上腕二頭筋ラリアットのアクション

$(".a").on("click",function(){

    const random= Math.floor(Math.random()*3);
    console.log(random,"ランダム数字");
    
    if (random === 0){
        console.log("マッチョ修羅のショベルカーのようだ上腕二頭筋で反撃を受けた、マッスル児玉は敗北した");
        $("h1").text("マッチョ修羅のショベルカーのようだ上腕二頭筋で反撃を受けた、マッスル児玉は敗北した");
        $(".player-pic").fadeOut('slow');

    } else if (random === 1){
        console.log("マッチョ阿修羅の胸筋に弾かれた、ダメージが無いようだ");
        $("h1").text("マッチョ阿修羅の胸筋に弾かれた、ダメージが無いようだ");


    } else if (random === 2){
        console.log("マッチョ阿修羅のチキンレッグに炸裂した！効果は抜群。マッチョ阿修羅は倒れた");
        $("h1").text("マッチョ阿修羅のチキンレッグに炸裂した！効果は抜群。マッチョ阿修羅は倒れた");
        $(".enemy-pic").fadeOut('slow');

    } else if (random === 3){
        console.log("マッチョ阿修羅の肩にヒットした！少し痛そうにしている");
        $("h1").text("マッチョ阿修羅の肩にヒットした！少し痛そうにしている");
    } 
    });

// (B)僧帽筋プレスのアクション

$(".b").on("click",function(){

    const random= Math.floor(Math.random()*3);
    console.log(random,"ランダム数字");
    
    if (random === 0){
        console.log("マッチョ修羅のショベルカーのようだ上腕二頭筋で反撃を受けた、マッスル児玉は敗北した");
        $("h1").text("マッチョ修羅のショベルカーのようだ上腕二頭筋で反撃を受けた、マッスル児玉は敗北した");
        $(".player-pic").fadeOut('slow');

    } else if (random === 1){
        console.log("マッチョ阿修羅の胸筋に弾かれた、ダメージが無いようだ");
        $("h1").text("マッチョ阿修羅の胸筋に弾かれた、ダメージが無いようだ");


    } else if (random === 2){
        console.log("マッチョ阿修羅のチキンレッグに炸裂した！効果は抜群。マッチョ阿修羅は倒れた");
        $("h1").text("マッチョ阿修羅のチキンレッグに炸裂した！効果は抜群。マッチョ阿修羅は倒れた");
        $(".enemy-pic").fadeOut('slow');

    } else if (random === 3){
        console.log("マッチョ阿修羅の肩にヒットした！少し痛そうにしている");
        $("h1").text("マッチョ阿修羅の肩にヒットした！少し痛そうにしている");
    } 
    });
    
// 選択肢Cのアクション

$(".c").on("click",function(){

    const random= Math.floor(Math.random()*3);
    console.log(random,"ランダム数字");
    
    if (random === 0){
        console.log("マッチョ修羅のショベルカーのようだ上腕二頭筋で反撃を受けた、マッスル児玉は敗北した");
        $("h1").text("マッチョ修羅のショベルカーのようだ上腕二頭筋で反撃を受けた、マッスル児玉は敗北した");
        $(".player-pic").fadeOut('slow');

    } else if (random === 1){
        console.log("マッチョ阿修羅の胸筋に弾かれた、ダメージが無いようだ");
        $("h1").text("マッチョ阿修羅の胸筋に弾かれた、ダメージが無いようだ");


    } else if (random === 2){
        console.log("マッチョ阿修羅のチキンレッグに炸裂した！効果は抜群。マッチョ阿修羅は倒れた");
        $("h1").text("マッチョ阿修羅のチキンレッグに炸裂した！効果は抜群。マッチョ阿修羅は倒れた");
        $(".enemy-pic").fadeOut('slow');

    } else if (random === 3){
        console.log("マッチョ阿修羅の肩にヒットした！少し痛そうにしている");
        $("h1").text("マッチョ阿修羅の肩にヒットした！少し痛そうにしている");
    } 
    });

// 選択肢Dのアクション

$(".d").on("click",function(){

    const random= Math.floor(Math.random()*3);
    console.log(random,"ランダム数字");
    
    if (random === 0){
        console.log("マッチョ修羅のショベルカーのようだ上腕二頭筋で反撃を受けた、マッスル児玉は敗北した");
        $("h1").text("マッチョ修羅のショベルカーのようだ上腕二頭筋で反撃を受けた、マッスル児玉は敗北した");
        $(".player-pic").fadeOut('slow');

    } else if (random === 1){
        console.log("マッチョ阿修羅の胸筋に弾かれた、ダメージが無いようだ");
        $("h1").text("マッチョ阿修羅の胸筋に弾かれた、ダメージが無いようだ");


    } else if (random === 2){
        console.log("マッチョ阿修羅のチキンレッグに炸裂した！効果は抜群。マッチョ阿修羅は倒れた");
        $("h1").text("マッチョ阿修羅のチキンレッグに炸裂した！効果は抜群。マッチョ阿修羅は倒れた");
        $(".enemy-pic").fadeOut('slow');

    } else if (random === 3){
        console.log("マッチョ阿修羅の肩にヒットした！少し痛そうにしている");
        $("h1").text("マッチョ阿修羅の肩にヒットした！少し痛そうにしている");
    } 
    });

    
    // 選択肢アイテムのアクション

    $(".e").on("click",function(){
            $("h1").text("筋肉に栄養がほとばしる！");
        });