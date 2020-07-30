import React from 'react';
import { Button } from 'antd'
// import style from './index';


const style = {
    canvas: {
        boxShadow: '0 0 10px #999',
        margin: '0 auto',
        // backgroundColor: '#fff'
    }
}


export default class Canvas extends React.PureComponent{

    state = {
        preDrawAry: [],
        nextDrawAry: [],
        middleAry: [],
        canvasHistory: []
    }

    componentDidMount() { 
        this.draw()
    }

    draw() { 
        const canvas = document.getElementById('canvas');    
        if (canvas && canvas.getContext) {
            this.setState({
                ctx: canvas.getContext('2d')
            })
            const ctx = canvas.getContext('2d');

            // 矩形绘制
            // ctx.fillStyle = 'rgb(200, 0, 0)';
            // ctx.fillRect(10, 10, 350, 300);

            // ctx.fillStyle = 'rgba(0, 0, 200, 0.5)';
            // ctx.fillRect(30, 30, 350, 300);

            // ctx.strokeStyle = 'rgb(200, 0, 0)';
            // ctx.strokeRect(10, 10, 350, 300);

            // ctx.strokeStyle = 'rgb(0, 0, 200, 0.5)';
            // ctx.strokeRect(30, 30, 350, 300)

            
            // ctx.fillRect(25, 25, 100, 100);
            // ctx.clearRect(45, 45, 60, 60);
            // ctx.strokeRect(50,50,50,50);



            /** 
             * 图形得基本元素就是路径
             * 1，首先要创建起始点
             * 2，是用画图命令画出路径
             * 3，把路径闭合
             * 4，通过描边或者填充绘制图形
             * */
            
            // //绘制一个三角形
            // ctx.beginPath();
            // //起始点  x = 75 ;   y = 50
            // ctx.moveTo(75, 50);
            // //二点： x = 100 ;   y = 75
            // ctx.lineTo(100, 75);
            // //二点： x = 100 ;   y = 25
            // ctx.lineTo(100, 25);
            // ctx.fill();
            // ctx.closePath();
            // ctx.stroke();



            // //绘制一个填充三角形
            // ctx.beginPath();
            // //起始点  x = 100 ;   y = 100
            // ctx.moveTo(100, 100);
            // //二点： x = 100 ;   y = 180
            // ctx.lineTo(100, 180);
            // //二点： x = 180 ;   y = 100
            // ctx.lineTo(180, 100);
            // ctx.fill();
            // ctx.closePath();
            // ctx.stroke();


            // //绘制一个描边三角形
            // ctx.beginPath();
            // //起始点  x = 300 ;   y = 300
            // ctx.moveTo(190, 110);
            // //二点： x = 300 ;   y = 100
            // ctx.lineTo(190, 190);
            // //二点： x = 100 ;   y = 25
            // ctx.lineTo(110, 190);
            // ctx.closePath();
            // // ctx.fill();
            // ctx.stroke();


            //绘制一个圆形  
            //圆的组成： 圆心（x， y） 半径  开始角度 结束角度 顺 / 逆时针
            ctx.beginPath();
            // ctx.strokeStyle = 'orange';
            ctx.fillStyle = "orange";
            ctx.lineWidth = 10;
            //ctx.arc(x, y, radius, startAngle, endAngle, anticlockwise)
            ctx.arc(300, 300, 150, 0, 1.5*Math.PI, false);
            ctx.fill();
            //ctx.stroke();


            // 循环绘制圆形
            // for (let i = 0; i < 4; i++) { 
            //     for (let j = 0; j < 3; j++) { 
            //         ctx.beginPath();
            //         ctx.lineWidth = 1;
            //         let x = 500 + j*100;
            //         let y = 50 + i*100;
            //         let radius = 20;
            //         let startAngle = 0;
            //         let endAngle = Math.PI + Math.PI / 2 * j;
            //         const anticlockwise = i % 2 == 1 ? true : false;
            //         ctx.arc(x, y, radius, startAngle, endAngle, anticlockwise);
            //         i < 2 ? ctx.stroke() : ctx.fill();
                    
            //     }
            // }

            // // 绘制一个笑脸
            // ctx.beginPath();
            // ctx.strokeStyle = 'orange';
            // ctx.lineWidth = 1;
            // ctx.arc(600, 120, 100, 0, 2 * Math.PI);
            // ctx.moveTo(650, 100);
            // ctx.arc(640, 100, 10, 0, 2 * Math.PI);
            // ctx.moveTo(570, 100);
            // ctx.arc(560, 100, 10, 0, 2 * Math.PI);
            // ctx.moveTo(660, 130);
            // ctx.arc(600, 130, 60, 0, Math.PI);
            // ctx.stroke();

            //添加鼠标按下事件
            //画笔：BRUSH    橡皮擦：ERASAR
            switch ('TT') { 
                case 'BRUSH':
                    canvas.onmousedown = (e) => {
                        console.log('onmousedown')
                        const ev = e || window.event;
                        const x = ev.clientX - canvas.offsetLeft;
                        const y = ev.clientY - canvas.offsetTop;
                        ctx.strokeStyle = '#000';
                        ctx.lineWidth = 5;
    
                        ctx.beginPath();
                        ctx.moveTo(x, y);
    
                        canvas.onmousemove = (e) => {
                            console.log('onmousemove', e);
                            const ev = e || window.event;
                            const x = ev.clientX - canvas.offsetLeft;
                            const y = ev.clientY - canvas.offsetTop;
                        
                            ctx.lineTo(x, y);
                            ctx.stroke();
                        };
    
                        canvas.onmouseup = () => {
                            console.log('onmouseup');
                            canvas.onmousemove = '';
                        };
    
                    };
                    break;
                case 'ERASAR':
                    ctx.beginPath();
                    ctx.fillStyle = 'gray';
                    ctx.fillRect(0, 0, canvas.width, canvas.height);;
                    
                    ctx.globalCompositeOperation = "destination-out";
                    ctx.lineWidth = 30;
                    ctx.lineCap = "round";
                    canvas.onmousedown = (e) => {
                        console.log('onmousedown')
                        const ev = e || window.event;
                        const x = ev.clientX - canvas.offsetLeft;
                        const y = ev.clientY - canvas.offsetTop;

                        ctx.moveTo(x, y);
    
                        canvas.onmousemove = (e) => {
                            console.log('onmousemove', e);
                            const ev = e || window.event;
                            const x = ev.clientX - canvas.offsetLeft;
                            const y = ev.clientY - canvas.offsetTop;
                        
                            ctx.lineTo(x, y);
                            ctx.stroke();
                        };
    
                        canvas.onmouseup = () => {
                            console.log('onmouseup');
                            canvas.onmousemove = '';
                        };
    
                    };
                break;
            }
            
        

            canvas.onmouseenter = () => {
                console.log('onmouseenter')
            };

            canvas.onmouseleave = () => {
                console.log('onmouseleave')
            };

            

            canvas.onmouseout = () => { 
                console.log('onmouseout')
            };

            canvas.onmouseover = () => { 
                console.log('onmouseover')
            };


        } else { 
            alert('你的浏览器太低级， 请升级')
        }
    }

