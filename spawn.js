const {spawn} =require('child_process');


const result = spawn('python3',['yolov5-master/detect_simple_3.py']);///home/final/yolov5-master/best.pt']); //'yolov5_master/detect.py']);

result.stdout.on('data',function(data){
	console.log(data.toString());
});

result.stderr.on('data',function(data){
	console.log(data.toString());
});

