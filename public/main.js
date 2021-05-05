console.log('我是main.js2');

getCSS.onclick = () =>{
const request = new XMLHttpRequest()
request.open("GET","/style.css")
request.onreadystatechange = () => {
    console.log(request.response);
    if(request.readyState === 4){
        console.log("下载完成");//但是下载完成不代表是下载了正确的，有可能是出错了然后下载了404页面
        if(request.status >= 200 && request.status < 300){
            const style = document.createElement('style')//新建style标签
            style.innerHTML = request.response//把内容写进去
            document.head.appendChild(style)//插到head里面
        }else{
            alert('加载CSS失败')
        }
        }
    }
    
request.onerror = () => {
    console.log("失败了");
}
request.send()//发送请求
}

getJS.onclick = () =>{
    const request = new XMLHttpRequest()
    request.open("GET","/2.js")
    request.onload = () => {
        console.log(request.response);
        const script = document.createElement('script')//新建script标签
        script.innerHTML = request.response//把内容写进去
        document.body.appendChild(script)//插到body里面
    }
    request.onerror = () => {
        console.log("失败了");
    }
    request.send()//发送请求
    }

getHTML.onclick = () =>{
        const request = new XMLHttpRequest()
        request.open("GET","/3.html")
        request.onload = () => {
            console.log(request.response);
            const div = document.createElement('div')//新建div标签
            div.innerHTML = request.response//把内容写进去
            document.body.appendChild(div)//插到body里面
        }
        request.onerror = () => {
            console.log("失败了");
        }
        request.send()//发送请求
        }

        getXML.onclick = () =>{
            const request = new XMLHttpRequest()
            request.open("GET","/4.xml")
           request.onreadystatechange = () => {
               if(request.readyState === 4 && request.status === 200){
                  const dom = request.responseXML
                  const text = dom.getElementsByTagName('warning')[0].textContent
                  console.log(text.trim());
               }
           }
            request.send()//发送请求
            }
getJSON.onclick = () => {
    const request = new XMLHttpRequest()
    request.open("GET","/5.json")
    request.onreadystatechange = () =>{
        if(request.readyState === 4 && request.status === 200){
            console.log(request.response);
            const object = JSON.parse(request.response)
        }   
    }
    request.send()
}