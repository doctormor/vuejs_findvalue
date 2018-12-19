var find_x = new Vue({
	el:"#find_x",
	data:{
		title:"Finding X value (3, 5, 9, 15, X)",
		newData:{
			startnum:3,
			multiplier:2,
			qty:5
		},
		dataGroup:[{
			values:0
		}]
	},
	methods:{
		addData:function(){

			this.dataGroup.length = 0;

			var num = Number(this.newData.startnum);
			var multi = 0;
			var x = '';

			for (var i = 1; i <= Number(this.newData.qty); i++) {

				num = num + multi;

				if(i==5){
					x = 'X = ';
				}else{
					x = '';
				}

				this.dataGroup.push({
					values: x+' '+num
				});

				multi = multi + Number(this.newData.multiplier);

			}

		}
	}
});

var find_y = new Vue({
	el:"#find_y",
	data:{
		title:"Finding Y value ( (Y + 24)+(10 × 2) = 99 )",
		newData:{
			num1:24,
			num2:10,
			num3:2,
			num4:99
		},
		result:0
	},
	methods:{
		setY:function(){

			var num1 = Number(this.newData.num1);
			var num2 = Number(this.newData.num2);
			var num3 = Number(this.newData.num3);
			var num4 = Number(this.newData.num4);

			var result_y = num4 - (num1+(num2*num3));

			return this.result = result_y
		}
	}
});

var find_newx = new Vue({
	el:"#find_newx",
	data:{
		title:"Finding X value (If 1 = 5 , 2 = 25 , 3 = 325 , 4 = 4325 Then 5 = X )",
		newData:{
			startnum:5,
			step:2,
			qty:5
		},
		dataGroup:[{
			values:0
		}]
	},
	methods:{
		addData:function(){

			this.dataGroup.length = 0;

			var num = this.newData.startnum;
			var addval = Number(this.newData.step);
			var x = '';

			for (var i = 1; i <= Number(this.newData.qty); i++) {

				if(i==5){
					x = ' (X)';
				}else{
					x = '';
				}

				this.dataGroup.push({
					values: i+' = '+num+x
				});


				num = addval+''+num;

				addval++;

			}

		}
	}
});