    //画笔
    onBRUSH() { 
        const canvas = document.getElementById('canvas');    
        if (canvas && canvas.getContext) {

            const ctx = canvas.getContext('2d');

            //添加鼠标按下事件
            canvas.onmousedown = (e) => {

                console.log('onmousedown')
                const ev = e || window.event;
                const x = ev.clientX - canvas.offsetLeft;
                const y = ev.clientY - canvas.offsetTop;
                ctx.strokeStyle = '#000';
                ctx.lineWidth = 5;

                ctx.beginPath();
                ctx.moveTo(x, y);

                //当前绘图表面状态
                const preData1 = ctx.getImageData(0, 0, 1200, 750);
                
                this.setState({
                    ...this.state,
                    preDrawAry: [...this.state.preDrawAry, preData1]
                })

                console.log('preData1:', preData1, this.state.preDrawAry)
                

                canvas.onmousemove = (e) => {
                    console.log('onmousemove', e);
                    const ev = e || window.event;
                    const x = ev.clientX - canvas.offsetLeft;
                    const y = ev.clientY - canvas.offsetTop;
                
                    ctx.lineTo(x, y);
                    ctx.stroke();
                };

                canvas.onmouseup = (e) => {
                    console.log('onmouseup');
                    const t = e.target;
                    if(t==canvas){
                        //当前绘图表面状态
                        const { nextDrawAry, preDrawAry, middleAry } = this.state;
                        const preData2 = ctx.getImageData(0, 0, 1200, 750);
                        
                        if(nextDrawAry.length==0){
                            //当前绘图表面进栈
                            this.setState({
                                ...this.state,
                                middleAry: [...middleAry, preData2]
                            })
                        } else {
                            // this.setState({
                            //     ...this.state,
                            //     middleAry: []
                            // });
                            // this.setState({
                            //     ...this.state,
                            //     middleAry: [...middleAry, ...preDrawAry]
                            // })
                            // this.setState({
                            //     ...this.state,
                            //     middleAry: [...middleAry, ...[{...preData2}]],
                            //     nextDrawAry: []
                            // })
                        }
                        console.log('preData2', preData2, this.state)
                    }
                    canvas.onmousemove = '';
                };

            };

            canvas.onmouseenter = () => {
                console.log('onmouseenter')
            };

            canvas.onmouseleave = () => {
                console.log('onmouseleave')
            };

            

            canvas.onmouseout = () => { 
                console.log('onmouseout')
            };

            canvas.onmouseover = () => { 
                console.log('onmouseover')
            };


        } else { 
            alert('你的浏览器太低级， 请升级')
        }
    }

