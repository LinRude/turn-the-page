function goPage(pno,psize){
    var itable = document.getElementById("idData");
    console.log(itable.children.length,itable);
    var num = itable.children.length;
    var totalPage = 0;//总页数
    var pageSize = psize;//每页显示行数
    //总共分几页
    totalPage = Math.ceil(num / pageSize)
    var currentPage = pno;//当前页数
    var startRow = (currentPage - 1) * pageSize + 1; //开始显示的行
    var endRow = currentPage * pageSize ; //结束显示的行
    endRow = (endRow > num) ? num : endRow; //结算的结束显示行
    for(var i = 1 ; i <= num; i++){
        var irow = itable.children[i-1];
        if(i >= startRow && i <= endRow){
            irow.style.display  ="block";
        }else{
            irow.style.display = "none";
        }
    }
    var page = document.getElementsByClassName("page")[0];
    console.log(page);
    var str1 = ` <span class="up" onClick="goPage(${currentPage - 1},${psize})">上一页</span>
        <span class="now">${pno}</span>`
    var str2 = `<span class="total">${totalPage}</span>
        <span class="next" onClick="goPage(${currentPage + 1},${psize})">下一页</span>`
    if(currentPage > 1){
        page.innerHTML =`${str1}`        
    }else{
        page.innerHTML = `
        <span class="up">上一页</span>
        <span class="now">1</span>`
    }
    if(currentPage < totalPage){
        page.innerHTML +=`/${str2}
        `        
    }else{
        page.innerHTML +=`
        <span class="total">${totalPage}</span>
        <span class="next">下一页</span>`
    }
   
}
goPage(1,6);