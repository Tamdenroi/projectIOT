function count_variable(){count=0}
function get_selection(){
    document.getElementById("c1").innerHTML="Số lần truy cập: " + count++;
    x = document.getElementById("drop1").options;

    switch (x.selectedIndex){
    case 0:
        document.getElementById("myTable").deleteRow(0);
        document.getElementById("myTable").deleteRow(0);
        document.getElementById("myTable").deleteRow(0);

        var table = document.getElementById("myTable");

        var row0 = table.insertRow(0);
        var cell01 = row0.insertCell(0);
        var cell02 = row0.insertCell(1);

        var row1 = table.insertRow(1);
        var cell11 = row1.insertCell(0);
        var cell12 = row1.insertCell(1);

        var row2 = table.insertRow(2);
        var cell21 = row2.insertCell(0);
        var cell22 = row2.insertCell(1);

        cell01.innerHTML = "Họ và tên";
        cell02.innerHTML = "Vũ Thành Tâm";
        cell11.innerHTML = "MSSV";
        cell12.innerHTML = "B1905979";
        cell21.innerHTML = "Ngành";
        cell22.innerHTML = "Quản Lý Công Nghiệp";

        document.getElementById('img').src='tâm.jpg';

        break
    case 1:
        document.getElementById("myTable").deleteRow(0);
        document.getElementById("myTable").deleteRow(0);
        document.getElementById("myTable").deleteRow(0);

        var table = document.getElementById("myTable");

        var row0 = table.insertRow(0);
        var cell01 = row0.insertCell(0);
        var cell02 = row0.insertCell(1);

        var row1 = table.insertRow(1);
        var cell11 = row1.insertCell(0);
        var cell12 = row1.insertCell(1);

        var row2 = table.insertRow(2);
        var cell21 = row2.insertCell(0);
        var cell22 = row2.insertCell(1);

        cell01.innerHTML = "Họ và tên";
        cell02.innerHTML = "Bùi Văn Phụng";
        cell11.innerHTML = "MSSV";
        cell12.innerHTML = "B1905967";
        cell21.innerHTML = "Ngành";
        cell22.innerHTML = "Quản Lý Công Nghiệp";

        document.getElementById('img').src='phụng.jpg';

        break
    case 2:
        document.getElementById("myTable").deleteRow(0);
        document.getElementById("myTable").deleteRow(0);
        document.getElementById("myTable").deleteRow(0);

        var table = document.getElementById("myTable");

        var row0 = table.insertRow(0);
        var cell01 = row0.insertCell(0);
        var cell02 = row0.insertCell(1);

        var row1 = table.insertRow(1);
        var cell11 = row1.insertCell(0);
        var cell12 = row1.insertCell(1);

        var row2 = table.insertRow(2);
        var cell21 = row2.insertCell(0);
        var cell22 = row2.insertCell(1);

        cell01.innerHTML = "Họ và tên";
        cell02.innerHTML = "Nguyễn Quốc Toàn";
        cell11.innerHTML = "MSSV";
        cell12.innerHTML = "B1905854";
        cell21.innerHTML = "Ngành";
        cell22.innerHTML = "Quản Lý Công Nghiệp";

        document.getElementById('img').src='toàn.jpg';

        break
    case 3:
        document.getElementById("myTable").deleteRow(0);
        document.getElementById("myTable").deleteRow(0);
        document.getElementById("myTable").deleteRow(0);

        var table = document.getElementById("myTable");

        var row0 = table.insertRow(0);
        var cell01 = row0.insertCell(0);
        var cell02 = row0.insertCell(1);

        var row1 = table.insertRow(1);
        var cell11 = row1.insertCell(0);
        var cell12 = row1.insertCell(1);

        var row2 = table.insertRow(2);
        var cell21 = row2.insertCell(0);
        var cell22 = row2.insertCell(1);

        cell01.innerHTML = "Họ và tên";
        cell02.innerHTML = "Nguyễn Bất Nhược";
        cell11.innerHTML = "MSSV";
        cell12.innerHTML = "B2011657";
        cell21.innerHTML = "Ngành";
        cell22.innerHTML = "Quản Lý Công Nghiệp";

        document.getElementById('img').src='nhược.jpg';

        break

    }
}