    // 橡皮擦
    onERASAR() { 
        const canvas = document.getElementById('canvas'); 
        if (canvas && canvas.getContext) {
            const ctx = canvas.getContext('2d');

            //添加鼠标按下事件
            canvas.onmousedown = (e) => {
                console.log('onmousedown')
                const ev = e || window.event;
                const x = ev.clientX - canvas.offsetLeft;
                const y = ev.clientY - canvas.offsetTop;

                ctx.clearRect(x - 5, y - 5, 20, 20)
                //当前绘图表面状态

                const preData1 = ctx.getImageData(0, 0, 1200, 750);
                
                this.setState({
                    ...this.state,
                    preDrawAry: [...this.state.preDrawAry, preData1]
                })
                console.log('preData1:', preData1, this.state.preDrawAry)

                canvas.onmousemove = (e) => {
                    console.log('onmousemove', e);
                    const ev = e || window.event;
                    const x = ev.clientX - canvas.offsetLeft;
                    const y = ev.clientY - canvas.offsetTop;
                    ctx.clearRect(x - 5, y - 5, 20, 20)
                };

                canvas.onmouseup = () => {
                    console.log('onmouseup');

                    const t = e.target;
                    if(t==canvas){
                        //当前绘图表面状态
                        const { nextDrawAry, preDrawAry, middleAry } = this.state;
                        const preData2 = ctx.getImageData(0, 0, 1200, 750);
                        
                        if(nextDrawAry.length==0){
                            //当前绘图表面进栈
                            this.setState({
                                ...this.state,
                                middleAry: [...middleAry, preData2]
                            })
                        } else {
                        }
                        console.log('preData2', preData2, this.state)
                    }

                    canvas.onmousemove = '';
                };

            };

            canvas.onmouseenter = () => {
                console.log('onmouseenter')
            };

            canvas.onmouseleave = () => {
                console.log('onmouseleave')
            };

            

            canvas.onmouseout = () => { 
                console.log('onmouseout')
            };

            canvas.onmouseover = () => { 
                console.log('onmouseover')
            };


        } else { 
            alert('你的浏览器太低级， 请升级')
        }
        
    }

    // 清除
    onCLEAR() { 
        const canvas = document.getElementById('canvas'); 
        if (canvas && canvas.getContext) {
            const ctx = canvas.getContext('2d');

            ctx.clearRect(0, 0, canvas.width, canvas.height);

            //添加鼠标按下事件
            canvas.onmousedown = (e) => {

            };

            canvas.onmousemove = (e) => {
                   
            };

            canvas.onmouseup = () => {
                
            };

            canvas.onmouseenter = () => {
                console.log('onmouseenter')
            };

            canvas.onmouseleave = () => {
                console.log('onmouseleave')
            };


            canvas.onmouseout = () => { 
                console.log('onmouseout')
            };

            canvas.onmouseover = () => { 
                console.log('onmouseover')
            };


        } else { 
            alert('你的浏览器太低级， 请升级')
        }
        
    }

