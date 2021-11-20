window.onload = () => {
    // click listener for PostgreSQL Content in Nav
    let PSQLHead = document.getElementById('PostgreSQL-header');
    PSQLHead.addEventListener('click', () => {onCollapseClick('PostgreSQL-header')});
    
    // click listener for MySQL Content in Nav
    let MySQLHead = document.getElementById('MySQL-header');
    MySQLHead.addEventListener('click', () => {onCollapseClick('MySQL-header')});

    // click listener for MenuBtn
    let menu = document.getElementById('MenuBtn');
    menu.addEventListener('click', onMenuBtnClick);

};

function copycode(n) {
    if (n==1.1)
        navigator.clipboard.writeText("DELIMITER $$\nDROP PROCEDURE IF EXISTS reverse_number$$\nCREATE PROCEDURE reverse_number(IN num INT)\nBEGIN\nDECLARE r_num INT;\nDECLARE n1 INT;\nSET r_num=0;\nSET n1 = num;\nWHILE n1 > 9 DO\nSET r_num = (r_num * 10) + (n1 mod 10);\nSET n1 = n1 / 10;\nEND WHILE;\nSET r_num = (r_num * 10) + (n1 mod 10);\nSELECT num AS Number, r_num AS \"Reverse Number\";\nEND$$\nDELIMITER ;\n");
    else if (n==1.2)
        navigator.clipboard.writeText("CALL reverse_number(123);\n");
    else if (n==2.1)
        navigator.clipboard.writeText("DELIMITER $$\nDROP FUNCTION IF EXISTS getavg$$\nCREATE FUNCTION getavg(n1 INT, n2 INT, n3 INT, n4 INT)\nRETURNS INT\nBEGIN\nDECLARE avg INT;\nSET avg = (n1+n2+n3+n4)/4;\nRETURN avg;\nEND$$\nDELIMITER ;\n");
    else if (n==2.2)
        navigator.clipboard.writeText("SELECT getavg(2, 4, 5, 6);\n");
    else if (n==3)
        navigator.clipboard.writeText("DELIMITER $$\nDROP FUNCTION IF EXISTS f_factorial$$\nCREATE FUNCTION f_factorial(n1 INT)\nRETURNS INT\nBEGIN\nDECLARE result INT;\nDECLARE i INT;\nSET result = 1;\nSET i = 1;\nWHILE i <= n1 DO\nSET result = result * i;\nSET i = i + 1;\nEND WHILE;\nRETURN result;\nEND$$\nDELIMITER ;\nSELECT f_factorial(4);\n");
    else if (n==4)
        navigator.clipboard.writeText("DELIMITER $$\nDROP FUNCTION IF EXISTS f_factorial$$\nCREATE FUNCTION f_factorial(n1 INT)\nRETURNS INT\nBEGIN\nDECLARE result INT;\nDECLARE i INT;\nSET result = 1;\nSET i = 1;\nWHILE i &lt;= n1 DO\nSET result = result * i;\nSET i = i + 1;\nEND WHILE;\nRETURN result;\nEND$$\nDELIMITER ;\n");
    else if (n==5)
        navigator.clipboard.writeText("DELIMITER $$\nDROP PROCEDURE IF EXISTS getFactorials$$\nCREATE PROCEDURE getFactorials(IN n INT)\nBEGIN\nSELECT num as 'Number', f_factorial(num) as 'Factorial' FROM Natural_Numbers WHERE num &lt;=n;\nEND$$\nDELIMITER ;\n");
    else if (n==6)
        navigator.clipboard.writeText("call getFactorials(10);\n");
    else if (n==7)
        navigator.clipboard.writeText("DELIMITER $$\nDROP PROCEDURE IF EXISTS sumproduct$$\nCREATE PROCEDURE sumproduct(IN n1 INT, IN n2 INT, OUT sum INT, OUT pro INT)\nBEGIN\nSET sum = n1+n2;\nSET pro = n1*n2;\nEND$$\nDELIMITER ;\n");
    else if (n==8)
        navigator.clipboard.writeText("CALL sumproduct(3, 4, @s, @p);\n");
    else if (n==9)
        navigator.clipboard.writeText("SELECT @s;\n");
    else if (n==10)
        navigator.clipboard.writeText("SELECT @p;\n");

}

onloadMySQL = () => {
    onCollapseClick('MySQL-header');
}

onCollapseClick = (eid) => {
    let element = document.getElementById(eid);
    let content = element.nextElementSibling;
    if (content.style.maxHeight) {
        content.style.maxHeight = null;
    }else{
        content.style.maxHeight = content.scrollHeight + "px";
    }
}

collapseCheck = (eid) => {
    let element = document.getElementById(eid);
    let content = element.nextElementSibling;
    if (content.style.maxHeight)
        return false;
    else
        return true;
}

checkMaxHeight = (eid) => {
    let content = document.getElementById(eid);
    if (content.style.maxHeight) {
        return true;
    }else{
        return false;
    }
}

onMenuBtnClick = () => {
    let element = document.getElementById('headnav');

    if (element.style.maxHeight) {
        element.style.paddingBottom = '0px';
        element.style.maxHeight = null;
    }else {
        if (collapseCheck('PostgreSQL-header'))
            onCollapseClick('PostgreSQL-header');
        if (collapseCheck('MySQL-header'))
            onCollapseClick('MySQL-header');
        setTimeout( () => {
            element.style.paddingBottom = '15px';
            element.style.maxHeight = element.scrollHeight + 'px'
            if (!collapseCheck('PostgreSQL-header'))
                onCollapseClick('PostgreSQL-header');
            if (!collapseCheck('MySQL-header'))
                onCollapseClick('MySQL-header');
        }, 141);
    }
}