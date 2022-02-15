class Table{
	constructor(rezi){
		this.rezi=rezi;
	}
	judulTabel(data) {
		let judul_1="<thead><tr>";
		let judul_2="</tr></thead>";
		data.forEach((d)=>{
			judul_1+=`<th>${d}</th>`;
		})
		return judul_1 + judul_2;
	}

	badanTabel(data){
		let badan_1="<tbody>";
		let badan_2="</tbody>";
		data.forEach((d)=>{
			badan_1+=`
			<tr>
			<td>${d[0]}</td>
			<td>${d[1]}</td>
			<td>${d[2]}</td>
			</tr>
			`;
		})
		
		return badan_1+badan_2;
	}
	proses(element){
		let table =
		"<table>"+
		this.judulTabel(this.rezi.columns)+
		this.badanTabel(this.rezi.data)+
		"</table>";
	
	element.innerHTML = table;

	}
}
const table = new Table({
  columns: ['Name', 'Email', 'Phone Number'],
  data: [
    ['Rezi', 'rezi00913@gmail.com', '082273696424'],
    ['Nasya', 'Nasya15@gmail.com',   '082263519356']
  ]
});

const rezi = document.getElementById("Rezi");
table.proses(Rezi);

/*
module.exports.Table = Table;
module.exports.judulTabel = judulTabel;
module.exports.badanTabel = badanTabel;
module.exports.proses = proses;
module.exports.table = table;
*/

export { 
	Table, 
	judulTabel,
	badanTabel,
	proses,
	table,
	rezi };