    //下载图片
    onDOWN() { 
        const canvas = document.getElementById('canvas'); 
        if (canvas && canvas.getContext) {
            const ctx = canvas.getContext('2d');
            const dataURL = canvas.toDataURL("image/png");

            const save_link = document.createElementNS('http://www.w3.org/1999/xhtml', 'a');
            save_link.href = dataURL;
            save_link.download = 'test.png';
           
            var event = document.createEvent('MouseEvents');
            event.initMouseEvent('click', true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
            save_link.dispatchEvent(event);

            //添加鼠标按下事件
            canvas.onmousedown = (e) => {

            };

            canvas.onmousemove = (e) => {
                   
            };

            canvas.onmouseup = () => {
                
            };

            canvas.onmouseenter = () => {
                console.log('onmouseenter')
            };

            canvas.onmouseleave = () => {
                console.log('onmouseleave')
            };


            canvas.onmouseout = () => { 
                console.log('onmouseout')
            };

            canvas.onmouseover = () => { 
                console.log('onmouseover')
            };


        } else { 
            alert('你的浏览器太低级， 请升级')
        }
    }

    // 全屏
    onFullscreen(el){
	    var el = document.getElementById("canvas"); 

           if(el.webkitRequestFullScreen) {
               //change();
			   el.webkitRequestFullScreen();
			  
           }
          else {
		  //change();
             el.mozRequestFullScreen(); 
          }            
    }

    // 撤销
    onUndo(el) {
        const { preDrawAry, nextDrawAry, middleAry } = this.state;
        const canvas = document.getElementById('canvas'); 
        if (canvas && canvas.getContext) {

            const ctx = canvas.getContext('2d');

            if (preDrawAry && preDrawAry.length > 0) {
                const popData = preDrawAry.pop();
                const midData = middleAry[preDrawAry.length];
                this.setState({
                    ...this.state,
                    nextDrawAry: [...nextDrawAry, midData]
                })
                // ctx.drawImage(popData, 0, 0);
                console.log('onUndo:',midData, this.state);
                ctx.putImageData(popData, 0, 0);
            }  


        } else { 

        }
        
    }

    //还原
    onReduction(el) { 
        const { preDrawAry, nextDrawAry, middleAry } = this.state;
        const canvas = document.getElementById('canvas'); 
        if (canvas && canvas.getContext) {

            const ctx = canvas.getContext('2d');

            if(nextDrawAry.length){
                const popData = nextDrawAry.pop();
                const midData = middleAry[middleAry.length - nextDrawAry.length - 2];
                this.setState({
                    preDrawAry: [...preDrawAry, midData]
                })
                console.log('onReduction:', this.state)
                ctx.putImageData(popData,0,0);
            }
            
        } else { 

        }
        
    }

    render() {

        


        return(
            <div style={{textAlign: 'center', margin: '10px auto'}}>
                <div style={{ margin: '30px auto' }}>
                    <Button onClick={() => { 
                        this.onBRUSH();
                        console.log(this.state)
                    }}>画笔</Button>

                    <Button onClick={() => { 
                        this.onERASAR();
                        console.log(this.state)
                    }}>橡皮擦</Button>

                    <Button onClick={() => { 
                        this.onCLEAR();
                        console.log(this.state)
                    }}>清除</Button>

                    <Button onClick={() => { 
                        this.onDOWN();
                        console.log(this.state)
                    }}>下载</Button>

                    <Button onClick={(e) => { 
                        this.onUndo(e);
                        console.log(this.state)
                    }}>撤销</Button>

                    <Button onClick={(e) => { 
                        this.onReduction(e);
                        console.log(this.state)
                    }}>还原</Button>

                    <Button onClick={(e) => { 
                        this.onFullscreen(e);
                        console.log(this.state)
                    }}>全屏</Button>
                </div>
                <canvas id="canvas" style={style.canvas} width="1200" height="750">
                    你的浏览器太低级，请升级
                </canvas>
                <div id="full"></div>
            </div>
        )
    }
}


