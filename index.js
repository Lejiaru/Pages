//全局变量
var numCount;       //数据总数量
var columnsCounts;  //数据列数量
var pageCount;      //每页显示的数量
var pageNum;        //总页数
var currPageNum ;   //当前页数

//页面标签变量
var blockTable;
var preSpan;
var firstSpan;
var nextSpan;
var lastSpan;
var pageNumSpan;
var currPageSpan;



window.onload=function(){
    //页面标签变量
    blockTable = document.getElementById("table_device");
    preSpan = document.getElementById("Pre");
    firstSpan = document.getElementById("First");
    nextSpan = document.getElementById("Next");
    lastSpan = document.getElementById("Last");
    pageNumSpan = document.getElementById("totalPage");
    currPageSpan = document.getElementById("pageNum");

    numCount = document.getElementById("table_device").rows.length - 1;       //取table的行数作为数据总数量（减去标题行1）
    // alert(numCount);
    columnsCounts = blockTable.rows[0].cells.length;
    pageCount = 14;
    pageNum = parseInt(numCount/pageCount);
    if(0 != numCount%pageCount){
        pageNum += 1;
    }

    firstPage();
};
function firstPage(){
    hide();
    currPageNum = 1;
    showCurrPage(currPageNum);
    showTotalPage();
    for(i = 1; i < pageCount + 1; i++){
        blockTable.rows[i].style.display = "";
    }
}

function prePage(){
    hide();
    if(currPageNum !== 1){
        currPageNum--;
    }else {
        alert("已到头，别点了");
    }

    showCurrPage(currPageNum);
    showTotalPage();
    var firstR = firstRow(currPageNum);
    var lastR = lastRow(firstR);
    for(i = firstR; i < lastR; i++){
        blockTable.rows[i].style.display = "";
    }
}

function nextPage(){
    hide();
    if(currPageNum !== pageNum){
        currPageNum++;
    }else {
        alert("已到尾，别点了");
    }

    showCurrPage(currPageNum);
    showTotalPage();
    var firstR = firstRow(currPageNum);
    var lastR = lastRow(firstR);
    for(i = firstR; i < lastR; i ++){
        blockTable.rows[i].style.display = "";
    }
}

function lastPage(){
    hide();
    currPageNum = pageNum;
    showCurrPage(currPageNum);
    showTotalPage();
    var firstR = firstRow(currPageNum);
    for(i = firstR; i < numCount + 1; i++){
        blockTable.rows[i].style.display = "";
    }
}

// 计算将要显示的页面的首行和尾行
function firstRow(currPageNum){
    return pageCount*(currPageNum - 1) + 1;
}

function lastRow(firstRow){
    var lastRow = firstRow + pageCount;
    if(lastRow > numCount + 1){
        lastRow = numCount + 1;
    }
    return lastRow;
}

function showCurrPage(cpn){
    currPageSpan.innerHTML = cpn;
}

function showTotalPage(){
    pageNumSpan.innerHTML = pageNum;
}

//隐藏所有行
function hide(){
    for(var i = 1; i < numCount + 1; i ++){
        blockTable.rows[i].style.display = "none";
    }
}

//控制首页等功能的显示与不显示
// function firstLink(){firstSpan.innerHTML = "<a href='javascript:firstPage();'>First</a>";}
// function firstText(){firstSpan.innerHTML = "First";}
//
// function preLink(){preSpan.innerHTML = "<a href='javascript:prePage();'>Pre</a>";}
// function preText(){preSpan.innerHTML = "Pre";}
//
// function nextLink(){nextSpan.innerHTML = "<a href='javascript:nextPage();'>Next</a>";}
// function nextText(){nextSpan.innerHTML = "Next";}
//
// function lastLink(){lastSpan.innerHTML = "<a href='javascript:lastPage();'>Last</a>";}
// function lastText(){lastSpan.innerHTML = "Last";}

// ----------- 搜索页面 --------- //
 function Search(){
    var searchBox = document.getElementById("search_box");
    var contentBox = document.getElementById("content_box");
    var searchInp = document.getElementById("search_inp");
     if(searchInp.value.trim() !== ""){
         searchBox.className = "search-box-click";
         contentBox.style.visibility = "visible";
     }else{
         alert("请输入查询字段");
     }
 }
