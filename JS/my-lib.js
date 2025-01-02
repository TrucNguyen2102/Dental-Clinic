// JavaScript Document
function layNTNam()
			{
				var d=new Date()
				var thu=d.getDay()

				var mangThu=new Array("Chúa nhật, ","Thứ hai, ","Thứ ba, ","Thứ tư, ","Thứ năm, ","Thứ sáu, ","Thứ bảy, ")
				var ngay=d.getDate()
				if(ngay<10){ ngay="0"+ngay}

				var thang=d.getMonth()+1
				if(thang<10){ thang="0"+thang}

				var nam=d.getFullYear()

				document.getElementById("NgayThangNam").innerHTML=mangThu[thu]+ ngay +"/"+thang+"/"+nam

			}
		
		